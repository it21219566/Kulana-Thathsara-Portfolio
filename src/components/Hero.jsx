import React from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PROFILE, fadeUp, staggerContainer, scrollToId } from "./shared";

const ORBIT_BADGES = [
  { label: "React", color: "cyan", style: { top: "-10%", left: "35%" }, delay: 0 },
  { label: "Node.js", color: "emerald", style: { top: "8%", right: "-12%" }, delay: 0.3 },
  { label: "PyTorch", color: "emerald", style: { top: "45%", right: "-22%" }, delay: 0.6 },
  { label: "TensorFlow", color: "emerald", style: { bottom: "5%", right: "-5%" }, delay: 0.9 },
  { label: "MySQL", color: "cyan", style: { bottom: "-10%", left: "35%" }, delay: 1.2 },
  { label: "Laravel", color: "cyan", style: { bottom: "12%", left: "-15%" }, delay: 1.5 },
  { label: "JavaScript", color: "cyan", style: { top: "15%", left: "-18%" }, delay: 1.8 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-950" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a1a1aa 1px, transparent 1px), linear-gradient(to bottom, #a1a1aa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute top-32 -right-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-cyan-400 tracking-widest uppercase mb-5 flex items-center gap-2"
          >
            <FiTerminal size={14} /> $ whoami
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-50 leading-tight tracking-tight font-display"
          >
            Hi, I&apos;m {PROFILE.name}.
            <br />
            I build systems that <span className="text-emerald-400">learn</span>, and the platforms that{" "}
            <span className="text-cyan-400">run them</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl"
          >
            {PROFILE.title} specializing in full-stack web development with{" "}
            <span className="text-zinc-200">PHP and Laravel</span>, and applied machine learning with{" "}
            <span className="text-zinc-200">PyTorch and TensorFlow</span>. I like shipping things that are
            reliable, fast, and quietly well-engineered.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-zinc-950 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
            >
              View Work <FiArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900 transition-colors"
            >
              Contact
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex items-center gap-5">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <FiGithub size={20} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(from 0deg, #22d3ee, #34d399, #6366f1, #22d3ee)" }}
            />
            <div className="absolute inset-[6px] rounded-full bg-zinc-950 overflow-hidden">
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: "radial-gradient(circle at 35% 30%, #27272a, #09090b)" }}
              >
                <span className="text-6xl text-zinc-300 font-display">{PROFILE.initials}</span>
              </div>
            </div>

            {ORBIT_BADGES.map((b) => (
              <motion.div
                key={b.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                className={`absolute px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md border whitespace-nowrap ${
                  b.color === "cyan"
                    ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                    : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                }`}
                style={b.style}
              >
                {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}