import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** Alternating background band that separates dense sections. */
  band?: boolean;
  className?: string;
};

export default function Section({
  id,
  children,
  band = false,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section ${band ? "section-band" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  /** Two-digit index rendered in the gutter, e.g. "02". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

/**
 * Editorial section header: a numbered index in mono type, an oversized
 * display title, and a hairline rule running the full measure.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="flex items-baseline gap-4 border-b border-line pb-5">
        <span className="kicker tabular text-accent">{index}</span>
        <span className="kicker">{eyebrow}</span>
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-12 md:gap-8">
        <h2 className="font-display text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink md:col-span-7 md:text-[3.25rem]">
          {title}
        </h2>

        {description ? (
          <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-muted md:col-span-5 md:self-end md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}