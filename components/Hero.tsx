"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  RiDownloadLine,
  RiArrowRightUpLine,
  RiGithubLine,
  RiInstagramLine,
  RiMailLine,
  RiEmotionHappyLine,
  RiArrowDownLine,
} from "@remixicon/react";
import { profileData } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(profileData.roles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentRole = profileData.roles[currentRoleIndex] ?? "";

    if (!isDeleting && displayText === currentRole) {
      const pauseTimer = window.setTimeout(() => setIsDeleting(true), 1500);
      return () => window.clearTimeout(pauseTimer);
    }

    const typingTimer = window.setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % profileData.roles.length);
          return;
        }

        setDisplayText(displayText.slice(0, -1));
        return;
      }

      setDisplayText(currentRole.slice(0, displayText.length + 1));
    }, isDeleting ? 40 : 80);

    return () => window.clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="hero-shell relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-7 flex flex-col items-start" direction="left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-900/60 mb-6">
              <RiEmotionHappyLine className="w-4 h-4" aria-hidden="true" />
              <span>{profileData.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {profileData.name}
            </h1>

            <div className="mt-3 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 min-h-[2rem] flex items-center">
              <span>{displayText}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </div>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {profileData.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href={profileData.cvUrl}
                download={profileData.cvFilename}
                className="motion-action inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto text-sm"
              >
                <RiDownloadLine className="w-4 h-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>

              <a
                href="#projects"
                className="motion-action inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 bg-white/50 dark:bg-slate-800/50 transition-colors w-full sm:w-auto text-sm"
              >
                <span>View Projects</span>
                <RiArrowRightUpLine className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="motion-action w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <RiGithubLine className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={profileData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="motion-action w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <RiInstagramLine className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={profileData.socialLinks.email}
                aria-label="Send Email"
                className="motion-action w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <RiMailLine className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5 flex justify-center lg:justify-end" direction="right" delay={120}>
          <div className="hero-visual relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-transparent p-2 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="hero-visual-frame w-full h-full rounded-2xl overflow-hidden relative bg-white dark:bg-slate-900">
              <Image
                src={profileData.avatarUrl}
                alt={profileData.name}
                fill
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-blue-600 dark:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <RiArrowDownLine className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  );
}
