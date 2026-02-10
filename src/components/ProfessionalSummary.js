import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Laptop, TrendingUp, Sparkles } from 'lucide-react';

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: Code,
      title: "Computer Science",
      subtitle: "Strong Foundation",
      description: "C, C++, Python, Java, JavaScript",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Laptop,
      title: "Full-Stack Dev",
      subtitle: "3 Years Experience",
      description: "MERN Stack, WordPress, Shopify",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Project Manager",
      subtitle: "Remote Operations",
      description: "Leading teams at Axelman Digital",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      subtitle: "Strategic Focus",
      description: "Tech + Marketing Operations",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full">
      {/* Absolute Background Blur for depth */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl opacity-50" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Professional Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Bridging <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Technical Excellence</span> with Business Strategy
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 dark:border-gray-800/50 shadow-sm">
            <p>
              I am a <span className="font-semibold text-gray-900 dark:text-white">Computer Science student</span> combining rigorous programming foundations with practical
              application. My journey spans <span className="font-semibold text-gray-900 dark:text-white">3 years of Full-Stack Development</span>, mastering the MERN 
              stack alongside CMS platforms like WordPress and Shopify.
            </p>
            <p>
              Currently, I drive results as a <span className="font-semibold text-gray-900 dark:text-white">Project Manager at Axelman Digital</span>, 
              where I merge technical insights with operational leadership—overseeing teams, managing client expectations, 
              and optimizing workflows for scalable growth.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Highlights Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {highlights.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Splash on Hover */}
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {card.title}
              </h3>
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 mb-2 uppercase tracking-wider">
                {card.subtitle}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
