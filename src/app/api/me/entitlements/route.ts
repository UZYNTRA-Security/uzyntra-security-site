import { requireCustomer } from "@/lib/commerce/auth";
import { errorResponse, json } from "@/lib/commerce/http";
export async function GET() {
  try {
    const { db, user } = await requireCustomer();
    const { data, error } = await db.from("entitlements").select("id,offering_id,status,created_at").eq("user_id", user.id);
    if (error) throw error;
    return json({ entitlements: data });
  } catch (error) { return errorResponse(error); }
}
