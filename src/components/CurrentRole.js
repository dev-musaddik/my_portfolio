import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const CurrentRole = () => {
  const experiences = [
    {
      role: "Project Manager — Digital Marketing & Web Solutions",
      company: "Axelman Digital",
      duration: "Nov 2025 — Present",
      location: "Remote · UK agency",
      isCurrent: true,
      highlights: [
        "Manage multiple client projects across digital marketing and web development, leading strategy to grow client revenue and online visibility.",
        "Act as the primary client contact — gathering requirements, managing expectations, and ensuring satisfaction.",
        "Supervise cross-functional teams across design, SEO, and paid ads.",
        "Plan, manage, and optimise paid advertising campaigns on Google Ads and Meta Ads.",
        "Deliver Shopify and WordPress builds plus performance improvements, ensuring timely, high-quality output."
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance",
      duration: "Jan 2024 — Oct 2025",
      location: "Bangladesh",
      isCurrent: false,
      highlights: [
        "Built responsive, user-friendly web interfaces using the MERN stack and modern front-end tools.",
        "Developed features with JavaScript frameworks and APIs; improved website performance and loading speeds.",
        "Worked end to end on web application development and technical implementation alongside project delivery."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-12 shadow-xl"
    >
      <div className="space-y-10">
        {/* Section Title */}
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold font-mono">
            02 · History
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Where I've worked
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              
              {/* Timeline Dot */}
              <span className={`absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 bg-white dark:bg-gray-950 ${
                exp.isCurrent ? 'border-orange-500' : 'border-gray-400 dark:border-gray-600'
              }`}>
                {exp.isCurrent && (
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                )}
              </span>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                {/* Time & Location Column */}
                <div className="lg:col-span-4 space-y-1">
                  <div className="font-mono text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className={exp.isCurrent ? "text-orange-600 dark:text-orange-400" : "text-gray-500"}>
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Job Details Column */}
                <div className="lg:col-span-8 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-5 text-sm md:text-base text-gray-650 dark:text-gray-450 leading-relaxed">
                        <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-sm bg-blue-500 rotate-45" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CurrentRole;
