"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Currency, Offering } from "@/lib/commerce/types";
import { isCurrency, uuidPattern } from "@/lib/commerce/validation";

type CommerceState = {
  offerings: Offering[]; currency: Currency; cart: string[]; loading: boolean; available: boolean;
  setCurrency: (currency: Currency) => void; add: (id: string) => void; remove: (id: string) => void; clear: () => void;
};
const Context = createContext<CommerceState | null>(null);
export function CommerceProvider({ children }: { children: React.ReactNode }) {
  const [offerings, setOfferings] = useState<Offering[]>([]);
  const [currency, updateCurrency] = useState<Currency>("USD");
  const [cart, updateCart] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    let live = true;
    fetch("/api/catalog", { cache: "no-store" }).then(response => response.json()).then(data => {
      if (!live) return;
      if (isCurrency(data.currency)) updateCurrency(data.currency);
      setOfferings(Array.isArray(data.offerings) ? data.offerings : []);
      setAvailable(data.available === true);
    }).catch(() => { if (live) setAvailable(false); }).finally(() => {
      if (!live) return;
      try {
        const stored: unknown = JSON.parse(localStorage.getItem("uzyntra-cart") || "[]");
        if (Array.isArray(stored)) updateCart([...new Set(stored.filter((id): id is string => typeof id === "string" && uuidPattern.test(id)))].slice(0, 10));
      } catch { /* Storage can be blocked; in-memory cart still works. */ }
      setLoading(false);
    });
    return () => { live = false; };
  }, []);
  function changeCart(transform: (previous: string[]) => string[]) {
    updateCart(previous => {
      const next = transform(previous);
      try { localStorage.setItem("uzyntra-cart", JSON.stringify(next)); } catch { /* optional persistence */ }
      return next;
    });
  }
  function setCurrency(next: Currency) {
    updateCurrency(next);
    // Display preference only. Checkout independently validates currency and database prices.
    document.cookie = `uzyntra-currency=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  }
  return <Context.Provider value={{ offerings, currency, cart, loading, available, setCurrency,
    add: id => changeCart(previous => previous.includes(id) || previous.length >= 10 ? previous : [...previous, id]),
    remove: id => changeCart(previous => previous.filter(value => value !== id)), clear: () => changeCart(() => []),
  }}>{children}</Context.Provider>;
}
export function useCommerce() {
  const value = useContext(Context);
  if (!value) throw new Error("CommerceProvider is required.");
  return value;
}
