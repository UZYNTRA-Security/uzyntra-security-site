"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const tabs = [
  { id: "curriculum", label: "Syllabus" },
  { id: "course-pricing", label: "Course Pricing" },
  { id: "eligibility", label: "Eligibility & Requirements" },
] as const;

type TabId = (typeof tabs)[number]["id"];
type Theme = "light" | "dark";
type PinnedBounds = { left: number; width: number };

type TabNavStyle = CSSProperties & {
  "--offensive-ai-tabs-left"?: string;
  "--offensive-ai-tabs-width"?: string;
};

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function getPinnedTop() {
  return window.innerWidth < 768 ? 0 : 56;
}

export function OffensiveAICourseTabs() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pendingTabRef = useRef<TabId | null>(null);
  const hashAlignedRef = useRef(false);
  const [activeId, setActiveId] = useState<TabId>("curriculum");
  const [theme, setTheme] = useState<Theme>("light");
  const [tabsPinned, setTabsPinned] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [pinnedBounds, setPinnedBounds] = useState<PinnedBounds>({ left: 0, width: 0 });

  const getScrollOffset = useCallback(() => {
    const mobile = window.innerWidth < 768;
    return mobile ? Math.max(navHeight, 58) + 8 : getPinnedTop() + Math.max(navHeight, 64) + 16;
  }, [navHeight]);

  const scrollToTab = useCallback(
    (tabId: TabId, behavior: ScrollBehavior, updateHash = true) => {
      const target = document.getElementById(tabId);
      if (!target) return;

      pendingTabRef.current = tabId;
      setActiveId(tabId);

      if (updateHash) {
        window.history.pushState(null, "", `#${tabId}`);
      }

      const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top, behavior });

      window.setTimeout(() => {
        if (pendingTabRef.current === tabId) {
          pendingTabRef.current = null;
        }
      }, behavior === "smooth" ? 900 : 80);
    },
    [getScrollOffset],
  );

  useEffect(() => {
    const syncTheme = () => setTheme(readTheme());
    syncTheme();
    window.addEventListener("uzyntra-theme-change", syncTheme);
    return () => window.removeEventListener("uzyntra-theme-change", syncTheme);
  }, []);

  useEffect(() => {
    const updatePinnedState = () => {
      const measuredHeight = navRef.current?.offsetHeight ?? 0;
      const rect = wrapperRef.current?.getBoundingClientRect();
      const pinTop = getPinnedTop();

      setNavHeight(measuredHeight);
      if (rect) {
        setPinnedBounds({ left: rect.left, width: rect.width });
      }
      setTabsPinned(Boolean(rect && rect.top <= pinTop));
    };

    updatePinnedState();
    window.addEventListener("scroll", updatePinnedState, { passive: true });
    window.addEventListener("resize", updatePinnedState);

    return () => {
      window.removeEventListener("scroll", updatePinnedState);
      window.removeEventListener("resize", updatePinnedState);
    };
  }, []);

  useEffect(() => {
    if (hashAlignedRef.current) return;

    const hash = window.location.hash.replace("#", "");
    const hashTab = tabs.find((tab) => tab.id === hash);
    if (!hashTab) return;

    hashAlignedRef.current = true;
    window.setTimeout(() => scrollToTab(hashTab.id, "auto", false), 0);
  }, [navHeight, scrollToTab]);

  useEffect(() => {
    const updateActive = () => {
      const mobile = window.innerWidth < 768;
      const offset = mobile ? Math.max(navHeight, 58) + 24 : getPinnedTop() + Math.max(navHeight, 64) + 32;

      if (pendingTabRef.current) {
        const pendingTarget = document.getElementById(pendingTabRef.current);
        const targetTop = pendingTarget?.getBoundingClientRect().top ?? 0;
        if (pendingTarget && Math.abs(targetTop - offset) > 14) {
          setActiveId(pendingTabRef.current);
          return;
        }
        pendingTabRef.current = null;
      }

      const viewportLine = window.scrollY + offset;
      const current = tabs
        .map((tab) => ({ id: tab.id, top: document.getElementById(tab.id)?.offsetTop ?? Number.POSITIVE_INFINITY }))
        .filter((tab) => Number.isFinite(tab.top) && tab.top <= viewportLine)
        .at(-1);

      setActiveId((current?.id ?? "curriculum") as TabId);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("popstate", updateActive);
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("popstate", updateActive);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [navHeight]);

  const navStyle: TabNavStyle = {
    "--offensive-ai-tabs-left": `${pinnedBounds.left}px`,
    "--offensive-ai-tabs-width": `${pinnedBounds.width}px`,
    background: "linear-gradient(90deg, rgba(24, 24, 25, 0.98), rgba(56, 25, 28, 0.96))",
    borderColor: "rgba(255, 255, 255, 0.16)",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.16)",
    color: "#ffffff",
  };

  const handleTabClick = (tabId: TabId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTab(tabId, "smooth");
  };

  return (
    <div className="offensive-ai-course-tabs-shell">
      <div ref={wrapperRef} className="container-shell offensive-ai-course-tabs-wrap" style={{ height: tabsPinned ? navHeight || undefined : undefined }}>
        <nav
          ref={navRef}
          className={
            tabsPinned
              ? "offensive-ai-course-tabs offensive-ai-course-tabs--fixed sticky top-[56px] z-30 border-y backdrop-blur"
              : "offensive-ai-course-tabs sticky top-[56px] z-30 border-y backdrop-blur"
          }
          aria-label="Offensive AI course sections"
          data-course-theme={theme}
          data-tabs-pinned={tabsPinned ? "true" : undefined}
          style={navStyle}
        >
          <div className="offensive-ai-course-tabs-scroll flex min-h-[64px] items-center gap-4 overflow-x-auto py-2">
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
                    color: active ? "#ffffff" : "rgba(255, 255, 255, 0.88)",
                    boxShadow: active ? "0 14px 34px rgba(239, 31, 36, 0.24)" : "none",
                  }}
                  onClick={handleTabClick(tab.id)}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}