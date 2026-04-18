import Link from "next/link";
import { Layers, DollarSign, Blocks, Plug, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: <Layers className="h-6 w-6 text-red-600" aria-hidden="true" />,
    audience: "SaaS Startups",
    problem: "Shipping fast without a dedicated security team — vulnerabilities accumulate in APIs, auth flows, and third-party integrations before anyone notices.",
    solution: "API security testing, authentication review, and secure backend architecture that fits your stage and stack — without slowing down your roadmap.",
    href: "/services/api-security",
    cta: "API Security Testing",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-red-600" aria-hidden="true" />,
    audience: "Fintech Platforms",
    problem: "Financial APIs handle sensitive transactions, PII, and regulated data — a single BOLA or auth bypass can expose customer accounts and trigger compliance failures.",
    solution: "Penetration testing, business logic abuse testing, and secure backend engineering aligned with financial security requirements and real-world attack patterns.",
    href: "/services/penetration-testing",
    cta: "Penetration Testing",
  },
  {
    icon: <Blocks className="h-6 w-6 text-red-600" aria-hidden="true" />,
    audience: "Web3 Products",
    problem: "Smart contract vulnerabilities are permanent and publicly exploitable — reentrancy, access control flaws, and unsafe upgrade patterns have drained hundreds of millions.",
    solution: "Smart contract security review, dApp architecture, and blockchain backend engineering with security embedded from the first line of code.",
    href: "/services/blockchain-security",
    cta: "Blockchain Security",
  },
  {
    icon: <Plug className="h-6 w-6 text-red-600" aria-hidden="true" />,
    audience: "API-First Companies",
    problem: "Every endpoint is an attack surface. Rate limiting gaps, missing authorization checks, and excessive data exposure are common in API-first architectures built for speed.",
    solution: "Full OWASP API Top 10 coverage, custom fuzzing, and runtime protection via the UZYNTRA API Firewall — tested and defended at the API layer.",
    href: "/services/api-security",
    cta: "Secure Your APIs",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-tight bg-slate-50/70">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Who We Work With
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            Built for teams that take security seriously
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
            Whether you&apos;re a SaaS startup, fintech platform, Web3 product, or API-first company — the attack surface is real and the risk is specific.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.audience}
              className="surface-card-strong group flex flex-col gap-4 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(220,38,38,0.10)]"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                  {uc.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950">{uc.audience}</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="use-case-problem rounded-xl border border-red-100 bg-red-50/60 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-700">
                    The Problem
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-slate-600">{uc.problem}</p>
                </div>
                <div className="use-case-solution rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-700">
                    Our Solution
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-slate-600">{uc.solution}</p>
                </div>
              </div>

              <Link
                href={uc.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-2.5"
              >
                {uc.cta}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
