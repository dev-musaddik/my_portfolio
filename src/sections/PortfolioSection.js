import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { getProjects, getSkills } from "../api/axiosInstance";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  RefreshCcw,
  Sparkles,
} from "lucide-react";
import GradientButton from "../components/buttons/GradientButton";
import EducationCard from "../components/EducationCard";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";

// Skeleton for loading state
const Skeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);

// SectionTitle component for headers
const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-3xl mx-auto text-center space-y-3">
    {eyebrow && (
      <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-600 dark:text-gray-400">
        <Sparkles className="h-4 w-4" /> {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
    <h1 className="text-4xl font-bold">
  <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
    {title}
  </span>
</h1>

    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
    )}
  </div>
);

const PortfolioSection = () => {
  // const { state } = useContext(AuthContext);
  // const { user } = state || {};

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [typingDone, setTypingDone] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [projectsData, skillsData] = await Promise.all([
        getProjects(),
        getSkills(),
      ]);
      setProjects(projectsData || []);
      setSkills(skillsData || []);
    } catch (err) {
      console.error("Error fetching projects and skills:", err);
      setError("Failed to load content. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const skillsList = useMemo(() => skills, [skills]);
  const projectsList = useMemo(() => projects, [projects]);

  return (
    <div className="relative scroll-smooth">
      {/* Ambient gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-rose-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 space-y-16">
        {/* HERO */}
        <div>
          <HeroSection/>
        </div>

        {/* ERROR / LOADING STATES */}
        {error && (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-red-200/40 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30 p-6 text-red-700 dark:text-red-300 flex items-center justify-between gap-4">
              <p className="text-sm md:text-base">{error}</p>
              <button
                onClick={fetchData}
                className="inline-flex items-center gap-2 rounded-lg border border-red-300/40 bg-white/70 dark:bg-gray-950/60 px-4 py-2 text-sm font-semibold text-red-700 dark:text-red-300 hover:bg-white transition"
              >
                <RefreshCcw className="h-4 w-4" /> Retry
              </button>
            </div>
          </div>
        )}

        {/* ABOUT */}
        <div className="order-2 md:order-1">
          <AboutMe />
        </div>

       

        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle
            eyebrow="Skills"
            title="Skills & Technologies"
            subtitle="A snapshot of my current toolkit"
          />
          {loading ? (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-16 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {skillsList.map((skill) => (
                <SkillCard key={skill._id} skill={skill} />
              ))}
            </div>
          )}
          <Tooltip id="skill-tooltip" />
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle
            eyebrow="Work"
            title="Featured Projects"
            subtitle="A selection of shipped, real‑world builds"
          />
          {loading ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-white/10 p-4">
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-6 w-1/2 mt-4" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                  <Skeleton className="h-10 w-2/3 mt-4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsList.map((project) => (
                <motion.div
                  key={project._id}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

         {/* EDUCATION */}
         <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle eyebrow="Education" title="Education" subtitle="" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
            <EducationCard />
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] text-center"
        >
          <SectionTitle
            eyebrow="Contact"
            title="Get in Touch"
            subtitle="Let's collaborate on something exceptional"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GradientButton href="mailto:musaddikh13@gmai.com" Icon={Mail}>
              Email Me
            </GradientButton>
            <GradientButton
              href="https://www.linkedin.com/in/musaddikh13/"
              Icon={Linkedin}
            >
              LinkedIn
            </GradientButton>
            <GradientButton
              href="https://github.com/dev-musaddik"
              Icon={Github}
            >
              GitHub
            </GradientButton>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PortfolioSection;
