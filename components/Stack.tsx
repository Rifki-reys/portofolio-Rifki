import { skillsData } from "@/data/portfolio";
import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <Section id="stack" band>
      <SectionHeading
        index="03"
        eyebrow="Stack"
        title="The tools I reach for."
        description="A deliberately small stack — chosen because it is well understood, easy to maintain, and quick to hand over."
      />

      {/* Capability matrix: name, category, description. Hairline-separated rows. */}
      <div className="mt-16 border-t border-line">
        {skillsData.map((skill, index) => (
          <Reveal key={skill.name} delay={Math.min(index * 35, 210)}>
            <div className="group grid gap-2 border-b border-line py-6 transition-colors duration-500 ease-expo hover:bg-surface/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4 sm:-mx-4">
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 ease-expo group-hover:text-accent sm:col-span-3 sm:text-[1.4rem]">
                {skill.name}
              </h3>

              <p className="kicker sm:col-span-2">{skill.role}</p>

              <p className="text-[0.92rem] leading-relaxed text-ink-muted sm:col-span-7">
                {skill.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}