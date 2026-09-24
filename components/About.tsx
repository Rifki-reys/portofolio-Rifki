import {
  RiUser3Line,
  RiGraduationCapLine,
  RiComputerLine,
  RiBriefcaseLine,
} from "@remixicon/react";
import { aboutData } from "@/data/portfolio";
import Reveal from "./Reveal";

const cardClassName = "motion-card p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm";
const iconClassName = "motion-icon w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="section-heading text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {aboutData.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {aboutData.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className={cardClassName} delay={40}>
            <div className="flex items-center gap-3 mb-6">
              <div className={iconClassName}>
                <RiUser3Line className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Brief Profile
              </h3>
            </div>

            <dl className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Name</dt>
                <dd className="text-sm font-semibold text-slate-900 dark:text-slate-200">{aboutData.profile.name}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Status</dt>
                <dd className="text-sm font-semibold text-slate-900 dark:text-slate-200">{aboutData.profile.status}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Major</dt>
                <dd className="text-sm font-semibold text-slate-900 dark:text-slate-200">{aboutData.profile.major}</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</dt>
                <dd className="text-sm font-semibold text-slate-900 dark:text-slate-200">{aboutData.profile.location}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className={cardClassName} delay={110}>
            <div className="flex items-center gap-3 mb-6">
              <div className={iconClassName}>
                <RiGraduationCapLine className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {aboutData.education.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{item.period}</span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-1">{item.institution}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.major}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={cardClassName} delay={180}>
            <div className="flex items-center gap-3 mb-6">
              <div className={iconClassName}>
                <RiComputerLine className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Areas of Focus</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {aboutData.focusAreas.map((area, index) => (
                <span key={index} className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-400 transition-colors">
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className={cardClassName} delay={250}>
            <div className="flex items-center gap-3 mb-6">
              <div className={iconClassName}>
                <RiBriefcaseLine className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {aboutData.workExperience.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{item.period}</span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-1">{item.company}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
