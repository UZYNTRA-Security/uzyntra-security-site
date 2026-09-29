import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/commerce/auth";
import { CommerceError, formatMoney } from "@/lib/commerce/validation";
import { CommerceShell, Unavailable } from "@/components/commerce/shell";
import type { Order } from "@/lib/commerce/types";
import { AdminPaymentReview } from "@/components/commerce/admin-payment-review";
export const metadata = { title: "Administration", robots: { index: false, follow: false } };
export default async function AdminPage() {
  let session;
  try { session = await requireAdmin(); }
  catch (error) {
    if (error instanceof CommerceError && error.status === 401) redirect("/auth");
    if (error instanceof CommerceError && error.status === 503) return <CommerceShell title="Administration"><Unavailable /></CommerceShell>;
    return <CommerceShell title="Access restricted"><p>Administrator access is required.</p></CommerceShell>;
  }
  const [{data,error},{data:submissions,error:reviewError}]=await Promise.all([
    session.db.from("orders").select("id,order_number,total,currency,payment_status,created_at").order("created_at",{ascending:false}).limit(100),
    session.db.from("manual_submissions").select("id,transaction_reference,payer_name,payer_account_last4,paid_at,created_at,payment_attempts!inner(method,amount,currency,orders!inner(order_number,profiles!inner(email,full_name)))").eq("status","submitted").order("created_at")
  ]);
  return <CommerceShell title="Commerce administration">
    <h2 className="mb-4 text-xl font-bold">Pending payment review</h2>
    {reviewError?<p role="alert">Payment review queue could not be loaded.</p>:<AdminPaymentReview submissions={(submissions||[]) as never} />}
    <h2 className="mb-4 mt-10 text-xl font-bold">Recent orders</h2>
    {error ? <p role="alert">Orders could not be loaded.</p> : <ul className="space-y-3">{(data as Order[]).map(order => <li key={order.id} className="surface-card flex flex-wrap justify-between gap-3 p-5"><span>UZ-{order.order_number}</span><span>{formatMoney(order.total, order.currency)} · {order.payment_status}</span></li>)}</ul>}
    {!error && !data?.length && <p>No orders yet.</p>}
  </CommerceShell>;
}
