import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CourseHeroImage } from "@/components/sections/course-hero-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Networking (CCNA) Course | UZYNTRA Security",
  description: "Networking fundamentals, routing, switching, VLANs, VPNs, and CCNA certification preparation. Essential networking for security professionals.",
  alternates: { canonical: `${siteConfig.url}/courses/networking-ccna` },
};

const modules = [
  { step: "01", title: "Network Fundamentals", body: "OSI model, TCP/IP stack, IP addressing, subnetting, and network protocols." },
  { step: "02", title: "Routing & Switching", body: "VLANs, STP, OSPF, EIGRP, BGP basics, and inter-VLAN routing." },
  { step: "03", title: "Network Security", body: "Firewalls, ACLs, VPNs, NAT, and network security best practices." },
  { step: "04", title: "CCNA Exam Preparation", body: "Practice labs, exam strategies, and full CCNA 200-301 exam preparation." },
];

const outcomes = [
  "Understand TCP/IP and the OSI model deeply",
  "Configure routing and switching on Cisco devices",
  "Design and implement VLANs and VPNs",
  "Apply network security with ACLs and firewalls",
  "Pass the Cisco CCNA 200-301 exam",
  "Analyze network traffic with Wireshark",
];

const stepColors = ["text-red-500", "text-orange-600", "text-violet-600", "text-emerald-700"] as const;

export default function NetworkingCourse() {
  return (
    <main id="main-content">
      <CourseHeroImage src="/images/courses/networking-ccna.webp" alt="Networking CCNA Course" />
      <PageHero
        eyebrow="Course — Networking (CCNA)"
        title="Networking: From TCP/IP to CCNA Certification"
        description="Build a solid networking foundation — routing, switching, VLANs, VPNs, and network security — with full CCNA 200-301 certification preparation."
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Networking is the backbone of security</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Enroll and build the networking skills that every security role requires.</p>
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
