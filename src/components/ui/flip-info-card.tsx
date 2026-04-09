"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FlipInfoCardProps = {
  title: string;
  frontDescription: string;
  backTitle?: string;
  backDescription: string;
  className?: string;
  icon?: React.ReactNode;
  hrefLabel?: string;
};

export function FlipInfoCard({
  title,
  frontDescription,
  backTitle,
  backDescription,
  className,
  icon,
  hrefLabel = "Explore capability",
}: FlipInfoCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn("group [perspective:1200px]", className)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className={cn(
          "relative w-full rounded-[28px] transition-all duration-500 [transform-style:preserve-3d]",
          "group-hover:scale-[1.025] group-hover:[transform:rotateY(180deg)]",
          flipped && "[transform:rotateY(180deg)] scale-[1.01]"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md [backface-visibility:hidden] transition-all duration-300 group-hover:border-red-200 group-hover:shadow-[0_24px_60px_rgba(220,38,38,0.14)] sm:p-7">
          <div className="flex h-full flex-col gap-3">
            {icon && (
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-700 shadow-sm">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-2xl">
              {title}
            </h3>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {frontDescription}
            </p>
            <div className="mt-auto pt-4">
              <span className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700">
                {hrefLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-[28px] border border-red-200 bg-gradient-to-br from-red-600 via-red-600 to-red-500 p-6 text-white shadow-[0_28px_80px_rgba(220,38,38,0.24)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7">
          <div className="flex h-full flex-col gap-3">
            {icon && (
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
              {backTitle ?? title}
            </h3>
            <p className="text-sm leading-7 text-white/90 sm:text-base">
              {backDescription}
            </p>
            <div className="mt-auto pt-4">
              <span className="inline-flex rounded-full bg-white/12 px-3 py-1.5 text-sm font-semibold text-white">
                UZYNTRA Enterprise Capability
              </span>
            </div>
          </div>
        </div>

        {/* Height stabilizer */}
        <div className="invisible p-6 sm:p-7">
          <div className="flex flex-col gap-3">
            <div className="h-12 w-12" />
            <h3 className="text-xl sm:text-2xl">{backTitle ?? title}</h3>
            <p className="text-base leading-7">{backDescription}</p>
            <span className="text-sm">placeholder</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
