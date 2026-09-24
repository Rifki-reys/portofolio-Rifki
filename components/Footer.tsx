import { RiGithubLine, RiInstagramLine, RiMailLine } from "@remixicon/react";
import { profileData } from "@/data/portfolio";

const socialClassName = "motion-action inline-flex w-10 h-10 items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:text-white dark:hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          &copy; 2026 {profileData.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className={socialClassName}>
            <RiGithubLine className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className={socialClassName}>
            <RiInstagramLine className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href={profileData.socialLinks.email} aria-label="Email" className={socialClassName}>
            <RiMailLine className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
