import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  // Mouse tilt effect for the hero card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) / 15);
    y.set((event.clientY - centerY) / 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-3xl shadow-2xl py-12 md:py-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-left space-y-8"
        >
          {/* Location Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
            </span>
            <span>
              Rajbari, Bangladesh — working remotely with a UK agency
            </span>
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              I <span className="text-blue-600 dark:text-blue-500">manage the project</span> <br />
              and build the thing.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Project Manager and Web Developer who runs digital marketing and web builds end to end — from strategy and client conversations to SEO, paid ads, and shipping Shopify and WordPress sites.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gray-900 hover:bg-blue-600 dark:bg-white dark:hover:bg-blue-500 text-white dark:text-gray-900 dark:hover:text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Work with me
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              See what I do →
            </a>
          </div>

          {/* Ledger Grid */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-950 overflow-hidden shadow-sm mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-800">
              <div className="p-4 flex flex-col justify-center">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Current role</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base mt-1">Project Manager</span>
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Disciplines</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base mt-1">PM · Marketing · Web</span>
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Stack & CMS</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base mt-1">React · Shopify · WP</span>
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Availability</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base mt-1">Open to projects</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-4 flex items-center gap-6 opacity-75">
            <a href="https://github.com/dev-musaddik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/musaddikh13/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:musaddikh13@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </motion.div>

        {/* Right 3D Content Area */}
        <motion.div
           style={{ x, y, rotateX, rotateY, z: 100 }}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="hidden lg:col-span-5 lg:flex items-center justify-center perspective-1000 cursor-pointer"
        >
          <div className="relative w-full max-w-[380px] h-[450px] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl p-6 flex flex-col justify-between overflow-hidden transform-style-3d group">
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-40 pointer-events-none rounded-3xl" />
            
            {/* Header of the Code Editor */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-500 text-xs font-mono">Profile.js</div>
            </div>

            {/* Code Content */}
            <div className="font-mono text-xs space-y-4 text-gray-300 relative z-10">
                <div className="flex">
                    <span className="text-pink-500 mr-2">const</span>
                    <span className="text-blue-400">musaddik</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="pl-5">
                    <span className="text-purple-400">name:</span>
                    <span className="text-green-400 ml-2">'Md. Musaddik Hossain',</span>
                </div>
                <div className="pl-5">
                    <span className="text-purple-400">roles:</span>
                    <span className="text-blue-300 ml-2">['Project Manager', 'Developer', 'Marketer'],</span>
                </div>
                <div className="pl-5">
                    <span className="text-purple-400">agency:</span>
                    <span className="text-green-400 ml-2">'Axelman Digital (UK)',</span>
                </div>
                <div className="pl-5">
                    <span className="text-purple-400">location:</span>
                    <span className="text-green-400 ml-2">'Bangladesh',</span>
                </div>
                <div className="pl-5">
                    <span className="text-purple-400">openToWork:</span>
                    <span className="text-blue-300 ml-2">true</span>
                </div>
                <div>
                     <span className="text-yellow-300">{`}`}</span>
                </div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute bottom-6 right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500" />
            <div className="absolute top-12 left-6 w-12 h-12 bg-indigo-500/10 rounded-full blur-2xl" />

            {/* Bottom Status */}
             <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                <div className="text-[10px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Compiling Success...
                    </div>
                </div>
                <div className="text-lg font-bold text-gray-400">
                    100%
                </div>
             </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
