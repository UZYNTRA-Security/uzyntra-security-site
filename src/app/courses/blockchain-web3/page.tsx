import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blockchain & Web3 Course | UZYNTRA Security",
  description: "Smart contract development, DeFi protocols, dApp engineering, and Web3 security with Solidity and Hardhat.",
  alternates: { canonical: `${siteConfig.url}/courses/blockchain-web3` },
};

const modules = [
  { step: "01", title: "Blockchain Fundamentals", body: "Distributed ledgers, consensus mechanisms, Ethereum, and Solana ecosystems." },
  { step: "02", title: "Solidity & Smart Contracts", body: "Write, test, and deploy smart contracts using Solidity, Hardhat, and Foundry." },
  { step: "03", title: "DeFi & dApp Development", body: "Build decentralized applications, token systems, and DeFi protocol integrations." },
  { step: "04", title: "Web3 Security", body: "Reentrancy, flash loan attacks, access control flaws, and smart contract auditing." },
];

const outcomes = [
  "Write and deploy Solidity smart contracts",
  "Build dApps with ethers.js and wagmi",
  "Understand DeFi protocols and token economics",
  "Audit smart contracts for common vulnerabilities",
  "Integrate Web3 wallets and authentication",
  "Deploy to Ethereum, Polygon, and Solana",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function BlockchainCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage
        src="/images/courses/blockchain-web3.webp"
        alt="Blockchain and Web3 Course"
        eyebrow="Course — Blockchain & Web3"
        title="Blockchain & Web3: Smart Contracts to Secure dApps"
        description="Build on-chain applications with Solidity, understand DeFi protocols, and learn to audit smart contracts for security vulnerabilities."
      />
      <section id="curriculum" className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Curriculum</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">What you will learn</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m, i) => (
              <div key={m.step} className="surface-card p-5">
                <span className={`text-3xl font-bold ${stepColors[i]}`}>{m.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Outcomes</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">What you will be able to do</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 surface-card p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Build the decentralized future</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and start building secure Web3 applications on-chain.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now
              </Link>
              <Link href="/courses" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
