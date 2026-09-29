"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/commerce/validation";
import type { Currency } from "@/lib/commerce/types";
type Review={id:string;transaction_reference:string;payer_name:string;payer_account_last4:string|null;paid_at:string;created_at:string;payment_attempts:{method:string;amount:number;currency:Currency;orders:{order_number:number;profiles:{email:string;full_name:string|null}}}};
export function AdminPaymentReview({submissions}:{submissions:Review[]}){
  const [busy,setBusy]=useState<string>(),[message,setMessage]=useState("");const router=useRouter();
  async function review(id:string,decision:"approve"|"reject"){
    const reason=decision==="reject"?window.prompt("Reason shown to the customer:")?.trim():null;if(decision==="reject"&&!reason)return;
    if(decision==="approve"&&!window.confirm("Confirm you matched this reference and exact amount against funds received?"))return;
    setBusy(id);setMessage("");try{const response=await fetch(`/api/admin/manual-payments/${id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({decision,reason})});const data=await response.json();if(!response.ok)throw new Error(data.error);setMessage(`Payment ${data.status}; notification queued.`);router.refresh();}catch(e){setMessage(e instanceof Error?e.message:"Review failed.");}finally{setBusy(undefined);}
  }
  if(!submissions.length)return <p>No payments await review.</p>;
  return <><p role="status" className="mb-4">{message}</p><ul className="space-y-5">{submissions.map(s=><li className="surface-card space-y-3 p-5" key={s.id}>
    <div className="flex flex-wrap justify-between gap-3"><strong>UZ-{s.payment_attempts.orders.order_number}</strong><strong>{formatMoney(s.payment_attempts.amount,s.payment_attempts.currency)}</strong></div>
    <p>Customer: {s.payment_attempts.orders.profiles.full_name||s.payment_attempts.orders.profiles.email}</p><p>Method: {s.payment_attempts.method.replaceAll("_"," ")}</p><p>Transaction ID: {s.transaction_reference}</p><p>Payer: {s.payer_name}{s.payer_account_last4?` · account ending ${s.payer_account_last4}`:""}</p><p>Paid: {new Date(s.paid_at).toLocaleString()}</p>
    <a className="underline" href={`/api/payment-evidence/${s.id}`} target="_blank" rel="noreferrer">View evidence</a>
    <div className="flex gap-3"><Button disabled={busy===s.id} onClick={()=>review(s.id,"approve")}>Approve</Button><Button variant="outline" disabled={busy===s.id} onClick={()=>review(s.id,"reject")}>Reject</Button></div>
  </li>)}</ul></>;
}
