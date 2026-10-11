import { RiArrowRightUpLine } from "@remixicon/react";
import { servicesData } from "@/data/portfolio";
import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <Section id="services" band>
      <SectionHeading
        index="01"
        eyebrow="Services"
        title="Four ways I can help you ship."
        description="I work across the whole build, so you deal with one person instead of five handoffs. Pick the part you need — or the lot."
      />

      <div className="mt-16 divide-y divide-line border-t border-line">
        {servicesData.map((service, index) => (
          <Reveal key={service.id} delay={index * 60}>
            <article className="group grid gap-6 py-9 transition-colors duration-500 ease-expo md:grid-cols-12 md:gap-8 md:py-11">
              {/* Index */}
              <div className="md:col-span-1">
                <span className="kicker tabular text-accent">{service.id}</span>
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="font-display text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-ink transition-colors duration-300 ease-expo group-hover:text-accent sm:text-[2rem]">
                  {service.title}
                </h3>
              </div>

              {/* Summary */}
              <div className="md:col-span-4">
                <p className="text-[0.95rem] leading-relaxed text-ink-muted">
                  {service.summary}
                </p>
              </div>

              {/* Deliverables */}
              <div className="md:col-span-2">
                <p className="kicker mb-3">Deliverables</p>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[0.82rem] leading-snug text-ink-muted"
                    >
                      <RiArrowRightUpLine
                        className="mt-0.5 h-3 w-3 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}