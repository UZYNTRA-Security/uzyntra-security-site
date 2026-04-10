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
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-700">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            {eyebrow}
          </div>

          <h1 className="mt-5 text-balance text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
