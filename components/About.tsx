import { aboutData } from "@/data/portfolio";
import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./Reveal";

const profileRows = [
  { label: "Name", value: aboutData.profile.name },
  { label: "Based in", value: aboutData.profile.location },
  { label: "Studying", value: aboutData.profile.major },
  { label: "Availability", value: aboutData.profile.status },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="04"
        eyebrow="About"
        title="A systems thinker who ships."
        description="Information Systems taught me to look at the whole picture — process, data, and the people using it."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-12">
        {/* --- Narrative ------------------------------------------------- */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-display text-[1.5rem] font-medium leading-[1.25] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
              {aboutData.profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-ink-muted">
              <p>
                My work usually starts where the spreadsheet ends. I sit with a
                team, work out what the data actually needs to do, model it
                properly, then build the application around it — backend,
                database, and interface in that order.
              </p>
              <p>
                I care about the parts people skip: clean schema design, sensible
                error handling, accessible markup, and deployments that can be
                repeated without drama. A project should still be easy to run a
                year from now.
              </p>
              <p>
                Outside coursework I take on freelance builds and hospitality
                work — both taught me that deadlines and detail are the same
                problem from different angles.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {aboutData.focusAreas.map((area) => (
                <span
                  key={area}
                  className="border border-line px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* --- Facts column ---------------------------------------------- */}
        <div className="lg:col-span-5">
          <Reveal delay={60}>
            <div className="border border-line bg-surface p-7 sm:p-8">
              <p className="kicker mb-6">Details</p>
              <dl className="divide-y divide-line">
                {profileRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0"
                  >
                    <dt className="kicker">{row.label}</dt>
                    <dd className="text-right text-sm font-medium text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 border border-line p-7 sm:p-8">
              <p className="kicker mb-6">Education</p>
              <ul className="divide-y divide-line">
                {aboutData.education.map((item) => (
                  <li key={item.institution} className="py-4 first:pt-0 last:pb-0">
                    <p className="kicker tabular">{item.period}</p>
                    <p className="mt-1.5 font-display text-lg font-medium tracking-[-0.02em] text-ink">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">{item.major}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6 border border-line p-7 sm:p-8">
              <p className="kicker mb-6">Experience</p>
              <ul className="divide-y divide-line">
                {aboutData.workExperience.map((item) => (
                  <li key={item.company} className="py-4 first:pt-0 last:pb-0">
                    <p className="kicker tabular">{item.period}</p>
                    <p className="mt-1.5 font-display text-lg font-medium tracking-[-0.02em] text-ink">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">{item.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}