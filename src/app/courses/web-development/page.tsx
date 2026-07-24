import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Web Development Course | UZYNTRA Security",
  description: "Full-stack web development with React, Next.js, Node.js, and secure coding practices. Production-ready web dev training.",
  alternates: { canonical: `${siteConfig.url}/courses/web-development` },
};

const modules = [
  { step: "01", title: "Frontend Fundamentals", body: "HTML, CSS, JavaScript, and modern React with TypeScript." },
  { step: "02", title: "Next.js & Full-Stack", body: "Server-side rendering, API routes, and full-stack Next.js applications." },
  { step: "03", title: "Backend & APIs", body: "Node.js, Express, REST APIs, databases, and authentication systems." },
  { step: "04", title: "Secure Coding & Deployment", body: "OWASP Top 10 for web, CI/CD, and deploying to Vercel and cloud platforms." },
];

const outcomes = [
  "Build full-stack web applications with React and Next.js",
  "Design and implement secure REST APIs",
  "Apply OWASP Top 10 secure coding practices",
  "Deploy applications to production with CI/CD",
  "Work with databases and authentication systems",
  "Optimize web performance and accessibility",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function WebDevCourse() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Course — Web Development"
        title="Web Development: Full-Stack with Security Built In"
        description="Build production-ready web applications using React, Next.js, and Node.js — with secure coding practices embedded from day one."
      />
      <section className="section-tight bg-slate-50/70">
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Build the web, securely</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and ship production-ready web applications with confidence.</p>
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
