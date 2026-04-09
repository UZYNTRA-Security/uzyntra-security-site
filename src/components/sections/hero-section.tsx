"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Boxes, Download, Activity, Lock, Workflow } from "lucide-react";

import { siteConfig } from "@/config/site";
import { SecurityMotionBackground } from "@/components/effects/security-motion-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <SecurityMotionBackground />

      <div className="container-shell relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 backdrop-blur-sm sm:px-4"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Enterprise Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mx-auto mt-5 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:mt-6 sm:text-5xl lg:text-7xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              href="/services"
              className="inline-flex min-h-[52px] min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(220,38,38,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-red-700"
            >
              <ShieldCheck className="h-4 w-4" />
              Explore Services
            </Link>

            <Link
              href="/products"
              className="inline-flex min-h-[52px] min-w-[220px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50"
            >
              <Boxes className="h-4 w-4" />
              View Products
            </Link>

            <Link
              href="/download"
              className="inline-flex min-h-[52px] min-w-[220px] items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50/90 px-6 py-3.5 text-sm font-semibold text-red-700 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-100"
            >
              <Download className="h-4 w-4" />
              Download API Firewall
            </Link>
          </motion.div>

          <div className="mt-8 grid w-full gap-4 sm:mt-10 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="glass-panel premium-ring rounded-[24px] px-4 py-4 text-left"
            >
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-red-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  Active Defense
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Enterprise-grade security operations, detection visibility, and modern control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="glass-panel premium-ring rounded-[24px] px-4 py-4 text-left"
            >
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-red-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  Secure Engineering
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Secure backend systems, modern APIs, cloud-native architecture, and resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="glass-panel premium-ring rounded-[24px] px-4 py-4 text-left"
            >
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-red-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  Platform Direction
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Product-led security backed by services, visibility, and scalable execution.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
