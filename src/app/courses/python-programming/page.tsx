import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Python Programming Course | UZYNTRA Security",
  description: "Python from fundamentals to advanced scripting, automation, and security tooling. Hands-on Python training for 2026.",
  alternates: { canonical: `${siteConfig.url}/courses/python-programming` },
};

const modules = [
  { step: "01", title: "Python Fundamentals", body: "Variables, data types, control flow, functions, and OOP in Python." },
  { step: "02", title: "Scripting & Automation", body: "File handling, OS automation, web scraping, and task automation with Python." },
  { step: "03", title: "APIs & Libraries", body: "Requests, FastAPI, SQLAlchemy, and working with third-party APIs." },
  { step: "04", title: "Security Tooling", body: "Build security tools — port scanners, password crackers, and exploit scripts." },
];

const outcomes = [
  "Write clean, production-quality Python code",
  "Automate repetitive tasks and workflows",
  "Build REST APIs with FastAPI",
  "Create custom security and pentesting tools",
  "Work with data using Pandas and NumPy",
  "Integrate Python with cloud and AI services",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function PythonCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage
        src="/images/courses/python-programming.webp"
        alt="Python Programming Course"
        eyebrow="Course — Python Programming"
        title="Python Programming: From Basics to Security Tooling"
        description="Master Python from the ground up — scripting, automation, API development, and building real-world security tools used by professionals."
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
              <Link href="/courses/artificial-intelligence" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Artificial Intelligence</p>
                  <p className="mt-1 text-xs text-slate-500">Apply Python to ML and AI development.</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-500" aria-hidden="true" />
              </Link>
              <Link href="/courses/ethical-hacking" className="surface-card group flex items-center justify-between p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div>
                  <p className="text-sm font-semibold text-slate-950 group-hover:text-red-700">Ethical Hacking</p>
                  <p className="mt-1 text-xs text-slate-500">Use Python to build offensive security tools.</p>
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Python is the language of security and AI</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and start writing Python that solves real problems.</p>
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
