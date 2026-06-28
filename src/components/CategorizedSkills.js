import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, ShoppingBag, Code } from 'lucide-react';

const CategorizedSkills = () => {
  const capabilities = [
    {
      idx: "/ 01",
      title: "Paid advertising",
      description: "Google Ads and Meta Ads campaigns planned, launched, and tuned for performance — with the analysis to back every decision.",
      icon: Target,
      color: "border-blue-200 dark:border-blue-900 bg-blue-50/20 dark:bg-blue-950/10 text-blue-600 dark:text-blue-400"
    },
    {
      idx: "/ 02",
      title: "SEO that ranks",
      description: "On-page and technical SEO — fixing the structural issues holding a site back and building content that earns the right keywords.",
      icon: Search,
      color: "border-indigo-200 dark:border-indigo-900 bg-indigo-50/20 dark:bg-indigo-950/10 text-indigo-600 dark:text-indigo-400"
    },
    {
      idx: "/ 03",
      title: "Shopify & WordPress builds",
      description: "Store setup, theme customisation, and full WordPress sites — built clean, fast, and ready to maintain.",
      icon: ShoppingBag,
      color: "border-orange-200 dark:border-orange-900 bg-orange-50/20 dark:bg-orange-950/10 text-orange-600 dark:text-orange-400"
    },
    {
      idx: "/ 04",
      title: "Front-end development",
      description: "Responsive interfaces in React and Tailwind, API integration, and the performance debugging that keeps load times low.",
      icon: Code,
      color: "border-purple-200 dark:border-purple-900 bg-purple-50/20 dark:bg-purple-950/10 text-purple-600 dark:text-purple-400"
    }
  ];

  const tools = [
    "Google Analytics",
    "Google Ads Manager",
    "Meta Business Suite",
    "Shopify",
    "WordPress",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Java",
    "C",
    "Firebase",
    "Git / GitHub",
    "VS Code"
  ];

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-12 shadow-xl"
    >
      <div className="space-y-12">
        {/* Section Title */}
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold font-mono">
            03 · Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            What I can take off your plate
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 bg-white dark:bg-gray-900/40 hover:shadow-md ${item.color}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-sm font-bold opacity-75">{item.idx}</span>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-150 dark:border-gray-800">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-650 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Platforms */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <h3 className="font-mono text-xs tracking-widest uppercase text-gray-500 font-bold">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 text-xs md:text-sm font-mono font-medium rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default CategorizedSkills;
