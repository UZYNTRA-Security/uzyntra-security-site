"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function RefundRequest({orderId}:{orderId:string}){
  const [reason,setReason]=useState(""),[busy,setBusy]=useState(false),[message,setMessage]=useState("");const router=useRouter();
  async function submit(){setBusy(true);setMessage("");try{const response=await fetch(`/api/orders/${orderId}/refunds`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reason})});const data=await response.json();if(!response.ok)throw new Error(data.error);setMessage("Refund request submitted for review.");router.refresh();}catch(error){setMessage(error instanceof Error?error.message:"Unable to request refund.");}finally{setBusy(false);}}
  return <section className="space-y-3 border-t pt-5"><h2 className="font-bold">Request a refund</h2><textarea className="w-full rounded-lg border border-slate-400 bg-transparent p-3" minLength={10} maxLength={1000} value={reason} onChange={e=>setReason(e.target.value)} placeholder="Explain why you are requesting a refund."/><Button disabled={busy||reason.trim().length<10} onClick={submit}>{busy?"Submitting…":"Submit refund request"}</Button><p role="status">{message}</p></section>;
}

export function RefundReview({id}:{id:string}){
  const [busy,setBusy]=useState(false),[message,setMessage]=useState("");const router=useRouter();
  async function decide(decision:"approve"|"reject"){const reason=window.prompt("Decision reason:")?.trim();if(!reason)return;const externalReference=decision==="approve"?window.prompt("Confirmed external refund transaction reference:")?.trim():undefined;if(decision==="approve"&&!externalReference)return;setBusy(true);try{const response=await fetch(`/api/admin/refunds/${id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({decision,reason,externalReference})});const data=await response.json();if(!response.ok)throw new Error(data.error);setMessage(`Refund ${data.status}.`);router.refresh();}catch(error){setMessage(error instanceof Error?error.message:"Refund review failed.");}finally{setBusy(false);}}
  return <div><div className="flex gap-2"><Button disabled={busy} onClick={()=>decide("approve")}>Confirm refund sent</Button><Button variant="outline" disabled={busy} onClick={()=>decide("reject")}>Reject</Button></div><p role="status">{message}</p></div>;
}
