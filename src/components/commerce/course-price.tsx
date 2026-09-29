"use client";
import Link from "next/link";
import { useCommerce } from "./provider";
import { formatMoney } from "@/lib/commerce/validation";
import { Button } from "@/components/ui/button";

export function CoursePrice({ slug }: { slug: string }) {
  const { offerings, currency, loading } = useCommerce();
  const price = offerings.find(item => item.slug === slug)?.prices.find(item => item.currency === currency);
  return <span>{loading ? "Loading price…" : price ? formatMoney(price.amount, price.currency) : "Contact admissions for pricing"}</span>;
}
export function CurrencySelect() {
  const { currency, setCurrency, loading } = useCommerce();
  return <label className="inline-flex items-center gap-2 text-xs font-semibold"><span className="sr-only">Pricing currency</span><select aria-label="Pricing currency" className="rounded-lg border border-slate-300 bg-transparent p-2" value={currency} disabled={loading} onChange={event => setCurrency(event.target.value as "PKR" | "USD")}><option className="bg-white text-slate-950" value="PKR">PKR</option><option className="bg-white text-slate-950" value="USD">USD</option></select></label>;
}
export function AddCourse({ slug }: { slug: string }) {
  const { offerings, cart, currency, add, loading } = useCommerce();
  const offering = offerings.find(item => item.slug === slug);
  if (loading) return <span className="text-sm">Loading enrollment options…</span>;
  if (!offering?.prices.some(price => price.currency === currency)) return null;
  if (cart.includes(offering.id)) return <Link className="btn-solid inline-flex h-11 items-center rounded-xl px-5 text-sm" href="/cart">View cart</Link>;
  return <Button type="button" disabled={cart.length >= 10} onClick={() => add(offering.id)}>{cart.length >= 10 ? "Cart limit reached" : "Add to cart"}</Button>;
}
