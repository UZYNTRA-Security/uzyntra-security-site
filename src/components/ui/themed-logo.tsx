"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

type ThemedLogoProps = {
  width: number;
  height: number;
  priority?: boolean;
};

export function ThemedLogo({ width, height, priority = false }: ThemedLogoProps) {
  // Read theme synchronously on first render — avoids the extra re-render
  // that caused a visible logo flash on hydration.
  const [dark, setDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.getAttribute("data-theme") === "dark";
  });

  useEffect(() => {
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    window.addEventListener("uzyntra-theme-change", check);
    return () => window.removeEventListener("uzyntra-theme-change", check);
  }, []);

  return (
    <span
      style={{
        position: "relative",
        display: "block",
        width,
        height,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src={dark ? siteConfig.logos.mainDark : siteConfig.logos.main}
        alt="UZYNTRA Security"
        fill
        priority={priority}
        className="object-contain object-left transition-opacity duration-200 hover:opacity-80"
        sizes={`${width}px`}
      />
    </span>
  );
}
