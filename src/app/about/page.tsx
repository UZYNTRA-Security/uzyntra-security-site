import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about UZYNTRA Security — a platform and services company delivering enterprise cybersecurity, secure software engineering, and blockchain systems.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero-shell">
        <div className="container-shell relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">About</span>

            <h1 className="mt-6 text-balance font-semibold text-slate-950">
              About UZYNTRA Security
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-slate-600">
              UZYNTRA Security delivers cybersecurity solutions, secure software
              engineering, and blockchain systems with enterprise-grade architecture,
              security-first thinking, and production-ready execution.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface-card-strong p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Company Overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                A platform and services company built for modern technical environments
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                UZYNTRA Security is positioned as more than a single-product business.
                It combines platform development and enterprise service delivery across
                cybersecurity, secure software development, and blockchain systems.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                The ecosystem includes UZYNTRA API Firewall, UZYNTRA UI Dashboard,
                and a broader technical direction focused on secure architecture,
                resilient systems, and scalable engineering.
              </p>
            </div>

            <div className="grid gap-4 content-start">
              <div className="surface-card p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-950">Mission</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  To help organizations build, protect, and scale secure digital
                  systems through cybersecurity, software engineering, and blockchain innovation.
                </p>
              </div>

              <div className="surface-card p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-950">Positioning</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  Enterprise-focused, architecture-driven, and security-first in both
                  product design and technical service delivery.
                </p>
              </div>

              <div className="surface-card p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-950">Core Areas</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  Cybersecurity, secure software development, API protection, modern backend systems,
                  cloud-native engineering, and blockchain infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
