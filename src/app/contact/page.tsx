import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact UZYNTRA Security to discuss cybersecurity, software engineering, or blockchain requirements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact UZYNTRA Security",
    description:
      "Reach the UZYNTRA team to discuss enterprise security, software, or blockchain engagements.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="section-shell bg-enterprise-radial">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-6 text-balance font-semibold text-slate-950">
              Let&apos;s discuss your security, software, or blockchain requirements
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              UZYNTRA Security works with organizations seeking enterprise-grade
              cybersecurity, secure engineering, and platform-focused technical delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-6 content-start">
              <div className="surface-card p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                  Direct Contact
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                  Reach the team
                </h2>
                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-950">Email:</span>{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="transition hover:text-red-700"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">GitHub:</span>{" "}
                    <a
                      href={siteConfig.founderLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-red-700"
                    >
                      {siteConfig.founderLinks.github}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">Domain:</span>{" "}
                    {siteConfig.domain}
                  </p>
                </div>
              </div>

              <div className="surface-card p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                  Best For
                </p>
                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  {[
                    "Enterprise security assessments and modernization plans",
                    "API security and firewall adoption discussions",
                    "Custom secure software development engagements",
                    "Blockchain platform architecture and implementation",
                    "Strategic technical partnerships and product collaboration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                  Inquiry Expectations
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  For the strongest discovery process, include your environment,
                  business goals, technical scope, urgency, and whether you are
                  evaluating services, products, or a long-term engineering relationship.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
