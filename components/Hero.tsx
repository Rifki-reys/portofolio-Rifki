import Image from "next/image";
import { RiArrowRightUpLine, RiArrowDownLine, RiGithubLine, RiInstagramLine, RiMailLine } from "@remixicon/react";
import { profileData, aboutData } from "@/data/portfolio";
import Container from "./ui/Container";
import Reveal from "./Reveal";

const socialLinks = [
  { label: "GitHub", href: profileData.socialLinks.github, Icon: RiGithubLine },
  { label: "Instagram", href: profileData.socialLinks.instagram, Icon: RiInstagramLine },
  { label: "Email", href: profileData.socialLinks.email, Icon: RiMailLine },
];

/** Metadata rail: the facts, stated plainly. */
const heroMeta = [
  { label: "Location", value: aboutData.profile.location },
  { label: "Discipline", value: aboutData.profile.major },
  { label: "Status", value: aboutData.profile.status },
];

export default function Hero() {
  return (
    <section id="hero" className="relative border-b border-line pt-nav-height">
      <Container>
        <div className="grid gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-24">
          {/* --- Statement ------------------------------------------------ */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 animate-pulse bg-accent" aria-hidden="true" />
                Available for work — 2026
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink">
                I build web
                <br />
                products that
                <br />
                <span className="text-accent">actually ship.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-9 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                {profileData.bio} Currently studying Information Systems at
                IBIK, based in{" "}
                <span className="text-ink">{aboutData.profile.location}</span>.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-canvas transition-colors duration-300 ease-expo hover:border-accent hover:bg-accent hover:text-white"
                >
                  See selected work
                  <RiArrowRightUpLine
                    className="h-4 w-4 transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={profileData.cvUrl}
                  download={profileData.cvFilename}
                  className="inline-flex items-center gap-2.5 border border-line-strong px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 ease-expo hover:border-ink hover:bg-surface"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* --- Portrait + meta ------------------------------------------- */}
          <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
            <Reveal delay={120}>
              <figure className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface-muted">
                  <Image
                    src={profileData.avatarUrl}
                    alt={`Portrait of ${profileData.name}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover object-top grayscale transition-all duration-700 ease-expo hover:grayscale-0"
                  />
                </div>

                <figcaption className="mt-4 flex items-center justify-between border-b border-line pb-3">
                  <span className="kicker">{aboutData.profile.name}</span>
                  <span className="kicker tabular">Bogor, ID</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-8 divide-y divide-line">
                {heroMeta.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-6 py-3.5">
                    <dt className="kicker">{item.label}</dt>
                    <dd className="text-right text-sm font-medium text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(label === "Email"
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      className="inline-flex items-center gap-2 border border-line px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-muted transition-colors duration-300 ease-expo hover:border-accent hover:text-accent"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={320}>
          <div className="flex items-center justify-between border-t border-line py-5">
            <a
              href="#services"
              className="kicker group inline-flex items-center gap-2.5 transition-colors duration-300 ease-expo hover:text-accent"
            >
              <RiArrowDownLine
                className="h-3.5 w-3.5 transition-transform duration-300 ease-expo group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              What I do
            </a>
            <span className="kicker tabular">Scroll to explore</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}