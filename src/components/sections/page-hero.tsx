import { ShieldCheck } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero-shell py-10 sm:py-14 lg:py-20">
      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            {eyebrow}
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
