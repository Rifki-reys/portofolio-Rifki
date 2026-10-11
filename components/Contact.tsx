import { RiMailLine, RiGithubLine, RiInstagramLine, RiArrowRightUpLine } from "@remixicon/react";
import { contactData, profileData } from "@/data/portfolio";
import Reveal from "./Reveal";

const channels = [
  {
    key: "email",
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    Icon: RiMailLine,
    external: false,
  },
  {
    key: "github",
    label: "GitHub",
    value: contactData.githubUsername,
    href: contactData.githubUrl,
    Icon: RiGithubLine,
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    value: contactData.instagramHandle,
    href: contactData.instagramUrl,
    Icon: RiInstagramLine,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-band">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* --- Invitation ---------------------------------------------- */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="tabular text-accent">05</span>
                Contact
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-8 font-display text-[clamp(2.25rem,6.4vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
                Have a project
                <br />
                that needs to
                <br />
                <span className="text-accent">actually ship?</span>
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted">
                Send a brief — what you&apos;re building, who it&apos;s for,
                and when you need it. I&apos;ll reply with an honest read on
                whether I&apos;m the right fit.
              </p>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactData.email}`}
                  className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-canvas transition-colors duration-300 ease-expo hover:border-accent hover:bg-accent hover:text-white"
                >
                  Send an email
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

          {/* --- Channels ----------------------------------------------- */}
          <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-10">
            <Reveal delay={100}>
              <p className="kicker mb-6">Direct channels</p>
              <ul className="border-t border-line">
                {channels.map(({ key, label, value, href, Icon, external }) => (
                  <li key={key} className="border-b border-line">
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-5 py-6 transition-colors duration-300 ease-expo hover:bg-surface/60 sm:px-4 sm:-mx-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line text-ink-muted transition-colors duration-300 ease-expo group-hover:border-accent group-hover:text-accent">
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="kicker block">{label}</span>
                        <span className="mt-1.5 block truncate font-display text-lg font-medium tracking-[-0.02em] text-ink">
                          {value}
                        </span>
                      </span>

                      <RiArrowRightUpLine
                        className="h-4 w-4 shrink-0 text-ink-subtle transition-all duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 space-y-2">
                <p className="flex items-center gap-2.5 text-sm text-ink-muted">
                  <span
                    className="inline-block h-1.5 w-1.5 shrink-0 bg-accent"
                    aria-hidden="true"
                  />
                  {contactData.availability}
                </p>
                <p className="text-sm text-ink-subtle">{contactData.responseTime}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}