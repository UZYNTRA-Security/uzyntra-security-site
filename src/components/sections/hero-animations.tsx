"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface HeroAnimationsProps {
  eyebrow: ReactNode;
  heading: ReactNode;
  paragraph: ReactNode;
  cta: ReactNode;
  cards: ReactNode;
}

export function HeroAnimations({
  eyebrow,
  heading,
  paragraph,
  cta,
  cards,
}: HeroAnimationsProps) {
  return (
    <>
      {/* Eyebrow — inline-flex so it doesn't stretch full width */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow}
      </motion.div>

      {/* Heading — centered block, max-w constrains it */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.06 }}
        className="mt-4 flex w-full justify-center"
      >
        {heading}
      </motion.div>

      {/* Paragraph — centered block */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-3 flex w-full justify-center"
      >
        {paragraph}
      </motion.div>

      {/* CTA group — centered on all breakpoints */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.18 }}
        className="mt-5 flex w-full justify-center"
      >
        {cta}
      </motion.div>

      {/* Stat cards grid */}
      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        {cards}
      </div>
    </>
  );
}
