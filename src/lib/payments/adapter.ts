import type { Currency } from "@/lib/commerce/types";

/** Future provider boundary. Adapters never write orders or grant entitlements. */
export interface PaymentAdapter {
  readonly provider: string;
  readonly capabilities: { currencies: readonly Currency[]; methods: readonly string[]; refunds: boolean };
  createPayment(input: { attemptId: string; orderId: string; amount: number; currency: Currency; idempotencyKey: string }): Promise<{ reference: string; redirectUrl?: string; instructions?: string }>;
  verifyPayment(reference: string): Promise<PaymentFact>;
  verifyWebhook?(rawBody: Uint8Array, headers: Headers): Promise<PaymentFact>;
  refundPayment?(input: { reference: string; amount: number; currency: Currency; idempotencyKey: string }): Promise<{ reference: string; status: "pending" | "succeeded" | "failed" }>;
}
export type PaymentFact = {
  provider: string;
  account: string;
  environment: "test" | "live";
  reference: string;
  eventId?: string;
  amount: number;
  currency: Currency;
  status: "pending" | "succeeded" | "failed";
};
// Phase A intentionally registers no providers or payment-success handlers.
