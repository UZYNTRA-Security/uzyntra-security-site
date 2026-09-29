import { requireCustomer } from "@/lib/commerce/auth";
import { assertSameOrigin, CommerceError, uuidPattern } from "@/lib/commerce/validation";
import { errorResponse, json, readJson } from "@/lib/commerce/http";
import { getManualMethods } from "@/lib/payments/manual";
export async function POST(request: Request,{params}:{params:Promise<{id:string}>}) {
  try {
    assertSameOrigin(request); const {id}=await params;
    if(!uuidPattern.test(id)) throw new CommerceError("Order not found.",404);
    const key=request.headers.get("idempotency-key"); if(!key||!uuidPattern.test(key)) throw new CommerceError("A valid idempotency key is required.");
    const body=await readJson(request) as Record<string,unknown>;
    if(!body||Object.keys(body).some(k=>k!=="method")||typeof body.method!=="string") throw new CommerceError("Choose a payment method.");
    const {db,user}=await requireCustomer();
    const {data:order}=await db.from("orders").select("currency").eq("id",id).eq("user_id",user.id).maybeSingle();
    if(!order) throw new CommerceError("Order not found.",404);
    const method=getManualMethods(order.currency).find(item=>item.id===body.method);
    if(!method) throw new CommerceError("That payment method is not configured for this currency.",409);
    const {data,error}=await db.rpc("create_manual_payment_attempt",{p_order_id:id,p_method:method.id,p_idempotency_key:key});
    if(error) throw new CommerceError(error.code==="23505"?"This order already has a payment under review.":error.message,error.code==="23505"?409:400);
    return json({attemptId:data,method},201);
  } catch(error){return errorResponse(error);}
}
