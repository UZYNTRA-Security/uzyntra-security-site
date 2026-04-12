// Server Component — no "use client" directive
import Image from "next/image";
import Link from "next/link";
import { Shield, LayoutDashboard, ArrowRight, Download } from "lucide-react";

import { ProductHighlightAnimations } from "@/components/sections/product-highlight-animations";

export function ProductHighlightSection() {
  const textCol = (
    <div className="surface-card-strong p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
        Product Highlight
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
        UZYNTRA API Firewall
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        A Rust-based API security layer built to inspect requests in real time,
        detect threats, and apply policy-driven mitigation before traffic reaches
        backend services.
      </p>

      <div className="mt-6 grid gap-3">
        <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_6px_18px_rgba(220,38,38,0.10)]">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-red-600 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-950">Real-time API inspection</p>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Request analysis, detection, traffic scoring, and policy enforcement.
          </p>
        </div>

        <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_6px_18px_rgba(220,38,38,0.10)]">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 text-red-600 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-950">UZYNTRA UI Dashboard</p>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Monitoring, analytics, and visibility for firewall operations.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/products/uzyntra-api-firewall"
          className="btn-solid inline-flex min-h-[50px] items-center justify-center rounded-2xl px-6 py-3 text-sm active:translate-y-0"
        >
          View Product
        </Link>
        <Link
          href="/download"
          className="btn-neutral inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm active:translate-y-0"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download
        </Link>
      </div>
    </div>
  );

  const imageCol = (
    <div className="relative">
      <div className="glass-panel premium-ring rounded-[28px] p-3 sm:p-4">
        <div className="overflow-hidden rounded-[22px] border border-white/70 bg-white">
          <Image
            src="/images/products/ui-dashboard-overview.webp"
            alt="UZYNTRA UI Dashboard — firewall monitoring and analytics overview"
            width={1600}
            height={1000}
            className="h-auto w-full object-cover"
            loading="lazy"
            /**
             * sizes tells the browser the rendered width at each breakpoint so
             * it picks the smallest sufficient srcset candidate.
             *
             * Layout: single column on mobile/tablet, right column (~51% of
             * container) on lg+. Container max-width is 1282px with 2rem padding.
             *
             * Calculation:
             *   lg+  → (1282px - 2rem - 2.5rem gap) * 0.51 ≈ 620px → round to 640w
             *   <lg  → 100vw minus container padding ≈ calc(100vw - 1.75rem)
             */
            sizes="(min-width: 1024px) 640px, calc(100vw - 1.75rem)"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-red-100 bg-red-50/80 px-4 py-4 dark-info-card">
        <p className="dark-info-heading text-sm font-semibold text-slate-950">
          Client → API → Firewall → Backend
        </p>
        <p className="dark-info-body mt-2 text-sm leading-7 text-slate-600">
          Positioned as the control layer between clients and backend services.
        </p>
        <Link
          href="/products"
          className="group dark-info-link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-3"
        >
          Explore products
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="section-tight bg-slate-50/70">
      <div className="container-shell">
        <div className="grid items-center gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:gap-10">
          <ProductHighlightAnimations textCol={textCol} imageCol={imageCol} />
        </div>
      </div>
    </section>
  );
}
