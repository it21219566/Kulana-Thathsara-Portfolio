import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { Section, PUBLICATIONS, fadeUp } from "./shared";

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="$ ls research/"
      title="Research & Publications"
      subtitle="Peer-reviewed and conference work on applied machine learning."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {PUBLICATIONS.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaGraduationCap size={16} className="text-emerald-400" />
              <span className="font-mono text-xs text-zinc-500">
                {p.venue} · {p.year}
              </span>
            </div>
            <h3 className="text-lg font-medium text-zinc-100 mb-3 leading-snug font-display">{p.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">{p.abstract}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <a href={p.read} className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                Read Paper <FiArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}