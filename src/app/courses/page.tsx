import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Bot, GraduationCap, MessageSquare } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { certificationPrograms, coursePrograms } from "@/data/exclusive-course-catalog";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Courses | UZYNTRA Security",
  description:
    "All UZYNTRA advanced courses and certification pages from the 22-course poster: AI, cyber security, cloud, DevSecOps, development, automation, professional, and master tracks.",
  alternates: { canonical: `${siteConfig.url}/courses` },
  openGraph: {
    title: "Courses | UZYNTRA Security",
    description:
      "Browse 22 future-ready UZYNTRA course certifications plus professional and master certification paths.",
    url: `${siteConfig.url}/courses`,
  },
};

export default function CoursesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Courses"
        title="22 Future-Ready Courses and Certification Paths"
        description="Browse every UZYNTRA course and certification mentioned in the advanced courses poster, now available as separate site pages with the exclusive dark course format."
      />

      <section className="section-tight pb-0">
        <div className="container-shell">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Exclusive Certification</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">UZYNTRA exclusive course track</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                The standalone Offensive AI certification keeps its dedicated route and matching exclusive page design.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/offensive-ai"
              className="surface-card-strong group relative flex flex-col overflow-hidden border-red-200/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(220,38,38,0.14)]"
            >
              <div className="absolute right-4 top-4 z-10 rounded-full border border-red-200 bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-red-700 shadow-sm backdrop-blur-sm">
                Exclusive
              </div>
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/courses/penetration-testing.webp"
                  alt="Offensive AI Certified Web Pentester certification"
                  fill
                  className="object-cover brightness-[0.72] transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-950/45 to-red-950/35" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    Offensive AI
                  </span>
                  <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">Offensive AI: Certified Web Pentester</h3>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <Bot className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <p className="text-sm leading-7 text-slate-600">AI-powered web pentesting certification with GPT agents, Burp Suite labs, API testing, reporting, and capstone assessment.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["10 Domains", "42 Modules", "GPT Agents", "$400 USD"].map((item) => (
                    <div key={item} className="rounded-lg border border-red-100 bg-red-50/60 px-3 py-2 text-xs font-bold text-red-700">{item}</div>
                  ))}
                </div>
                <span className="btn-solid mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold sm:w-fit">
                  View Certification
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-shell">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">All 22 Courses</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Advanced course certifications at a glance</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coursePrograms.map((course) => (
              <Link
                key={course.slug}
                href={course.href}
                className="surface-card-strong group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(220,38,38,0.10)]"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={`${course.title} course`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-red-700 backdrop-blur-sm">
                    {course.number}. {course.code}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                      <GraduationCap className="h-5 w-5 text-red-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-slate-950">{course.title}</h3>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{course.summary}</p>

                  <div className="grid grid-cols-2 gap-1.5 text-xs font-medium text-slate-700">
                    <span>{course.duration}</span>
                    <span>{course.pricePkr}</span>
                    <span>{course.priceUsd}</span>
                    <span>{course.category}</span>
                  </div>

                  <span className="group/link mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-all duration-200 group-hover:gap-3">
                    View Course
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-slate-50/70">
        <div className="container-shell">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Professional and Master Certifications</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Advance your career with bundled credentials</h2>
            </div>
            <Link href="/certifications" className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-all duration-200 hover:gap-3">
              All Certifications
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certificationPrograms.map((certification) => (
              <Link key={certification.slug} href={certification.href} className="surface-card group flex flex-col gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">{certification.code}</p>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-red-700">{certification.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600">{certification.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  View Certification
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 text-white sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%)]" aria-hidden="true" />
        <div className="relative z-10 container-shell">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to level up your skills?</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Enroll in industry-relevant courses built around real-world security, AI, cloud, and engineering demands.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-neutral inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                Enroll Now
              </Link>
              <Link href="/certifications" className="btn-stroke inline-flex h-12 items-center gap-2 rounded-xl px-7 text-sm">
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
