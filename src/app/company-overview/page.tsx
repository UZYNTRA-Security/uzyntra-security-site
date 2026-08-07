"use client";

import Image from "next/image";
import Link from "next/link";

// ─── Services ────────────────────────────────────────────────────────────────

const services = [
  {
    slug: "api-security",
    eyebrow: "Offensive Security",
    title: "API & SaaS Security Testing",
    description:
      "Offensive testing for APIs, SaaS platforms, authentication systems, and cloud services using OWASP methodology and real-world abuse scenarios.",
    points: [
      "OWASP API Top 10 (2023 & 2026 editions)",
      "Broken Object Level Authorisation (BOLA / IDOR)",
      "Authentication and token abuse — JWT, OAuth 2.0, API keys",
      "Business-logic and privilege-escalation testing",
      "Rate limiting, mass assignment, and injection vectors",
      "SaaS multi-tenant isolation and data-leakage testing",
      "Cloud-connected API surface enumeration",
    ],
    deliverable:
      "Detailed security report with CVSS-scored findings, proof-of-concept evidence, and remediation guidance.",
  },
  {
    slug: "penetration-testing",
    eyebrow: "Red Team Operations",
    title: "Penetration Testing & Red Teaming",
    description:
      "Structured penetration tests and red team operations across web applications, internal networks, cloud environments, and identity systems.",
    points: [
      "Web Application Pentest — OWASP Top 10, business logic, session management",
      "Network & Infrastructure — firewall bypass, lateral movement",
      "Cloud Security Assessment — AWS, Azure, GCP misconfiguration, IAM escalation",
      "Identity & Active Directory — Kerberoasting, pass-the-hash, domain escalation",
      "Red Team Operation — full adversary simulation with defined TTPs",
    ],
    deliverable:
      "Structured pentest report with attack narrative, evidence, CVSS scores, and prioritised remediation steps.",
  },
  {
    slug: "backend-engineering",
    eyebrow: "Secure Engineering",
    title: "Secure Backend & Cloud Engineering",
    description:
      "Design and development of secure backend systems, APIs, and cloud-native architectures with security embedded at every layer.",
    points: [
      "Rust-based high-performance backend and API development",
      "Secure REST and GraphQL API design with authentication and authorisation",
      "Cloud-native architecture on AWS, Azure, and GCP",
      "DevSecOps pipeline integration — SAST, DAST, SCA, IaC scanning",
      "Infrastructure as Code with Terraform and Pulumi",
      "Container security — Docker, Kubernetes, Helm",
      "Authentication systems: OAuth 2.0, OIDC, JWT, RBAC, ABAC",
    ],
    deliverable:
      "Production-ready secure backend system with documentation, deployment configuration, and security review.",
  },
  {
    slug: "blockchain-security",
    eyebrow: "Web3 Engineering",
    title: "Blockchain Security & Smart Contract Engineering",
    description:
      "Smart contract development, blockchain security reviews, dApp architecture, and Web3 engineering with a security-first approach.",
    points: [
      "Solidity smart contract development and security review",
      "DeFi protocol architecture and vulnerability assessment",
      "dApp frontend and backend integration — Ethers.js, Wagmi",
      "Token economics design — ERC-20, ERC-721, ERC-1155",
      "Multi-chain deployment: Ethereum, Polygon, Solana",
      "Wallet integration and secure key management",
      "OpenZeppelin standards, Hardhat and Foundry tooling",
      "IPFS and decentralised storage integration",
    ],
    deliverable:
      "Audited smart contracts, security report, and deployment-ready dApp with documentation.",
  },
  {
    slug: "automation-ai",
    eyebrow: "Workflow Engineering",
    title: "Automation & AI Workflow Systems",
    description:
      "Production-grade automation systems using n8n, LangChain, and event-driven architecture connecting tools, APIs, and AI models.",
    points: [
      "n8n self-hosted workflow design, deployment, and maintenance",
      "API orchestration and webhook-driven event pipelines",
      "LangChain and LlamaIndex AI agent workflow construction",
      "Multi-agent system design with tool use and memory",
      "Secure automation with credential management and audit logging",
      "Integration with CRMs, ERPs, communication platforms, and databases",
      "Business process automation reducing manual operational overhead",
    ],
    deliverable:
      "Deployed automation system with workflow documentation, monitoring setup, and handover guide.",
  },
];

// ─── Product ──────────────────────────────────────────────────────────────────

const engineCapabilities = [
  {
    label: "Deep Request Inspection",
    detail:
      "Analyse headers, query strings, routes, payloads, and request context before traffic reaches the backend.",
  },
  {
    label: "Attack Detection Engine",
    detail:
      "Pattern matching, heuristic scoring, confidence levels, and attack classification for API threats.",
  },
  {
    label: "Active Mitigation",
    detail:
      "Block malicious requests, apply TTL bans, reset reputation, and enforce decisions through the proxy layer.",
  },
  {
    label: "Security Telemetry",
    detail:
      "Emit events, metrics, logs, routes, severity, attack types, and actions for operational review.",
  },
  {
    label: "Policy Control",
    detail:
      "Manage rules, rate limiting, and enforcement behaviour through admin APIs and the operator console.",
  },
  {
    label: "High Performance",
    detail:
      "Built with Tokio, Axum, Reqwest, and Serde for async Rust throughput and predictable latency.",
  },
];

const detectionCoverage = [
  "SQL Injection",
  "Cross-Site Scripting (XSS)",
  "Path Traversal",
  "Rate Abuse",
  "Behavioural Anomalies",
  "Pattern Matching",
  "Request Scoring",
  "Confidence Levels",
  "Attack Classification",
  "Heuristic Analysis",
];

const consoleModules = [
  {
    label: "Dashboard",
    detail:
      "Live metrics, attack activity, security posture, and operational health.",
  },
  {
    label: "Events Explorer",
    detail:
      "Search, filter, and investigate attack events with route, IP, severity, and attack context.",
  },
  {
    label: "Mitigation Control",
    detail:
      "Review blocked traffic, TTL bans, IP reputation changes, and response decisions.",
  },
  {
    label: "Reputation System",
    detail:
      "Track source behaviour and reputation signals for repeated abuse control.",
  },
  {
    label: "Audit Trail",
    detail:
      "Review operator actions, policy changes, and security events for accountability.",
  },
  {
    label: "Policy Management",
    detail:
      "Tune security policies and control firewall behaviour from a modern SaaS-style console.",
  },
];

const productRoadmap = [
  "JWT authentication and role-based access control",
  "ML-assisted detection models",
  "Distributed architecture for clustered deployments",
  "Multi-tenant SaaS management",
  "Real-time alerts and notification channels",
  "Analytics dashboards and reporting views",
];

// ─── Courses ──────────────────────────────────────────────────────────────────

const courses = [
  {
    href: "/courses/cybersecurity",
    eyebrow: "Cybersecurity",
    title: "Cybersecurity Professional Programme",
    duration: "3 Months",
    price: "PKR 45,000 / $199 USD",
    cert: "UZYNTRA Security Course Completion Certificate",
    description:
      "A structured 3-month programme covering security foundations, vulnerability assessment, penetration testing fundamentals, security monitoring, incident response, and digital forensics.",
    highlights: [
      "15 modules across 3 months — 5 days/week, 2 hrs/day",
      "Hands-on labs: Kali Linux, Wireshark, Nmap, Burp Suite, Nessus, Wazuh",
      "Projects: Secure System Build, Vulnerability Assessment, Incident Response",
      "Career paths: SOC Analyst, Junior Security Analyst, Vulnerability Assessment Analyst",
    ],
  },
  {
    href: "/courses/artificial-intelligence",
    eyebrow: "Artificial Intelligence",
    title: "AI Professional Programme",
    duration: "3 Months",
    price: "PKR 54,000 / $249 USD",
    cert: "UZYNTRA Certified Artificial Intelligence Professional (UCAIP)",
    description:
      "A comprehensive 3-month AI programme covering Python, machine learning, deep learning, NLP, computer vision, LLMs, AI agents, MLOps, deployment, and responsible AI.",
    highlights: [
      "13 modules — 5 days/week, 2 hrs/day, live labs",
      "15+ portfolio projects plus a capstone presentation",
      "Tools: Python, TensorFlow, PyTorch, LangChain, LangGraph, FastAPI, Docker",
      "Career paths: ML Engineer, AI Agent Developer, Generative AI Engineer, Data Scientist",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* ── Hero ── */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <Image
              src="/logos/uzyntra-logo-main.webp"
              alt="UZYNTRA Security"
              width={200}
              height={56}
              priority
              className="brightness-0 invert"
            />
          </div>
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Company Overview
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Services · Products · Courses
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            UZYNTRA Security is a platform and services company delivering
            enterprise-grade cybersecurity, secure software engineering, and
            blockchain systems — built with modern architecture, security-first
            thinking, and production-ready technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>
              <a href="https://uzyntra.com" className="text-red-400 hover:underline">
                uzyntra.com
              </a>
            </span>
            <span>·</span>
            <span>
              <a href="mailto:security@uzyntra.com" className="text-red-400 hover:underline">
                security@uzyntra.com
              </a>
            </span>
            <span>·</span>
            <span>+92 333 5545728</span>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            What UZYNTRA Security Does
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-6">
            UZYNTRA Security operates at the intersection of offensive security,
            secure engineering, and emerging technology. The company serves
            organisations that need both the expertise to identify and eliminate
            vulnerabilities and the engineering capability to build systems that
            are secure by design.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Offensive security services — API testing, penetration testing, red teaming",
              "Secure engineering — backend, cloud, blockchain, automation",
              "Flagship open-source security product — UZYNTRA API Firewall Platform",
              "Professional training and exclusive certification programmes",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 items-start bg-slate-50 rounded-lg p-4 border border-slate-100"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Five Core Service Lines
          </h2>
          <p className="text-slate-500 text-sm mb-10">
            Each service line addresses a distinct dimension of enterprise
            security and engineering.
          </p>

          <div className="space-y-10">
            {services.map((svc, i) => (
              <div
                key={svc.slug}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <div className="bg-slate-900 px-6 py-4 flex items-center gap-4">
                  <span className="text-red-500 font-mono text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-red-400 text-xs font-semibold uppercase tracking-widest">
                      {svc.eyebrow}
                    </p>
                    <h3 className="text-white font-bold text-lg">{svc.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {svc.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {svc.points.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 border-l-4 border-red-500 px-4 py-3 rounded-r-lg">
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Deliverable —{" "}
                    </span>
                    <span className="text-sm text-slate-700">{svc.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product ── */}
      <section className="py-16 px-6 border-b border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Product
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            UZYNTRA API Firewall Platform
          </h2>
          <p className="text-slate-500 text-sm mb-2">
            Flagship open-source security product
          </p>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-10">
            A high-performance Rust API security engine unified with a Next.js
            operator control console for real-time request inspection, threat
            detection, active mitigation, telemetry, and policy control.
          </p>

          {/* Architecture */}
          <div className="mb-10">
            <h3 className="text-slate-900 font-semibold mb-4">
              Platform Architecture
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                {
                  label: "Rust Security Engine",
                  detail:
                    "High-performance async reverse-proxy firewall built with Tokio, Axum, Reqwest, and Serde. Sits between clients and backend services.",
                },
                {
                  label: "Next.js Operator Console",
                  detail:
                    "Modern SaaS-style control plane for monitoring, investigation, mitigation management, and policy control.",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <p className="font-semibold text-slate-900 mb-1">{c.label}</p>
                  <p className="text-sm text-slate-600">{c.detail}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 text-slate-300 font-mono text-sm rounded-xl px-6 py-4 text-center">
              Client → UZYNTRA Firewall (Rust) → Inspection → Detection →
              Decision → Backend
            </div>
          </div>

          {/* Engine Capabilities */}
          <div className="mb-10">
            <h3 className="text-slate-900 font-semibold mb-4">
              Rust Engine Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {engineCapabilities.map((c) => (
                <div
                  key={c.label}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <p className="font-semibold text-slate-900 text-sm mb-1">
                    {c.label}
                  </p>
                  <p className="text-sm text-slate-600">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detection Coverage */}
          <div className="mb-10">
            <h3 className="text-slate-900 font-semibold mb-4">
              Detection Coverage
            </h3>
            <div className="flex flex-wrap gap-2">
              {detectionCoverage.map((d) => (
                <span
                  key={d}
                  className="bg-red-50 border border-red-200 text-red-700 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Console Modules */}
          <div className="mb-10">
            <h3 className="text-slate-900 font-semibold mb-4">
              Operator Control Console
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {consoleModules.map((m) => (
                <div
                  key={m.label}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <p className="font-semibold text-slate-900 text-sm mb-1">
                    {m.label}
                  </p>
                  <p className="text-sm text-slate-600">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="mb-10">
            <h3 className="text-slate-900 font-semibold mb-4">
              Technical Stack
            </h3>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {[
                { label: "Engine", value: "Rust, Tokio, Axum, Reqwest, Serde" },
                {
                  label: "Control Plane",
                  value: "Next.js App Router, Tailwind CSS, REST API integration",
                },
                {
                  label: "Deployment",
                  value: "Docker, GitHub Actions, cloud-native services",
                },
                {
                  label: "Observability",
                  value:
                    "JSON logs, events, metrics, audit records, SIEM-ready output",
                },
                {
                  label: "Proxy Endpoint",
                  value: "http://127.0.0.1:8080",
                },
                {
                  label: "Admin API",
                  value: "http://127.0.0.1:9090",
                },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex gap-4 px-5 py-3 text-sm ${
                    i < arr.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <span className="font-semibold text-slate-700 w-36 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-slate-600 font-mono">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-10">
            <h3 className="text-slate-900 font-semibold mb-4">Roadmap</h3>
            <ul className="space-y-2">
              {productRoadmap.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 items-start text-sm text-slate-700"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Repos */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">
              Open Source Repositories
            </h3>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {[
                {
                  label: "Firewall Engine",
                  href: "https://github.com/UsamaMatrix/uzyntra-api-firewall",
                  display: "github.com/UsamaMatrix/uzyntra-api-firewall",
                },
                {
                  label: "Operator UI",
                  href: "https://github.com/UsamaMatrix/uzyntra-ui",
                  display: "github.com/UsamaMatrix/uzyntra-ui",
                },
                {
                  label: "Organisation",
                  href: "https://github.com/UZYNTRA-Security",
                  display: "github.com/UZYNTRA-Security",
                },
              ].map((repo, i, arr) => (
                <div
                  key={repo.label}
                  className={`flex gap-4 px-5 py-3 text-sm ${
                    i < arr.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <span className="font-semibold text-slate-700 w-36 shrink-0">
                    {repo.label}
                  </span>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline font-mono"
                  >
                    {repo.display}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section className="py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Courses
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Professional Training Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-10">
            Structured, lab-intensive programmes with verified certification.
            Live instruction, 5 days/week, 2 hours/day.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.href}
                className="border border-slate-200 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="bg-slate-900 px-6 py-5">
                  <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    {course.eyebrow}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {course.title}
                  </h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {course.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 items-start text-sm text-slate-700"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-100 pt-4 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-semibold text-slate-800">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Fee</span>
                      <span className="font-semibold text-slate-800">
                        {course.price}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500 shrink-0">Certificate</span>
                      <span className="font-semibold text-slate-800 text-right">
                        {course.cert}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={course.href}
                    className="mt-5 block text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    View Full Curriculum
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Contact & Engagement
          </p>
          <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Website", value: "uzyntra.com", href: "https://uzyntra.com" },
              { label: "Email", value: "security@uzyntra.com", href: "mailto:security@uzyntra.com" },
              { label: "Phone", value: "+92 333 5545728", href: "tel:+923335545728" },
              { label: "GitHub", value: "github.com/UZYNTRA-Security", href: "https://github.com/UZYNTRA-Security" },
              { label: "LinkedIn", value: "linkedin.com/company/uzyntra", href: "https://linkedin.com/company/uzyntra" },
              { label: "X (Twitter)", value: "x.com/uzyntra", href: "https://x.com/uzyntra" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl p-4 transition-colors"
              >
                <p className="text-slate-400 text-xs mb-1">{c.label}</p>
                <p className="text-white text-sm font-medium">{c.value}</p>
              </a>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
            © UZYNTRA Security. All rights reserved.{" "}
            <a href="https://uzyntra.com" className="text-red-400 hover:underline">
              uzyntra.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
