import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we handle your data.`,
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We may collect information that you voluntarily submit through forms, including your name, email address, company, inquiry type, service interest, budget range, and message details.",
  },
  {
    heading: "2. How We Use Information",
    body: "Submitted information may be used to respond to inquiries, evaluate service fit, discuss products, improve communication workflows, and support future business operations.",
  },
  {
    heading: "3. Data Protection",
    body: "UZYNTRA Security aims to handle submitted information responsibly and with appropriate operational care. Additional technical and organizational controls may be applied as the platform evolves.",
  },
  {
    heading: "4. Third-Party Services",
    body: "The website may link to external services such as GitHub or social platforms. Those third-party platforms maintain their own privacy practices and terms.",
  },
  {
    heading: "5. Changes",
    body: "This policy may be updated over time as the website, services, and product operations expand.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-6 text-balance font-semibold text-slate-950">Privacy Policy</h1>
          <p className="mt-5 text-slate-600">
            This Privacy Policy describes how UZYNTRA Security may collect, use,
            and protect information submitted through the website.
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
