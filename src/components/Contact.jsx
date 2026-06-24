import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle, FiLoader, FiCheckCircle, FiSend, FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { Section, PROFILE } from "./shared";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name.";
    if (!form.email.trim()) e.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Write a short message.";
    else if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const handleChange = (field) => (ev) => {
    const value = ev.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1100);
  };

  return (
    <Section
      id="contact"
      eyebrow="$ ./contact.sh --send"
      title="Let's build something"
      subtitle="Open to full-stack roles, ML engineering work, and interesting collaborations."
    >
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-mono text-zinc-400 mb-2">Name</label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Jane Doe"
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/70 border text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 transition-colors ${
                  errors.name ? "border-red-500/60" : "border-zinc-800"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><FiAlertCircle size={12} /> {errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-mono text-zinc-400 mb-2">Email</label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="jane@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/70 border text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 transition-colors ${
                  errors.email ? "border-red-500/60" : "border-zinc-800"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><FiAlertCircle size={12} /> {errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-mono text-zinc-400 mb-2">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Tell me about your project or role..."
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/70 border text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none ${
                  errors.message ? "border-red-500/60" : "border-zinc-800"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><FiAlertCircle size={12} /> {errors.message}</p>
              )}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-zinc-950 font-medium shadow-lg shadow-cyan-500/20 disabled:opacity-70 transition-shadow"
              >
                {status === "submitting" ? (
                  <><FiLoader size={16} className="animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  <><FiCheckCircle size={16} /> Sent!</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-emerald-400 flex items-center gap-2"
                  >
                    <FiCheckCircle size={14} /> Thanks — I&apos;ll get back to you shortly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h3 className="text-zinc-100 font-medium mb-5 font-display">Find me elsewhere</h3>
            <div className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                <FiMail size={16} /> {PROFILE.email}
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                <FiGithub size={16} /> github.com/it21219566
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                <FiLinkedin size={16} /> linkedin.com/in/kulanathathsara
              </a>
            </div>
            <a href={PROFILE.resumeUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 hover:border-zinc-500 transition-colors">
              <FiDownload size={14} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}