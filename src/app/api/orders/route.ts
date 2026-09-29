import { requireCustomer } from "@/lib/commerce/auth";
import { errorResponse, json } from "@/lib/commerce/http";
export async function GET() {
  try {
    const { db, user } = await requireCustomer();
    const { data, error } = await db.from("orders").select("id,order_number,status,payment_status,currency,total,created_at,expires_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(50);
    if (error) throw error;
    return json({ orders: data });
  } catch (error) { return errorResponse(error); }
}
