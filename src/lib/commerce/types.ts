export type Currency = "PKR" | "USD";
export type ManualMethod = { id: "bank_transfer" | "jazzcash" | "easypaisa" | "remittance"; label: string; accountName: string; instructions: string; currencies: Currency[] };
export type OfferingType = "course" | "product" | "service" | "donation";
export type Price = { id: string; currency: Currency; amount: number; region: string };
export type Offering = { id: string; slug: string; title: string; type: OfferingType; prices: Price[] };
export type CartItem = { offering_id: string; price_id: string };
export type OrderItem = { id: string; title_snapshot: string; unit_amount: number; quantity: number; currency: Currency };
export type Order = { id: string; order_number: number; status: string; payment_status: string; currency: Currency; subtotal: number; discount_total: number; total: number; created_at: string; expires_at: string; order_items: OrderItem[]; payment_attempts?: Array<{id:string;status:string;method:string;manual_submissions:Array<{id:string;status:string;review_reason:string|null;created_at:string}>}> };
