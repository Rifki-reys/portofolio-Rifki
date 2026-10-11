import { RiGithubLine, RiInstagramLine, RiMailLine, RiArrowUpLine } from "@remixicon/react";
import { profileData, aboutData } from "@/data/portfolio";
import Container from "./ui/Container";

const socials = [
  {
    label: "GitHub",
    href: profileData.socialLinks.github,
    Icon: RiGithubLine,
    external: true,
  },
  {
    label: "Instagram",
    href: profileData.socialLinks.instagram,
    Icon: RiInstagramLine,
    external: true,
  },
  {
    label: "Email",
    href: profileData.socialLinks.email,
    Icon: RiMailLine,
    external: false,
  },
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-canvas">
      <Container>
        {/* Oversized wordmark: the last thing you read. */}
        <a
          href="#hero"
          className="link-underline group block py-14 sm:py-20"
          aria-label="Back to top"
        >
          <span className="block font-display text-[clamp(2.75rem,13vw,11rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-canvas/90 transition-colors duration-500 ease-expo group-hover:text-accent">
            Rifki Fauzi
          </span>
          <span className="kicker mt-4 block text-canvas/50">
            {aboutData.profile.major} · {aboutData.profile.location}
          </span>
        </a>

        <div className="grid gap-10 border-t border-canvas/15 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Footer">
            <h2 className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-canvas/45">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-canvas/80 transition-colors duration-300 ease-expo hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-canvas/45">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-3">
              {socials.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-2.5 text-sm text-canvas/80 transition-colors duration-300 ease-expo hover:text-accent"
                  >
                    <Icon
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-canvas/45">
              Current focus
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-canvas/70">
              Building web applications end to end, and deepening my grounding
              in cloud architecture and interface design.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-canvas/15 py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-canvas/45">
            &copy; {year} {profileData.name}
          </p>

          <a
            href="#hero"
            className="group inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-canvas/70 transition-colors duration-300 ease-expo hover:text-accent"
          >
            Back to top
            <RiArrowUpLine
              className="h-3.5 w-3.5 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}