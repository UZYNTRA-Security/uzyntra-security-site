import { createAdminClient } from "@/lib/supabase/admin";
import { json } from "@/lib/commerce/http";
async function deliver(request:Request){
  const secret=process.env.CRON_SECRET;if(!secret||request.headers.get("authorization")!==`Bearer ${secret}`)return json({error:"Unauthorized"},401);
  const db=createAdminClient(),apiKey=process.env.RESEND_API_KEY,from=process.env.NOTIFICATION_FROM_EMAIL;
  if(!db||!apiKey||!from)return json({error:"Notification delivery is not configured"},503);
  const {data:jobs,error}=await db.from("notification_outbox").select("id,kind,recipient,payload,attempts").in("status",["pending","failed"]).lte("available_at",new Date().toISOString()).lt("attempts",10).order("created_at").limit(10);
  if(error)return json({error:"Unable to load notifications"},503);
  let sent=0;
  for(const job of jobs||[]){
    const claimed=await db.from("notification_outbox").update({status:"processing",locked_at:new Date().toISOString(),attempts:job.attempts+1}).eq("id",job.id).in("status",["pending","failed"]).select("id").maybeSingle();
    if(!claimed.data)continue;
    const order=`UZ-${job.payload.order_number}`;const templates:Record<string,{subject:string;text:string}>={manual_payment_pending:{subject:`${order}: payment awaiting verification`,text:`Your payment details for ${order} were received. Access remains locked while our team verifies the transfer.`},manual_payment_approved:{subject:`${order}: payment confirmed`,text:`Your payment for ${order} was verified. Your eligible course access is now active.`},manual_payment_rejected:{subject:`${order}: payment could not be verified`,text:`Your payment for ${order} was not approved. Reason: ${job.payload.reason}. You may submit a new attempt from your order page.`},refund_approved:{subject:`${order}: refund confirmed`,text:`Your refund for ${order} was confirmed. Reason: ${job.payload.reason}. A credit note is available with your invoice.`},refund_rejected:{subject:`${order}: refund request update`,text:`Your refund request for ${order} was not approved. Reason: ${job.payload.reason}.`}};const template=templates[job.kind];if(!template){await db.from("notification_outbox").update({status:"failed",last_error:"Unknown notification kind"}).eq("id",job.id);continue;}
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[job.recipient],subject:template.subject,text:template.text})});
    if(response.ok){sent++;await db.from("notification_outbox").update({status:"sent",sent_at:new Date().toISOString(),last_error:null}).eq("id",job.id);}
    else{await db.from("notification_outbox").update({status:"failed",available_at:new Date(Date.now()+5*60_000).toISOString(),last_error:`Email provider returned ${response.status}`}).eq("id",job.id);}
  }
  return json({processed:(jobs||[]).length,sent});
}
export const GET=deliver;
export const POST=deliver;
