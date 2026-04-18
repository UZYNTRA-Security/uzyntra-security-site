// Server Component — no "use client" directive
import { ShieldAlert, Crosshair, CheckCircle2 } from "lucide-react";

import { CTAGroup } from "@/components/ui/cta-group";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { SecurityMotionBackground } from "@/components/effects/security-motion-background";
import { HeroAnimations } from "@/components/sections/hero-animations";
import { siteConfig } from "@/config/site";

const STAT_CARDS = [
  {
    icon: <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />,
    label: "API Security Testing",
    text: "OWASP API Top 10, BOLA, auth bypass, and business logic abuse — manually tested.",
  },
  {
    icon: <Crosshair className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />,
    label: "Real Attack Simulation",
    text: "Penetration testing and red team operations that simulate actual adversary TTPs.",
  },
  {
    icon: <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-red-600" aria-hidden="true" />,
    label: "Not Just Automated Scans",
    text: "Every finding is manually validated. No scanner-only reports. No false-positive noise.",
  },
] as const;

export function HeroSection() {
  return (
    <section className="relative pt-10 pb-8 sm:py-14 lg:py-20">
      <SecurityMotionBackground />

      <div className="container-shell relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center xl:max-w-4xl">
          <HeroAnimations
            eyebrow={
              <EyebrowBadge>Enterprise Security Platform</EyebrowBadge>
            }
            heading={
              <h1 className="max-w-2xl text-center text-pretty text-[1.6rem] font-bold leading-[1.16] tracking-[-0.025em] text-slate-950 sm:text-[2.4rem] lg:text-[3.1rem]">
                {siteConfig.tagline}
              </h1>
            }
            paragraph={
              <p className="max-w-[30ch] text-center text-pretty text-[0.875rem] leading-[1.72] text-slate-500 sm:max-w-lg sm:text-[0.9375rem] sm:leading-[1.75]">
                {siteConfig.description}
              </p>
            }
            cta={<CTAGroup />}
            cards={
              <>
                {STAT_CARDS.map((card) => (
                  <div key={card.label} className="hero-stat-card">
                    <div className="flex items-center gap-1.5">
                      {card.icon}
                      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-red-700">
                        {card.label}
                      </p>
                    </div>
                    <p className="text-[0.8125rem] leading-[1.65] text-slate-500">{card.text}</p>
                  </div>
                ))}
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
