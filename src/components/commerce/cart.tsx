"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useCommerce } from "./provider";
import { CurrencySelect } from "./course-price";
import { Button } from "@/components/ui/button";
import { formatMoney, uuidPattern } from "@/lib/commerce/validation";

export function Cart() {
  const { cart, offerings, currency, loading, available, remove, clear } = useCommerce();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [couponCode,setCouponCode]=useState("");
  const pendingCheckout = useRef<{ fingerprint: string; key: string } | null>(null);
  const inFlight = useRef(false);
  const router = useRouter();
  const lines = cart.map(id => { const offering = offerings.find(item => item.id === id); return { id, offering, price: offering?.prices.find(price => price.currency === currency) }; });
  const complete = lines.length > 0 && lines.every(line => line.price);
  const total = lines.reduce((sum, line) => sum + (line.price?.amount || 0), 0);
  async function checkout() {
    if (!complete || inFlight.current) return;
    inFlight.current = true;
    setBusy(true); setError("");
    const items = lines.map(line => ({ offering_id: line.id, price_id: line.price!.id })).sort((a, b) => a.offering_id.localeCompare(b.offering_id));
    const fingerprint = JSON.stringify({ currency, items, couponCode: couponCode.trim().toUpperCase() || null });
    try {
      let key: string = crypto.randomUUID();
      if (pendingCheckout.current?.fingerprint === fingerprint) key = pendingCheckout.current.key;
      try {
        const pending = JSON.parse(sessionStorage.getItem("uzyntra-checkout") || "null");
        if (pending?.fingerprint === fingerprint && typeof pending.key === "string" && uuidPattern.test(pending.key)) key = pending.key;
        sessionStorage.setItem("uzyntra-checkout", JSON.stringify({ fingerprint, key }));
      } catch { /* No browser persistence available. */ }
      pendingCheckout.current = { fingerprint, key };
      const response = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": key }, body: fingerprint });
      if (response.status === 401) { router.push("/auth?next=/cart"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to create order.");
      clear();
      try { sessionStorage.removeItem("uzyntra-checkout"); } catch { /* optional persistence */ }
      router.push(`/account/orders/${data.orderId}`);
    } catch (error) { setError(error instanceof Error ? error.message : "Unable to create order. Please try again."); }
    finally { setBusy(false); inFlight.current = false; }
  }
  if (loading) return <p role="status">Loading your cart…</p>;
  if (!available) return <p>Online enrollment is not available yet. <Link href="/contact" className="underline">Contact admissions</Link>.</p>;
  return <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
    <div><div className="mb-5 flex items-center justify-between gap-3"><h2 className="text-xl font-bold">Your courses</h2><CurrencySelect /></div>
      {!lines.length ? <p>Your cart is empty. <Link className="underline" href="/courses">Explore courses</Link>.</p> : <ul className="space-y-4">{lines.map(line => <li className="surface-card space-y-4 p-5" key={line.id}>
        <div className="flex flex-wrap justify-between gap-3"><h3 className="font-bold">{line.offering?.title || "Course unavailable"}</h3><p>{line.price ? formatMoney(line.price.amount, currency) : `No ${currency} price is available. Switch currency or remove this course.`}</p></div>
        <Button variant="outline" size="sm" disabled={busy} onClick={() => remove(line.id)}>Remove</Button>
      </li>)}</ul>}
    </div>
    <aside className="surface-card h-fit space-y-5 p-6"><h2 className="text-xl font-bold">Order summary</h2><p className="text-2xl font-bold">{complete ? formatMoney(total, currency) : "—"}</p>
      <p className="text-sm">Prices are fixed for each currency. Changing currency uses that market’s listed price, not a live exchange rate.</p>
      <p className="text-sm">Create an unpaid order for your account. Course access remains locked until payment is verified.</p>
      <p className="text-sm">{currency === "PKR" ? "Configured bank, JazzCash, and Easypaisa methods are offered after checkout." : "Configured international remittance instructions are offered after checkout."}</p>
      <label className="block space-y-2 text-sm"><span>Coupon code (optional)</span><input className="w-full rounded-lg border border-slate-400 bg-transparent p-3 uppercase" value={couponCode} maxLength={32} pattern="[A-Za-z0-9_-]{3,32}" onChange={event=>setCouponCode(event.target.value)} /></label>
      <Button className="w-full" disabled={!complete || busy} onClick={checkout}>{busy ? "Creating order…" : "Create unpaid order"}</Button>
      <p role="alert" className="text-sm text-red-600">{error}</p>
      <Link href="/contact" className="block text-sm underline">Corporate seats or a custom quote? Contact sales</Link>
    </aside>
  </div>;
}
