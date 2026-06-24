import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { PROFILE, NAV_LINKS, scrollToId } from "./shared";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => go("home")} className="font-mono text-lg text-zinc-100 tracking-tight">
          <span className="text-cyan-400">&lt;</span>
          {PROFILE.initials}
          <span className="text-emerald-400">/&gt;</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-mono text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-500 transition-colors"
            >
              <FiDownload size={14} /> Resume
            </a>
            <button
              onClick={() => go("contact")}
              className="font-mono text-sm px-4 py-2 rounded-full border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors"
            >
              Let&apos;s talk
            </button>
          </div>
        </nav>

        <button
          className="md:hidden text-zinc-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800 mt-3"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="font-mono text-sm text-zinc-300 text-left"
                >
                  {l.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-2 border-t border-zinc-800/50 mt-1">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-mono text-sm px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  <FiDownload size={14} /> Download Resume
                </a>
                <button
                  onClick={() => go("contact")}
                  className="font-mono text-sm px-4 py-2 rounded-full border border-cyan-500/40 text-cyan-300 text-center"
                >
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}