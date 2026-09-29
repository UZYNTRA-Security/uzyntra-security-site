import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { parseCheckout, defaultCurrency, safeReturnPath, assertSameOrigin } from "../src/lib/commerce/validation";
import { readJson } from "../src/lib/commerce/http";

const alice = "00000000-0000-4000-8000-000000000001";
const bob = "00000000-0000-4000-8000-000000000002";
const admin = "00000000-0000-4000-8000-000000000003";
const unverified = "00000000-0000-4000-8000-000000000004";
const key = "10000000-0000-4000-8000-000000000001";

test("HTTP boundaries reject price injection, redirects, CSRF and oversized payloads", async () => {
  const valid = { currency: "PKR", items: [{ offering_id: alice, price_id: bob }] };
  assert.deepEqual(parseCheckout(valid), { ...valid, couponCode: null });
  for (const input of [null, { ...valid, amount: 1 }, { ...valid, user_id: bob }, { ...valid, currency: "EUR" }, { ...valid, items: [] }, { ...valid, items: [valid.items[0], valid.items[0]] }, { ...valid, items: [{ ...valid.items[0], amount: 1 }] }]) {
    assert.throws(() => parseCheckout(input));
  }
  assert.equal(defaultCurrency("PK"), "PKR");
  assert.equal(defaultCurrency("US"), "USD");
  assert.equal(defaultCurrency(null), "USD");
  for (const path of ["//evil.example", "https://evil.example", "/\\evil.example", "/cart?next=https://evil.example", "/admin"]) assert.equal(safeReturnPath(path), "/account");
  assert.equal(safeReturnPath("/cart"), "/cart");
  assert.throws(() => assertSameOrigin(new Request("https://uzyntra.com/api/checkout", { headers: { origin: "https://evil.example" } })));
  assert.throws(() => assertSameOrigin(new Request("https://uzyntra.com/api/checkout")));
  await assert.rejects(readJson(new Request("https://uzyntra.com", { method: "POST", headers: { "Content-Type": "application/json" }, body: "x".repeat(9000) })), /too large/);
  await assert.rejects(readJson(new Request("https://uzyntra.com", { method: "POST", headers: { "Content-Type": "application/json" }, body: "not-json" })), /Invalid JSON/);
});

test("PostgreSQL migrations, RLS and transactional checkout", async t => {
  const db = new PGlite();
  try {
    // Supabase-owned schemas are stubbed only for local DB tests. Commerce SQL is real.
    await db.exec(`
      create role anon nologin; create role authenticated nologin;
      create schema auth; create schema storage;
      create table auth.users(id uuid primary key, email_confirmed_at timestamptz, email text, raw_user_meta_data jsonb default '{}'::jsonb);
      create function auth.uid() returns uuid language sql stable as
        $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
      grant usage on schema auth to anon, authenticated;
      grant execute on function auth.uid() to anon, authenticated;
      create table storage.buckets(id text primary key, name text, public boolean, file_size_limit bigint, allowed_mime_types text[]);
      create table storage.objects(id uuid default gen_random_uuid() primary key,bucket_id text,name text);
      create function storage.foldername(text) returns text[] language sql immutable as $$ select (string_to_array($1,'/'))[1:greatest(array_length(string_to_array($1,'/'),1)-1,0)] $$;
    `);
    for (const filename of ["202609250001_commerce_foundation.sql", "202609250002_initial_catalog.sql", "202609250003_private_evidence_bucket.sql", "202609290001_manual_payments.sql"]) {
      await db.exec(await readFile(new URL(`../supabase/migrations/${filename}`, import.meta.url), "utf8"));
    }
    await db.query("insert into auth.users(id,email_confirmed_at,email) values ($1,now(),'alice@example.com'),($2,now(),'bob@example.com'),($3,now(),'admin@example.com'),($4,null,'unverified@example.com')", [alice,bob,admin,unverified]);
    await db.query("update public.user_roles set role='admin' where user_id=$1", [admin]);
    async function asUser<T>(user: string, sql: string, params: unknown[] = []) {
      await db.query("select set_config('request.jwt.claim.sub',$1,false)", [user]);
      await db.exec("set role authenticated");
      try { return await db.query<T>(sql, params); }
      finally { await db.exec("reset role"); }
    }
    const course = (await db.query<{id:string; price_id:string; amount:number}>("select o.id,p.id as price_id,p.amount from offerings o join prices p on p.offering_id=o.id where o.slug='cybersecurity' and p.currency='PKR'")).rows[0];
    const items = [{ offering_id: course.id, price_id: course.price_id }];
    const checkout = (user: string, currency = "PKR", values: unknown = items, idempotency = key) => asUser<{id:string}>(user, "select public.create_checkout($1,$2::jsonb,$3::uuid) as id", [currency, JSON.stringify(values), idempotency]);
    let orderId: string;

    await t.test("catalog has fixed regional prices and a private evidence bucket", async () => {
      assert.equal((await db.query("select * from offerings")).rows.length, 23);
      assert.equal((await db.query("select * from prices")).rows.length, 46);
      assert.equal(Number((await db.query<{amount:number}>("select p.amount from prices p join offerings o on o.id=p.offering_id where o.slug='offensive-ai' and p.currency='PKR'")).rows[0].amount),5500000);
      assert.equal((await db.query<{public:boolean}>("select public from storage.buckets")).rows[0].public, false);
      await db.exec("set role anon");
      assert.equal((await db.query("select * from currencies")).rows.length, 2);
      await assert.rejects(db.query("select * from orders"), /permission denied/);
      await assert.rejects(db.query("select create_checkout('PKR','[]',gen_random_uuid())"), /permission denied/);
      await db.exec("reset role");
    });
    await t.test("checkout snapshots DB prices without creating payments or access", async () => {
      orderId = (await checkout(alice)).rows[0].id;
      const order = (await db.query<{total:number; payment_status:string}>("select total,payment_status from orders where id=$1", [orderId])).rows[0];
      assert.equal(Number(order.total), 4500000);
      assert.equal(order.payment_status, "unpaid");
      assert.equal((await db.query("select * from order_items where order_id=$1", [orderId])).rows.length, 1);
      assert.equal((await db.query("select * from payment_attempts")).rows.length, 0);
      assert.equal((await db.query("select * from entitlements")).rows.length, 0);
    });
    await t.test("retries return one order and mismatched retries are rejected", async () => {
      const retries = await Promise.all([checkout(alice), checkout(alice)]);
      assert.equal(retries[0].rows[0].id, orderId);
      assert.equal(retries[1].rows[0].id, orderId);
      assert.equal((await db.query("select * from orders")).rows.length, 1);
      await assert.rejects(checkout(alice, "USD"), /Idempotency/);
    });
    await t.test("customers cannot see other orders, promote themselves, or grant access", async () => {
      assert.equal((await asUser(bob, "select * from orders")).rows.length, 0);
      assert.equal((await asUser(bob, "select * from order_items")).rows.length, 0);
      assert.equal((await asUser(alice, "select * from orders")).rows.length, 1);
      await assert.rejects(asUser(alice, "update user_roles set role='admin' where user_id=$1", [alice]), /permission denied/);
      await assert.rejects(asUser(alice, "update orders set payment_status='paid'"), /permission denied/);
      await assert.rejects(asUser(admin, "update orders set payment_status='paid'"), /permission denied/);
      await assert.rejects(asUser(alice, "insert into entitlements default values"), /permission denied/);
      await assert.rejects(asUser(alice, "insert into payment_attempts default values"), /permission denied/);
      assert.equal((await asUser(admin, "select * from orders")).rows.length, 1);
    });
    await t.test("SQL rejects manipulated, duplicate, mixed-currency and unverified requests", async () => {
      const otherKey = "10000000-0000-4000-8000-000000000002";
      for (const malformed of [[], [...items, ...items], [{...items[0], amount: 1}], [{ offering_id: course.id }], [null], null]) await assert.rejects(checkout(alice, "PKR", malformed, otherKey));
      await assert.rejects(checkout(unverified), /Verified sign-in/);
      await assert.rejects(checkout(bob, "USD"), /Price unavailable/);
      await assert.rejects(checkout(bob, "EUR"), /Unsupported/);
      await assert.rejects(checkout(bob, "PKR", [{ offering_id: alice, price_id: course.price_id }]), /Price unavailable/);
      assert.equal((await db.query("select * from orders")).rows.length, 1);
    });
    await t.test("repricing preserves snapshots and stale carts fail atomically", async () => {
      await assert.rejects(db.query("update prices set amount=1 where id=$1", [course.price_id]), /new price version/);
      await db.query("update prices set active=false where id=$1", [course.price_id]);
      await assert.rejects(checkout(bob), /Price unavailable/);
      assert.equal((await checkout(alice)).rows[0].id, orderId);
      const replacement = (await db.query<{id:string}>("insert into prices(offering_id,currency,region,amount) values ($1,'PKR','PK',4600000) returning id", [course.id])).rows[0];
      const second = await checkout(bob, "PKR", [{offering_id:course.id,price_id:replacement.id}]);
      assert.notEqual(second.rows[0].id, orderId);
      assert.equal(Number((await db.query<{total:number}>("select total from orders where id=$1", [orderId])).rows[0].total), 4500000);
      const active = (await asUser(alice, "select * from prices where offering_id=$1 and currency='PKR'", [course.id])).rows;
      assert.equal(active.length, 1);
    });
    await t.test("inactive offerings and already-owned courses cannot be purchased", async () => {
      await db.query("update offerings set active=false where id=$1", [course.id]);
      await assert.rejects(checkout(bob, "PKR", items, "10000000-0000-4000-8000-000000000005"), /Price unavailable/);
      assert.equal((await asUser(bob, "select * from prices where offering_id=$1", [course.id])).rows.length, 0);
      await db.query("update offerings set active=true where id=$1", [course.id]);
      await db.query("insert into entitlements(user_id,order_id,order_item_id,offering_id,status) select $1,order_id,id,offering_id,'active' from order_items where order_id=$2", [alice, orderId]);
      const active = (await db.query<{id:string}>("select id from prices where offering_id=$1 and active and currency='PKR'", [course.id])).rows[0];
      await assert.rejects(checkout(alice, "PKR", [{offering_id:course.id, price_id:active.id}], "10000000-0000-4000-8000-000000000005"), /already have access/);
      assert.equal((await asUser(bob, "select * from entitlements")).rows.length, 0);
    });
    await t.test("coupon totals are computed and snapshotted by the database",async()=>{
      const target=(await db.query<{id:string;price_id:string;amount:number}>("select o.id,p.id price_id,p.amount from offerings o join prices p on p.offering_id=o.id where o.slug='artificial-intelligence' and p.currency='PKR'")).rows[0];
      await db.query("insert into discounts(name,code,mode,value_type,value,currency) values ('Student launch','LEARN10','coupon','percentage',1000,'PKR')");
      await assert.rejects(asUser(bob,"select create_checkout('PKR',$1::jsonb,$2::uuid,'FAKE')",[JSON.stringify([{offering_id:target.id,price_id:target.price_id}]),"10000000-0000-4000-8000-000000000006"]),/Coupon/);
      const discounted=(await asUser<{id:string}>(bob,"select create_checkout('PKR',$1::jsonb,$2::uuid,'LEARN10') id",[JSON.stringify([{offering_id:target.id,price_id:target.price_id}]),"10000000-0000-4000-8000-000000000007"])).rows[0];
      const order=(await db.query<{subtotal:number;discount_total:number;total:number}>("select subtotal,discount_total,total from orders where id=$1",[discounted.id])).rows[0];
      assert.deepEqual([Number(order.subtotal),Number(order.discount_total),Number(order.total)],[5400000,540000,4860000]);
      assert.equal((await db.query("select * from order_discounts where order_id=$1",[discounted.id])).rows.length,1);
    });
    await t.test("manual review is authorized, atomic, idempotent, and gates access",async()=>{
      const target=(await db.query<{id:string;price_id:string}>("select o.id,p.id price_id from offerings o join prices p on p.offering_id=o.id where o.slug='python-programming' and p.currency='USD'")).rows[0];
      const order=(await asUser<{id:string}>(alice,"select create_checkout('USD',$1::jsonb,$2::uuid,null) id",[JSON.stringify([{offering_id:target.id,price_id:target.price_id}]),"10000000-0000-4000-8000-000000000008"])).rows[0];
      const attempt=(await asUser<{id:string}>(alice,"select create_manual_payment_attempt($1,'remittance',$2) id",[order.id,"10000000-0000-4000-8000-000000000009"])).rows[0];
      assert.equal((await db.query("select * from entitlements where order_id=$1",[order.id])).rows.length,0);
      await assert.rejects(asUser(bob,"select submit_manual_payment($1,'TX-FAKE','Mallory',null,now(),$2)",[attempt.id,`${bob}/${order.id}/10000000-0000-4000-8000-000000000010.pdf`]),/not found/);
      const submission=(await asUser<{id:string}>(alice,"select submit_manual_payment($1,'TX-12345','Alice',null,now(),$2) id",[attempt.id,`${alice}/${order.id}/10000000-0000-4000-8000-000000000010.pdf`])).rows[0];
      assert.equal((await db.query("select * from entitlements where order_id=$1",[order.id])).rows.length,0);
      await assert.rejects(asUser(alice,"select review_manual_payment($1,'approve',null)",[submission.id]),/Administrator/);
      await asUser(admin,"select review_manual_payment($1,'approve',null)",[submission.id]);
      assert.equal((await db.query<{payment_status:string}>("select payment_status from orders where id=$1",[order.id])).rows[0].payment_status,"paid");
      assert.equal((await db.query("select * from entitlements where order_id=$1 and status='active'",[order.id])).rows.length,1);
      assert.equal((await db.query("select * from payment_receipts where order_id=$1",[order.id])).rows.length,1);
      assert.equal((await db.query("select * from notification_outbox where user_id=$1",[alice])).rows.length,1);
      await assert.rejects(asUser(admin,"select review_manual_payment($1,'approve',null)",[submission.id]),/already been reviewed/);
      assert.equal((await db.query("select * from entitlements where order_id=$1",[order.id])).rows.length,1);
    });
  } finally { await db.close(); }
});
