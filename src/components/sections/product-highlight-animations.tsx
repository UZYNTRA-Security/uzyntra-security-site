"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ProductHighlightAnimationsProps {
  textCol: ReactNode;
  imageCol: ReactNode;
}

export function ProductHighlightAnimations({
  textCol,
  imageCol,
}: ProductHighlightAnimationsProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -22 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {textCol}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 22 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {imageCol}
      </motion.div>
    </>
  );
}
