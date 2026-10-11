import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Caps the measure for long-form reading columns. */
  narrow?: boolean;
};

export default function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${narrow ? "max-w-shell-narrow" : "max-w-shell"} ${className}`}
    >
      {children}
    </div>
  );
}