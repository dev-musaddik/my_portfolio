import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, ShoppingCart, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

const CategorizedSkills = () => {
  const skillCategories = [
    {
      icon: Code2,
      category: "Languages & Core",
      skills: ["C", "C++", "JavaScript", "Python", "Java", "IoT (Basic)"],
      color: "from-pink-500 to-rose-500",
      delay: 0
    },
    {
      icon: Globe,
      category: "MERN Stack",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Rest API"],
      color: "from-blue-500 to-indigo-500",
      delay: 0.1
    },
    {
      icon: ShoppingCart,
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Firebase", "Postman", "Linux"],
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      category: "Marketing",
      skills: ["Digital Strategy", "Ad Management", "SEO", "Growth"],
      color: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: Users,
      category: "Management",
      skills: ["Client Relations", "Agile Workflow", "Team Leadership"],
      color: "from-violet-500 to-purple-500",
      delay: 0.4
    }
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50 -z-10" />
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400">
          Technical Arsenal
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
            A comprehensive toolkit for building and scaling digital products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: category.delay }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Top colored line */}
            <div className={`absolute top-0 inset-x-0 h-1 rounded-t-3xl bg-gradient-to-r ${category.color}`} />
            
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 dark:bg-opacity-20 mb-6 shadow-inner`}>
              <category.icon className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {category.category}
            </h3>

            <div className="w-full space-y-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 group/skill">
                  <CheckCircle2 className={`h-4 w-4 text-gray-300 group-hover:text-green-500 transition-colors duration-300`} />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorizedSkills;
