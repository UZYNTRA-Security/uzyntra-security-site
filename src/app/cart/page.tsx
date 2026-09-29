import { Cart } from "@/components/commerce/cart";
import { CommerceShell } from "@/components/commerce/shell";
export const metadata = { title: "Your cart", robots: { index: false, follow: false } };
export default function CartPage() { return <CommerceShell title="Your cart"><Cart /></CommerceShell>; }
