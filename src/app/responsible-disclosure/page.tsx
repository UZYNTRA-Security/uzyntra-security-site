import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Responsible Disclosure",
  description: `Security vulnerability reporting policy for ${siteConfig.name}.`,
  alternates: { canonical: "/responsible-disclosure" },
};

const sections = [
  {
    heading: "1. How to Report",
    body: null,
    custom: true,
  },
  {
    heading: "2. Good-Faith Expectations",
    body: null,
    bullets: [
      "Avoid privacy violations, data destruction, or service disruption",
      "Do not exploit a vulnerability beyond what is necessary to demonstrate it",
      "Do not access or modify data that does not belong to you",
      "Give reasonable time for review and remediation before public disclosure",
    ],
  },
  {
    heading: "3. Scope and Boundaries",
    body: "Reports should remain focused on legitimate security findings and must avoid actions that could degrade systems, compromise data, or interfere with service availability.",
  },
  {
    heading: "4. Coordination",
    body: "We aim to review submissions in good faith and coordinate where appropriate. Response timing and remediation workflow may vary depending on issue severity and operational context.",
  },
  {
    heading: "5. No Guarantee",
    body: "Submission of a report does not create a contractual relationship, guarantee payment, or guarantee a particular response timeline.",
  },
];

export default function ResponsibleDisclosurePage() {
  return (
    <main id="main-content">
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <span className="eyebrow">Security</span>
          <h1 className="mt-6 text-balance font-semibold text-slate-950">
            Responsible Disclosure
          </h1>
          <p className="mt-5 text-slate-600">
            UZYNTRA Security values responsible security research and welcomes
            good-faith reports of potential vulnerabilities affecting our website,
            products, or related digital assets.
          </p>

          <div className="surface-card-strong mt-10 p-6 sm:p-8 lg:p-10">
            <div className="space-y-10">
              {/* Section 1 — custom email rendering */}
              <section>
                <h2 className="text-2xl font-semibold text-slate-950">1. How to Report</h2>
                <p className="mt-4 text-slate-600">
                  Please submit disclosure details to{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-slate-950 transition hover:text-red-700"
                  >
                    {siteConfig.email}
                  </a>
                  . Include affected asset details, reproduction steps, technical impact,
                  and any relevant evidence that helps validate the issue.
                </p>
              </section>

              {/* Sections 2–5 */}
              {sections.slice(1).map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-slate-950">{section.heading}</h2>
                  {section.bullets ? (
                    <ul className="mt-4 space-y-3 text-slate-600">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-slate-600">{section.body}</p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
