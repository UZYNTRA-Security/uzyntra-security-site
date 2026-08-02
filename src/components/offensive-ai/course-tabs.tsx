"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "curriculum", label: "Syllabus" },
  { id: "course-pricing", label: "Course Pricing" },
  { id: "eligibility", label: "Eligibility & Requirements" },
] as const;

type Theme = "light" | "dark";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function OffensiveAICourseTabs() {
  const [activeId, setActiveId] = useState<(typeof tabs)[number]["id"]>("curriculum");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const syncTheme = () => setTheme(readTheme());
    syncTheme();
    window.addEventListener("uzyntra-theme-change", syncTheme);
    return () => window.removeEventListener("uzyntra-theme-change", syncTheme);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const stickyOffset = window.innerWidth < 768 ? 96 : 170;
      const viewportLine = window.scrollY + stickyOffset;
      const current = tabs
        .map((tab) => ({ id: tab.id, top: document.getElementById(tab.id)?.offsetTop ?? Number.POSITIVE_INFINITY }))
        .filter((tab) => Number.isFinite(tab.top) && tab.top <= viewportLine)
        .at(-1);

      setActiveId((current?.id ?? "curriculum") as (typeof tabs)[number]["id"]);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const dark = theme === "dark";

  return (
    <nav
      className="offensive-ai-course-tabs sticky top-[56px] z-30 border-y backdrop-blur"
      aria-label="Offensive AI course sections"
      data-course-theme={theme}
      style={{
        background: dark ? "rgba(23, 23, 24, 0.96)" : "rgba(255, 255, 255, 0.98)",
        borderColor: dark ? "rgba(255, 255, 255, 0.16)" : "rgba(226, 232, 240, 0.95)",
        boxShadow: dark ? "none" : "0 12px 28px rgba(15, 23, 42, 0.08)",
        color: dark ? "#ffffff" : "#0f172a",
      }}
    >
      <div className="container-shell">
        <div className="flex min-h-[64px] items-center gap-4 overflow-x-auto py-2">
          {tabs.map((tab) => {
            const active = activeId === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                aria-current={active ? "true" : undefined}
                className={active ? "offensive-ai-course-tab active" : "offensive-ai-course-tab"}
                style={{
                  background: active ? "#ef1f24" : "transparent",
                  color: active ? "#ffffff" : dark ? "rgba(255, 255, 255, 0.82)" : "#0f172a",
                  boxShadow: active ? "0 14px 34px rgba(239, 31, 36, 0.24)" : "none",
                }}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
