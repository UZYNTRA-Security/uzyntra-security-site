import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="section-shell bg-enterprise-radial">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our Products"
            title="Enterprise Security Products"
            description="Production-grade security tools built by UZYNTRA — designed for real operational environments, not demos."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/products/uzyntra-api-firewall"
              className="surface-card group block p-8 transition hover:shadow-lg"
            >
              <span className="eyebrow">Flagship Product</span>
              <h2 className="mt-4 text-xl font-semibold text-slate-950 transition group-hover:text-red-700">
                UZYNTRA API Firewall
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                A high-performance Rust-based API security layer for real-time traffic
                inspection, threat detection, and automated mitigation.
              </p>
              <ul className="mt-5 space-y-2">
                {["Real-time request inspection", "SQLi, XSS, rate abuse detection", "Automatic blocking engine", "Built with Rust for performance"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-block text-sm font-semibold text-red-600 transition group-hover:text-red-700">
                View product →
              </span>
            </Link>

            <div className="surface-card p-8 opacity-60">
              <span className="eyebrow">Coming Soon</span>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">
                UZYNTRA UI Dashboard
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Operational visibility and management experience for the UZYNTRA platform —
                monitoring, analytics, and control in one interface.
              </p>
              <ul className="mt-5 space-y-2">
                {["Real-time threat visualization", "Log analytics and search", "System metrics and health", "Integrated with API Firewall"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-block text-sm font-medium text-slate-500">
                Integrated with API Firewall
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
