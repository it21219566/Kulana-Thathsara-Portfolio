import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { Section, EXPERIENCE, TRACK, fadeUp } from "./shared";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="$ git log --experience" title="Work Experience" alt>
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-zinc-800" />
        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => {
            const t = TRACK[job.track];
            return (
              <motion.div key={i} variants={fadeUp} whileHover={{ x: 4 }} className="relative">
                <span
                  className={`absolute -left-8 sm:-left-10 top-7 sm:top-7 w-3.5 h-3.5 rounded-full ${t.dot} ring-4 ring-zinc-950`}
                />
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-zinc-100 font-display">{job.role}</h3>
                      <p className="text-sm text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
                        <span className="flex items-center gap-1.5">
                          <FiBriefcase size={14} className={t.text} /> {job.company}
                        </span>
                        <span className="text-zinc-700">·</span>
                        <span className="flex items-center gap-1.5">
                          <FiMapPin size={14} /> {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 shrink-0">
                      <FiCalendar size={12} /> {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-zinc-400 leading-relaxed flex gap-2.5">
                        <span className={`mt-2 w-1 h-1 rounded-full ${t.dot} shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}