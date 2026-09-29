import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/commerce/auth";
import { CommerceError,formatMoney } from "@/lib/commerce/validation";
import { CommerceShell,Unavailable } from "@/components/commerce/shell";
import type { Order } from "@/lib/commerce/types";
import { AdminPaymentReview } from "@/components/commerce/admin-payment-review";
import { RefundReview } from "@/components/commerce/refund-actions";
export const metadata={title:"Commerce administration",robots:{index:false,follow:false}};
type RefundItem={id:string;reason:string;orders:{order_number:number;total:number;currency:"PKR"|"USD";profiles:{email:string;full_name:string|null}}};
export default async function AdminPage(){let session;try{session=await requireAdmin()}catch(error){if(error instanceof CommerceError&&error.status===401)redirect("/auth");if(error instanceof CommerceError&&error.status===503)return <CommerceShell title="Administration"><Unavailable/></CommerceShell>;return <CommerceShell title="Access restricted"><p>Administrator access is required.</p></CommerceShell>}
  const [{data:orders,error},{data:submissions,error:reviewError},{data:refunds},{data:customers},{data:discounts},{data:offerings},{data:audit}]=await Promise.all([
    session.db.from("orders").select("id,order_number,total,currency,payment_status,created_at").order("created_at",{ascending:false}).limit(100),
    session.db.from("manual_submissions").select("id,transaction_reference,payer_name,payer_account_last4,paid_at,created_at,payment_attempts!inner(method,amount,currency,orders!inner(order_number,profiles!inner(email,full_name)))").eq("status","submitted").order("created_at"),
    session.db.from("refund_requests").select("id,reason,created_at,orders!inner(order_number,total,currency,profiles!inner(email,full_name))").eq("status","requested").order("created_at"),
    session.db.from("profiles").select("id,email,full_name,organization,created_at").order("created_at",{ascending:false}).limit(100),
    session.db.from("discounts").select("id,name,code,mode,value_type,value,currency,active,ends_at").order("created_at",{ascending:false}),
    session.db.from("offerings").select("id,title,slug,type,active").order("type").order("title"),
    session.db.from("audit_events").select("id,action,entity_type,entity_id,created_at").order("created_at",{ascending:false}).limit(100)
  ]);const paid=(orders||[]).filter(order=>order.payment_status==="paid");
  return <CommerceShell title="Commerce administration"><nav className="mb-8 flex flex-wrap gap-4 text-sm underline"><a href="#orders">Orders</a><a href="#payments">Payments</a><a href="#customers">Customers</a><a href="#coupons">Coupons</a><a href="#products">Products</a><a href="#refunds">Refunds</a><a href="#reports">Reports</a><a href="#audit">Audit logs</a></nav>
    <section id="payments"><h2 className="mb-4 text-xl font-bold">Pending payment review</h2>{reviewError?<p role="alert">Payment review queue could not be loaded.</p>:<AdminPaymentReview submissions={(submissions||[]) as never}/>}</section>
    <section id="refunds"><h2 className="mb-4 mt-10 text-xl font-bold">Refund requests</h2>{refunds?.length?<ul className="space-y-4">{(refunds as unknown as RefundItem[]).map(item=><li className="surface-card space-y-2 p-5" key={item.id}><strong>UZ-{item.orders.order_number} · {formatMoney(item.orders.total,item.orders.currency)}</strong><p>{item.orders.profiles.full_name||item.orders.profiles.email}</p><p>{item.reason}</p><RefundReview id={item.id}/></li>)}</ul>:<p>No refunds await review.</p>}</section>
    <section id="orders"><h2 className="mb-4 mt-10 text-xl font-bold">Recent orders</h2>{error?<p role="alert">Orders could not be loaded.</p>:<ul className="space-y-3">{(orders as Order[]).map(order=><li key={order.id} className="surface-card flex flex-wrap justify-between gap-3 p-5"><span>UZ-{order.order_number}</span><span>{formatMoney(order.total,order.currency)} · {order.payment_status}</span></li>)}</ul>}</section>
    <section id="reports"><h2 className="mb-4 mt-10 text-xl font-bold">Reports</h2><div className="surface-card grid gap-4 p-5 sm:grid-cols-3"><p>Orders: <strong>{orders?.length||0}</strong></p><p>Paid: <strong>{paid.length}</strong></p><p>Refund requests: <strong>{refunds?.length||0}</strong></p></div></section>
    <section id="customers"><h2 className="mb-4 mt-10 text-xl font-bold">Customers</h2><ul className="space-y-2">{customers?.map(item=><li key={item.id}>{item.full_name||item.email}{item.organization?` · ${item.organization}`:""}</li>)}</ul></section>
    <section id="coupons"><h2 className="mb-4 mt-10 text-xl font-bold">Coupons and discounts</h2><ul className="space-y-2">{discounts?.map(item=><li key={item.id}>{item.name} · {item.code||"automatic"} · {item.active?"active":"inactive"}</li>)}</ul></section>
    <section id="products"><h2 className="mb-4 mt-10 text-xl font-bold">Offerings</h2><ul className="grid gap-2 sm:grid-cols-2">{offerings?.map(item=><li key={item.id}>{item.title} · {item.type} · {item.active?"active":"inactive"}</li>)}</ul></section>
    <section id="audit"><h2 className="mb-4 mt-10 text-xl font-bold">Audit logs</h2><ul className="space-y-2">{audit?.map(item=><li key={item.id}>{new Date(item.created_at).toLocaleString()} · {item.action} · {item.entity_type}</li>)}</ul></section>
  </CommerceShell>
}
