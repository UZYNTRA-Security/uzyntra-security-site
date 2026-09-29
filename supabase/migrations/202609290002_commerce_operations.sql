-- Commerce operations: immutable invoices, type-aware fulfillment and manual refunds.
alter table public.offerings drop constraint offerings_type_check;
update public.offerings set type='donation' where type='contribution';
alter table public.offerings add constraint offerings_type_check check (type in ('course','product','service','donation'));

alter table public.profiles add column organization text check (organization is null or length(organization) between 2 and 200);
alter table public.notification_outbox drop constraint notification_outbox_kind_check;
alter table public.notification_outbox add constraint notification_outbox_kind_check check (kind in ('manual_payment_pending','manual_payment_approved','manual_payment_rejected','refund_approved','refund_rejected'));

create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number bigint generated always as identity (start with 20001) unique,
  order_id uuid not null unique references public.orders(id),
  customer_id uuid not null references public.profiles(id),
  billing_name text not null,
  billing_email text not null,
  organization text,
  currency text not null references public.currencies(code),
  subtotal bigint not null check (subtotal > 0),
  discount_total bigint not null check (discount_total >= 0),
  total bigint not null check (total > 0),
  items_snapshot jsonb not null,
  issued_at timestamptz not null default now()
);
create table public.fulfillment_records (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id),
  order_item_id uuid not null unique references public.order_items(id),
  offering_type text not null check (offering_type in ('course','product','service','donation')),
  status text not null check (status in ('active','delivery_pending','onboarding_pending','acknowledged','revoked','refunded')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.refund_requests (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id),
  user_id uuid not null references public.profiles(id),
  reason text not null check (length(reason) between 10 and 1000),
  status text not null default 'requested' check (status in ('requested','approved','rejected')),
  reviewed_by uuid references public.profiles(id), review_reason text,
  created_at timestamptz not null default now(), reviewed_at timestamptz,
  foreign key(order_id,user_id) references public.orders(id,user_id)
);
create unique index one_open_refund_per_order on public.refund_requests(order_id) where status in ('requested','approved');
create table public.refunds (
  id uuid primary key default gen_random_uuid(),
  refund_request_id uuid not null unique references public.refund_requests(id),
  order_id uuid not null unique references public.orders(id),
  payment_receipt_id uuid not null references public.payment_receipts(id),
  amount bigint not null check (amount > 0), currency text not null references public.currencies(code),
  method text not null, external_reference text not null unique,
  status text not null check (status in ('succeeded')),
  processed_by uuid not null references public.profiles(id), created_at timestamptz not null default now()
);
create table public.credit_notes (
  id uuid primary key default gen_random_uuid(),
  credit_number bigint generated always as identity (start with 30001) unique,
  refund_id uuid not null unique references public.refunds(id),
  invoice_id uuid not null references public.invoices(id),
  amount bigint not null, currency text not null references public.currencies(code),
  reason text not null, issued_at timestamptz not null default now()
);

revoke all on public.invoices,public.fulfillment_records,public.refund_requests,public.refunds,public.credit_notes from anon,authenticated;
grant select on public.invoices,public.fulfillment_records,public.refund_requests,public.refunds,public.credit_notes to authenticated;
alter table public.invoices enable row level security; alter table public.fulfillment_records enable row level security;
alter table public.refund_requests enable row level security; alter table public.refunds enable row level security; alter table public.credit_notes enable row level security;
create policy invoices_read on public.invoices for select to authenticated using (customer_id=(select auth.uid()) or (select private.is_admin()));
create policy fulfillment_read on public.fulfillment_records for select to authenticated using ((select private.is_admin()) or exists(select 1 from public.orders o where o.id=order_id and o.user_id=(select auth.uid())));
create policy refund_requests_read on public.refund_requests for select to authenticated using (user_id=(select auth.uid()) or (select private.is_admin()));
create policy refunds_read on public.refunds for select to authenticated using ((select private.is_admin()) or exists(select 1 from public.orders o where o.id=order_id and o.user_id=(select auth.uid())));
create policy credit_notes_read on public.credit_notes for select to authenticated using ((select private.is_admin()) or exists(select 1 from public.invoices i where i.id=invoice_id and i.customer_id=(select auth.uid())));

create function private.deny_immutable_change() returns trigger language plpgsql set search_path='' as $$ begin raise exception 'Financial records are immutable'; end $$;
create trigger invoices_immutable before update or delete on public.invoices for each row execute function private.deny_immutable_change();
create trigger refunds_immutable before update or delete on public.refunds for each row execute function private.deny_immutable_change();
create trigger credit_notes_immutable before update or delete on public.credit_notes for each row execute function private.deny_immutable_change();

create function private.create_paid_documents() returns trigger language plpgsql security definer set search_path='' as $$
declare customer public.profiles%rowtype;
begin
  if new.payment_status='paid' and old.payment_status<>'paid' then
    select * into customer from public.profiles where id=new.user_id;
    insert into public.invoices(order_id,customer_id,billing_name,billing_email,organization,currency,subtotal,discount_total,total,items_snapshot)
    select new.id,new.user_id,coalesce(customer.full_name,customer.email),customer.email,customer.organization,new.currency,new.subtotal,new.discount_total,new.total,
      jsonb_agg(jsonb_build_object('title',i.title_snapshot,'type',i.type_snapshot,'quantity',i.quantity,'unit_amount',i.unit_amount) order by i.id)
    from public.order_items i where i.order_id=new.id;
    insert into public.fulfillment_records(order_id,order_item_id,offering_type,status)
    select new.id,i.id,i.type_snapshot,case i.type_snapshot when 'course' then 'active' when 'product' then 'delivery_pending' when 'service' then 'onboarding_pending' else 'acknowledged' end
    from public.order_items i where i.order_id=new.id on conflict(order_item_id) do nothing;
  end if;
  return new;
end $$;
create trigger create_paid_documents after update of payment_status on public.orders for each row execute function private.create_paid_documents();

create function private.queue_manual_submission_email() returns trigger language plpgsql security definer set search_path='' as $$
declare target record;
begin
  select p.id,p.email,o.order_number into target from public.payment_attempts a join public.orders o on o.id=a.order_id join public.profiles p on p.id=o.user_id where a.id=new.payment_attempt_id;
  insert into public.notification_outbox(user_id,kind,recipient,payload) values(target.id,'manual_payment_pending',target.email,jsonb_build_object('order_number',target.order_number));
  return new;
end $$;
create trigger queue_manual_submission_email after insert on public.manual_submissions for each row execute function private.queue_manual_submission_email();

create function public.request_refund(p_order_id uuid,p_reason text) returns uuid language plpgsql security definer set search_path='' as $$
declare customer uuid:=auth.uid(); chosen public.orders%rowtype; result uuid;
begin
  select * into chosen from public.orders where id=p_order_id and user_id=customer for update;
  if not found then raise exception 'Order not found' using errcode='P0002'; end if;
  if chosen.payment_status<>'paid' or chosen.status<>'completed' then raise exception 'Order is not refundable' using errcode='22023'; end if;
  if length(trim(coalesce(p_reason,''))) not between 10 and 1000 then raise exception 'Provide a refund reason' using errcode='22023'; end if;
  insert into public.refund_requests(order_id,user_id,reason) values(chosen.id,customer,trim(p_reason)) returning id into result;
  insert into public.audit_events(actor_id,action,entity_type,entity_id,details) values(customer,'refund_requested','refund_request',result,jsonb_build_object('order_id',chosen.id));
  return result;
end $$;
revoke all on function public.request_refund(uuid,text) from public,anon; grant execute on function public.request_refund(uuid,text) to authenticated;

create function public.update_billing_profile(p_full_name text,p_organization text default null) returns void language plpgsql security definer set search_path='' as $$
declare customer uuid:=auth.uid();
begin
  if customer is null or length(trim(coalesce(p_full_name,''))) not between 2 and 120 or (p_organization is not null and length(trim(p_organization)) not between 2 and 200) then raise exception 'Invalid billing profile' using errcode='22023'; end if;
  update public.profiles set full_name=trim(p_full_name),organization=nullif(trim(p_organization),'') where id=customer;
  insert into public.audit_events(actor_id,action,entity_type,entity_id) values(customer,'billing_profile_updated','profile',customer);
end $$;
revoke all on function public.update_billing_profile(text,text) from public,anon; grant execute on function public.update_billing_profile(text,text) to authenticated;

create function public.review_refund(p_request_id uuid,p_decision text,p_reason text,p_external_reference text default null) returns text language plpgsql security definer set search_path='' as $$
declare reviewer uuid:=auth.uid(); chosen record; receipt public.payment_receipts%rowtype; refund_id uuid; invoice_id uuid;
begin
  if reviewer is null or not private.is_admin() then raise exception 'Administrator access required' using errcode='42501'; end if;
  if p_decision not in ('approve','reject') or length(trim(coalesce(p_reason,'')))<3 then raise exception 'Decision reason is required' using errcode='22023'; end if;
  select r.*,o.total,o.currency,o.payment_status,o.status order_status into chosen from public.refund_requests r join public.orders o on o.id=r.order_id where r.id=p_request_id for update of r,o;
  if not found then raise exception 'Refund request not found' using errcode='P0002'; end if;
  if chosen.status<>'requested' then raise exception 'Refund request already reviewed' using errcode='23505'; end if;
  if p_decision='approve' then
    if length(trim(coalesce(p_external_reference,'')))<4 then raise exception 'External refund reference is required' using errcode='22023'; end if;
    if chosen.payment_status<>'paid' then raise exception 'Order is not refundable' using errcode='22023'; end if;
    select * into receipt from public.payment_receipts where order_id=chosen.order_id;
    if not found then raise exception 'Verified payment receipt is required' using errcode='22023'; end if;
    update public.refund_requests set status='approved',reviewed_by=reviewer,review_reason=trim(p_reason),reviewed_at=now() where id=p_request_id;
    insert into public.refunds(refund_request_id,order_id,payment_receipt_id,amount,currency,method,external_reference,status,processed_by)
    values(p_request_id,chosen.order_id,receipt.id,chosen.total,chosen.currency,'manual',upper(trim(p_external_reference)),'succeeded',reviewer) returning id into refund_id;
    select id into invoice_id from public.invoices where order_id=chosen.order_id;
    insert into public.credit_notes(refund_id,invoice_id,amount,currency,reason) values(refund_id,invoice_id,chosen.total,chosen.currency,trim(p_reason));
    update public.orders set payment_status='refunded',status='cancelled' where id=chosen.order_id;
    update public.entitlements set status='revoked' where order_id=chosen.order_id and status in ('active','suspended');
    update public.fulfillment_records set status='refunded',updated_at=now() where order_id=chosen.order_id;
  else
    update public.refund_requests set status='rejected',reviewed_by=reviewer,review_reason=trim(p_reason),reviewed_at=now() where id=p_request_id;
  end if;
  insert into public.audit_events(actor_id,action,entity_type,entity_id,details) values(reviewer,'refund_'||case when p_decision='approve' then 'approved' else 'rejected' end,'refund_request',p_request_id,jsonb_build_object('order_id',chosen.order_id,'reason',trim(p_reason)));
  insert into public.notification_outbox(user_id,kind,recipient,payload) select p.id,'refund_'||case when p_decision='approve' then 'approved' else 'rejected' end,p.email,jsonb_build_object('order_number',o.order_number,'reason',trim(p_reason)) from public.orders o join public.profiles p on p.id=o.user_id where o.id=chosen.order_id;
  return case when p_decision='approve' then 'approved' else 'rejected' end;
end $$;
revoke all on function public.review_refund(uuid,text,text,text) from public,anon; grant execute on function public.review_refund(uuid,text,text,text) to authenticated;

-- Permit all modeled types at checkout; fulfillment remains type-specific after payment.
create or replace function private.is_owned_course(p_user uuid,p_offering uuid) returns boolean language sql stable security definer set search_path='' as $$
 select exists(select 1 from public.entitlements e join public.offerings o on o.id=e.offering_id where e.user_id=p_user and e.offering_id=p_offering and e.status='active' and o.type='course')
$$;
