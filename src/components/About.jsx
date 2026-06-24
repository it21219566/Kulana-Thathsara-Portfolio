import React from "react";
import { motion } from "framer-motion";
import { FiServer } from "react-icons/fi";
import { FaBrain } from "react-icons/fa6";
import { Section, TRACK, FULLSTACK_SKILLS, ML_SKILLS, fadeUp } from "./shared";

function SkillCard({ icon: Icon, title, track, skills }) {
  const t = TRACK[track];
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl border ${t.border} bg-zinc-900/60 p-6 backdrop-blur-sm`}
    >
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${t.bg} ${t.text} mb-4`}>
        <Icon size={20} />
      </div>
      <h3 className="text-zinc-100 font-medium mb-4 font-display">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className={`px-3 py-1 rounded-full text-xs font-mono border ${t.border} ${t.bg} ${t.text}`}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="$ cat about.md" title="About & Skills">
      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <p className="text-zinc-400 leading-relaxed">
            I&apos;m a software engineer who splits time between building production web applications and
            training machine learning models — and I like it that way. On the web side, I reach for PHP and
            Laravel to ship dependable, well-structured backends. On the ML side, I work mostly in PyTorch and
            TensorFlow, turning messy data into models people can actually rely on.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            I care about code that&apos;s easy to read six months later, systems that fail loudly instead of
            silently, and documentation I&apos;d actually want to find myself.
          </p>
        </motion.div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
          <SkillCard icon={FiServer} title="Full-Stack & Backend" track="fullstack" skills={FULLSTACK_SKILLS} />
          <SkillCard icon={FaBrain} title="Machine Learning" track="ml" skills={ML_SKILLS} />
        </div>
      </div>
    </Section>
  );
}