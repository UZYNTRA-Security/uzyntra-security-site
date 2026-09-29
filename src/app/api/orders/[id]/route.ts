import { requireCustomer } from "@/lib/commerce/auth";
import { errorResponse, json } from "@/lib/commerce/http";
import { CommerceError, uuidPattern } from "@/lib/commerce/validation";
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { db, user } = await requireCustomer();
    const { id } = await params;
    if (!uuidPattern.test(id)) throw new CommerceError("Order not found.", 404);
    const { data, error } = await db.from("orders").select("id,order_number,status,payment_status,currency,total,created_at,expires_at,order_items(id,title_snapshot,unit_amount,quantity,currency)").eq("id", id).eq("user_id", user.id).maybeSingle();
    if (error) throw error;
    if (!data) throw new CommerceError("Order not found.", 404);
    return json({ order: data });
  } catch (error) { return errorResponse(error); }
}
