"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "curriculum", label: "Syllabus" },
  { id: "course-pricing", label: "Course Pricing" },
  { id: "eligibility", label: "Eligibility & Requirements" },
] as const;

export function OffensiveAICourseTabs() {
  const [activeId, setActiveId] = useState<(typeof tabs)[number]["id"]>("curriculum");

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.replace("#", "");
      if (tabs.some((tab) => tab.id === hash)) {
        setActiveId(hash as (typeof tabs)[number]["id"]);
        return;
      }

      const offset = 150;
      const current = tabs
        .map((tab) => ({ id: tab.id, top: document.getElementById(tab.id)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY }))
        .filter((tab) => Number.isFinite(tab.top))
        .reduce((best, tab) => (tab.top <= offset && tab.top > best.top ? tab : best), { id: "curriculum", top: Number.NEGATIVE_INFINITY });

      setActiveId(current.id as (typeof tabs)[number]["id"]);
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

  return (
    <nav className="offensive-ai-course-tabs sticky top-[56px] z-30 border-y border-white/15 bg-[#171718]/95 backdrop-blur" aria-label="Offensive AI course sections">
      <div className="container-shell">
        <div className="flex min-h-[72px] items-center gap-4 overflow-x-auto py-3">
          {tabs.map((tab) => {
            const active = activeId === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                aria-current={active ? "true" : undefined}
                className={active ? "offensive-ai-course-tab active" : "offensive-ai-course-tab"}
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