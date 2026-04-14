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
  // Always start with false (light logo) — matches SSR output exactly.
  // After mount, read the real theme and update. This eliminates the
  // hydration mismatch caused by the synchronous useState initializer
  // reading document on the client before React reconciles with SSR HTML.
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Read theme after mount — safe, no SSR/client mismatch
    const check = () =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    check();
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
