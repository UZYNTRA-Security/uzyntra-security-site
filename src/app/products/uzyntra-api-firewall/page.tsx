import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

const detectionRules = [
  {
    title: "SQL Injection",
    description:
      "Pattern-based and heuristic detection of SQLi payloads across query strings, body parameters, and headers.",
  },
  {
    title: "Cross-Site Scripting",
    description:
      "XSS vector analysis covering reflected, stored, and DOM-based attack patterns.",
  },
  {
    title: "Behavioral Anomaly",
    description:
      "Baseline deviation detection for unusual request frequency, payload size, and access patterns.",
  },
  {
    title: "Rate Abuse",
    description:
      "Per-IP and per-endpoint rate tracking with configurable thresholds and sliding window enforcement.",
  },
  {
    title: "Path Traversal",
    description:
      "Detection of directory traversal sequences and encoded bypass attempts in URL paths.",
  },
  {
    title: "Custom Rules",
    description:
      "Organization-defined detection rules for proprietary threat patterns and compliance requirements.",
  },
];

const mitigationCapabilities = [
  {
    title: "Auto Blocking",
    description:
      "Immediate request termination on confirmed threat detection with configurable response codes.",
  },
  {
    title: "Rate Limiting",
    description:
      "Sliding window rate enforcement per IP, endpoint, or API key with graduated response escalation.",
  },
  {
    title: "IP Reputation",
    description:
      "Real-time IP scoring based on observed behavior, with persistent reputation tracking across sessions.",
  },
  {
    title: "Temporary Bans",
    description:
      "Time-bound IP bans triggered by threshold violations, with automatic expiry and audit logging.",
  },
];

const features = [
  {
    title: "Real-Time Inspection",
    description:
      "Deep packet and payload inspection on every inbound request with sub-millisecond latency overhead.",
  },
  {
    title: "Threat Detection",
    description:
      "Built-in detection for SQLi, XSS, path traversal, rate abuse, and behavioral anomalies.",
  },
  {
    title: "Mitigation Engine",
    description:
      "Automatic blocking, IP reputation tracking, and configurable rule-based enforcement.",
  },
  {
    title: "Rust Performance",
    description:
      "Written in Rust for memory safety, zero-cost abstractions, and high-throughput request handling.",
  },
  {
    title: "Structured Logging",
    description:
      "JSON-formatted security event logs with full request context for SIEM and audit pipelines.",
  },
  {
    title: "Extensible Rules",
    description:
      "Custom rule definitions for organization-specific threat patterns and compliance requirements.",
  },
];

const useCases = [
  {
    title: "SaaS API Protection",
    description: "Harden multi-tenant API surfaces against injection, abuse, and unauthorized access at scale.",
  },
  {
    title: "Microservices Security",
    description: "Protect service-to-service communication in distributed architectures with per-service enforcement.",
  },
  {
    title: "Zero Trust Architecture",
    description: "Enforce identity-aware, least-privilege access controls at the API gateway layer.",
  },
  {
    title: "FinTech Systems",
    description: "Meet strict compliance and security requirements for financial API infrastructure.",
  },
];

export default function FirewallPage() {
  return (
    <main id="main-content">

      {/* HERO */}
      <section className="section-shell bg-enterprise-radial">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Flagship Product</span>
            <h1 className="mt-6 font-semibold">UZYNTRA API Firewall</h1>
            <p className="mt-4 text-slate-600">
              A high-performance Rust-based API security layer designed to protect,
              monitor, and control API traffic in real-time. Built for enterprise
              environments where performance and security cannot be compromised.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={siteConfig.productLinks.apiFirewallDownload}
                target="_blank"
                rel="noreferrer"
                className="btn-solid inline-flex items-center rounded-xl px-6 py-3 text-sm"
              >
                Download Latest Release
              </a>
              <a
                href={siteConfig.productLinks.apiFirewallRepo}
                target="_blank"
                rel="noreferrer"
                className="btn-neutral inline-flex items-center rounded-xl px-6 py-3 text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <Image
              src="/images/products/api-firewall-hero.png"
              alt="UZYNTRA API Firewall"
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST + POSITIONING */}
      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-semibold text-slate-950">Built for Modern API Security</h2>
            <p className="mt-4 text-slate-600">
              Designed using Rust for performance and memory safety, UZYNTRA API Firewall
              provides deep inspection, real-time mitigation, and enterprise-grade
              observability — without the overhead of legacy WAF solutions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { stat: "Rust", label: "Memory-safe systems language", detail: "Zero-cost abstractions, no GC pauses, predictable latency" },
              { stat: "<1ms", label: "Inspection overhead", detail: "Sub-millisecond per-request analysis with no throughput degradation" },
              { stat: "100%", label: "Request coverage", detail: "Every inbound request inspected — no sampling, no gaps" },
            ].map((item) => (
              <div key={item.stat} className="surface-card p-6 text-center">
                <p className="text-2xl font-bold text-red-600">{item.stat}</p>
                <p className="mt-1 text-sm font-semibold text-slate-950">{item.label}</p>
                <p className="mt-2 text-xs text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-shell">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="What the Firewall Does"
            description="A complete API security layer with detection, mitigation, and observability built in from the ground up."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="surface-card p-6">
                <h3 className="text-base font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETECTION ENGINE */}
      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Detection Engine"
                title="What It Detects"
                description="A multi-layer detection engine covering the most critical API attack vectors with both signature-based and behavioral analysis."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {detectionRules.map((rule) => (
                  <div key={rule.title} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-950">{rule.title}</p>
                    <p className="mt-1 text-xs text-slate-600">{rule.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
              <Image
                src="/images/products/api-firewall-logs.png"
                alt="API Firewall detection logs"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MITIGATION ENGINE */}
      <section className="section-shell">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Mitigation Engine"
            title="How Threats Are Stopped"
            description="When a threat is detected, the mitigation engine responds immediately with configurable enforcement actions."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {mitigationCapabilities.map((cap) => (
              <div key={cap.title} className="surface-card p-6">
                <h3 className="text-base font-semibold text-slate-950">{cap.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-shell bg-slate-50">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Architecture"
            title="How It Works"
            description="The firewall operates as a transparent proxy layer between clients and your backend services."
          />

          <div className="mt-8 surface-card-strong border-gradient-red relative overflow-hidden p-8">
            <div className="grid-overlay absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
                {["Client", "→", "API Firewall", "→", "Backend Service"].map((node, i) => (
                  node === "→" ? (
                    <span key={i} className="text-slate-400">{node}</span>
                  ) : (
                    <span
                      key={i}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-950 shadow-sm"
                    >
                      {node}
                    </span>
                  )
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  { step: "01", label: "Intercept", detail: "Every inbound request is intercepted before reaching the backend." },
                  { step: "02", label: "Inspect", detail: "Payload, headers, and behavior are analyzed against detection rules." },
                  { step: "03", label: "Enforce", detail: "Clean requests are forwarded. Threats are blocked and logged." },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-bold tracking-widest text-red-600">{item.step}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-950">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBSERVABILITY */}
      <section className="section-shell">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Observability"
              title="Structured Security Logs"
              description="Every request, threat event, and mitigation action is captured in structured JSON logs — ready for SIEM ingestion, audit trails, and real-time alerting."
            />
            <div className="mt-6 space-y-3">
              {[
                "Full request context on every event",
                "Threat classification and severity scoring",
                "IP reputation and geolocation metadata",
                "Compatible with Elasticsearch, Splunk, and Datadog",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
            <Image
              src="/images/products/api-firewall-logs.png"
              alt="API Firewall structured logs"
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* UI DASHBOARD RELATION */}
      <section className="section-shell bg-slate-50">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <Image
              src="/images/products/ui-dashboard-overview.png"
              alt="UZYNTRA UI Dashboard"
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Companion Product"
              title="UZYNTRA UI Dashboard"
              description="Visualize firewall logs, threat events, and system metrics in real-time through a purpose-built operational dashboard."
            />
            <div className="mt-6 space-y-3">
              {[
                "Live threat feed and event timeline",
                "Request analytics and traffic patterns",
                "Rule management and configuration UI",
                "System health and performance metrics",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={siteConfig.productLinks.uiRepo}
                target="_blank"
                rel="noreferrer"
                className="btn-neutral inline-flex items-center rounded-xl px-5 py-2.5 text-sm"
              >
                View UI Repo on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section-shell">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Use Cases"
            title="Where It Fits"
            description="The UZYNTRA API Firewall is designed for any environment where API security is non-negotiable."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="surface-card p-6">
                <h3 className="text-base font-semibold text-slate-950">{uc.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="surface-card-strong border-gradient-red relative overflow-hidden px-8 py-12 text-center">
            <div className="grid-overlay absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative z-10">
              <span className="eyebrow">Get Started</span>
              <h2 className="mt-4 font-semibold text-slate-950">
                Deploy the API Firewall Today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Download the latest release, review the documentation on GitHub, or
                contact UZYNTRA to discuss enterprise deployment and support.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={siteConfig.productLinks.apiFirewallDownload}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid inline-flex items-center rounded-xl px-6 py-3 text-sm"
                >
                  Download Latest Release
                </a>
                <a
                  href={siteConfig.productLinks.apiFirewallRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neutral inline-flex items-center rounded-xl px-6 py-3 text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
