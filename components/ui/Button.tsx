import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">;

/**
 * Editorial buttons: square-ish corners, mono label, hairline borders.
 * `solid` inverts against the canvas so it reads as the primary action.
 */
const base =
  "group/btn inline-flex select-none items-center justify-center gap-2 border px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300 ease-expo";

const variants: Record<Variant, string> = {
  solid: "border-accent bg-accent text-white hover:bg-accent-hover hover:border-accent-hover",
  outline:
    "border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-canvas",
  ghost: "border-transparent text-ink-muted hover:text-accent",
};

export default function Button({
  children,
  variant = "solid",
  className = "",
  ...anchorProps
}: ButtonProps) {
  return (
    <a {...anchorProps} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}