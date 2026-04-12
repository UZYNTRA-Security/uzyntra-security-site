import Link from "next/link";
import { ShieldAlert, Target, Code2, ArrowRight, GitBranch } from "lucide-react";

const stats = [
  {
    icon: <ShieldAlert className="h-6 w-6 text-red-600" aria-hidden="true" />,
    value: "OWASP",
    label: "API Top 10 Coverage",
    detail: "Every engagement covers the full OWASP API Security Top 10 — not a subset.",
  },
  {
    icon: <Target className="h-6 w-6 text-red-600" aria-hidden="true" />,
    value: "Manual",
    label: "Attack Simulation",
    detail: "Real attacker mindset applied to every test — no automated-only scanning.",
  },
  {
    icon: <Code2 className="h-6 w-6 text-red-600" aria-hidden="true" />,
    value: "Rust",
    label: "API Firewall Engine",
    detail: "Memory-safe, sub-millisecond inspection on every inbound API request.",
  },
  {
    icon: <GitBranch className="h-6 w-6 text-red-600" aria-hidden="true" />,
    value: "Open",
    label: "Source Product",
    detail: "UZYNTRA API Firewall is publicly available on GitHub — inspect the code yourself.",
  },
];

const methodology = [
  {
    step: "01",
    title: "Manual Testing",
    body: "Every engagement is led by manual exploitation — not scanner output. We find what automated tools miss.",
  },
  {
    step: "02",
    title: "Real Attacker Mindset",
    body: "We approach systems the way a motivated adversary would — chaining low-severity findings into critical attack paths.",
  },
  {
    step: "03",
    title: "No Automated-Only Scanning",
    body: "Automated tools are used for coverage, never as the primary methodology. Every finding is manually validated.",
  },
  {
    step: "04",
    title: "Actionable Reporting",
    body: "Reports include reproduction steps, business impact, CVSS scores, and prioritized remediation — not just a list of CVEs.",
  },
];

const stepColors = ["text-red-500", "text-orange-500", "text-violet-500", "text-emerald-500"];

export function ImpactStatsSection() {
  return (
    <>
      {/* Stats */}
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Security Impact
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Focused on identifying high-impact vulnerabilities in real-world systems
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Not a scanner-as-a-service. Every engagement is manual, technical, and built around your actual attack surface.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="surface-card flex flex-col gap-3 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_8px_24px_rgba(220,38,38,0.08)]"
              >
                {s.icon}
                <div>
                  <p className="text-xl font-bold text-red-600">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-950">{s.label}</p>
                </div>
                <p className="text-xs leading-6 text-slate-500">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-tight">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              How We Work
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              The methodology behind every engagement
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m, i) => (
              <div key={m.step} className="surface-card p-5">
                <span className={`text-3xl font-bold ${stepColors[i]}`}>{m.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="btn-solid inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm"
            >
              Request Security Assessment
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
