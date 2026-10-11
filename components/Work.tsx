"use client";

import { useState } from "react";
import Image from "next/image";
import { RiGithubLine, RiArrowRightUpLine } from "@remixicon/react";
import { projectsData } from "@/data/portfolio";
import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./Reveal";

export default function Work() {
  // Index of the row whose image is currently shown in the preview panel.
  // Hovering a row previews it; the pinned row stays visible otherwise.
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="work">
      <SectionHeading
        index="02"
        eyebrow="Selected Work"
        title="Recent projects, with the reasoning behind them."
        description="Four builds that cover the range — internal tooling, customer-facing products, and a couple of experiments."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-12">
        {/* --- Index of projects ----------------------------------------- */}
        <div className="lg:col-span-7">
          <ul className="border-t border-line">
            {projectsData.map((project, index) => {
              const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#");
              const isActive = index === activeIndex;

              return (
                <Reveal key={project.title} delay={index * 50}>
                  <li
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="group border-b border-line"
                  >
                    <div
                      className={`relative py-8 transition-colors duration-500 ease-expo sm:px-4 sm:-mx-4 sm:py-9 ${
                        isActive ? "bg-surface/60" : ""
                      }`}
                    >
                      {/* Desktop-only marker for whichever row the preview panel
                          shows. Hidden on mobile, where the rows stack. */}
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-1/2 hidden w-0.5 -translate-y-1/2 bg-accent transition-all duration-500 ease-expo sm:block ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ height: isActive ? "3.5rem" : "0" }}
                      />

                      <div className="flex items-baseline gap-4">
                        <span className="kicker tabular text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-ink transition-colors duration-300 ease-expo group-hover:text-accent sm:text-[1.75rem]">
                            {project.title}
                          </h3>
                          <p className="kicker mt-2">
                            {project.category} · {project.year}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 max-w-lg pl-0 text-[0.95rem] leading-relaxed text-ink-muted sm:pl-9">
                        {project.description}
                      </p>

                      {/* Stack */}
                      <ul className="mt-5 flex flex-wrap gap-2 sm:pl-9">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-ink-subtle"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {/* Links */}
                      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 sm:pl-9">
                        {hasDemo ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-arrow inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink transition-colors duration-300 ease-expo hover:text-accent"
                          >
                            Live site
                            <RiArrowRightUpLine
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </a>
                        ) : null}

                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-arrow inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted transition-colors duration-300 ease-expo hover:text-accent"
                          >
                            <RiGithubLine className="h-3.5 w-3.5" aria-hidden="true" />
                            Source
                          </a>
                        ) : null}
                      </div>
                    </div>

                    {/* Mobile-only thumbnail: the sticky panel is desktop only. */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface-muted sm:hidden">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* --- Sticky preview panel --------------------------------------- */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-32">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-surface-muted">
                  {projectsData.map((project, index) => (
                    <Image
                      key={project.title}
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="40vw"
                      className={`object-cover transition-opacity duration-500 ease-expo ${
                        index === activeIndex
                          ? "opacity-100"
                          : "pointer-events-none opacity-0"
                      }`}
                    />
                  ))}
                </div>

                <figcaption className="mt-4 flex items-center justify-between border-b border-line pb-3">
                  <span className="kicker tabular">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(projectsData.length).padStart(2, "0")}
                  </span>
                  <span className="kicker">{projectsData[activeIndex]?.category}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}