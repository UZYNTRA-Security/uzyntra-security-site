import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, MessageSquare } from "lucide-react";

import { siteConfig } from "@/config/site";
import { certificationPrograms } from "@/data/exclusive-course-catalog";

export const metadata: Metadata = {
  title: "Certifications | UZYNTRA Security",
  description:
    "UZYNTRA professional and master certifications for red team, blue team, cloud engineering, AI engineering, full stack, security engineering, and master tracks.",
  alternates: { canonical: `${siteConfig.url}/certifications` },
};

export default function CertificationsPage() {
  const professional = certificationPrograms.filter((program) => program.category === "Professional Certification");
  const master = certificationPrograms.filter((program) => program.category === "Master Certification");

  return (
    <main id="main-content" className="offensive-ai-page bg-[#0b0b0c] text-white">
      <section className="offensive-ai-hero relative isolate overflow-hidden bg-[#080809] py-16 sm:py-20">
        <div className="offensive-ai-hero-red-overlay absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_32%,rgba(22,5,7,0.78)_68%,rgba(127,29,29,0.58)_100%)]" aria-hidden="true" />
        <div className="offensive-ai-hero-grid-overlay absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-45" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <p className="offensive-ai-kicker inline-flex border-b-2 border-red-600 pb-2 text-xs font-black uppercase tracking-[0.18em]">
            UZYNTRA Certifications
          </p>
          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional and Master Certification Paths
          </h1>
          <p className="offensive-ai-description mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
            Separate certification pages for every professional and master credential shown in the UZYNTRA advanced courses poster.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="offensive-ai-hero-primary btn-solid inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold">
              <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
              Enquire Now
            </Link>
            <Link href="/courses" className="offensive-ai-hero-secondary inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold">
              <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
              View Courses
            </Link>
          </div>
        </div>
      </section>

      <CertificationSection title="Professional Certifications" items={professional} />
      <CertificationSection title="Master Certifications" items={master} />
    </main>
  );
}

function CertificationSection({ title, items }: { title: string; items: typeof certificationPrograms }) {
  return (
    <section className="bg-[#050505] py-12 sm:py-14">
      <div className="container-shell">
        <div className="mb-7">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Certification Tracks</p>
          <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((program) => (
            <Link key={program.slug} href={program.href} className="group overflow-hidden rounded-lg border border-white/14 bg-white/[0.055] transition-all duration-200 hover:-translate-y-0.5 hover:border-red-500/55">
              <div className="relative h-44 overflow-hidden bg-[#111114]">
                <Image src={program.image} alt={program.title} fill className="object-cover opacity-70 transition-transform duration-300 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-sm border border-red-500/60 bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-red-200">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  {program.code}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-white">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{program.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-400">
                  View Certification
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
