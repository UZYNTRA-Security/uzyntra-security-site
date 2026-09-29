import { requireCustomer } from "@/lib/commerce/auth";
import { assertSameOrigin, CommerceError, parseCheckout, uuidPattern } from "@/lib/commerce/validation";
import { errorResponse, json, readJson } from "@/lib/commerce/http";

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const { db } = await requireCustomer();
    const key = request.headers.get("idempotency-key");
    if (!key || !uuidPattern.test(key)) throw new CommerceError("A valid idempotency key is required.");
    const input = parseCheckout(await readJson(request));
    const { data, error } = await db.rpc("create_checkout", { p_currency: input.currency, p_items: input.items, p_idempotency_key: key, p_coupon_code: input.couponCode });
    if (error) {
      if (error.code === "23505") throw new CommerceError("This checkout key belongs to a different cart.", 409);
      if (error.code === "28000") throw new CommerceError("Please verify your email before checkout.", 401);
      if (error.code === "P0001") throw new CommerceError("Checkout limit reached. Please try again later.", 429);
      if (error.code === "22023") throw new CommerceError(error.message, 409);
      throw new CommerceError("Unable to create your order. Please try again later.", 503);
    }
    return json({ orderId: data, paymentStatus: "unpaid" }, 201);
  } catch (error) { return errorResponse(error); }
}
