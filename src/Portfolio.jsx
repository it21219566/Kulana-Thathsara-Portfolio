import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="bg-zinc-950 min-h-screen antialiased text-zinc-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(34, 211, 238, 0.3); }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Research />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}