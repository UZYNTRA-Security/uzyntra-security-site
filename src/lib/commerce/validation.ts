import type { CartItem, Currency } from "./types";

export class CommerceError extends Error {
  constructor(message: string, public readonly status = 400) { super(message); }
}
export const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function isCurrency(value: unknown): value is Currency { return value === "PKR" || value === "USD"; }
export function defaultCurrency(country: string | null): Currency { return country?.toUpperCase() === "PK" ? "PKR" : "USD"; }
export function formatMoney(amount: number, currency: Currency) {
  return new Intl.NumberFormat("en", { style: "currency", currency, currencyDisplay: "code" }).format(amount / 100);
}
export function parseCheckout(value: unknown): { currency: Currency; items: CartItem[] } {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommerceError("Invalid checkout request.");
  const input = value as Record<string, unknown>;
  if (Object.keys(input).some(key => !["currency", "items"].includes(key))) throw new CommerceError("Only currency and cart items are accepted.");
  if (!isCurrency(input.currency)) throw new CommerceError("Choose PKR or USD.");
  if (!Array.isArray(input.items) || input.items.length < 1 || input.items.length > 10) throw new CommerceError("Choose between 1 and 10 courses.");
  const items: CartItem[] = input.items.map(item => {
    if (!item || typeof item !== "object" || Array.isArray(item) || Object.keys(item).length !== 2 ||
      typeof item.offering_id !== "string" || !uuidPattern.test(item.offering_id) ||
      typeof item.price_id !== "string" || !uuidPattern.test(item.price_id)) throw new CommerceError("Invalid cart item. Refresh your cart.");
    return { offering_id: item.offering_id, price_id: item.price_id };
  });
  if (new Set(items.map(item => item.offering_id)).size !== items.length) throw new CommerceError("A course can only appear once in your cart.");
  return { currency: input.currency, items };
}
export function assertSameOrigin(request: Request) {
  const expected = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin : new URL(request.url).origin;
  if (request.headers.get("origin") !== new URL(expected).origin || request.headers.get("sec-fetch-site") === "cross-site") {
    throw new CommerceError("Request origin is not allowed.", 403);
  }
}
export function safeReturnPath(value: unknown): string {
  // Only known account/cart destinations, never arbitrary URLs or protocol-relative redirects.
  return typeof value === "string" && /^\/(cart|account)(\/orders\/[0-9a-f-]{36})?$/.test(value) ? value : "/account";
}
