import Link from "next/link";
import { redirect } from "next/navigation";
import { createSessionClient } from "@/lib/supabase/server";
import { supabaseConfig } from "@/lib/supabase/config";
import { CommerceShell, Unavailable } from "@/components/commerce/shell";
import { SignOutButton } from "@/components/commerce/auth-form";
import { formatMoney } from "@/lib/commerce/validation";
import type { Order } from "@/lib/commerce/types";
export const metadata = { title: "My account", robots: { index: false, follow: false } };
export default async function AccountPage() {
  if (!supabaseConfig()) return <CommerceShell title="My account"><Unavailable /></CommerceShell>;
  const db = await createSessionClient();
  const { data: { user } } = await db.auth.getUser();
  if (!user?.email_confirmed_at) redirect("/auth?next=/account");
  const [orders, entitlements, role] = await Promise.all([
    db.from("orders").select("id,order_number,total,currency,payment_status,created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(50),
    db.from("entitlements").select("id,status,offering_id").eq("user_id", user.id),
    db.from("user_roles").select("role").eq("user_id", user.id).single(),
  ]);
  return <CommerceShell title="My account">
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><p>{user.email}</p><SignOutButton /></div>
    {role.data?.role === "admin" && <Link href="/admin" className="mb-6 inline-block underline">Administration</Link>}
    <h2 className="mb-4 text-xl font-bold">Your orders</h2>
    {orders.error ? <p role="alert">Orders could not be loaded. Please try again later.</p> : orders.data?.length ? <ul className="space-y-3">{(orders.data as Order[]).map(order => <li key={order.id}><Link className="surface-card flex flex-wrap justify-between gap-3 p-5" href={`/account/orders/${order.id}`}><span>UZ-{order.order_number}</span><span>{formatMoney(order.total, order.currency)} · {order.payment_status.replaceAll("_", " ")}</span></Link></li>)}</ul> : <p>No orders yet. <Link className="underline" href="/courses">Explore courses</Link>.</p>}
    <h2 className="mb-4 mt-10 text-xl font-bold">Course access</h2>
    {entitlements.error ? <p role="alert">Access information could not be loaded.</p> : entitlements.data?.length ? <p>{entitlements.data.filter(item => item.status === "active").length} active enrollment(s). Contact admissions for delivery details.</p> : <p>No active enrollments. Creating an order does not unlock course access.</p>}
  </CommerceShell>;
}
