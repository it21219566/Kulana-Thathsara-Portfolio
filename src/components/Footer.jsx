import React from "react";
import { FiTerminal } from "react-icons/fi";
import { PROFILE } from "./shared";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono">
        <span>© {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & Framer Motion.</span>
        <span className="flex items-center gap-1.5">
          <FiTerminal size={12} /> status: open to work
        </span>
      </div>
    </footer>
  );
}