import { RiMailLine, RiGithubLine, RiInstagramLine } from "@remixicon/react";
import { contactData } from "@/data/portfolio";
import Reveal from "./Reveal";

const cardClassName = "motion-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";
const iconClassName = "motion-icon w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="section-heading text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{contactData.title}</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">{contactData.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={40}>
            <a href={`mailto:${contactData.email}`} className={cardClassName}>
              <div className={iconClassName}><RiMailLine className="w-5 h-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</span>
                <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">{contactData.email}</span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a href={contactData.githubUrl} target="_blank" rel="noopener noreferrer" className={cardClassName}>
              <div className={iconClassName}><RiGithubLine className="w-5 h-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">GitHub</span>
                <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">{contactData.githubUsername}</span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={160}>
            <a href={contactData.instagramUrl} target="_blank" rel="noopener noreferrer" className={cardClassName}>
              <div className={iconClassName}><RiInstagramLine className="w-5 h-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Instagram</span>
                <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">{contactData.instagramHandle}</span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
