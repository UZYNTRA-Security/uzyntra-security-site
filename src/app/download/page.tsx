import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download the latest release of UZYNTRA API Firewall and access platform repositories.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download UZYNTRA API Firewall",
    description:
      "Get the latest release of the UZYNTRA API Firewall and explore the platform repositories.",
    url: `${siteConfig.url}/download`,
  },
};

export default function DownloadPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Download"
        title="Access UZYNTRA API Firewall and platform repositories"
        description="Download the latest release of the UZYNTRA API Firewall or explore the source repositories for the firewall and UI dashboard."
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="surface-card-strong p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Flagship Product
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                UZYNTRA API Firewall
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                High-performance Rust-based API security engine for inspection,
                detection, mitigation, and modern operational control.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={siteConfig.productLinks.apiFirewallDownload}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm"
                >
                  Download Latest Release
                </a>
                <a
                  href={siteConfig.productLinks.apiFirewallRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neutral inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm"
                >
                  View Firewall Repository
                </a>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Support Product
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                UZYNTRA UI Dashboard
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Modern operator console for telemetry, events, mitigations,
                reputation, audit review, and policy visibility. Deeper analytics,
                dashboard improvements, and export workflows are part of the
                near-term UI roadmap.
              </p>

              <div className="mt-6">
                <a
                  href={siteConfig.productLinks.apiFirewallRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neutral inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm"
                >
                  View UI Repository
                </a>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Platform Notes
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The Firewall and UI Dashboard are positioned as a connected platform —
                Firewall → Admin API → UZYNTRA UI. Current capabilities include
                real-time visibility and operational control. The near-term direction
                expands into richer analytics, reporting, and dashboard improvements
                already reflected in the UI roadmap.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-stroke inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm"
                >
                  Discuss Adoption
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
