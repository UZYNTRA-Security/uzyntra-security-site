export type Currency = "PKR" | "USD";
export type OfferingType = "course" | "product" | "service" | "contribution";
export type Price = { id: string; currency: Currency; amount: number; region: string };
export type Offering = { id: string; slug: string; title: string; type: OfferingType; prices: Price[] };
export type CartItem = { offering_id: string; price_id: string };
export type OrderItem = { id: string; title_snapshot: string; unit_amount: number; quantity: number; currency: Currency };
export type Order = { id: string; order_number: number; status: string; payment_status: string; currency: Currency; total: number; created_at: string; expires_at: string; order_items: OrderItem[] };
