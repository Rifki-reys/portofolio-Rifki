"use client";

import { RiSunLine, RiMoonLine } from "@remixicon/react";

/**
 * Theme is owned entirely by the document: the blocking script in
 * components/ThemeScript.tsx sets the `dark` class on <html> before paint, and
 * this component only flips that class.
 *
 * The icon is not driven by React state on purpose. Hydration runs before the
 * client can read localStorage, so any `useState` read of the stored theme
 * would first render the default, then flash the wrong icon — and its mount
 * effect would overwrite the very preference it was trying to read. Instead
 * both icons render and CSS selects one, so markup and stored theme can never
 * disagree.
 */

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", next === "dark");
    root.dataset.theme = next;

    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — the in-page toggle still works.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className={`inline-flex h-10 w-10 items-center justify-center border border-line text-ink-muted transition-colors duration-300 ease-expo hover:border-ink hover:text-accent ${className}`}
    >
      {/* Shown in light mode. */}
      <RiMoonLine className="h-[18px] w-[18px] dark:hidden" aria-hidden="true" />
      {/* Shown in dark mode. */}
      <RiSunLine className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}