"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    element.dataset.revealReady = "true";

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      element.dataset.revealVisible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.revealVisible = "true";
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealStyle = {
    "--reveal-delay": `${Math.min(Math.max(delay, 0), 400)}ms`,
  } as React.CSSProperties;

  return (
    <div
      ref={revealRef}
      className={`reveal ${className}`}
      data-reveal-direction={direction}
      style={revealStyle}
    >
      {children}
    </div>
  );
}
