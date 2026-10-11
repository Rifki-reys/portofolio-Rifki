"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import Container from "./ui/Container";
import ThemeToggle from "./ThemeToggle";
import { profileData } from "@/data/portfolio";

const navItems = [
  { label: "Services", href: "#services", index: "01" },
  { label: "Work", href: "#work", index: "02" },
  { label: "Stack", href: "#stack", index: "03" },
  { label: "About", href: "#about", index: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* --- Hide the border until the page actually moves --------------------- */
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* --- Scroll spy: highlight the section currently in view --------------- */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        if (visible.size === 0) return;

        // Fall back to document order when several sections overlap.
        const next = [...visible].sort(
          (a, b) =>
            navItems.findIndex((item) => item.href === `#${a}`) -
            navItems.findIndex((item) => item.href === `#${b}`),
        )[0];

        setActiveSection(next ? `#${next}` : "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* --- Mobile drawer: close on Escape and on outside click --------------- */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      // The toggle lives outside the panel, so it must be treated as "inside".
      // Without this, pointerdown closes and the subsequent click reopens it.
      if (menuButtonRef.current?.contains(target)) return;
      if (mobilePanelRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  /* --- Lock body scroll while the drawer is open ------------------------- */
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-expo ${
        isScrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-nav-height items-center justify-between gap-6">
          {/* Wordmark */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="group flex items-baseline gap-2.5 text-ink"
          >
            <span className="font-display text-[1.05rem] font-semibold tracking-[-0.02em]">
              {profileData.name}
            </span>
            <span className="kicker hidden sm:inline">/ Developer</span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href ? "true" : undefined}
                className={`kicker transition-colors duration-300 ease-expo hover:text-ink ${
                  activeSection === item.href ? "text-accent" : ""
                }`}
              >
                <span className="tabular mr-1.5 opacity-50">{item.index}</span>
                {item.label}
              </a>
            ))}

            <ThemeToggle />

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-canvas transition-colors duration-300 ease-expo hover:border-accent hover:bg-accent hover:text-white"
            >
              Let&apos;s talk
              <RiArrowRightUpLine
                className="h-3.5 w-3.5 transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="relative flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-300 ease-expo hover:border-ink"
            >
              {/* Hamburger morphs into a cross: two bars rotate, the third fades. */}
              <span aria-hidden="true" className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ease-expo ${
                    isOpen
                      ? "top-1/2 rotate-45"
                      : "top-0 -translate-y-[3px] rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ease-expo ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ease-expo ${
                    isOpen
                      ? "top-1/2 -rotate-45"
                      : "top-full translate-y-[3px] rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        ref={mobilePanelRef}
        id="mobile-navigation"
        inert={!isOpen}
        className={`overflow-hidden bg-canvas transition-all duration-500 ease-expo lg:hidden ${
          isOpen
            ? "visible max-h-[85vh] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav
            aria-label="Mobile"
            className="flex flex-col overflow-y-auto border-t border-line py-2"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{ transitionDelay: isOpen ? `${120 + index * 60}ms` : "0ms" }}
                className={`flex items-baseline gap-3 border-b border-line py-4 font-display text-2xl font-medium tracking-[-0.02em] text-ink transition-all duration-500 ease-expo last:border-b-0 hover:text-accent ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }`}
              >
                <span className="kicker tabular text-accent">{item.index}</span>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              style={{ transitionDelay: isOpen ? `${120 + navItems.length * 60}ms` : "0ms" }}
              className={`my-5 inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white transition-all duration-500 ease-expo ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
            >
              Let&apos;s talk
              <RiArrowRightUpLine className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}