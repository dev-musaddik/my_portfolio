import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("pm");

  const disciplines = {
    pm: {
      title: "Project Management",
      lead: "I act as the primary client contact — gathering requirements, managing expectations, and coordinating cross-functional teams across design, SEO, and paid ads to deliver on time.",
      chips: [
        "Project lifecycle management",
        "Agile / Scrum",
        "Stakeholder engagement",
        "Client relationship management",
        "Team leadership",
        "Cross-functional coordination",
        "Multi-project delivery"
      ]
    },
    mkt: {
      title: "Digital Marketing",
      lead: "I plan, run, and optimise campaigns across search and social — pairing on-page and technical SEO with paid media so the spend turns into measurable growth.",
      chips: [
        "SEO — on-page & technical",
        "Google Ads",
        "Meta Ads",
        "Campaign planning & execution",
        "Social media strategy",
        "Performance analysis"
      ]
    },
    dev: {
      title: "Web & CMS",
      lead: "I build responsive, fast interfaces and manage the CMS side too — from Shopify store setup and WordPress sites to React front-ends, API integration, and performance debugging.",
      chips: [
        "Shopify setup & customisation",
        "WordPress development",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "API integration",
        "Performance optimisation"
      ]
    }
  };

  return (
    <motion.section
      id="disciplines"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-12 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Photo & Quick Info */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:border-r lg:border-gray-200 lg:dark:border-gray-800 lg:pr-8">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <img
              src="/musa.png"
              alt="Musaddik Hossain"
              className="relative rounded-full h-44 w-44 object-cover border-4 border-white dark:border-gray-900 shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Musaddik Hossain</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Project Manager & Developer</p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
            <span className="font-semibold text-blue-600 dark:text-blue-400 not-italic">Nicknamed "Musa":</span> Representing speed, direct communication, and adaptability in fast-paced projects.
          </div>

          <a
            href="/Musaddik_Hossain_CV.pdf"
            download
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-blue-600 dark:bg-gray-900 dark:hover:bg-blue-500 text-gray-900 hover:text-white dark:text-gray-100 dark:hover:text-white font-semibold rounded-xl transition-all duration-200 shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Right Side: Tabbed Disciplines */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold font-mono">
              01 · What I Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Three sides of the same job
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2.5 border-b border-gray-200 dark:border-gray-800 pb-4">
            {Object.keys(disciplines).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full font-mono text-xs md:text-sm transition-all border ${
                  activeTab === key
                    ? "bg-gray-900 border-gray-900 text-white dark:bg-white dark:border-white dark:text-gray-900 font-bold"
                    : "bg-white border-gray-200 text-gray-500 hover:text-gray-900 dark:bg-gray-950 dark:border-gray-850 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {disciplines[key].title}
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
                  {disciplines[activeTab].lead}
                </p>
                <div className="flex flex-wrap gap-2">
                  {disciplines[activeTab].chips.map((chip, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 rounded-lg border border-gray-250 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;