import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createSessionClient } from "@/lib/supabase/server";
import { supabaseConfig } from "@/lib/supabase/config";
import { CommerceShell, Unavailable } from "@/components/commerce/shell";
import { formatMoney, uuidPattern } from "@/lib/commerce/validation";
import type { Order } from "@/lib/commerce/types";
import { getManualMethods } from "@/lib/payments/manual";
import { ManualPaymentForm } from "@/components/commerce/manual-payment-form";
export const metadata = { title: "Order details", robots: { index: false, follow: false } };
export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!uuidPattern.test(id)) notFound();
  if (!supabaseConfig()) return <CommerceShell title="Order details"><Unavailable /></CommerceShell>;
  const db = await createSessionClient();
  const { data: { user } } = await db.auth.getUser();
  if (!user?.email_confirmed_at) redirect(`/auth?next=/account/orders/${id}`);
  const { data, error } = await db.from("orders").select("id,order_number,status,payment_status,currency,subtotal,discount_total,total,created_at,expires_at,order_items(id,title_snapshot,unit_amount,quantity,currency),payment_attempts(id,status,method,manual_submissions(id,status,review_reason,created_at))").eq("id", id).eq("user_id", user.id).maybeSingle();
  if (error) return <CommerceShell title="Order details"><p role="alert">Your order could not be loaded. Please try again later.</p></CommerceShell>;
  if (!data) notFound();
  const order = data as Order;
  const reviewAttempt = order.payment_attempts?.find(attempt => attempt.status === "requires_review");
  const pendingAttempt = order.payment_attempts?.find(attempt => attempt.status === "pending");
  return <CommerceShell title={`Order UZ-${order.order_number}`}>
    <div className="surface-card max-w-3xl space-y-6 p-6">
      <p className="font-semibold">Payment: {order.payment_status.replaceAll("_", " ")} · Order: {order.status}</p>
      <ul className="space-y-4">{order.order_items.map(item => <li className="flex flex-wrap justify-between gap-3" key={item.id}><span>{item.title_snapshot}</span><span>{formatMoney(item.unit_amount, item.currency)}</span></li>)}</ul>
      {order.discount_total>0&&<p>Subtotal: {formatMoney(order.subtotal,order.currency)} · Discount: −{formatMoney(order.discount_total,order.currency)}</p>}
      <p className="border-t pt-4 text-xl font-bold">Total: {formatMoney(order.total, order.currency)}</p>
      <p>Created {new Date(order.created_at).toLocaleDateString("en-GB", { timeZone: "UTC" })}. Price valid until {new Date(order.expires_at).toLocaleDateString("en-GB", { timeZone: "UTC" })}.</p>
      {order.payment_status === "paid" ? <p>Your payment is approved and course access is active.</p> : reviewAttempt ? <p>Payment submitted and awaiting administrator verification. Access remains locked.</p> : <ManualPaymentForm orderId={order.id} methods={getManualMethods(order.currency)} initialAttemptId={pendingAttempt?.id} initialMethod={pendingAttempt?.method} />}
      <Link className="inline-block underline" href="/contact">Contact admissions about this order</Link>
    </div>
  </CommerceShell>;
}
