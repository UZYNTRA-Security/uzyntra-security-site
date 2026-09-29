"use client";
import { useRef,useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { ManualMethod } from "@/lib/commerce/types";

export function ManualPaymentForm({orderId,methods,initialAttemptId,initialMethod}:{orderId:string;methods:ManualMethod[];initialAttemptId?:string;initialMethod?:string}){
  const [method,setMethod]=useState(initialMethod||methods[0]?.id||"");const [attemptId,setAttemptId]=useState<string|undefined>(initialAttemptId);
  const [busy,setBusy]=useState(false),[message,setMessage]=useState("");const key=useRef(crypto.randomUUID());const router=useRouter();
  if(!methods.length)return <p>Manual payment instructions are not configured for this currency. Contact admissions.</p>;
  async function begin(){setBusy(true);setMessage("");try{const response=await fetch(`/api/orders/${orderId}/manual-payment-attempts`,{method:"POST",headers:{"Content-Type":"application/json","Idempotency-Key":key.current},body:JSON.stringify({method})});const data=await response.json();if(!response.ok)throw new Error(data.error);setAttemptId(data.attemptId);}catch(e){setMessage(e instanceof Error?e.message:"Unable to start payment.");}finally{setBusy(false);}}
  async function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();if(!attemptId)return;setBusy(true);setMessage("");try{const response=await fetch(`/api/payment-attempts/${attemptId}/manual-submissions`,{method:"POST",body:new FormData(event.currentTarget)});const data=await response.json();if(!response.ok)throw new Error(data.error);setMessage("Payment details submitted for review. Access remains locked until approval.");router.refresh();}catch(e){setMessage(e instanceof Error?e.message:"Unable to submit payment.");}finally{setBusy(false);}}
  const selected=methods.find(item=>item.id===method);
  return <section className="space-y-5 border-t pt-6"><h2 className="text-xl font-bold">Manual payment</h2>
    {!attemptId?<><label className="block space-y-2"><span>Payment method</span><select className="w-full rounded-lg border border-slate-400 bg-transparent p-3" value={method} onChange={e=>setMethod(e.target.value as ManualMethod["id"])}>{methods.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
      {selected&&<div className="rounded-lg border p-4"><p className="font-semibold">Account name: {selected.accountName}</p><p className="mt-2 whitespace-pre-line">{selected.instructions}</p></div>}
      <p className="text-sm">Transfer the exact order total. Starting this step does not mark the order paid.</p><Button disabled={busy} onClick={begin}>{busy?"Please wait…":"I’m ready to submit payment details"}</Button></>:
      <form className="space-y-4" onSubmit={submit} encType="multipart/form-data">
        <label className="block space-y-2"><span>Transaction ID/reference</span><input name="reference" required minLength={4} maxLength={100} className="w-full rounded-lg border border-slate-400 bg-transparent p-3" /></label>
        <label className="block space-y-2"><span>Payer name</span><input name="payerName" required minLength={2} maxLength={120} className="w-full rounded-lg border border-slate-400 bg-transparent p-3" /></label>
        <label className="block space-y-2"><span>Last 4 account digits (optional)</span><input name="accountLast4" pattern="[A-Za-z0-9]{4}" maxLength={4} className="w-full rounded-lg border border-slate-400 bg-transparent p-3" /></label>
        <label className="block space-y-2"><span>Payment date and time</span><input name="paidAt" type="datetime-local" required className="w-full rounded-lg border border-slate-400 bg-transparent p-3" /></label>
        <label className="block space-y-2"><span>Payment evidence (PNG, JPEG, or PDF; maximum 5 MB)</span><input name="evidence" type="file" required accept="image/png,image/jpeg,application/pdf" /></label>
        <p className="text-sm">Evidence supports review but never unlocks access by itself. An administrator must verify received funds.</p><Button disabled={busy}>{busy?"Uploading…":"Submit for review"}</Button>
      </form>}
    <p role="status" className="text-sm">{message}</p></section>;
}
