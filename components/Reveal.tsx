"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger in milliseconds. Clamped to 0-400. */
  delay?: number;
};

/**
 * Fades and slides its children into view on first intersection.
 *
 * Content is visible by default (no attribute is rendered server-side), so a
 * failed or delayed IntersectionObserver can never hide the page permanently.
 * A safety timer reveals the element regardless as a final backstop.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    const reveal = () => {
      element.dataset.revealVisible = "true";
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    element.dataset.revealReady = "true";

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px" },
    );

    observer.observe(element);

    // Backstop: never leave content stuck at opacity 0.
    const backstop = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(backstop);
    };
  }, []);

  const revealStyle = {
    "--reveal-delay": `${Math.min(Math.max(delay, 0), 400)}ms`,
  } as React.CSSProperties;

  return (
    <div ref={revealRef} className={`reveal ${className}`} style={revealStyle}>
      {children}
    </div>
  );
}