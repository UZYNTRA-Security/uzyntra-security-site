import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/commerce/auth";
import { CommerceError, formatMoney } from "@/lib/commerce/validation";
import { CommerceShell, Unavailable } from "@/components/commerce/shell";
import type { Order } from "@/lib/commerce/types";
export const metadata = { title: "Administration", robots: { index: false, follow: false } };
export default async function AdminPage() {
  let session;
  try { session = await requireAdmin(); }
  catch (error) {
    if (error instanceof CommerceError && error.status === 401) redirect("/auth");
    if (error instanceof CommerceError && error.status === 503) return <CommerceShell title="Administration"><Unavailable /></CommerceShell>;
    return <CommerceShell title="Access restricted"><p>Administrator access is required.</p></CommerceShell>;
  }
  const { data, error } = await session.db.from("orders").select("id,order_number,total,currency,payment_status,created_at").order("created_at", { ascending: false }).limit(100);
  return <CommerceShell title="Commerce administration">
    <p className="mb-6">Recent orders, read-only. Payment verification is not enabled.</p>
    {error ? <p role="alert">Orders could not be loaded.</p> : <ul className="space-y-3">{(data as Order[]).map(order => <li key={order.id} className="surface-card flex flex-wrap justify-between gap-3 p-5"><span>UZ-{order.order_number}</span><span>{formatMoney(order.total, order.currency)} · {order.payment_status}</span></li>)}</ul>}
    {!error && !data?.length && <p>No orders yet.</p>}
  </CommerceShell>;
}
