import { ShieldCheck, Building2, Cpu } from "lucide-react";

import { FlipInfoCard } from "@/components/ui/flip-info-card";

const items = [
  {
    title: "Enterprise Architecture",
    icon: <Building2 className="h-5 w-5" />,
    frontDescription: "Built with scalability, structure, and security in mind.",
    backDescription:
      "UZYNTRA is positioned around architectural clarity, operational maturity, and systems that can grow with organizational needs instead of remaining prototype-grade solutions.",
  },
  {
    title: "Security-First Approach",
    icon: <ShieldCheck className="h-5 w-5" />,
    frontDescription: "Every system is designed with protection at its core.",
    backDescription:
      "Security is treated as a foundational design concern across API traffic, infrastructure, development workflows, cloud systems, and product engineering decisions.",
  },
  {
    title: "Modern Technology Stack",
    icon: <Cpu className="h-5 w-5" />,
    frontDescription: "Rust, cloud-native systems, modern web technologies, and blockchain.",
    backDescription:
      "The technology direction emphasizes performance, reliability, maintainability, and enterprise readiness using modern engineering practices and carefully chosen stacks.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-tight">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Why Choose UZYNTRA
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Why UZYNTRA Security
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            A platform and services company built for serious technical environments.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <FlipInfoCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              frontDescription={item.frontDescription}
              backDescription={item.backDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
