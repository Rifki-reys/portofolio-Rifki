import { RiGithubLine, RiInstagramLine, RiMailLine } from "@remixicon/react";
import { profileData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          &copy; 2026 {profileData.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RiGithubLine className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={profileData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RiInstagramLine className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={profileData.socialLinks.email}
            aria-label="Email"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RiMailLine className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
