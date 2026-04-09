"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SlideUp({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
