import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${siteConfig.name} website and services.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Informational Purpose",
    body: "Website content is provided for general informational and business communication purposes unless otherwise specified.",
  },
  {
    heading: "2. Intellectual Property",
    body: "Content, branding, page structure, and associated materials on this site may be protected by applicable intellectual property laws.",
  },
  {
    heading: "3. External Links",
    body: "The website may contain links to third-party resources and repositories. UZYNTRA Security does not control external services or their terms.",
  },
  {
    heading: "4. No Warranty",
    body: 'Website content is provided on an "as is" basis without guarantees regarding completeness, suitability, or uninterrupted availability.',
  },
  {
    heading: "5. Changes to Terms",
    body: "These terms may be revised as the website and associated services evolve.",
  },
];

export default function TermsPage() {
  return (
    <main id="main-content">
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-6 text-balance font-semibold text-slate-950">Terms of Use</h1>
          <p className="mt-5 text-slate-600">
            These Terms of Use govern access to and use of the UZYNTRA Security website.
          </p>

          <div className="surface-card-strong mt-10 p-6 sm:p-8 lg:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-slate-950">{section.heading}</h2>
                  <p className="mt-4 text-slate-600">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
