import { requireAdmin } from "@/lib/commerce/auth";
import { assertSameOrigin, CommerceError, uuidPattern } from "@/lib/commerce/validation";
import { errorResponse,json,readJson } from "@/lib/commerce/http";
export async function POST(request:Request,{params}:{params:Promise<{id:string}>}){
  try{
    assertSameOrigin(request);const {id}=await params;if(!uuidPattern.test(id))throw new CommerceError("Submission not found.",404);
    const body=await readJson(request) as Record<string,unknown>;
    if(!body||!['approve','reject'].includes(String(body.decision))||Object.keys(body).some(k=>!["decision","reason"].includes(k)))throw new CommerceError("Invalid review decision.");
    const reason=typeof body.reason==="string"?body.reason.trim():null;if(body.decision==="reject"&&(!reason||reason.length<3))throw new CommerceError("Provide a rejection reason.");
    const {db}=await requireAdmin();const {data,error}=await db.rpc("review_manual_payment",{p_submission_id:id,p_decision:body.decision,p_reason:reason});
    if(error)throw new CommerceError(error.code==="23505"?"This submission has already been reviewed.":error.message,error.code==="23505"?409:400);
    return json({status:data,notification:"queued"});
  }catch(error){return errorResponse(error);}
}
