import { marqueeItems } from "@/data/portfolio";

/**
 * Infinite capability strip.
 *
 * The item list is rendered twice inside a track that translates -50%, so the
 * loop is seamless. Duplicated content is hidden from assistive tech.
 */
export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-line bg-ink py-5"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {marqueeItems.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex shrink-0 items-center gap-8 px-8 font-display text-lg font-medium tracking-[-0.02em] text-canvas/90 sm:text-xl"
              >
                {item}
                <span className="text-accent">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}