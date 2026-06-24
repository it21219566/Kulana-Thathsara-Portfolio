import React from "react";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

/* ------------------------------------------------------------------ */
/* Content Constants                                                  */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Kulana Thathsara",
  initials: "KT",
  title: "Software & Machine Learning Engineer",
  email: import.meta.env.VITE_EMAIL_ADDRESS || "kulanathathsara@gmail.com",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
  resumeUrl: import.meta.env.VITE_RESUME_URL || "#",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const FULLSTACK_SKILLS = ["PHP", "Laravel", "JavaScript", "HTML5", "CSS3", "Python", "Kotlin", "MySQL", "SQLite", "MongoDB", "REST APIs", "Git"];
export const ML_SKILLS = ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Jupyter", "NLP", "Computer Vision"];

export const TRACK = {
  fullstack: {
    label: "Full-Stack",
    text: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
  },
  ml: {
    label: "Machine Learning",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
  },
};

export const EXPERIENCE = [
  {
    role: "Trainee Software Engineer",
    company: "Arthur C Clark Institute for Modern Technology",
    location: "On-site, Moratuwa, Sri Lanka",
    period: "Dec 2025 - May 2026",
    track: "fullstack",
    bullets: [
      "Laravel Application Development & Deployment ",
      "Software Security Assessment & Enhancement",
      "Legacy System Modernization ",
      "Software Testing, Deployment & Maintenance",
    ],
  },
];

export const PUBLICATIONS = [
  {
    title: "Reinventing Fashion Retail with Data-Driven Solutions",
    venue: "Tuijin Jishu/Journal of Propulsion Technology vol. 44 No. 4",
    year: "2023",
    abstract:
      "This study explores optimizing fashion retail e-commerce using machine learning. It integrates collaborative filtering for personalized recommendations and sales forecasting to improve inventory management.",
    tags: ["Python", "Collaborative Filtering", "Machine Learning", "Extra Tree Regressor",],
    read: "https://www.propulsiontechjournal.com/index.php/journal/article/view/2623/1802"
  },
];

export const PROJECTS = [
  {
    name: "Care24",
    track: "fullstack",
    description:
      "An E-Channeling and Laboratory Management System designed to streamline healthcare services, Care24 provides patients with seamless access to medical appointments while offering healthcare facilities an efficient system for managing laboratory operations.",
    tags: ["Mongodb", "Express.js", "React", "Node.js", "REST API"],
    github: "https://github.com/it21219566/Care24---E-Channeling-and-Laboratory-System.git",
    demo: "#",
  },
{
    name: "Paul",
    track: "ml",
    description:
      "A full-stack machine learning application that predicts FIFA World Cup match outcomes using XGBoost, Poisson regression, and dynamic team statistics.",
    tags: ["Python", "FastAPI", "XGBoost", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/it21219566/Paul---FIFA-World-Cup-Match-Predictor.git",
    demo: "#",
  },
  {
    name: "CTSE Lecture Notes Chatbot",
    track: "ml",
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot that answers questions from software engineering lecture notes.",
    tags: ["Python", "RAG", "LangChain", "Jupyter",],
    github: "https://github.com/it21219566/CTSE-Chatbot.git",
    demo: "#",
  },
  {
    name: "AcademyNet",
    track: "fullstack",
    description:
      "A full-stack academic project modeled after Coursera/Udemy, developed using a microservices architecture.",
    tags: ["Node.js", "Express.js", "Mongodb", "DevOps", "Docker", "AWS"],
    github: "https://github.com/Binara-Prabhanga/AcademyNet.git",
    demo: "#",
  },
  {
    name: "LearnHub",
    track: "fullstack",
    description:
      "LearnHub is a cutting-edge online learning platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and Docker, designed according to microservice architecture. The platform offers a scalable, modular, and highly responsive solution for delivering educational content to learners worldwide.",
    tags: ["Mongodb", "Express.js", "React.js", "Node.js", "DevOps", "Docker",],
    github: "https://github.com/kirusanth-08/OnlineLearningPlatform-DS.git",
    demo: "#",
  },
    {
    name: "Skin Cancer Detection Model",
    track: "ml",
    description:
      "A machine learning model for detecting skin cancer from medical images, built using Python and scikit-learn.",
    tags: ["Python", "CNN", "Transfer Learning", "SVM",],
    github: "https://github.com/Vihitha-Wijerathne/SkinCancer-CNN-Classifier.git",
    demo: "#",
  },
    {
    name: "Breast Cancer Detection Model",
    track: "ml",
    description:
      "A machine learning model for detecting breast cancer from medical images, built using Python and scikit-learn.",
    tags: ["Python", "Logistic Regression", "KNN", "SVM", "Random Forest",],
    github: "https://github.com/Vihitha-Wijerathne/Breast-Cancer-ML-classification.git",
    demo: "#",
  },
      {
    name: "JobQuest",
    track: "fullstack",
    description:
      "JobQuest is an innovative Android application developed using Android Studio, Kotlin, and Firebase, designed to connect job seekers with employers in a seamless and efficient marketplace. ",
    tags: ["Android Development", "Kotlin", "Firebase", "Android Studio",],
    github: "https://github.com/it21219566/MAD-Assignment-JobQuest.git",
    demo: "#",
  },
];

/* ------------------------------------------------------------------ */
/* Shared Utilities & Animations                                      */
/* ------------------------------------------------------------------ */

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* ------------------------------------------------------------------ */
/* Reusable Layout Components                                         */
/* ------------------------------------------------------------------ */

export function Section({ id, eyebrow, title, subtitle, children, alt }) {
  return (
    <section id={id} className={`relative py-24 scroll-mt-20 ${alt ? "bg-zinc-900/30" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-cyan-400 tracking-widest uppercase mb-3 flex items-center gap-2"
          >
            <FiTerminal size={14} />
            {eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-zinc-50 mb-4 font-display"
          >
            {title}
          </motion.h2>
          {subtitle ? (
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-zinc-400 max-w-2xl mb-12">
              {subtitle}
            </motion.p>
          ) : (
            <div className="mb-12" />
          )}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}