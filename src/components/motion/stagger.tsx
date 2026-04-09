"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Stagger({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
