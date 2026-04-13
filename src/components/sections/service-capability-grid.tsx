import { FlipInfoCard } from "@/components/ui/flip-info-card";

type ServiceItem = {
  title: string;
  frontDescription: string;
  backDescription: string;
  icon?: React.ReactNode;
};

type ServiceCapabilityGridProps = {
  heading: string;
  intro: string;
  items: ServiceItem[];
};

export function ServiceCapabilityGrid({ heading, intro, items }: ServiceCapabilityGridProps) {
  return (
    <section className="section-tight">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            {intro}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <FlipInfoCard
              key={item.title}
              title={item.title}
              frontDescription={item.frontDescription}
              backDescription={item.backDescription}
              icon={item.icon}
              hrefLabel="Explore capability"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
