import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "SOC Analyst Course | UZYNTRA Security",
  description: "Security Operations Center analyst training — SIEM, threat detection, incident response, and threat intelligence for 2026.",
  alternates: { canonical: `${siteConfig.url}/courses/soc-analyst` },
};

const modules = [
  { step: "01", title: "SOC Fundamentals", body: "SOC structure, analyst tiers, alert triage, and security operations workflows." },
  { step: "02", title: "SIEM & Log Analysis", body: "Splunk, Microsoft Sentinel, log ingestion, correlation rules, and dashboards." },
  { step: "03", title: "Threat Detection & Hunting", body: "MITRE ATT&CK, IOC analysis, threat hunting techniques, and detection engineering." },
  { step: "04", title: "Incident Response", body: "IR playbooks, containment, eradication, recovery, and post-incident reporting." },
];

const outcomes = [
  "Triage and investigate security alerts effectively",
  "Use Splunk and Microsoft Sentinel for log analysis",
  "Map threats to MITRE ATT&CK framework",
  "Conduct proactive threat hunting",
  "Execute incident response playbooks",
  "Write clear incident reports and post-mortems",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function SOCAnalystCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage
        src="/images/courses/soc-analyst.webp"
        alt="SOC Analyst Course"
        eyebrow="Course — SOC Analyst"
        title="SOC Analyst: Threat Detection & Incident Response"
        description="Train as a Security Operations Center analyst — mastering SIEM tools, threat detection, MITRE ATT&CK mapping, and incident response playbooks."
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
      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Related</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Explore related courses</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/courses/digital-forensics" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Digital Forensics</p>
                  <p className="mt-1 text-xs text-slate-500">Investigate incidents with forensic techniques.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/courses/cybersecurity" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Cyber Security</p>
                  <p className="mt-1 text-xs text-slate-500">Broaden your security knowledge base.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Defend from the front lines</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and train for one of the most in-demand security roles in 2026.</p>
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
