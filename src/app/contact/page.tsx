import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ExternalLink, GraduationCap, Shield, ArrowRight, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | UZYNTRA Security",
  description:
    "Contact UZYNTRA Security for course enrollment, security audits, penetration testing, or engineering engagements.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact UZYNTRA Security",
    description: "Reach the UZYNTRA team for courses, security services, or technical engagements.",
    url: `${siteConfig.url}/contact`,
  },
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@uzyntra.com",
    href: "mailto:contact@uzyntra.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+92 333 5545728",
    href: "tel:+923335545728",
  },
  {
    icon: ExternalLink,
    label: "GitHub",
    value: "github.com/UZYNTRA-Security",
    href: siteConfig.socials.github,
    external: true,
  },
];

const quickLinks = [
  {
    icon: GraduationCap,
    label: "Browse Courses",
    desc: "Courses and exclusive certifications across security, AI, cloud, and engineering.",
    href: "/courses",
  },
  {
    icon: Shield,
    label: "View Services",
    desc: "API security, pentesting, blockchain, and automation.",
    href: "/services",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="section-shell">
        <div className="container-shell">

          {/* Page header */}
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Contact
            </p>
            <h1 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl lg:text-4xl">
              Get in touch
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Course enrollment, security audits, engineering projects, or just a question — we respond within 24 hours.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">

            {/* Left sidebar */}
            <div className="flex flex-col gap-4">

              {/* Contact info */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700 mb-3">
                  Direct Contact
                </p>
                <div className="space-y-3">
                  {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex items-center gap-3 group"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 transition-colors group-hover:bg-red-100">
                        <Icon className="h-3.5 w-3.5 text-red-600" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                        <p className="text-sm font-medium text-slate-800 group-hover:text-red-700 transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700 mb-3">
                  Explore
                </p>
                <div className="space-y-2">
                  {quickLinks.map(({ icon: Icon, label, desc, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition-all hover:border-red-100 hover:bg-red-50/60"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 transition-colors group-hover:bg-red-100">
                        <Icon className="h-3.5 w-3.5 text-red-600" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-red-700 transition-colors">{label}</p>
                        <p className="text-xs text-slate-500 leading-snug">{desc}</p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-red-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cert highlight */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <GraduationCap className="h-3.5 w-3.5 text-amber-700" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Cert Prep Included</p>
                    <p className="mt-1 text-xs leading-5 text-amber-700">
                      All courses include preparation for OSCP, CEH, AWS SAA, CCNA, AZ-900, CKA, and more.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </main>
  );
}
