import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, GitBranch, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Products | UZYNTRA API Firewall Platform",
  description:
    "Explore UZYNTRA API Firewall Platform, the unified Rust API security engine and Next.js operator control console for real-time API protection, mitigation, telemetry, and policy control.",
  alternates: { canonical: `${siteConfig.url}/products` },
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="section-shell bg-enterprise-radial">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our Product"
            title="One unified API security platform"
            description="UZYNTRA API Firewall combines the Rust security engine and the operator UI dashboard into one complete product experience for protecting and operating modern APIs."
            align="center"
          />

          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
              <div>
                <span className="eyebrow">Flagship Product</span>
                <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                  UZYNTRA API Firewall Platform
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A high-performance Rust API firewall with a Next.js operator control console for request inspection, threat detection, active mitigation, telemetry, reputation tracking, audit logs, and policy management.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, title: "Rust engine", body: "Fast reverse-proxy protection" },
                    { icon: Eye, title: "Operator UI", body: "Live visibility and control" },
                    { icon: GitBranch, title: "Open source", body: "Available on GitHub" },
                  ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <Icon className="h-5 w-5 text-red-600" aria-hidden="true" />
                      <p className="mt-3 text-sm font-bold text-slate-950">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/products/uzyntra-api-firewall" className="btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                    View unified product
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a href={siteConfig.productLinks.apiFirewallRepo} target="_blank" rel="noreferrer" className="btn-neutral inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                    GitHub repository
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-red-100 bg-red-50/70 p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">No duplicate UI page</p>
                <p className="mt-3 text-2xl font-black text-slate-950">UI dashboard is included</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The former UI Dashboard product entry is now part of the main API Firewall Platform page as the control plane section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
