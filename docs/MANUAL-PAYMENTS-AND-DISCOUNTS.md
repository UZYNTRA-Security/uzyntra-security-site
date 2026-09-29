# Manual payments and discounts

This phase adds UZYNTRA's manual payment workflow and promotion engine without
connecting an external gateway. Payment evidence never grants access by itself.

## Confirmed Offensive AI prices

- Pakistan: PKR 55,000 (`5500000` minor units)
- International: USD 400 (`40000` minor units)

These are independent regional prices. The application performs no live currency
conversion, and customers may still switch between active currencies.

## Manual payment flow

Configure real receiving accounts with the variables in `.env.example`. PKR can
offer bank transfer, JazzCash, and Easypaisa. USD can offer international
remittance. An option is shown only when its required configuration exists.

The customer starts an attempt, transfers the exact order total, and submits a
transaction reference, payer details, payment time, and evidence. PNG, JPEG, and
PDF files up to 5 MB are stored in the private `payment-evidence` bucket. Evidence
is available only through a short-lived signed URL after an owner/admin check.

The admin must match the reference and exact amount against received funds.
Approval runs atomically: it records a receipt, marks the payment and order paid,
creates course entitlements, writes audit history, and queues an email. Rejection
records a customer-visible reason and allows another attempt. Duplicate reviews
fail without duplicating receipts or access.

Configure `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`,
`NOTIFICATION_FROM_EMAIL`, and `CRON_SECRET` for delivery. Schedule an authorized
GET or POST request to `/api/internal/notifications`. The service role key and cron
secret are server-only.

## Discounts

Discount definitions live in the database. `coupon` discounts require a customer
code; `automatic` discounts need no code. Both support:

- percentage discounts in basis points (`1000` = 10%, `10000` = 100%);
- fixed discounts in currency minor units;
- optional currency and offering restrictions;
- start/end times and active state;
- minimum subtotal and maximum discount;
- global and per-customer redemption limits.

Checkout validates discounts and calculates the final total in PostgreSQL. The
browser cannot set the discount amount or final total. Only the single best
eligible discount is applied, and its values are snapshotted in `order_discounts`
so later edits do not change old orders. Redemptions are tracked transactionally.

For example, a 10% PKR coupon uses `mode='coupon'`, `code='LEARN10'`,
`discount_type='percentage'`, `value=1000`, and `currency='PKR'`. An automatic PKR
5,000 promotion uses `mode='automatic'`, `discount_type='fixed'`, `value=500000`,
and `currency='PKR'`. Promotion-table writes must remain an administrator process;
browser roles receive no direct write permission.

## Before production

Apply migrations to staging first. Verify Supabase Auth and Storage policies,
signed evidence access, real email delivery, the full customer/admin flow, and MFA
for all administrator accounts. External card buttons remain disabled until a real
provider adapter and webhook reconciliation flow are implemented.
