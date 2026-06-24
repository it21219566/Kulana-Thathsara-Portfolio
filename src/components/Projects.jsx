import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Section, PROJECTS, TRACK, fadeUp } from "./shared";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="$ ls -la projects/" title="Projects" alt>
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((proj, i) => {
          const t = TRACK[proj.track];
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  proj.track === "ml" ? "bg-emerald-500/20" : "bg-cyan-500/20"
                }`}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-medium text-zinc-100 font-display">{proj.name}</h3>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border shrink-0 ${t.border} ${t.bg} ${t.text}`}>
                    {t.label}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-800/80 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 pt-4 border-t border-zinc-800">
                  <a href={proj.github} className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                    <FiGithub size={15} /> Code
                  </a>
                  <a href={proj.demo} className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}