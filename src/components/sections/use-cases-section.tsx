"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, DollarSign, Blocks, Plug, ArrowRight, ShieldCheck } from "lucide-react";

// Fix 3 — toned-down, enterprise-grade palette (opacity reduced)
const useCases = [
  {
    icon: Layers,
    label: "For SaaS",
    audience: "SaaS Startups",
    hook: "Speed ships bugs. We ship fixes.",
    accent: "rgba(59,130,246,0.80)",
    accentSolid: "#3B82F6",
    accentBg: "rgba(59,130,246,0.06)",
    accentBorder: "rgba(59,130,246,0.14)",
    accentGlow: "rgba(59,130,246,0.18)",
    problems: [
      "Unreviewed API auth flows",
      "Third-party integration risks",
      "Vulnerabilities accumulate silently",
    ],
    solutions: [
      "API security testing & auth review",
      "Secure backend architecture",
      "Fits your stage and stack",
    ],
    href: "/services/cybersecurity",
    cta: "Start API Security Audit",
  },
  {
    icon: DollarSign,
    label: "For Fintech",
    audience: "Fintech Platforms",
    hook: "One BOLA can drain accounts.",
    accent: "rgba(16,185,129,0.80)",
    accentSolid: "#10B981",
    accentBg: "rgba(16,185,129,0.06)",
    accentBorder: "rgba(16,185,129,0.14)",
    accentGlow: "rgba(16,185,129,0.18)",
    problems: [
      "BOLA & auth bypass exposure",
      "PII and payment data at risk",
      "PCI / GDPR compliance gaps",
    ],
    solutions: [
      "Penetration & business logic testing",
      "Financial security alignment",
      "Real-world attack pattern coverage",
    ],
    href: "/services/cybersecurity",
    cta: "Protect Transactions Now",
  },
  {
    icon: Blocks,
    label: "For Web3",
    audience: "Web3 Products",
    hook: "Smart contract bugs are permanent.",
    accent: "rgba(139,92,246,0.80)",
    accentSolid: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.06)",
    accentBorder: "rgba(139,92,246,0.14)",
    accentGlow: "rgba(139,92,246,0.18)",
    problems: [
      "Reentrancy & access control flaws",
      "Unsafe upgrade patterns",
      "Publicly exploitable on-chain",
    ],
    solutions: [
      "Smart contract security review",
      "dApp architecture hardening",
      "Security from line one",
    ],
    href: "/services/blockchain",
    cta: "Scan Smart Contracts",
  },
  {
    icon: Plug,
    label: "For API-First",
    audience: "API-First Companies",
    hook: "Every endpoint is an attack surface.",
    accent: "rgba(239,68,68,0.80)",
    accentSolid: "#EF4444",
    accentBg: "rgba(239,68,68,0.06)",
    accentBorder: "rgba(239,68,68,0.14)",
    accentGlow: "rgba(239,68,68,0.18)",
    problems: [
      "Rate limiting & authz gaps",
      "Excessive data exposure",
      "OWASP API Top 10 blind spots",
    ],
    solutions: [
      "Full OWASP API Top 10 coverage",
      "Custom fuzzing & runtime protection",
      "UZYNTRA API Firewall deployment",
    ],
    href: "/services/cybersecurity",
    cta: "Deploy API Defense",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function UseCasesSection() {
  return (
    <section className="section-tight">
      <div className="container-shell">

        {/* ── Fix 1: Tighter header spacing, lighter subtitle ── */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Who We Work With
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Each product type fails differently.{" "}
            <span className="text-red-600">We secure accordingly.</span>
          </h2>
          {/* Fix 1: smaller + lighter subtitle */}
          <p className="mt-2 text-sm text-slate-400">
            SaaS, fintech, Web3, or API-first — the attack surface is real and the risk is specific.
          </p>
        </div>

        {/* ── Fix 2 + 8: items-stretch for equal height, gap-8 ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.audience}
                variants={cardAnim}
                // Fix 2: h-full flex flex-col justify-between
                // Fix 4: subtle border + soft shadow, no loud border
                // Fix 7: stronger hover — translate-y-[-6px] + shadow-xl + glow
                className="use-cases-card group flex h-full flex-col justify-between rounded-[20px] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-[6px]"
                style={{
                  borderColor: uc.accentBorder,
                  // Fix 7: glow on hover handled via onMouseEnter below
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 20px 48px ${uc.accentGlow}, 0 4px 16px rgba(0,0,0,0.08)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 1px 4px rgba(0,0,0,0.06)";
                }}
              >
                {/* Top section */}
                <div className="flex flex-col gap-4">

                  {/* Fix 9: Remove "AUDIENCE" label, use "For X" format */}
                  <div className="flex items-center gap-3">
                    <div
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                      style={{ background: uc.accentBg }}
                    >
                      <Icon className="h-5 w-5" style={{ color: uc.accentSolid }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: uc.accent }}>
                        {uc.label}
                      </p>
                      <h3 className="text-sm font-bold text-slate-950">{uc.audience}</h3>
                    </div>
                  </div>

                  {/* Hook */}
                  <p
                    className="text-[0.8125rem] font-semibold italic leading-snug"
                    style={{ color: uc.accentSolid }}
                  >
                    {uc.hook}
                  </p>

                  {/* Problem bullets */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-500">
                      The Problem
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {uc.problems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution bullets */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Our Solution
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {uc.solutions.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                          <span
                            className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: uc.accentSolid }}
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Fix 5: Outcome-focused CTA, stroke→fill swap */}
                <div className="mt-6">
                  <Link
                    href={uc.href}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-xs font-semibold transition-all duration-200"
                    style={{
                      color: uc.accentSolid,
                      borderColor: uc.accentBorder,
                      background: uc.accentBg,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = uc.accentSolid;
                      el.style.color = "#ffffff";
                      el.style.borderColor = uc.accentSolid;
                      el.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = uc.accentBg;
                      el.style.color = uc.accentSolid;
                      el.style.borderColor = uc.accentBorder;
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {uc.cta}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fix 10: Global bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" as const }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-slate-500">
            Not sure where you fit?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_6px_20px_rgba(220,38,38,0.28)]"
          >
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            Get a Free Security Assessment
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
