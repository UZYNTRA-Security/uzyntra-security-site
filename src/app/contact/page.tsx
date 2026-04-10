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
      <section className="section-shell">
        <div className="container-shell">

          {/* Page header */}
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Contact
            </p>
            <h1 className="mt-3 text-balance text-2xl font-bold text-slate-950 sm:text-3xl lg:text-4xl">
              Let&apos;s discuss your requirements
            </h1>
            <p className="mt-3 text-[0.9375rem] leading-[1.75] text-slate-500">
              UZYNTRA Security works with organizations seeking enterprise-grade
              cybersecurity, secure engineering, and platform-focused technical delivery.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left — info cards */}
            <div className="flex flex-col gap-5">

              {/* Direct contact */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                  Direct Contact
                </p>
                <h2 className="mt-2 text-lg font-bold text-slate-950">
                  Reach the team
                </h2>
                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <span className="font-semibold text-slate-800">Email:</span>{" "}
                    <a
                      href="mailto:uzyntra@gmail.com"
                      className="text-slate-500 transition-colors hover:text-red-700"
                    >
                      uzyntra@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">GitHub:</span>{" "}
                    <a
                      href={siteConfig.founderLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 transition-colors hover:text-red-700"
                    >
                      github.com/UsamaMatrix
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Domain:</span>{" "}
                    <span className="text-slate-500">{siteConfig.domain}</span>
                  </p>
                </div>
              </div>

              {/* Best for */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                  Best For
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Enterprise security assessments and modernization plans",
                    "API security and firewall adoption discussions",
                    "Custom secure software development engagements",
                    "Blockchain platform architecture and implementation",
                    "Strategic technical partnerships and product collaboration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry expectations */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                  Inquiry Expectations
                </p>
                <p className="mt-3 text-sm leading-[1.75] text-slate-500">
                  For the strongest discovery process, include your environment,
                  business goals, technical scope, urgency, and whether you are
                  evaluating services, products, or a long-term engineering relationship.
                </p>
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
