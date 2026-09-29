# UZYNTRA Commerce Foundation — Phase A

Phase A introduced database-backed prices, authentication, roles, a cart, and
transactional unpaid orders. Manual payment review and discounts are now covered
in [Manual Payments and Discounts](MANUAL-PAYMENTS-AND-DISCOUNTS.md). No external
gateway is connected; the gateway adapter remains a type contract only.

## Setup

1. Create a Supabase project for development/staging. Do not use a production
   project to experiment with migrations. Configure database backups before launch.
2. Apply `supabase/migrations/` in filename order. With an installed Supabase CLI:
   `supabase login`, `supabase link --project-ref YOUR_PROJECT_REF`, then
   `supabase db push`. Review the target project before pushing. Alternatively run
   each migration through Supabase SQL Editor, once, in the same order.
   These migrations have NOT been applied to a hosted project by this change.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` to
   `.env.local` and the deployment's environment variables. See `.env.example`.
   Keep existing EmailJS configuration. Phase B's notification worker uses a
   server-only service-role key as described in the manual-payment guide.
4. Set `NEXT_PUBLIC_SITE_URL` to your actual public origin, including scheme
   (for example `https://uzyntra.com`), with no path. Use localhost for development.
   Production mutation APIs check this origin. Preview deployments need their own
   configured origin; do not point their environment at production by accident.
5. Enable Supabase email authentication and email confirmation. In Authentication
   > Email Templates, set **Magic Link** and **Confirm Signup** to the content of
   `supabase/templates/signin.html`. The `{{ .Token }}` variable is essential:
   this UI accepts a code, not an email callback link. Configure a 6-digit code,
   10-minute expiry, and delivery rate limits. Configure production SMTP; the
   default development email service is insufficient for general customer signup.
6. Run `npm run dev`. Open `/auth`, request a code, and verify it. A new auth user
   gets a profile and `customer` role through a database trigger. Auth metadata
   supplied by a customer is never used to grant roles.
7. Grant an administrator role using the SQL Editor as the database owner, after
   confirming the intended user's UUID in Authentication > Users:

   ```sql
   update public.user_roles
   set role = 'admin'
   where user_id = 'REPLACE_WITH_VERIFIED_USER_UUID'::uuid;
   ```

   No browser or application endpoint can assign roles. Admin access in Phase A
   is read-only; enforce MFA/recent reauthentication before Phase B money actions.

For a complete local Supabase stack, install Docker and the Supabase CLI, then
run `supabase start` and `supabase db reset` **against the local instance only**.
The included config uses ports 54321–54324 and an email-code template. Local
mail is available through the mail inbox at port 54324. Use local API credentials
in `.env.local`. Hosted SMTP, RLS, auth/session refresh, and browser integration
still need staging verification before deployment.

Without Supabase configuration, existing marketing pages continue to render;
prices show “Contact admissions for pricing”, account pages explain availability,
and commerce APIs return unavailable. There are no fake accounts or price fallbacks.

## Database changes

| Migration | Changes |
| --- | --- |
| `202609250001_commerce_foundation.sql` | Profiles, roles, currencies, offerings, versioned prices, orders, immutable item snapshots, payment-attempt and entitlement models; RLS; checkout RPC |
| `202609250002_initial_catalog.sql` | 23 courses and 45 fixed currency prices imported from the existing catalog |
| `202609250003_private_evidence_bucket.sql` | Private 5 MB evidence bucket reserved for Phase B; no public or customer upload/read policy |

PKR and USD are active. EUR, GBP, AED, SAR, CAD and AUD are modeled but inactive.
All money is stored as integer minor units: PKR 45,000 = 4,500,000; USD 199 = 19,900.
There is no automatic FX conversion. Region labels describe market pricing, not
eligibility restrictions: customers may select either active currency.

The 22 existing catalog courses keep their published PKR/USD prices. The dedicated
`offensive-ai` offering now has confirmed prices of USD 400 and PKR 55,000.
Certification paths marked “Assessment Based” stay inquiry-only. Existing public
GitHub downloads are not paid products and have not been converted to gated goods.

Price labels on the course listing, course pages and Offensive AI page now come
from `/api/catalog`; formatted labels were removed from the runtime course catalog.
Legacy brochure/syllabus data remains editorial content and must be reviewed
separately before publishing new course materials. Checkout never reads it.

To change a price, use an explicit transaction: deactivate the old row, then
insert a new price for the same offering/currency. Amount/currency/offering fields
of existing prices cannot be edited. Orders snapshot price, title, type and currency.
Direct customer writes to any financial table, roles or entitlements are denied.

## Checkout invariants

- One currency per order; one seat per course, maximum 10 different courses.
  Corporate seats, services, products and contributions remain inquiry-only in
  this milestone even though the offering model supports their future types.
- The client submits only `currency`, and `items` with `offering_id`/`price_id`.
  It cannot submit totals, discounts, ownership, order state or payment state.
- Checkout requires a verified customer and a UUID `Idempotency-Key` header.
- The database RPC uses `auth.uid()`, revalidates all items, and locks price rows.
  It snapshots the entire order atomically. A failure creates no partial order.
- Per-customer advisory locking serializes checkout. Retrying the same key/cart
  returns the same order; reusing it with a changed cart is rejected. A customer
  may create at most 20 new orders per hour. This limit also applies to direct RPC calls.
- Orders are created `open` / `unpaid`. Checkout itself creates no entitlement.
  Manual payment submission enforces the seven-day quote expiry, and access is
  granted only after administrator approval.
- The cart retains a pending key across sign-in and network retries where browser
  session storage is available. A failed attempt does not clear the cart.
- Customers only read their own orders/items/attempts/entitlements. Admin payment
  decisions run through a narrowly scoped, atomic database function.
- All sensitive APIs return `private, no-store`; the proxy also prevents caching
  authenticated pages and refreshes Supabase cookies. Server checks use `getUser()`.
- Cookie-authenticated POST APIs require a matching Origin and reject cross-site
  fetches. Request bodies are bounded to 8 KB. Session cookies are HttpOnly and
  SameSite=Lax, with Secure enabled in production.

The checkout RPC is a narrowly scoped `SECURITY DEFINER` function because clients
have no direct table-write grants. It pins an empty search path, fully qualifies
tables, denies anonymous execution and validates identity/input within SQL.
Keep the `private` schema out of Supabase's exposed API schemas.

Currency defaults to PKR when Vercel provides a trusted Pakistan country header;
otherwise USD. A manually selected cookie preference takes priority. Self-hosted
deployments do not trust arbitrary incoming geolocation headers. No sensitive
authorization depends on country or currency cookies.

## Routes and modules

- `/auth`: email-code sign-in and signup; `/api/auth`: send, verify, sign out.
- `/cart`, `POST /api/checkout`: cart and unpaid order creation.
- `/account`, `/account/orders/[id]`, `/api/orders`, `/api/orders/[id]`: owned orders.
- `/api/me/entitlements`: owned access records (empty until future fulfillment).
- `/admin`, `/api/admin/orders`: server-authorized orders and payment review.
- `/api/catalog`: active database prices and display currency.
- `src/lib/payments/adapter.ts`: provider capability, payment verification and
  refund contracts. Future adapters report facts and never grant course access.

## Verification

Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build`.
The dependency review also updates Next.js/eslint-config-next to 16.3.6 and
Sharp to 0.35.4, plus compatible transitive security fixes. This addresses the
existing [Next.js Windows RCE advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36)
and [image optimization advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4).
Tests execute the actual migrations and RPC in PGlite (PostgreSQL), with minimal
local substitutes for Supabase-owned Auth/Storage schemas. They cover RLS,
privileges, fixed prices, price versioning, retries, malformed/mixed-currency
carts, owner isolation, unverified users, no-payment/no-access behavior and
request validation. This is not a full Supabase Auth, Storage or multi-connection
concurrency test. Verify those against a staging Supabase instance.

Staging acceptance: sign up two customers; place PKR and USD orders; retry a
request with the same key; ensure each cannot read the other's order or access
admin APIs; change a price and retry an old cart; sign out and verify protected
routes deny access. Confirm no course access appears merely from order creation.

## Next milestone

Verify the full manual-payment flow in staging, enforce administrator MFA, and add
refund/reconciliation operations. Only then implement a provider adapter and
webhook inbox. Do not activate card buttons until a real provider is connected.

References: [Supabase email OTP](https://supabase.com/docs/guides/auth/auth-email-passwordless),
[SSR authentication](https://supabase.com/docs/guides/auth/server-side/creating-a-client?framework=nextjs),
[database functions](https://supabase.com/docs/guides/database/functions).
