-- Phase A only: no function in this migration can mark an order paid or grant access.
create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);
create table public.user_roles (
  user_id uuid primary key references public.profiles(id) on delete restrict,
  role text not null default 'customer' check (role in ('customer', 'admin'))
);
create function private.initialize_customer() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles(id) values (new.id);
  insert into public.user_roles(user_id) values (new.id);
  return new;
end $$;
revoke all on function private.initialize_customer() from public;
create trigger initialize_commerce_customer after insert on auth.users
for each row execute function private.initialize_customer();
insert into public.profiles(id) select id from auth.users on conflict do nothing;
insert into public.user_roles(user_id) select id from public.profiles on conflict do nothing;

create function private.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.user_roles where user_id = (select auth.uid()) and role = 'admin');
$$;
revoke all on function private.is_admin() from public;
grant execute on function private.is_admin() to authenticated;

create table public.currencies (
  code text primary key check (code ~ '^[A-Z]{3}$'),
  minor_units smallint not null check (minor_units between 0 and 3),
  active boolean not null default false
);
insert into public.currencies(code, minor_units, active) values
('PKR', 2, true), ('USD', 2, true), ('EUR', 2, false), ('GBP', 2, false),
('AED', 2, false), ('SAR', 2, false), ('CAD', 2, false), ('AUD', 2, false);

create table public.offerings (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  type text not null check (type in ('course', 'product', 'service', 'contribution')),
  title text not null check (length(title) between 1 and 200),
  active boolean not null default false,
  created_at timestamptz not null default now()
);
create table public.prices (
  id uuid primary key default gen_random_uuid(),
  offering_id uuid not null references public.offerings(id),
  currency text not null references public.currencies(code),
  region text not null check (region in ('PK', 'international')),
  amount bigint not null check (amount > 0 and amount <= 100000000000),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  check ((currency = 'PKR' and region = 'PK') or (currency <> 'PKR' and region = 'international')),
  unique(id, offering_id, currency)
);
create unique index one_active_price_per_currency on public.prices(offering_id, currency) where active;
-- Reprice by deactivating a row and inserting a new version. Old orders remain explainable.
create function private.immutable_price() returns trigger language plpgsql set search_path = '' as $$
begin
  if (new.id, new.offering_id, new.currency, new.region, new.amount) is distinct from
     (old.id, old.offering_id, old.currency, old.region, old.amount) then
    raise exception 'Create a new price version instead of changing an existing price';
  end if;
  return new;
end $$;
create trigger immutable_price before update on public.prices for each row execute function private.immutable_price();

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number bigint generated always as identity (start with 10001) unique,
  user_id uuid not null references public.profiles(id),
  status text not null default 'open' check (status in ('open', 'completed', 'cancelled', 'expired')),
  payment_status text not null default 'unpaid' check (payment_status in ('unpaid','partially_paid','paid','partially_refunded','refunded')),
  currency text not null references public.currencies(code),
  total bigint not null check (total > 0 and total <= 1000000000000),
  idempotency_key uuid not null,
  request_snapshot jsonb not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '7 days'),
  unique(user_id, idempotency_key),
  unique(id, currency),
  unique(id, user_id)
);
create index orders_customer_created on public.orders(user_id, created_at desc);
create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null,
  offering_id uuid not null references public.offerings(id),
  price_id uuid not null,
  currency text not null,
  title_snapshot text not null,
  type_snapshot text not null,
  unit_amount bigint not null check (unit_amount > 0),
  quantity integer not null default 1 check (quantity = 1),
  foreign key(order_id, currency) references public.orders(id, currency),
  foreign key(price_id, offering_id, currency) references public.prices(id, offering_id, currency),
  unique(order_id, offering_id),
  unique(id, order_id, offering_id)
);
create table public.payment_attempts (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null,
  currency text not null,
  amount bigint not null check (amount > 0),
  provider text not null,
  provider_account text not null,
  environment text not null check (environment in ('test', 'live')),
  method text not null,
  status text not null default 'created' check (status in ('created','pending','requires_review','succeeded','failed','cancelled','expired')),
  external_reference text,
  idempotency_key uuid not null unique,
  created_at timestamptz not null default now(),
  foreign key(order_id, currency) references public.orders(id, currency),
  unique(provider, provider_account, environment, external_reference)
);
create index payment_attempts_order on public.payment_attempts(order_id);
create table public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  order_id uuid not null,
  order_item_id uuid not null unique,
  offering_id uuid not null,
  status text not null check (status in ('active','suspended','revoked','completed')),
  created_at timestamptz not null default now(),
  foreign key(order_id, user_id) references public.orders(id, user_id),
  foreign key(order_item_id, order_id, offering_id) references public.order_items(id, order_id, offering_id)
);
create index entitlements_customer on public.entitlements(user_id);
create unique index one_active_entitlement on public.entitlements(user_id, offering_id) where status = 'active';

-- Explicit privileges: financial rows and roles are never writable through the client API.
revoke all on public.profiles, public.user_roles, public.currencies, public.offerings,
 public.prices, public.orders, public.order_items, public.payment_attempts, public.entitlements
 from anon, authenticated;
grant select on public.currencies, public.offerings, public.prices to anon, authenticated;
grant select on public.profiles, public.user_roles, public.orders, public.order_items,
 public.payment_attempts, public.entitlements to authenticated;

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.currencies enable row level security;
alter table public.offerings enable row level security;
alter table public.prices enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payment_attempts enable row level security;
alter table public.entitlements enable row level security;
create policy profiles_read on public.profiles for select to authenticated using (id = (select auth.uid()) or (select private.is_admin()));
create policy roles_read on public.user_roles for select to authenticated using (user_id = (select auth.uid()));
create policy currencies_read on public.currencies for select to anon, authenticated using (active);
create policy offerings_read on public.offerings for select to anon, authenticated using (active);
create policy prices_read on public.prices for select to anon, authenticated using
 (active and exists(select 1 from public.offerings o where o.id = offering_id and o.active)
 and exists(select 1 from public.currencies c where c.code = currency and c.active));
create policy orders_read on public.orders for select to authenticated using (user_id = (select auth.uid()) or (select private.is_admin()));
create policy items_read on public.order_items for select to authenticated using
 (exists(select 1 from public.orders o where o.id = order_id));
create policy attempts_read on public.payment_attempts for select to authenticated using
 (exists(select 1 from public.orders o where o.id = order_id));
create policy entitlements_read on public.entitlements for select to authenticated using (user_id = (select auth.uid()) or (select private.is_admin()));

-- The sole customer write boundary. SECURITY DEFINER is needed because direct writes
-- are denied. Identity comes exclusively from the verified JWT, never an argument.
create function public.create_checkout(p_currency text, p_items jsonb, p_idempotency_key uuid)
returns uuid language plpgsql security definer set search_path = '' as $$
declare
  customer uuid := auth.uid();
  normalized jsonb;
  existing public.orders%rowtype;
  line record;
  chosen record;
  lines jsonb := '[]'::jsonb;
  total_amount bigint := 0;
  order_id uuid;
begin
  if customer is null or not exists(select 1 from auth.users where id = customer and email_confirmed_at is not null) then
    raise exception 'Verified sign-in required' using errcode = '28000';
  end if;
  if p_idempotency_key is null or p_currency is null or not exists(select 1 from public.currencies where code = p_currency and active) then
    raise exception 'Unsupported checkout request' using errcode = '22023';
  end if;
  if p_items is null or jsonb_typeof(p_items) <> 'array' then
    raise exception 'Invalid cart' using errcode = '22023';
  end if;
  if jsonb_array_length(p_items) not between 1 and 10 then
    raise exception 'Cart must contain 1 to 10 offerings' using errcode = '22023';
  end if;
  for line in select value as item from jsonb_array_elements(p_items) loop
    if jsonb_typeof(line.item) <> 'object' then
      raise exception 'Invalid cart item' using errcode = '22023';
    end if;
    if (select count(*) from jsonb_object_keys(line.item)) <> 2 or
       not (line.item ? 'offering_id' and line.item ? 'price_id') or
       jsonb_typeof(line.item->'offering_id') <> 'string' or jsonb_typeof(line.item->'price_id') <> 'string' then
      raise exception 'Only offering_id and price_id are accepted' using errcode = '22023';
    end if;
  end loop;
  if (select count(distinct value->>'offering_id') from jsonb_array_elements(p_items)) <> jsonb_array_length(p_items) then
    raise exception 'Duplicate offering' using errcode = '22023';
  end if;
  select jsonb_agg(value order by value->>'offering_id') into normalized from jsonb_array_elements(p_items);
  -- Serialize checkout for a customer: also makes the order limit race-safe.
  perform pg_advisory_xact_lock(hashtextextended(customer::text, 0));
  select * into existing from public.orders where user_id = customer and idempotency_key = p_idempotency_key;
  if found then
    if existing.currency <> p_currency or existing.request_snapshot <> normalized then
      raise exception 'Idempotency key already used for another cart' using errcode = '23505';
    end if;
    return existing.id;
  end if;
  if (select count(*) from public.orders where user_id = customer and created_at > now() - interval '1 hour') >= 20 then
    raise exception 'Checkout limit reached; try again later' using errcode = 'P0001';
  end if;
  for line in select value as item from jsonb_array_elements(normalized) loop
    select o.id, o.title, o.type, p.id as price_id, p.amount into chosen
      from public.offerings o join public.prices p on p.offering_id = o.id
      where o.id = (line.item->>'offering_id')::uuid and p.id = (line.item->>'price_id')::uuid
        and o.active and p.active and p.currency = p_currency
      for share of o, p;
    if not found then
      raise exception 'Price unavailable; refresh your cart' using errcode = '22023';
    end if;
    if chosen.type <> 'course' then
      raise exception 'This offering requires a sales inquiry' using errcode = '22023';
    end if;
    if exists(select 1 from public.entitlements where user_id = customer and offering_id = chosen.id and status = 'active') then
      raise exception 'You already have access to this course' using errcode = '22023';
    end if;
    total_amount := total_amount + chosen.amount;
    lines := lines || jsonb_build_array(jsonb_build_object('offering_id', chosen.id, 'price_id', chosen.price_id,
      'title', chosen.title, 'type', chosen.type, 'amount', chosen.amount));
  end loop;
  insert into public.orders(user_id, currency, total, idempotency_key, request_snapshot)
    values(customer, p_currency, total_amount, p_idempotency_key, normalized) returning id into order_id;
  insert into public.order_items(order_id, offering_id, price_id, currency, title_snapshot, type_snapshot, unit_amount)
    select order_id, (value->>'offering_id')::uuid, (value->>'price_id')::uuid, p_currency,
      value->>'title', value->>'type', (value->>'amount')::bigint from jsonb_array_elements(lines);
  return order_id;
end $$;
revoke all on function public.create_checkout(text, jsonb, uuid) from public, anon;
grant execute on function public.create_checkout(text, jsonb, uuid) to authenticated;
