"use client";

import { useEffect, useState } from "react";

type OffensiveAIModuleIntroProps = {
  moduleCount: number;
};

type Theme = "light" | "dark";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";

  const modulesSection = document.querySelector(".offensive-ai-modules");
  if (modulesSection) {
    const background = window.getComputedStyle(modulesSection).backgroundColor;
    const match = background.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (match) {
      const [, r, g, b] = match;
      const luminance = Number(r) * 0.299 + Number(g) * 0.587 + Number(b) * 0.114;
      return luminance < 90 ? "dark" : "light";
    }
  }

  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function OffensiveAIModuleIntro({ moduleCount }: OffensiveAIModuleIntroProps) {
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const syncTheme = () => setTheme(readTheme());
    syncTheme();
    window.requestAnimationFrame(syncTheme);
    window.addEventListener("uzyntra-theme-change", syncTheme);
    window.addEventListener("resize", syncTheme);
    return () => {
      window.removeEventListener("uzyntra-theme-change", syncTheme);
      window.removeEventListener("resize", syncTheme);
    };
  }, []);

  const intro = `Dive into 10 structured domains and ${moduleCount} in-depth modules designed to map classic web application pentesting with the power of AI.`;
  const extended =
    "Each module contains practical labs, real-world case studies, and guided use of GPT-driven agents so learners can move from reconnaissance and exploitation to post-exploitation reporting, adversarial AI testing, and custom agent development. The course builds a step-by-step path from foundations to advanced offensive AI workflows, with hands-on repetition that helps students understand how automation supports testing without replacing professional judgment.";
  const dark = theme === "dark";
  const textColor = dark ? "rgba(255, 255, 255, 0.86)" : "#334155";

  return (
    <p
      className="offensive-ai-module-intro mt-4 max-w-3xl text-sm leading-7"
      data-course-theme={theme}
      style={{ color: textColor }}
    >
      <span className="offensive-ai-module-intro-text" style={{ color: textColor }}>
        {intro}
        {expanded ? ` ${extended}` : null}
      </span>{" "}
      <button
        type="button"
        className="offensive-ai-read-toggle font-bold transition-colors duration-200 hover:text-red-400"
        style={{ color: "#ef1f24" }}
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
}