"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Boxes, Download, Activity, Lock, Workflow } from "lucide-react";

import { siteConfig } from "@/config/site";
import { SecurityMotionBackground } from "@/components/effects/security-motion-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-14 lg:py-20">
      <SecurityMotionBackground />

      <div className="container-shell relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-red-700 shadow-sm"
          >
            <ShieldCheck className="h-3 w-3 shrink-0" />
            Enterprise Security Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-2xl text-balance text-[1.65rem] font-bold leading-[1.14] tracking-[-0.03em] text-slate-950 sm:text-[2.4rem] lg:text-[3.1rem]"
          >
            {siteConfig.tagline}
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 max-w-lg text-[0.875rem] leading-[1.7] text-slate-500 sm:text-[0.9375rem] sm:leading-[1.75]"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center"
          >
            <Link
              href="/services"
              className="btn-solid inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm active:translate-y-0"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Explore Services
            </Link>

            <Link
              href="/products"
              className="btn-neutral inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm"
            >
              <Boxes className="h-4 w-4 shrink-0" />
              View Products
            </Link>

            <Link
              href="/download"
              className="btn-stroke inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm"
            >
              <Download className="h-4 w-4 shrink-0" />
              Download Firewall
            </Link>
          </motion.div>

          {/* Stat cards — more breathing room from CTAs */}
          <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3">
            {[
              {
                icon: <Activity className="h-3.5 w-3.5 shrink-0 text-red-600" />,
                label: "Active Defense",
                text: "Security operations, detection visibility, and modern threat control.",
                delay: 0.24,
              },
              {
                icon: <Lock className="h-3.5 w-3.5 shrink-0 text-red-600" />,
                label: "Secure Engineering",
                text: "Backend systems, modern APIs, cloud-native architecture, and resilience.",
                delay: 0.30,
              },
              {
                icon: <Workflow className="h-3.5 w-3.5 shrink-0 text-red-600" />,
                label: "Platform Direction",
                text: "Product-led security backed by services and scalable execution.",
                delay: 0.36,
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-white px-4 py-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-100 hover:shadow-[0_6px_18px_rgba(220,38,38,0.10)]"
              >
                <div className="flex items-center gap-1.5">
                  {card.icon}
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-700">
                    {card.label}
                  </p>
                </div>
                <p className="text-[0.8125rem] leading-[1.65] text-slate-500">{card.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
