import { requireCustomer } from "@/lib/commerce/auth";
import { assertSameOrigin, CommerceError, uuidPattern } from "@/lib/commerce/validation";
import { errorResponse, json } from "@/lib/commerce/http";

const MAX=5*1024*1024;
function inspect(file:File){
  const types:Record<string,{ext:string;magic:(b:Uint8Array)=>boolean}>={
    "image/png":{ext:"png",magic:b=>b[0]===0x89&&b[1]===0x50&&b[2]===0x4e&&b[3]===0x47},
    "image/jpeg":{ext:"jpg",magic:b=>b[0]===0xff&&b[1]===0xd8&&b[2]===0xff},
    "application/pdf":{ext:"pdf",magic:b=>new TextDecoder().decode(b.slice(0,5))==="%PDF-"},
  }; return types[file.type];
}
export async function POST(request:Request,{params}:{params:Promise<{id:string}>}){
  let uploaded:string|undefined;
  try{
    assertSameOrigin(request); const {id}=await params; if(!uuidPattern.test(id)) throw new CommerceError("Payment attempt not found.",404);
    const length=Number(request.headers.get("content-length")||0); if(length>MAX+32768) throw new CommerceError("Evidence file is too large.",413);
    const {db,user}=await requireCustomer(); const form=await request.formData();
    if([...form.keys()].some(k=>!["reference","payerName","accountLast4","paidAt","evidence"].includes(k))) throw new CommerceError("Unexpected submission field.");
    const reference=form.get("reference"),payerName=form.get("payerName"),accountLast4=form.get("accountLast4"),paidAt=form.get("paidAt"),file=form.get("evidence");
    if(typeof reference!=="string"||typeof payerName!=="string"||typeof accountLast4!=="string"||typeof paidAt!=="string"||!(file instanceof File)) throw new CommerceError("Complete all required payment fields.");
    const paidAtDate=new Date(paidAt);if(Number.isNaN(paidAtDate.getTime()))throw new CommerceError("Enter a valid payment date and time.");
    if(file.size<1||file.size>MAX) throw new CommerceError("Evidence must be between 1 byte and 5 MB.");
    const kind=inspect(file),bytes=new Uint8Array(await file.arrayBuffer()); if(!kind||!kind.magic(bytes)) throw new CommerceError("Upload a valid PNG, JPEG, or PDF file.");
    const {data:attempt}=await db.from("payment_attempts").select("order_id,status").eq("id",id).maybeSingle();
    if(!attempt||attempt.status!=="pending") throw new CommerceError("Payment attempt cannot be submitted.",409);
    uploaded=`${user.id}/${attempt.order_id}/${crypto.randomUUID()}.${kind.ext}`;
    const upload=await db.storage.from("payment-evidence").upload(uploaded,bytes,{contentType:file.type,upsert:false,cacheControl:"0"});
    if(upload.error) throw new CommerceError("Evidence upload failed. Please try again.",503);
    const {data,error}=await db.rpc("submit_manual_payment",{p_attempt_id:id,p_reference:reference,p_payer_name:payerName,p_payer_account_last4:accountLast4||null,p_paid_at:paidAtDate.toISOString(),p_evidence_path:uploaded});
    if(error){await db.storage.from("payment-evidence").remove([uploaded]); throw new CommerceError(error.message,409);}
    return json({submissionId:data,status:"submitted"},201);
  }catch(error){return errorResponse(error);}
}
