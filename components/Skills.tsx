import {
  RiCodeLine,
  RiStackLine,
  RiServerLine,
  RiFireLine,
  RiDatabase2Line,
  RiCloudLine,
  type RemixiconComponentType,
} from "@remixicon/react";
import { skillsData } from "@/data/portfolio";

const iconMap: Record<string, RemixiconComponentType> = {
  Code: RiCodeLine,
  Stack: RiStackLine,
  Server: RiServerLine,
  Fire: RiFireLine,
  Database: RiDatabase2Line,
  Cloud: RiCloudLine,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Technologies and tools I use to build web applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || RiCodeLine;

            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>

                  <span className="inline-block mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {skill.role}
                  </span>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
