import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  // Mouse tilt effect for the hero card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) / 10);
    y.set((event.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/40 dark:bg-gray-900/40 backdrop-blur-3xl shadow-2xl">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slower" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-orange-500/10 rounded-full blur-[80px] animate-float" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700 backdrop-blur-sm shadow-sm mx-auto lg:mx-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide uppercase">
              Available for Hire
            </span>
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                Musaddik Hossain
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium h-8">
              <Typewriter
                options={{
                    strings: [
                        'Full-Stack Developer', 
                        'MERN Stack Expert', 
                        'Project Manager', 
                        'Tech Enthusiast'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                }}
              />
            </div>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              I do more than just code. I am a Project Manager and Developer who bridges the gap between technical excellence and strategic business growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/Musaddik_Hossain_CV.pdf"
              download
              className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          {/* Social Proof / Tech Stack (Optional) */}
           <div className="pt-8 flex items-center gap-6 justify-center lg:justify-start opacity-70">
                <a href="https://github.com/dev-musaddik" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/musaddikh13/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:musaddikh13@gmail.com" className="hover:text-orange-500 transition-colors">
                    <Mail className="w-6 h-6" />
                </a>
           </div>

        </motion.div>

        {/* Right 3D Content Area */}
        <motion.div
           style={{ x, y, rotateX, rotateY, z: 100 }}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="hidden lg:flex items-center justify-center perspective-1000 cursor-pointer"
        >
          <div className="relative w-[500px] h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-[40px] border border-gray-700 shadow-2xl p-8 flex flex-col justify-between overflow-hidden transform-style-3d group">
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none rounded-[40px]" />
            
            {/* Header of the "Code Editor" */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-500 text-sm font-mono">Profile.js</div>
            </div>

            {/* Code Content Visualization */}
            <div className="font-mono text-sm space-y-4 text-gray-300 relative z-10">
                <div className="flex">
                    <span className="text-pink-500 mr-2">const</span>
                    <span className="text-blue-400">profile</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="pl-6">
                    <span className="text-purple-400">name:</span>
                    <span className="text-green-400 ml-2">'Musaddik Hossain',</span>
                </div>
                <div className="pl-6 code-line">
                    <span className="text-purple-400">roles:</span>
                    <span className="text-yellow-300 ml-2">['Project Manager', 'Developer', 'Ambassador'],</span>
                </div>
                <div className="pl-6">
                    <span className="text-purple-400">focus:</span>
                    <span className="text-green-400 ml-2">'Bridging Tech & Business',</span>
                </div>
                <div className="pl-6">
                    <span className="text-purple-400">status:</span>
                    <span className="text-green-400 ml-2">'Ready to Innovate',</span>
                </div>
                <div>
                     <span className="text-yellow-300">{`}`}</span>
                </div>
            </div>

            {/* Floating Elements inside card */}
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Bottom Info */}
             <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Compiling Success...
                    </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
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
