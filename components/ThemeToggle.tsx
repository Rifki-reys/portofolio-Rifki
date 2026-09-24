"use client";

import { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const shouldUseDark = stored !== "light";

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setIsReady(true);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  if (!isReady) {
    return (
      <span
        aria-hidden="true"
        className="block w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 shadow-sm"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Enable light mode" : "Enable dark mode"}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {isDark ? (
        <RiSunLine className="w-5 h-5 text-amber-400" aria-hidden="true" />
      ) : (
        <RiMoonLine className="w-5 h-5 text-slate-700" aria-hidden="true" />
      )}
    </button>
  );
}
