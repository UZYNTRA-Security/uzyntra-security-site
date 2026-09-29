-- Phase B: manual payment review. No external gateway is connected.
alter table public.profiles add column email text;
alter table public.profiles add column full_name text;
update public.profiles p set email = lower(u.email), full_name = nullif(trim(coalesce(u.raw_user_meta_data->>'full_name', '')), '')
from auth.users u where u.id = p.id;
alter table public.profiles alter column email set not null;
alter table public.profiles add constraint profiles_email_format check (email = lower(email) and length(email) <= 254);

create or replace function private.initialize_customer() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles(id, email, full_name)
  values (new.id, lower(new.email), nullif(trim(coalesce(new.raw_user_meta_data->>'full_name', '')), ''));
  insert into public.user_roles(user_id) values (new.id);
  return new;
end $$;

create table public.manual_submissions (
  id uuid primary key default gen_random_uuid(),
  payment_attempt_id uuid not null references public.payment_attempts(id),
  transaction_reference text not null check (length(transaction_reference) between 4 and 100),
  payer_name text not null check (length(payer_name) between 2 and 120),
  payer_account_last4 text check (payer_account_last4 is null or payer_account_last4 ~ '^[A-Za-z0-9]{4}$'),
  paid_at timestamptz not null,
  evidence_path text not null unique check (length(evidence_path) <= 500),
  status text not null default 'submitted' check (status in ('submitted','approved','rejected')),
  review_reason text,
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  check (paid_at <= created_at + interval '5 minutes'),
  check ((status = 'submitted' and reviewed_by is null and reviewed_at is null) or
         (status in ('approved','rejected') and reviewed_by is not null and reviewed_at is not null))
);
create unique index one_open_submission_per_attempt on public.manual_submissions(payment_attempt_id) where status = 'submitted';
create index manual_review_queue on public.manual_submissions(status, created_at);

create table public.payment_receipts (
  id uuid primary key default gen_random_uuid(),
  payment_attempt_id uuid not null unique references public.payment_attempts(id),
  order_id uuid not null references public.orders(id),
  provider text not null,
  method text not null,
  external_reference text not null,
  amount bigint not null check (amount > 0),
  currency text not null references public.currencies(code),
  verified_by uuid not null references public.profiles(id),
  verified_at timestamptz not null default now(),
  unique(provider, method, external_reference)
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id),
  action text not null,
  entity_type text not null,
  entity_id uuid not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index audit_entity_history on public.audit_events(entity_type, entity_id, created_at);

create table public.notification_outbox (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  kind text not null check (kind in ('manual_payment_approved','manual_payment_rejected')),
  recipient text not null,
  payload jsonb not null,
  status text not null default 'pending' check (status in ('pending','processing','sent','failed')),
  attempts smallint not null default 0 check (attempts between 0 and 10),
  available_at timestamptz not null default now(),
  locked_at timestamptz,
  sent_at timestamptz,
  last_error text,
  created_at timestamptz not null default now()
);
create index notification_delivery_queue on public.notification_outbox(status, available_at) where status in ('pending','failed');

revoke all on public.manual_submissions, public.payment_receipts, public.audit_events, public.notification_outbox from anon, authenticated;
grant select on public.manual_submissions, public.payment_receipts, public.audit_events to authenticated;
alter table public.manual_submissions enable row level security;
alter table public.payment_receipts enable row level security;
alter table public.audit_events enable row level security;
alter table public.notification_outbox enable row level security;
create policy manual_submissions_read on public.manual_submissions for select to authenticated using (
  (select private.is_admin()) or exists (
    select 1 from public.payment_attempts a join public.orders o on o.id = a.order_id
    where a.id = payment_attempt_id and o.user_id = (select auth.uid())
  )
);
create policy receipts_read on public.payment_receipts for select to authenticated using (
  (select private.is_admin()) or exists (
    select 1 from public.orders o where o.id = order_id and o.user_id = (select auth.uid())
  )
);
create policy audit_admin_read on public.audit_events for select to authenticated using ((select private.is_admin()));

create function public.create_manual_payment_attempt(p_order_id uuid, p_method text, p_idempotency_key uuid)
returns uuid language plpgsql security definer set search_path = '' as $$
declare customer uuid := auth.uid(); chosen public.orders%rowtype; existing uuid;
begin
  if customer is null then raise exception 'Verified sign-in required' using errcode = '28000'; end if;
  if p_method not in ('bank_transfer','jazzcash','easypaisa','remittance') or p_idempotency_key is null then
    raise exception 'Unsupported manual payment method' using errcode = '22023';
  end if;
  select * into chosen from public.orders where id = p_order_id and user_id = customer for update;
  if not found then raise exception 'Order not found' using errcode = 'P0002'; end if;
  if chosen.status <> 'open' or chosen.payment_status <> 'unpaid' or chosen.expires_at <= now() then
    raise exception 'Order is not payable' using errcode = '22023';
  end if;
  select id into existing from public.payment_attempts where idempotency_key = p_idempotency_key;
  if found then return existing; end if;
  if exists(select 1 from public.payment_attempts where order_id = p_order_id and status in ('pending','requires_review')) then
    raise exception 'This order already has a payment under review' using errcode = '23505';
  end if;
  insert into public.payment_attempts(order_id,currency,amount,provider,provider_account,environment,method,status,idempotency_key)
  values(chosen.id,chosen.currency,chosen.total,'manual','uzyntra-manual','live',p_method,'pending',p_idempotency_key)
  returning id into existing;
  insert into public.audit_events(actor_id,action,entity_type,entity_id,details)
  values(customer,'manual_attempt_created','payment_attempt',existing,jsonb_build_object('order_id',chosen.id,'method',p_method));
  return existing;
end $$;
revoke all on function public.create_manual_payment_attempt(uuid,text,uuid) from public, anon;
grant execute on function public.create_manual_payment_attempt(uuid,text,uuid) to authenticated;

create function public.submit_manual_payment(p_attempt_id uuid, p_reference text, p_payer_name text,
 p_payer_account_last4 text, p_paid_at timestamptz, p_evidence_path text)
returns uuid language plpgsql security definer set search_path = '' as $$
declare customer uuid := auth.uid(); chosen record; result uuid;
begin
  select a.*, o.user_id, o.status as order_status, o.payment_status, o.expires_at into chosen
  from public.payment_attempts a join public.orders o on o.id = a.order_id
  where a.id = p_attempt_id and o.user_id = customer for update of a, o;
  if not found then raise exception 'Payment attempt not found' using errcode = 'P0002'; end if;
  if chosen.status <> 'pending' or chosen.order_status <> 'open' or chosen.payment_status <> 'unpaid' or chosen.expires_at <= now() then
    raise exception 'Payment attempt cannot be submitted' using errcode = '22023';
  end if;
  if p_reference !~ '^[A-Za-z0-9][A-Za-z0-9 ._/-]{3,99}$' or length(trim(p_payer_name)) not between 2 and 120 or
     (p_payer_account_last4 is not null and p_payer_account_last4 !~ '^[A-Za-z0-9]{4}$') or
     p_paid_at > now() + interval '5 minutes' or p_paid_at < chosen.created_at - interval '14 days' or
     p_evidence_path !~ ('^' || customer::text || '/' || chosen.order_id::text || '/[0-9a-f-]{36}\.(png|jpg|pdf)$') then
    raise exception 'Invalid payment submission' using errcode = '22023';
  end if;
  insert into public.manual_submissions(payment_attempt_id,transaction_reference,payer_name,payer_account_last4,paid_at,evidence_path)
  values(p_attempt_id,upper(trim(p_reference)),trim(p_payer_name),upper(p_payer_account_last4),p_paid_at,p_evidence_path)
  returning id into result;
  update public.payment_attempts set status = 'requires_review' where id = p_attempt_id;
  insert into public.audit_events(actor_id,action,entity_type,entity_id,details)
  values(customer,'manual_payment_submitted','manual_submission',result,jsonb_build_object('order_id',chosen.order_id,'attempt_id',p_attempt_id));
  return result;
end $$;
revoke all on function public.submit_manual_payment(uuid,text,text,text,timestamptz,text) from public, anon;
grant execute on function public.submit_manual_payment(uuid,text,text,text,timestamptz,text) to authenticated;

create function public.review_manual_payment(p_submission_id uuid, p_decision text, p_reason text default null)
returns text language plpgsql security definer set search_path = '' as $$
declare reviewer uuid := auth.uid(); chosen record; notification_kind text;
begin
  if reviewer is null or not private.is_admin() then raise exception 'Administrator access required' using errcode = '42501'; end if;
  if p_decision not in ('approve','reject') then raise exception 'Unsupported decision' using errcode = '22023'; end if;
  if p_decision = 'reject' and length(trim(coalesce(p_reason,''))) < 3 then raise exception 'A rejection reason is required' using errcode = '22023'; end if;
  select s.*, a.order_id, a.amount, a.currency, a.provider, a.method, a.status as attempt_status,
         o.user_id, o.order_number, o.status as order_status, o.payment_status, o.total, p.email
  into chosen from public.manual_submissions s
  join public.payment_attempts a on a.id=s.payment_attempt_id
  join public.orders o on o.id=a.order_id join public.profiles p on p.id=o.user_id
  where s.id=p_submission_id for update of s, a, o;
  if not found then raise exception 'Submission not found' using errcode = 'P0002'; end if;
  if chosen.status <> 'submitted' or chosen.attempt_status <> 'requires_review' or chosen.order_status <> 'open' or chosen.payment_status <> 'unpaid' then
    raise exception 'Submission has already been reviewed or is no longer payable' using errcode = '23505';
  end if;
  if chosen.amount <> chosen.total then raise exception 'Payment amount does not match order' using errcode = '22023'; end if;
  if p_decision = 'approve' then
    insert into public.payment_receipts(payment_attempt_id,order_id,provider,method,external_reference,amount,currency,verified_by)
    values(chosen.payment_attempt_id,chosen.order_id,chosen.provider,chosen.method,chosen.transaction_reference,chosen.amount,chosen.currency,reviewer);
    update public.payment_attempts set status='succeeded', external_reference=chosen.transaction_reference where id=chosen.payment_attempt_id;
    update public.orders set status='completed',payment_status='paid' where id=chosen.order_id;
    insert into public.entitlements(user_id,order_id,order_item_id,offering_id,status)
    select chosen.user_id,i.order_id,i.id,i.offering_id,'active' from public.order_items i
    where i.order_id=chosen.order_id and i.type_snapshot='course'
    on conflict (order_item_id) do nothing;
    notification_kind := 'manual_payment_approved';
  else
    update public.payment_attempts set status='failed' where id=chosen.payment_attempt_id;
    notification_kind := 'manual_payment_rejected';
  end if;
  update public.manual_submissions set status=case when p_decision='approve' then 'approved' else 'rejected' end,
    review_reason=nullif(trim(p_reason),''),reviewed_by=reviewer,reviewed_at=now() where id=p_submission_id;
  insert into public.audit_events(actor_id,action,entity_type,entity_id,details)
  values(reviewer,'manual_payment_'||case when p_decision='approve' then 'approved' else 'rejected' end,
    'manual_submission',p_submission_id,jsonb_build_object('order_id',chosen.order_id,'reason',nullif(trim(p_reason),'')));
  insert into public.notification_outbox(user_id,kind,recipient,payload)
  values(chosen.user_id,notification_kind,chosen.email,jsonb_build_object('order_number',chosen.order_number,'amount',chosen.amount,
    'currency',chosen.currency,'reason',nullif(trim(p_reason),'')));
  return case when p_decision='approve' then 'approved' else 'rejected' end;
end $$;
revoke all on function public.review_manual_payment(uuid,text,text) from public, anon;
grant execute on function public.review_manual_payment(uuid,text,text) to authenticated;

-- Storage evidence is owner-write and owner/admin-read. Signed URLs still pass these checks at creation time.
create policy evidence_insert on storage.objects for insert to authenticated with check (
  bucket_id='payment-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text
);
create policy evidence_select on storage.objects for select to authenticated using (
  bucket_id='payment-evidence' and ((storage.foldername(name))[1]=(select auth.uid())::text or (select private.is_admin()))
);
create policy evidence_delete_unreviewed on storage.objects for delete to authenticated using (
  bucket_id='payment-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text and
  not exists(select 1 from public.manual_submissions s where s.evidence_path=name)
);

-- Confirmed regional price for Offensive AI (USD 400 already exists).
insert into public.prices(offering_id,currency,region,amount)
select id,'PKR','PK',5500000 from public.offerings where slug='offensive-ai'
on conflict do nothing;

-- Promotions support public coupon codes and no-code automatic offers. Only one
-- promotion is applied per order; checkout selects the greatest valid discount.
create table public.discounts (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(name) between 2 and 120),
  code text check (code is null or code ~ '^[A-Z0-9_-]{3,32}$'),
  mode text not null check (mode in ('coupon','automatic')),
  value_type text not null check (value_type in ('percentage','fixed')),
  value bigint not null check (value > 0),
  currency text references public.currencies(code),
  minimum_subtotal bigint not null default 0 check (minimum_subtotal >= 0),
  maximum_discount bigint check (maximum_discount is null or maximum_discount > 0),
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  max_redemptions integer check (max_redemptions is null or max_redemptions > 0),
  per_customer_limit integer not null default 1 check (per_customer_limit between 1 and 100),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  check ((mode='coupon' and code is not null) or (mode='automatic' and code is null)),
  check ((value_type='percentage' and value between 1 and 10000) or value_type='fixed'),
  check (ends_at is null or ends_at > starts_at)
);
create unique index discount_code_unique on public.discounts(code) where code is not null;
create table public.discount_offerings (
  discount_id uuid not null references public.discounts(id) on delete cascade,
  offering_id uuid not null references public.offerings(id) on delete cascade,
  primary key(discount_id,offering_id)
);
create table public.order_discounts (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.orders(id),
  discount_id uuid not null references public.discounts(id),
  name_snapshot text not null,
  code_snapshot text,
  value_type_snapshot text not null,
  value_snapshot bigint not null,
  amount bigint not null check (amount > 0),
  created_at timestamptz not null default now()
);
create table public.discount_redemptions (
  discount_id uuid not null references public.discounts(id),
  order_id uuid not null unique references public.orders(id),
  user_id uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  primary key(discount_id,order_id)
);
alter table public.orders add column subtotal bigint;
alter table public.orders add column discount_total bigint not null default 0;
update public.orders set subtotal=total;
alter table public.orders alter column subtotal set not null;
alter table public.orders add constraint order_totals_valid check (subtotal > 0 and discount_total >= 0 and total = subtotal-discount_total and total > 0);
revoke all on public.discounts,public.discount_offerings,public.order_discounts,public.discount_redemptions from anon,authenticated;
grant select on public.order_discounts to authenticated;
alter table public.discounts enable row level security;
alter table public.discount_offerings enable row level security;
alter table public.order_discounts enable row level security;
alter table public.discount_redemptions enable row level security;
create policy order_discounts_read on public.order_discounts for select to authenticated using (
  exists(select 1 from public.orders o where o.id=order_id)
);

drop function public.create_checkout(text,jsonb,uuid);
create function public.create_checkout(p_currency text, p_items jsonb, p_idempotency_key uuid, p_coupon_code text default null)
returns uuid language plpgsql security definer set search_path = '' as $$
declare
  customer uuid := auth.uid(); normalized jsonb; existing public.orders%rowtype; line record; chosen record;
  lines jsonb := '[]'::jsonb; subtotal_amount bigint := 0; discount_amount bigint := 0;
  order_id uuid; selected_discount public.discounts%rowtype; normalized_code text := upper(trim(coalesce(p_coupon_code,'')));
begin
  if customer is null or not exists(select 1 from auth.users where id=customer and email_confirmed_at is not null) then
    raise exception 'Verified sign-in required' using errcode='28000'; end if;
  if p_idempotency_key is null or p_currency is null or not exists(select 1 from public.currencies where code=p_currency and active) then
    raise exception 'Unsupported checkout request' using errcode='22023'; end if;
  if p_items is null or jsonb_typeof(p_items)<>'array' or jsonb_array_length(p_items) not between 1 and 10 then
    raise exception 'Cart must contain 1 to 10 offerings' using errcode='22023'; end if;
  if normalized_code<>'' and normalized_code !~ '^[A-Z0-9_-]{3,32}$' then raise exception 'Invalid coupon code' using errcode='22023'; end if;
  for line in select value item from jsonb_array_elements(p_items) loop
    if jsonb_typeof(line.item)<>'object' or (select count(*) from jsonb_object_keys(line.item))<>2 or
       not (line.item?'offering_id' and line.item?'price_id') or jsonb_typeof(line.item->'offering_id')<>'string' or jsonb_typeof(line.item->'price_id')<>'string' then
      raise exception 'Only offering_id and price_id are accepted' using errcode='22023'; end if;
  end loop;
  if (select count(distinct value->>'offering_id') from jsonb_array_elements(p_items))<>jsonb_array_length(p_items) then
    raise exception 'Duplicate offering' using errcode='22023'; end if;
  select jsonb_agg(value order by value->>'offering_id') into normalized from jsonb_array_elements(p_items);
  normalized := jsonb_build_object('items',normalized,'coupon_code',nullif(normalized_code,''));
  perform pg_advisory_xact_lock(hashtextextended(customer::text,0));
  select * into existing from public.orders where user_id=customer and idempotency_key=p_idempotency_key;
  if found then
    if existing.currency<>p_currency or existing.request_snapshot<>normalized then raise exception 'Idempotency key already used for another cart' using errcode='23505'; end if;
    return existing.id;
  end if;
  if (select count(*) from public.orders where user_id=customer and created_at>now()-interval '1 hour')>=20 then
    raise exception 'Checkout limit reached; try again later' using errcode='P0001'; end if;
  for line in select value item from jsonb_array_elements(normalized->'items') loop
    select o.id,o.title,o.type,p.id price_id,p.amount into chosen from public.offerings o join public.prices p on p.offering_id=o.id
    where o.id=(line.item->>'offering_id')::uuid and p.id=(line.item->>'price_id')::uuid and o.active and p.active and p.currency=p_currency for share of o,p;
    if not found then raise exception 'Price unavailable; refresh your cart' using errcode='22023'; end if;
    if chosen.type<>'course' then raise exception 'This offering requires a sales inquiry' using errcode='22023'; end if;
    if exists(select 1 from public.entitlements where user_id=customer and offering_id=chosen.id and status='active') then
      raise exception 'You already have access to this course' using errcode='22023'; end if;
    subtotal_amount:=subtotal_amount+chosen.amount;
    lines:=lines||jsonb_build_array(jsonb_build_object('offering_id',chosen.id,'price_id',chosen.price_id,'title',chosen.title,'type',chosen.type,'amount',chosen.amount));
  end loop;
  select d.* into selected_discount from public.discounts d where d.active and d.starts_at<=now() and (d.ends_at is null or d.ends_at>now())
    and (d.currency is null or d.currency=p_currency) and d.minimum_subtotal<=subtotal_amount
    and ((normalized_code<>'' and d.mode='coupon' and d.code=normalized_code) or (normalized_code='' and d.mode='automatic'))
    and (d.max_redemptions is null or (select count(*) from public.discount_redemptions r where r.discount_id=d.id)<d.max_redemptions)
    and (select count(*) from public.discount_redemptions r where r.discount_id=d.id and r.user_id=customer)<d.per_customer_limit
    and (not exists(select 1 from public.discount_offerings x where x.discount_id=d.id) or
         exists(select 1 from public.discount_offerings x where x.discount_id=d.id and x.offering_id in (select (value->>'offering_id')::uuid from jsonb_array_elements(lines))))
    order by case when d.value_type='percentage' then least((subtotal_amount*d.value)/10000,coalesce(d.maximum_discount,subtotal_amount-1))
                  else least(d.value,subtotal_amount-1) end desc, d.created_at asc limit 1 for update;
  if normalized_code<>'' and not found then raise exception 'Coupon is invalid, expired, unavailable, or not eligible for this cart' using errcode='22023'; end if;
  if found then
    discount_amount:=case when selected_discount.value_type='percentage' then (subtotal_amount*selected_discount.value)/10000 else selected_discount.value end;
    discount_amount:=least(discount_amount,coalesce(selected_discount.maximum_discount,discount_amount),subtotal_amount-1);
  end if;
  insert into public.orders(user_id,currency,subtotal,discount_total,total,idempotency_key,request_snapshot)
  values(customer,p_currency,subtotal_amount,discount_amount,subtotal_amount-discount_amount,p_idempotency_key,normalized) returning id into order_id;
  insert into public.order_items(order_id,offering_id,price_id,currency,title_snapshot,type_snapshot,unit_amount)
  select order_id,(value->>'offering_id')::uuid,(value->>'price_id')::uuid,p_currency,value->>'title',value->>'type',(value->>'amount')::bigint from jsonb_array_elements(lines);
  if selected_discount.id is not null then
    insert into public.order_discounts(order_id,discount_id,name_snapshot,code_snapshot,value_type_snapshot,value_snapshot,amount)
    values(order_id,selected_discount.id,selected_discount.name,selected_discount.code,selected_discount.value_type,selected_discount.value,discount_amount);
    insert into public.discount_redemptions(discount_id,order_id,user_id) values(selected_discount.id,order_id,customer);
  end if;
  return order_id;
end $$;
revoke all on function public.create_checkout(text,jsonb,uuid,text) from public,anon;
grant execute on function public.create_checkout(text,jsonb,uuid,text) to authenticated;
