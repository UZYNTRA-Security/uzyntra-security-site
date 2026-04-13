import type { Metadata } from "next";
import Link from "next/link";
import {
  Blocks, FileCode2, Shield, Wallet,
  Landmark, AlertTriangle, ArrowRight, MessageSquare, Network,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCapabilityGrid } from "@/components/sections/service-capability-grid";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { siteConfig } from "@/config/site";
import { blockchainTechnologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Blockchain Security & Smart Contract Engineering | UZYNTRA Security",
  description:
    "Smart contract development, blockchain security reviews, dApp architecture, wallet integration, and Web3 security engineering for production-grade blockchain products.",
  alternates: { canonical: `${siteConfig.url}/services/blockchain-security` },
  openGraph: {
    title: "Blockchain Security & Smart Contract Engineering | UZYNTRA Security",
    description:
      "Smart contract engineering, blockchain security reviews, dApp architecture, and Web3 security-focused development for serious blockchain products.",
    url: `${siteConfig.url}/services/blockchain-security`,
  },
};

const painPoints = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Reentrancy & Logic Errors",
    body: "Reentrancy attacks and integer overflow/underflow errors have drained hundreds of millions from DeFi protocols. Contract logic must be verified before deployment — not after.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Access Control Flaws",
    body: "Missing or misconfigured access controls allow unauthorized callers to invoke privileged functions — minting tokens, draining funds, or upgrading contracts without authorization.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Unsafe Upgrade Patterns",
    body: "Proxy upgrade patterns implemented incorrectly expose storage collision vulnerabilities and allow unauthorized contract replacement — a critical risk in upgradeable contract systems.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: "Wallet & Signer Trust Issues",
    body: "Insecure key management, missing multi-sig enforcement, and weak signer validation create single points of failure that attackers target directly.",
  },
];

const capabilities = [
  {
    title: "Smart Contract Development",
    icon: <FileCode2 className="h-5 w-5" />,
    frontDescription: "Solidity smart contracts built with security-first patterns and audit-oriented engineering.",
    backDescription:
      "We write smart contracts with reentrancy guards, access control patterns, integer safety, event emission, and upgrade-safe architecture — designed to pass security review from the first line of code.",
  },
  {
    title: "Smart Contract Security Review",
    icon: <Shield className="h-5 w-5" />,
    frontDescription: "Manual security review covering reentrancy, access control, logic errors, and tokenomics.",
    backDescription:
      "Structured security review of existing contracts covering reentrancy, access control flaws, integer errors, unsafe delegatecall, flash loan attack vectors, oracle manipulation, and tokenomics design risks.",
  },
  {
    title: "dApp Architecture",
    icon: <Blocks className="h-5 w-5" />,
    frontDescription: "Full-stack dApp design covering frontend, contract interaction, and backend integration.",
    backDescription:
      "dApp architecture that covers secure contract interaction patterns, wallet connection flows, transaction signing, event listening, error handling, and backend indexing for production-grade Web3 products.",
  },
  {
    title: "Wallet & Token Systems",
    icon: <Wallet className="h-5 w-5" />,
    frontDescription: "Wallet integration, token contract design, and multi-sig implementation.",
    backDescription:
      "Wallet integration covering MetaMask, WalletConnect, and hardware wallet support. Token systems designed with correct ERC standards, supply controls, transfer restrictions, and vesting logic.",
  },
  {
    title: "DeFi & Protocol Engineering",
    icon: <Landmark className="h-5 w-5" />,
    frontDescription: "DeFi protocol development with economic security and attack surface analysis.",
    backDescription:
      "DeFi protocol engineering with explicit attention to flash loan attack vectors, oracle manipulation, MEV exposure, liquidity risk, and economic security — not just functional correctness.",
  },
  {
    title: "Blockchain Backend Integration",
    icon: <Network className="h-5 w-5" />,
    frontDescription: "Node infrastructure, event indexing, and backend services for blockchain-connected systems.",
    backDescription:
      "Backend systems that connect to blockchain networks reliably — covering node infrastructure, event indexing, transaction management, retry logic, and secure key handling for server-side signing.",
  },
];

const process = [
  { step: "01", title: "Requirements & Threat Modeling", body: "Define contract scope, identify trust boundaries, and map attack surfaces before writing code." },
  { step: "02", title: "Development", body: "Security-first contract implementation with established patterns, test coverage, and code review." },
  { step: "03", title: "Security Review", body: "Manual review covering reentrancy, access control, logic errors, and economic attack vectors." },
  { step: "04", title: "Testing & Deployment", body: "Foundry/Hardhat test suite, testnet validation, and production deployment with monitoring." },
];

const faqs = [
  {
    q: "What is a smart contract security review?",
    a: "A smart contract security review is a manual analysis of contract code to identify vulnerabilities before deployment. It covers reentrancy, access control flaws, integer errors, unsafe external calls, flash loan attack vectors, and logic errors that automated tools miss. Unlike a formal audit from a dedicated audit firm, our reviews are integrated into the development process.",
  },
  {
    q: "What blockchain networks do you work with?",
    a: "We work primarily with EVM-compatible networks — Ethereum, Polygon, Arbitrum, Optimism, Base, and BSC. We also work with Solana for Rust-based programs. Network selection depends on your product requirements, gas cost considerations, and ecosystem fit.",
  },
  {
    q: "Do you use Foundry or Hardhat?",
    a: "Both. Foundry is our preferred testing framework for security-focused development — its fuzzing capabilities and Solidity-native test environment make it superior for finding edge cases. We use Hardhat for projects that require its plugin ecosystem or JavaScript-based test infrastructure.",
  },
  {
    q: "Can you review contracts we've already written?",
    a: "Yes. We conduct security reviews of existing contracts regardless of who wrote them. We review the code, identify vulnerabilities, assess severity, and provide remediation guidance. For contracts already deployed, we also assess upgrade paths and risk mitigation options.",
  },
  {
    q: "What is the difference between a security review and a formal audit?",
    a: "A formal audit from a dedicated audit firm produces a public report and carries reputational weight in the DeFi ecosystem. Our security reviews are engineering-integrated — conducted during development to catch and fix issues before they reach audit stage, reducing audit cost and improving audit outcomes.",
  },
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function BlockchainSecurityPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Blockchain Security & Smart Contract Engineering"
        title="Blockchain Security and Smart Contract Engineering for Serious Web3 Products"
        description="UZYNTRA designs and secures smart contracts, dApps, token systems, and blockchain-integrated platforms with a security-first engineering approach."
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Why It Matters</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Smart contract vulnerabilities are permanent and publicly exploitable
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Unlike web applications, deployed contracts cannot be patched. Security must be built in before deployment.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((p) => (
              <div key={p.title} className="surface-card p-5">
                <div className="mb-3">{p.icon}</div>
                <h3 className="text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCapabilityGrid
        heading="What we build and secure"
        intro="Smart contract development, security review, dApp architecture, and blockchain backend engineering — with security as a design requirement, not an afterthought."
        items={capabilities}
      />

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Process</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">How we deliver blockchain security engineering</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="surface-card p-5">
                <span className={`text-3xl font-bold ${stepColors[i]}`}>{p.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologySlider
        eyebrow="BLOCKCHAIN STACK"
        title="Protocols, Frameworks & Infrastructure"
        items={blockchainTechnologies}
        variant="compact"
      />

      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Extend your security coverage</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/services/backend-engineering" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Secure Backend Engineering</p>
                  <p className="mt-1 text-xs text-slate-500">Backend systems for blockchain-connected platforms.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/services/penetration-testing" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Penetration Testing</p>
                  <p className="mt-1 text-xs text-slate-500">Full-scope security testing for your Web3 platform.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">FAQ</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Common questions</h2>
            <div className="mt-8 grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="surface-card p-5">
                  <h3 className="text-sm font-semibold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to secure your blockchain product?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Request a blockchain security review and get a clear picture of your contract and platform risk before deployment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Request Blockchain Security Review
              </Link>
              <Link href="/services/backend-engineering" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View Backend Engineering
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
