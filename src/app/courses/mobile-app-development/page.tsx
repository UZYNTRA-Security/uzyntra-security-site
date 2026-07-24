import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mobile App Development Course | UZYNTRA Security",
  description: "Build production-ready iOS and Android apps with React Native and Flutter. Mobile security and app store deployment included.",
  alternates: { canonical: `${siteConfig.url}/courses/mobile-app-development` },
};

const modules = [
  { step: "01", title: "Mobile Fundamentals", body: "iOS and Android ecosystems, React Native and Flutter setup, and core concepts." },
  { step: "02", title: "UI & Navigation", body: "Building responsive mobile UIs, navigation patterns, and state management." },
  { step: "03", title: "APIs & Backend Integration", body: "REST API consumption, authentication, push notifications, and offline storage." },
  { step: "04", title: "Mobile Security & Deployment", body: "OWASP Mobile Top 10, secure storage, and App Store / Play Store deployment." },
];

const outcomes = [
  "Build cross-platform mobile apps with React Native",
  "Create Flutter apps for iOS and Android",
  "Implement secure authentication and data storage",
  "Apply OWASP Mobile Top 10 security practices",
  "Deploy apps to App Store and Google Play",
  "Integrate mobile apps with backend APIs",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function MobileDevCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage src="/images/courses/mobile-app-development.webp" alt="Mobile App Development Course" />
      <PageHero
        eyebrow="Course — Mobile App Development"
        title="Mobile App Development: iOS & Android with Security"
        description="Build cross-platform mobile applications using React Native and Flutter — with mobile security best practices and production deployment from day one."
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ship your first mobile app</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and build secure, production-ready mobile applications.</p>
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
