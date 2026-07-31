"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const FALLBACK_THRESHOLD = 420;

function getShowThreshold() {
  const main = document.getElementById("main-content");
  const firstSection = main?.querySelector<HTMLElement>("section");

  if (!firstSection) {
    return FALLBACK_THRESHOLD;
  }

  const sectionBottom = firstSection.getBoundingClientRect().bottom + window.scrollY;
  return Math.max(FALLBACK_THRESHOLD, sectionBottom - 96);
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let threshold = getShowThreshold();
    let ticking = false;

    const updateVisibility = () => {
      setVisible(window.scrollY > threshold);
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    const handleResize = () => {
      threshold = getShowThreshold();
      requestUpdate();
    };

    updateVisibility();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="back-to-top-floating fixed bottom-5 right-5 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all hover:-translate-y-1"
      data-visible={visible ? "true" : "false"}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
