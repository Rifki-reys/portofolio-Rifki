import Image from "next/image";
import { RiGithubLine, RiArrowRightUpLine } from "@remixicon/react";
import { projectsData } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="section-heading text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">A showcase of projects I have built</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Reveal key={project.title} className="motion-card group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between" delay={index * 55}>
              <div>
                <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="motion-action inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <RiGithubLine className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Github</span>
                  </a>
                )}

                {project.demoUrl && project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="motion-action inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 bg-white/50 dark:bg-slate-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>Demo</span>
                    <RiArrowRightUpLine className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
