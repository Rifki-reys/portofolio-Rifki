import { RiMailLine, RiGithubLine, RiInstagramLine } from "@remixicon/react";
import { contactData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {contactData.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`mailto:${contactData.email}`}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <RiMailLine className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Email
              </span>
              <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                {contactData.email}
              </span>
            </div>
          </a>

          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <RiGithubLine className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                GitHub
              </span>
              <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                {contactData.githubUsername}
              </span>
            </div>
          </a>

          <a
            href={contactData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <RiInstagramLine className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Instagram
              </span>
              <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                {contactData.instagramHandle}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
