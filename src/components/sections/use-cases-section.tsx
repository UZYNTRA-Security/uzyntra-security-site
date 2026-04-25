"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, DollarSign, Blocks, Plug, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Layers,
    audience: "SaaS Startups",
    hook: "Speed ships bugs. We ship fixes.",
    accent: "#3B82F6",        // blue-500
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.22)",
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
    cta: "Test Your APIs Now",
  },
  {
    icon: DollarSign,
    audience: "Fintech Platforms",
    hook: "One BOLA can drain accounts.",
    accent: "#10B981",        // emerald-500
    accentBg: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.22)",
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
    cta: "Secure Fintech APIs",
  },
  {
    icon: Blocks,
    audience: "Web3 Products",
    hook: "Smart contract bugs are permanent.",
    accent: "#8B5CF6",        // violet-500
    accentBg: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.22)",
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
    cta: "Audit Your Contracts",
  },
  {
    icon: Plug,
    audience: "API-First Companies",
    hook: "Every endpoint is an attack surface.",
    accent: "#EF4444",        // red-500
    accentBg: "rgba(239,68,68,0.08)",
    accentBorder: "rgba(239,68,68,0.22)",
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
    cta: "Defend Your APIs",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function UseCasesSection() {
  return (
    <section className="section-tight">
      <div className="container-shell">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Who We Work With
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            Each product type fails differently.{" "}
            <span className="text-red-600">We secure accordingly.</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
            SaaS, fintech, Web3, or API-first — the attack surface is real and the risk is specific.
          </p>
        </div>

        {/* ── Cards ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.audience}
                variants={cardAnim}
                className="use-cases-card group flex flex-col rounded-[22px] border bg-white p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)]"
                style={{ borderColor: uc.accentBorder }}
              >
                {/* Icon + audience */}
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-110"
                    style={{ background: uc.accentBg }}
                  >
                    <Icon className="h-6 w-6" style={{ color: uc.accent }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Audience
                    </p>
                    <h3 className="text-sm font-bold text-slate-950">{uc.audience}</h3>
                  </div>
                </div>

                {/* Hook */}
                <p
                  className="mt-4 text-[0.8125rem] font-semibold italic leading-snug"
                  style={{ color: uc.accent }}
                >
                  {uc.hook}
                </p>

                {/* Problem bullets */}
                <div className="mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">
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
                <div className="mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Our Solution
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {uc.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                        <span
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: uc.accent }}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-5">
                  <Link
                    href={uc.href}
                    className="inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                    style={{
                      color: uc.accent,
                      borderColor: uc.accentBorder,
                      background: uc.accentBg,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = uc.accent;
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      (e.currentTarget as HTMLElement).style.borderColor = uc.accent;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = uc.accentBg;
                      (e.currentTarget as HTMLElement).style.color = uc.accent;
                      (e.currentTarget as HTMLElement).style.borderColor = uc.accentBorder;
                    }}
                  >
                    {uc.cta}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
