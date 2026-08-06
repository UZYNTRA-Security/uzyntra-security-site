import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Ban,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Code2,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileJson,
  Gauge,
  GitBranch,
  KeyRound,
  Lock,
  Network,
  Radar,
  Route,
  Search,
  ServerCog,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "UZYNTRA API Firewall Platform | Rust API Security Engine and Operator UI",
  description:
    "UZYNTRA API Firewall is a high-performance Rust API security engine with a Next.js operator control plane for real-time inspection, threat detection, mitigation, telemetry, policy control, and DevSecOps-ready observability.",
  keywords: [
    "UZYNTRA API Firewall",
    "Rust API firewall",
    "API security engine",
    "API WAF",
    "reverse proxy security",
    "API threat detection",
    "API mitigation engine",
    "API observability",
    "Next.js security dashboard",
    "DevSecOps API security",
    "SIEM ready API logs",
    "SaaS API protection",
  ],
  alternates: { canonical: `${siteConfig.url}/products/uzyntra-api-firewall` },
  openGraph: {
    title: "UZYNTRA API Firewall Platform",
    description:
      "A unified Rust security engine and operator UI for deep API request inspection, intelligent detection, active mitigation, telemetry, and policy control.",
    url: `${siteConfig.url}/products/uzyntra-api-firewall`,
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

const platformStats = [
  { label: "Security engine", value: "Rust", detail: "Async, memory-safe, low-latency request handling" },
  { label: "Control plane", value: "Next.js", detail: "Operator dashboard for monitoring and response" },
  { label: "Coverage", value: "100%", detail: "Every inbound request can be inspected before origin" },
  { label: "Logs", value: "JSON", detail: "Structured events ready for SIEM pipelines" },
] as const;

const engineCapabilities = [
  { icon: Search, title: "Deep request inspection", body: "Analyze headers, query strings, routes, payloads, and request context before traffic reaches the backend." },
  { icon: Radar, title: "Attack detection engine", body: "Combine pattern checks, heuristic scoring, confidence levels, and attack classification for API threats." },
  { icon: Ban, title: "Active mitigation", body: "Block malicious requests, apply TTL bans, reset reputation, and enforce decisions through the proxy layer." },
  { icon: BarChart3, title: "Security telemetry", body: "Emit events, metrics, logs, routes, severity, attack types, and actions for operational review." },
  { icon: ClipboardList, title: "Policy control", body: "Manage rules, rate limiting, and enforcement behavior through admin APIs and the operator console." },
  { icon: Gauge, title: "High performance", body: "Built with Tokio, Axum, Reqwest, and Serde for async Rust throughput and predictable latency." },
] as const;

const uiCapabilities = [
  { icon: Activity, title: "Dashboard", body: "Monitor live metrics, attack activity, security posture, and operational health from one view." },
  { icon: Eye, title: "Events explorer", body: "Search, filter, and investigate attack events with route, IP, severity, and attack context." },
  { icon: ShieldCheck, title: "Mitigation control", body: "Review blocked traffic, TTL bans, IP reputation changes, and response decisions." },
  { icon: Database, title: "Reputation system", body: "Track source behavior and reputation signals so repeated abuse becomes easier to control." },
  { icon: FileJson, title: "Audit trail", body: "Review operator actions, policy changes, and security events for accountability." },
  { icon: ServerCog, title: "Policy management", body: "Tune security policies and control firewall behavior from a modern SaaS-style console." },
] as const;

const useCases = [
  "API security platforms",
  "Reverse proxy security",
  "DevSecOps pipelines",
  "SaaS backend protection",
  "Threat monitoring systems",
  "Cloud-native API gateways",
  "Security telemetry and SIEM workflows",
  "Multi-tenant SaaS protection",
] as const;

const roadmap = [
  "JWT authentication and role-based access control",
  "ML-assisted detection models",
  "Distributed architecture for clustered deployments",
  "Multi-tenant SaaS management",
  "Real-time alerts and notification channels",
  "Analytics dashboards and reporting views",
] as const;

const stack = [
  { label: "Engine", value: "Rust, Tokio, Axum, Reqwest, Serde" },
  { label: "Control plane", value: "Next.js App Router, Tailwind CSS, REST API integration" },
  { label: "Deployment", value: "Docker, GitHub Actions, cloud-native services" },
  { label: "Observability", value: "JSON logs, events, metrics, audit records, SIEM-ready output" },
] as const;

const screenshots = [
  {
    title: "Dashboard",
    file: "ui-dashboard-overview.webp",
    kind: "Control Plane",
    alt: "UZYNTRA operator dashboard showing API firewall metrics and activity overview",
  },
  {
    title: "Metrics API",
    file: "api-firewall-metrics.webp",
    kind: "Engine API",
    alt: "UZYNTRA API Firewall metrics API response screenshot",
  },
  {
    title: "Events API Response",
    file: "api-firewall-events.webp",
    kind: "Engine API",
    alt: "UZYNTRA API Firewall events API response screenshot",
  },
  {
    title: "Mitigations API",
    file: "api-firewall-mitigations.webp",
    kind: "Engine API",
    alt: "UZYNTRA API Firewall mitigations API screenshot",
  },
  {
    title: "Policy API",
    file: "api-firewall-policy.webp",
    kind: "Engine API",
    alt: "UZYNTRA API Firewall policy API screenshot",
  },
  {
    title: "Events Explorer",
    file: "ui-events-explorer.webp",
    kind: "Control Plane",
    alt: "UZYNTRA UI events explorer for searching and reviewing firewall events",
  },
  {
    title: "Reputation",
    file: "ui-reputation.webp",
    kind: "Control Plane",
    alt: "UZYNTRA UI reputation system screen for source reputation tracking",
  },
  {
    title: "Audit Trail",
    file: "ui-audit-trail.webp",
    kind: "Control Plane",
    alt: "UZYNTRA UI audit trail screen for operator activity review",
  },
  {
    title: "Policy Management",
    file: "ui-policy-management.webp",
    kind: "Control Plane",
    alt: "UZYNTRA UI policy management screen for firewall configuration",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UZYNTRA API Firewall Platform",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Linux, macOS, Windows, Docker",
  description:
    "A Rust API security engine and Next.js operator console for real-time request inspection, threat detection, active mitigation, security telemetry, audit logs, and policy control.",
  url: `${siteConfig.url}/products/uzyntra-api-firewall`,
  codeRepository: siteConfig.productLinks.apiFirewallRepo,
  creator: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  programmingLanguage: ["Rust", "JavaScript", "CSS"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#09090b] p-5 text-xs leading-6 text-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.24)]">
      <code>{children}</code>
    </pre>
  );
}

export default function FirewallPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate bg-[#080809] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(239,31,36,0.22),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(248,113,113,0.15),transparent_30%),linear-gradient(135deg,#060607_0%,#111114_48%,#1d0709_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" aria-hidden="true" />
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)]">
          <div>
            <span className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-200">
              Flagship security platform
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              UZYNTRA API Firewall Platform
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              A high-performance API security platform that unifies a Rust reverse-proxy firewall engine with a modern Next.js operator console. Inspect requests, detect attacks, stop abuse, observe telemetry, and control policies from one production-ready security layer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.productLinks.apiFirewallDownload} target="_blank" rel="noreferrer" className="btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Source ZIP
              </a>
              <a href={siteConfig.productLinks.apiFirewallRepo} target="_blank" rel="noreferrer" className="btn-stroke inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                View Firewall Repo
              </a>
              <a href={siteConfig.productLinks.uiRepo} target="_blank" rel="noreferrer" className="btn-neutral inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View UI Repo
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/16 bg-white/[0.07] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <div className="rounded-[20px] border border-white/10 bg-[#111114] p-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-400">Unified architecture</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Engine + Control Plane</h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 shadow-[0_0_28px_rgba(239,31,36,0.45)]">
                  <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-5 space-y-3 font-mono text-xs text-white/76">
                <p><span className="text-red-400">Client</span> -&gt; UZYNTRA Firewall (Rust)</p>
                <p><span className="text-red-400">Detection</span> -&gt; Mitigation System</p>
                <p><span className="text-red-400">Admin API</span> -&gt; UZYNTRA UI (Next.js)</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {platformStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/45">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-white/58">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Overview</p>
            <h2 className="font-semibold text-slate-950">Observe. Detect. Control. Defend.</h2>
            <p className="mt-4 text-slate-600">
              UZYNTRA API Firewall inspects, detects, and mitigates API threats in real time through a programmable reverse proxy architecture. The platform is SaaS-ready, DevSecOps-friendly, and designed for teams that need both high-throughput protection and operational visibility.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["Deep request inspection", "Intelligent threat detection", "Real-time mitigation", "Full observability"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <CheckCircle2 className="mx-auto h-6 w-6 text-red-600" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Rust Security Engine</p>
            <h2 className="font-semibold text-slate-950">Programmable protection at the API edge</h2>
            <p className="mt-4 text-slate-600">
              The firewall engine sits between clients and backend services, analyzes inbound traffic, classifies threats, and applies enforcement decisions before malicious requests reach application code.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {engineCapabilities.map(({ icon: Icon, title, body }) => (
                <div key={title} className="surface-card p-5">
                  <Icon className="h-5 w-5 text-red-600" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Detection model</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Pattern matching", "Request scoring", "Confidence levels", "Attack classification", "SQL injection", "XSS and traversal", "Rate abuse", "Behavioral anomalies"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <ShieldAlert className="h-4 w-4 text-red-600" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <CodeBlock>{`{
  "ip": "192.168.1.1",
  "route": "/api/login",
  "attack": "SQL Injection",
  "severity": "critical",
  "action": "blocked"
}`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/products/ui-dashboard-overview.webp"
              alt="UZYNTRA UI operator control console dashboard overview"
              width={1200}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Operator Control Console</p>
            <h2 className="font-semibold text-slate-950">The UI is the control plane for the same platform</h2>
            <p className="mt-4 text-slate-600">
              UZYNTRA UI is not a separate product story. It is the operator console for the API Firewall: a modern SaaS control plane that lets security teams monitor live telemetry, investigate attacks, manage mitigations, track reputation, review audit logs, and control policies.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {uiCapabilities.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon className="h-5 w-5 text-red-600" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Architecture</p>
              <h2 className="font-semibold text-slate-950">Reverse proxy security flow</h2>
              <p className="mt-4 text-slate-600">
                Requests move through inspection, detection, decision, and action. Clean traffic is forwarded to the origin service; suspicious or confirmed malicious traffic is blocked, scored, logged, and exposed through the admin API and UI.
              </p>
            </div>
            <div className="surface-card-strong border-gradient-red relative overflow-hidden p-6">
              <div className="grid gap-3 text-sm font-bold text-slate-950 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                {["Client", "->", "Firewall", "->", "Backend"].map((node, index) => (
                  node === "->" ? (
                    <span key={`${node}-${index}`} className="text-center text-slate-400">{node}</span>
                  ) : (
                    <span key={node} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">{node}</span>
                  )
                ))}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {["Inspection", "Detection", "Decision", "Action"].map((step, index) => (
                  <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-black tracking-widest text-red-600">0{index + 1}</p>
                    <p className="mt-2 text-sm font-bold text-slate-950">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:col-span-1">
            <p className="eyebrow">Endpoints</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">Admin and proxy services</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Route className="mt-1 h-5 w-5 text-red-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-950">Proxy</p>
                  <p className="font-mono text-sm text-slate-600">http://127.0.0.1:8080</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <KeyRound className="mt-1 h-5 w-5 text-red-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-950">Admin API</p>
                  <p className="font-mono text-sm text-slate-600">http://127.0.0.1:9090</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="mt-1 h-5 w-5 text-red-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-950">Admin token header</p>
                  <p className="font-mono text-sm text-slate-600">x-admin-token: dev-admin-token-1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 lg:col-span-2">
            <CodeBlock>{`# Firewall engine
 git clone https://github.com/UsamaMatrix/uzyntra-api-firewall.git
 cd uzyntra-api-firewall
 cargo build
 cargo run

# Operator console
 git clone https://github.com/UsamaMatrix/uzyntra-ui.git
 cd uzyntra-ui
 npm install
 npm run dev`}</CodeBlock>
            <CodeBlock>{`# Docker support
 docker build -t uzyntra-firewall .
 docker run -p 8080:8080 -p 9090:9090 uzyntra-firewall

# Test detection
 curl -X POST http://127.0.0.1:8080/proxy/test \
   -d "union select password from users"`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Tech Stack</p>
              <h2 className="font-semibold text-slate-950">Built for modern security engineering</h2>
              <div className="mt-8 space-y-4">
                {stack.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-red-600">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Use Cases</p>
              <h2 className="font-semibold text-slate-950">Where it fits</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800">
                    <Network className="h-4 w-4 text-red-600" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Screenshots</p>
            <h2 className="font-semibold text-slate-950">Product screenshot gallery</h2>
            <p className="mt-4 text-slate-600">
              A polished visual tour of the firewall engine responses and operator control plane screens.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {screenshots.map((shot) => (
              <figure key={shot.file} className="group relative h-full overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,rgba(239,31,36,0.42),rgba(15,23,42,0.14),rgba(15,23,42,0.36))] p-[1px] shadow-[0_22px_64px_rgba(15,23,42,0.11)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_82px_rgba(220,38,38,0.18)]">
                <div className="relative h-full overflow-hidden rounded-[27px] bg-[#080809] p-3">
                  <div className="mb-3 flex items-center justify-between gap-3 px-1">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/62">
                      {shot.kind}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(239,31,36,0.12),transparent_28%),#050506]">
                    <Image
                      src={`/images/products/${shot.file}`}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, calc(100vw - 2rem)"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10" aria-hidden="true" />
                  </div>
                  <figcaption className="flex min-h-[72px] items-center justify-between gap-4 px-2 py-4">
                    <h3 className="text-lg font-black text-white">{shot.title}</h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-400/35 bg-red-500/12 text-red-300 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="eyebrow">Roadmap</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">What comes next</h2>
            <div className="mt-6 space-y-3">
              {roadmap.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <TimerReset className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="eyebrow">Contributing</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">Open source security project</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Contributors can improve detection logic, performance, documentation, UI workflows, and deployment scripts. Check issues labeled good first issue, submit pull requests, and help harden the platform for real API security workloads.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.productLinks.apiFirewallRepo} target="_blank" rel="noreferrer" className="btn-solid inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold">
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                Firewall GitHub
              </a>
              <a href={siteConfig.productLinks.uiRepo} target="_blank" rel="noreferrer" className="btn-neutral inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                UI GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#080809] text-white">
        <div className="container-shell">
          <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.36)] sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Get started</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Deploy, inspect, and control API threats</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/72">
              Download the source from GitHub, run the Rust firewall and Next.js control plane locally, or contact UZYNTRA for enterprise deployment, customization, and support.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={siteConfig.productLinks.apiFirewallDownload} target="_blank" rel="noreferrer" className="btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Source ZIP
              </a>
              <Link href="/contact" className="btn-stroke inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold">
                Contact UZYNTRA
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
