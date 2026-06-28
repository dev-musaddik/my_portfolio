import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { getProjects } from "../api/axiosInstance";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import {
  RefreshCcw,
  Sparkles,
} from "lucide-react";
import EducationCard from "../components/EducationCard";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import ProfessionalSummary from "../components/ProfessionalSummary";
import CategorizedSkills from "../components/CategorizedSkills";
import CurrentRole from "../components/CurrentRole";
import ContactSection from "../components/ContactSection";

// Skeleton for loading state
const Skeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);

// SectionTitle component for 
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

const FRONTEND_PROJECTS_DATA = [
  {
    _id: "proj1",
    title: "Premium Shopify Store Build",
    description: "Designed and developed a custom Shopify store for a UK-based e-commerce brand. Features custom liquid sections, page speed optimization, and interactive cart features.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    liveUrl: "https://shopify.com",
    githubUrl: "https://github.com"
  },
  {
    _id: "proj2",
    title: "MERN Stack Client Portal",
    description: "A secure dashboard for client onboarding, file uploads, and real-time project management updates.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com"
  },
  {
    _id: "proj3",
    title: "Agency WordPress Site",
    description: "Built a high-converting, responsive WordPress site for digital marketing campaigns with optimized landing pages.",
    technologies: ["WordPress", "PHP", "JavaScript", "SEO"],
    liveUrl: "https://wordpress.org",
    githubUrl: ""
  },
  {
    _id: "proj4",
    title: "Ad Campaign Analytics Dashboard",
    description: "Configured tracking, conversion APIs, and performance visualization for Google & Meta marketing campaigns.",
    technologies: ["Google Analytics", "Google Ads", "Meta Ads", "React"],
    liveUrl: "https://google.com",
    githubUrl: ""
  }
];

const PortfolioSection = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [projectsData] = await Promise.all([
        getProjects(),
      ]);
      setProjects(projectsData && projectsData.length > 0 ? projectsData : FRONTEND_PROJECTS_DATA);
    } catch (err) {
      console.error("Error fetching projects:", err);
      // Fallback silently to local data if backend is offline
      setProjects(FRONTEND_PROJECTS_DATA);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const projectsList = useMemo(() => projects, [projects]);

  return (
    <div className="relative scroll-smooth overflow-x-clip">
      {/* Ambient gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-rose-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-0 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 space-y-24 md:space-y-32">
        {/* HERO */}
        <div id="home">
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
        <div id="about" className="order-2 md:order-1">
          <AboutMe />
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div id="summary">
          <ProfessionalSummary />
        </div>

        {/* CATEGORIZED SKILLS */}
        <div id="skills">
          <CategorizedSkills />
        </div>

        {/* CURRENT ROLE */}
        <div id="experience">
          <CurrentRole />
        </div>

       

        {/* SKILLS */}
        {/* <motion.section
        //   id="skills-cloud" // Optional, if needed separately
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          <SectionTitle
            eyebrow="My Skills"
            title="My Tech Stack"
            subtitle="The tools I use to bring ideas to life"
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
        </motion.section> */}

        {/* PROJECTS */}
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
            eyebrow="My Work"
            title="What I've Built"
            subtitle="Projects I am proud to showcase"
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
          <SectionTitle eyebrow="Background" title="My Academic Journey" subtitle="" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
            <EducationCard />
          </div>
        </motion.section>

        {/* CONTACT */}
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
