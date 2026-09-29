# Commerce operations

Migration `202609290002_commerce_operations.sql` adds the production operations
layer without connecting a payment gateway.

- `/admin` shows orders, pending payments, refunds, customers, discounts,
  offerings, reports, and audit history.
- Paid orders generate an immutable invoice and one type-aware fulfillment record
  per item. Courses activate access, products await delivery, services await
  onboarding, and donations are acknowledged.
- Customers can store a personal or organization billing identity before payment.
  The identity, line items, discount, and totals are snapshotted when the invoice
  is issued.
- Customers can request a full refund on a completed paid order. An administrator
  must first send the money outside the application, then provide the external
  refund reference when approving it. Approval atomically creates an immutable
  refund and credit note, marks the order refunded, and revokes fulfillment.
- Payment pending/approved/rejected and refund approved/rejected notifications are
  delivered through the existing protected outbox worker.

Apply all migrations to a linked staging Supabase project before production. This
checkout has no `supabase/.temp/project-ref`, so no hosted database was changed.
Run `supabase link --project-ref YOUR_STAGING_PROJECT_REF`, verify the target, then
run `supabase db push`. Test with two customer accounts and one MFA-protected admin.

Refund approval records accounting truth only after the external transfer has been
sent. There is no provider API and no automatic money movement in this phase.
