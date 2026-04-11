"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("uzyntra-theme") as "light" | "dark" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const resolved = stored ?? preferred;
    setTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  // Sync if another toggle (e.g. mobile nav) changes the theme
  useEffect(() => {
    const handler = () => {
      const current = document.documentElement.getAttribute("data-theme") as "light" | "dark";
      if (current) setTheme(current);
    };
    window.addEventListener("uzyntra-theme-change", handler);
    return () => window.removeEventListener("uzyntra-theme-change", handler);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("uzyntra-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    // Notify other toggle instances
    window.dispatchEvent(new Event("uzyntra-theme-change"));
  }

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      type="button"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-700 sm:h-9 sm:w-9"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
