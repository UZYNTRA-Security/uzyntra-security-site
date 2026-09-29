import Link from "next/link";

export function CommerceShell({ title, children }: { title: string; children: React.ReactNode }) {
  return <main id="main-content" className="container-shell py-12 sm:py-16">
    <nav aria-label="Account navigation" className="mb-8 flex flex-wrap gap-5 text-sm font-semibold">
      <Link href="/courses">Courses</Link><Link href="/cart">Cart</Link><Link href="/account">My account</Link>
    </nav>
    <h1 className="mb-7 text-3xl font-bold">{title}</h1>
    {children}
  </main>;
}
export function Unavailable() {
  return <p className="surface-card p-6">Online enrollment is not available yet. <Link className="underline" href="/contact">Contact admissions</Link> for assistance.</p>;
}
