import { requireCustomer } from "@/lib/commerce/auth";
import { CommerceError, uuidPattern } from "@/lib/commerce/validation";
import { errorResponse } from "@/lib/commerce/http";
export async function GET(_request:Request,{params}:{params:Promise<{id:string}>}){
  try{
    const {id}=await params;if(!uuidPattern.test(id))throw new CommerceError("Evidence not found.",404);
    const {db}=await requireCustomer();const {data:submission,error}=await db.from("manual_submissions").select("evidence_path").eq("id",id).maybeSingle();
    if(error||!submission)throw new CommerceError("Evidence not found.",404);
    const {data,error:signError}=await db.storage.from("payment-evidence").createSignedUrl(submission.evidence_path,60);
    if(signError||!data)throw new CommerceError("Evidence is temporarily unavailable.",503);
    return Response.redirect(data.signedUrl,302);
  }catch(error){return errorResponse(error);}
}
