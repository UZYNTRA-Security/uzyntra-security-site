import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createSessionClient } from "@/lib/supabase/server";
import { supabaseConfig } from "@/lib/supabase/config";
import { CommerceShell, Unavailable } from "@/components/commerce/shell";
import { formatMoney, uuidPattern } from "@/lib/commerce/validation";
import type { Order } from "@/lib/commerce/types";
export const metadata = { title: "Order details", robots: { index: false, follow: false } };
export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!uuidPattern.test(id)) notFound();
  if (!supabaseConfig()) return <CommerceShell title="Order details"><Unavailable /></CommerceShell>;
  const db = await createSessionClient();
  const { data: { user } } = await db.auth.getUser();
  if (!user?.email_confirmed_at) redirect(`/auth?next=/account/orders/${id}`);
  const { data, error } = await db.from("orders").select("id,order_number,status,payment_status,currency,total,created_at,expires_at,order_items(id,title_snapshot,unit_amount,quantity,currency)").eq("id", id).eq("user_id", user.id).maybeSingle();
  if (error) return <CommerceShell title="Order details"><p role="alert">Your order could not be loaded. Please try again later.</p></CommerceShell>;
  if (!data) notFound();
  const order = data as Order;
  return <CommerceShell title={`Order UZ-${order.order_number}`}>
    <div className="surface-card max-w-3xl space-y-6 p-6">
      <p className="font-semibold">Payment: {order.payment_status.replaceAll("_", " ")} · Order: {order.status}</p>
      <ul className="space-y-4">{order.order_items.map(item => <li className="flex flex-wrap justify-between gap-3" key={item.id}><span>{item.title_snapshot}</span><span>{formatMoney(item.unit_amount, item.currency)}</span></li>)}</ul>
      <p className="border-t pt-4 text-xl font-bold">Total: {formatMoney(order.total, order.currency)}</p>
      <p>Created {new Date(order.created_at).toLocaleDateString("en-GB", { timeZone: "UTC" })}. Price valid until {new Date(order.expires_at).toLocaleDateString("en-GB", { timeZone: "UTC" })}.</p>
      <p>Payment collection is not available yet. No payment has been taken by this checkout, and this order does not grant course access.</p>
      <Link className="inline-block underline" href="/contact">Contact admissions about this order</Link>
    </div>
  </CommerceShell>;
}
