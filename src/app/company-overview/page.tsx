import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Blocks,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Eye,
  FileJson,
  GitBranch,
  Globe2,
  LockKeyhole,
  Mail,
  Phone,
  Radar,
  ServerCog,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Company Overview | UZYNTRA Security",
  description:
    "UZYNTRA Security company overview covering enterprise cybersecurity services, secure engineering, blockchain systems, the UZYNTRA API Firewall platform, and professional training programs.",
  alternates: { canonical: `${siteConfig.url}/company-overview` },
  openGraph: {
    title: "UZYNTRA Security Company Overview",
    description:
      "A concise overview of UZYNTRA Security services, products, courses, open-source security platform, and engagement channels.",
    url: `${siteConfig.url}/company-overview`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/products/ui-dashboard-overview.webp`,
        width: 1200,
        height: 630,
        alt: "UZYNTRA API Firewall operator dashboard",
      },
    ],
  },
};

const services = [
  {
    href: "/services/api-security-testing",
    icon: Radar,
    eyebrow: "Offensive Security",
    title: "API & SaaS Security Testing",
    description:
      "Offensive testing for APIs, SaaS platforms, authentication systems, and cloud services using OWASP methodology and real-world abuse scenarios.",
    points: ["OWASP API Top 10", "BOLA / IDOR", "JWT, OAuth, API key abuse", "Business logic flaws"],
  },
  {
    href: "/services/penetration-testing",
    icon: ShieldCheck,
    eyebrow: "Red Team Operations",
    title: "Penetration Testing & Red Teaming",
    description:
      "Structured penetration tests and adversary simulations across applications, networks, cloud environments, and identity systems.",
    points: ["Web application pentest", "Network and infrastructure", "Cloud security assessment", "Active Directory attacks"],
  },
  {
    href: "/services/backend-engineering",
    icon: Code2,
    eyebrow: "Secure Engineering",
    title: "Secure Backend & Cloud Engineering",
    description:
      "Production-ready backend systems, APIs, cloud-native architectures, and DevSecOps pipelines with security embedded at every layer.",
    points: ["Rust backend systems", "Secure REST and GraphQL APIs", "AWS, Azure, and GCP", "Docker and Kubernetes"],
  },
  {
    href: "/services/blockchain-security",
    icon: Blocks,
    eyebrow: "Web3 Engineering",
    title: "Blockchain Security & Smart Contract Engineering",
    description:
      "Smart contract development, blockchain security reviews, dApp architecture, and Web3 systems with security-first engineering.",
    points: ["Solidity reviews", "DeFi assessments", "Token systems", "Multi-chain deployment"],
  },
  {
    href: "/services/automation-ai",
    icon: Workflow,
    eyebrow: "Workflow Engineering",
    title: "Automation & AI Workflow Systems",
    description:
      "n8n automation, API orchestration, AI agent workflows, and self-hosted systems built for reliable operational scale.",
    points: ["n8n workflows", "Webhook pipelines", "LangChain agents", "Credential-safe automation"],
  },
] as const;

const engineCapabilities = [
  { icon: Eye, title: "Deep Request Inspection", body: "Headers, routes, payloads, query strings, and request context are inspected before origin traffic." },
  { icon: Radar, title: "Attack Detection Engine", body: "Pattern matching, heuristic scoring, confidence levels, and attack classification for API threats." },
  { icon: LockKeyhole, title: "Active Mitigation", body: "Block malicious requests, apply TTL bans, reset reputation, and enforce proxy-layer decisions." },
  { icon: Activity, title: "Security Telemetry", body: "Events, metrics, logs, routes, severity, attack types, and actions for operational review." },
  { icon: ServerCog, title: "Policy Control", body: "Rules, rate limits, and enforcement behavior managed through admin APIs and the operator console." },
  { icon: Zap, title: "High Performance", body: "Async Rust architecture with Tokio, Axum, Reqwest, and Serde for predictable low-latency handling." },
] as const;

const consoleModules = [
  { icon: Activity, title: "Dashboard", body: "Live metrics, attack activity, security posture, and operational health." },
  { icon: Eye, title: "Events Explorer", body: "Search, filter, and investigate attack events with route, IP, severity, and context." },
  { icon: ShieldCheck, title: "Mitigation Control", body: "Review blocked traffic, TTL bans, IP reputation changes, and response decisions." },
  { icon: Database, title: "Reputation System", body: "Track source behavior and reputation signals for repeated abuse control." },
  { icon: FileJson, title: "Audit Trail", body: "Review operator actions, policy changes, and security events for accountability." },
  { icon: ServerCog, title: "Policy Management", body: "Tune policies and control firewall behavior from a SaaS-style console." },
] as const;

const detectionCoverage = [
  "SQL Injection",
  "Cross-Site Scripting",
  "Path Traversal",
  "Rate Abuse",
  "Behavioral Anomalies",
  "Request Scoring",
  "Confidence Levels",
  "Attack Classification",
] as const;

const courses = [
  {
    href: "/courses/cybersecurity",
    icon: ShieldCheck,
    eyebrow: "Professional Program",
    title: "Cybersecurity Professional Programme",
    detail: "3 months, 15 modules, guided labs, reporting, and final assessment.",
    price: "PKR 45,000 / $199 USD",
  },
  {
    href: "/courses/artificial-intelligence",
    icon: Cpu,
    eyebrow: "Professional Program",
    title: "AI Professional Programme",
    detail: "3 months, 13 modules, AI labs, deployment workflows, and capstone assessment.",
    price: "PKR 54,000 / $249 USD",
  },
] as const;

const contactCards = [
  { icon: Globe2, label: "Website", value: "uzyntra.com", href: siteConfig.url },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: "tel:+923335545728" },
  { icon: GitBranch, label: "GitHub", value: "UZYNTRA-Security", href: siteConfig.socials.github },
] as const;

export default function CompanyOverviewPage() {
  return (
    <main id="main-content" className="company-overview-page overflow-hidden bg-white text-slate-800">
      <section className="relative isolate bg-[#070708] py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(239,31,36,0.28),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(248,113,113,0.15),transparent_30%),linear-gradient(135deg,#050506_0%,#111114_50%,#26090b_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" aria-hidden="true" />
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.74fr)]">
          <div>
            <Image src="/logos/uzyntra-logo-main-dark.webp" alt="UZYNTRA Security" width={210} height={72} priority className="h-auto w-[210px]" />
            <p className="mt-12 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-200">
              Confidential Company Overview
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Enterprise security, secure engineering, and product-ready execution.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              UZYNTRA Security delivers cybersecurity services, secure software engineering, blockchain systems, and professional training for organizations that need to identify risk and build systems that are secure by design.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                Start an Engagement
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/products/uzyntra-api-firewall" className="btn-stroke inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                Explore Platform
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/14 bg-white/[0.07] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="rounded-[22px] border border-white/10 bg-[#111114] p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-400">UZYNTRA Scope</p>
              <div className="mt-6 grid gap-3">
                {[
                  ["Services", "Cybersecurity, cloud, blockchain, automation"],
                  ["Product", "UZYNTRA API Firewall Platform"],
                  ["Training", "Professional cybersecurity and AI programs"],
                  ["Delivery", "Reports, architecture, labs, deployment"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/42">{label}</p>
                    <p className="mt-1 text-base font-black text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="font-semibold text-slate-950">Built where offensive security meets secure engineering.</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              UZYNTRA Security operates at the intersection of offensive security, secure engineering, and emerging technology. The company serves organizations that need both vulnerability discovery and the engineering capability to remove risk from production systems.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Offensive security services for APIs, SaaS platforms, web apps, cloud, and identity systems.",
                "Secure backend, cloud, blockchain, and automation engineering with security embedded from design.",
                "A flagship open-source Rust API Firewall platform with a Next.js operator console.",
                "Professional training and certification programs built around practical labs and assessment.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="h-5 w-5 text-red-600" aria-hidden="true" />
                  <p className="mt-3 font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="font-semibold text-slate-950">Five core service lines for serious security work.</h2>
            <p className="mt-4 text-slate-600">
              Each service line is designed to move from discovery to durable improvement: testing, remediation, engineering, automation, and deployment.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {services.map(({ href, icon: Icon, eyebrow, title, description, points }) => (
              <Link key={title} href={href} className="group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.16em] text-red-600">{eyebrow}</p>
                <h3 className="mt-2 text-lg font-black leading-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <ul className="mt-5 space-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2 text-xs font-semibold leading-5 text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Flagship Product</p>
            <h2 className="font-semibold text-slate-950">UZYNTRA API Firewall Platform</h2>
            <p className="mt-4 text-slate-600">
              A high-performance Rust API security engine unified with a Next.js operator control console for real-time inspection, threat detection, active mitigation, telemetry, and policy control.
            </p>
            <div className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-[#080809] p-3 shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10 bg-[#050506]">
                <Image
                  src="/images/products/ui-dashboard-overview.webp"
                  alt="UZYNTRA API Firewall operator dashboard"
                  fill
                  sizes="(min-width: 1024px) 46vw, calc(100vw - 2rem)"
                  className="object-contain p-3"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/products/uzyntra-api-firewall" className="btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold">
                View Product Page
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={siteConfig.productLinks.apiFirewallRepo} target="_blank" rel="noreferrer" className="btn-stroke inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold">
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-slate-950">Rust engine capabilities</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {engineCapabilities.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="surface-card p-5">
                    <Icon className="h-5 w-5 text-red-600" strokeWidth={1.8} aria-hidden="true" />
                    <h4 className="mt-3 text-base font-black text-slate-950">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-950">Operator control console</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {consoleModules.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon className="h-5 w-5 text-red-600" strokeWidth={1.8} aria-hidden="true" />
                    <h4 className="mt-3 text-base font-black text-slate-950">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-black text-slate-950">Detection coverage</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {detectionCoverage.map((item) => (
                  <span key={item} className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-black text-red-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow">Courses</p>
              <h2 className="font-semibold text-slate-950">Professional training programs.</h2>
              <p className="mt-4 text-slate-600">
                Lab-intensive programs with practical instruction, project work, reporting, and verified completion.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {courses.map(({ href, icon: Icon, eyebrow, title, detail, price }) => (
                <Link key={title} href={href} className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.16em] text-red-600">{eyebrow}</p>
                  <h3 className="mt-2 text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
                  <p className="mt-5 text-sm font-black text-slate-950">{price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#080809] text-white">
        <div className="container-shell">
          <div className="rounded-[30px] border border-white/12 bg-white/[0.06] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Contact & Engagement</p>
                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Start with the right security conversation.</h2>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Reach out for security testing, product deployment, secure engineering, blockchain systems, automation, or training enquiries.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactCards.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:border-red-400/55 hover:bg-red-950/20">
                    <Icon className="h-5 w-5 text-red-400" aria-hidden="true" />
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/42">{label}</p>
                    <p className="mt-1 break-words text-sm font-black text-white group-hover:text-red-200">{value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
