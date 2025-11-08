import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLaptopCode, FaRobot, FaNetworkWired, FaCogs } from "react-icons/fa";

const HeroSection = () => {
  const [typingDone, setTypingDone] = useState(false);
  const controls = useAnimation();
  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CustomButton = ({ href, text }) => (
    <a
      href={href}
      className="relative inline-block px-6 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-blue-500 rounded-full overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20 rounded-full"></span>
    </a>
  );

  const floatingIcons = [
    { icon: <FaLaptopCode />, className: "text-orange-400", size: "text-7xl", x: 0, y: -offsetY * 0.05, rotate: offsetY * 0.1 },
    { icon: <FaRobot />, className: "text-blue-400", size: "text-6xl", x: 100, y: -offsetY * 0.08, rotate: -offsetY * 0.08 },
    { icon: <FaNetworkWired />, className: "text-green-400", size: "text-5xl", x: -120, y: -offsetY * 0.06, rotate: offsetY * 0.15 },
    { icon: <FaCogs />, className: "text-purple-400", size: "text-6xl", x: 50, y: offsetY * 0.05, rotate: -offsetY * 0.12 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-[75vh] px-6 py-16 md:py-28 gap-10">

        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left flex flex-col gap-6">
          <p className="text-sm tracking-widest text-gray-700 dark:text-gray-300 uppercase animate-fade-in-down">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in-up">
            Hay! i'm 
            {typingDone ? (
              ' Musaddik'
            ) : (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(' Musaddik').callFunction(() => setTypingDone(true)).start();
                }}
                options={{ autoStart: true, loop: false, delay: 75, cursor: '|' }}
              />
            )}
            <span className="ml-3 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              Hossain
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700/90 dark:text-gray-300 animate-fade-in">
            <Typewriter
              options={{
                strings: ['Future Engineer', 'Coder', 'Programmer', 'Tech Enthusiast', 'Problem Solver'],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 60,
              }}
            />
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <CustomButton href="#about" text="Learn more about me" />
            <CustomButton href="#projects" text="Explore projects" />
          </div>
        </div>

        {/* Right Icon Section */}
        <div className="flex-1 flex justify-center md:justify-end relative h-[400px]">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.size} ${item.className} cursor-pointer hover:scale-125 hover:shadow-lg transition-transform duration-300`}
              style={{ top: 150 + item.y, left: 150 + item.x, rotate: item.rotate }}
              animate={{ y: [item.y, item.y + 20, item.y], rotate: [item.rotate, item.rotate + 15, item.rotate] }}
              transition={{ repeat: Infinity, duration: 4 + index }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Layered Gradient & Glow Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full animate-spin-slow opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.25),transparent 70%)]" />
        <div className="absolute h-full w-full animate-pulse-slower opacity-25 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.2),transparent 60%)]" />
        <div className="absolute h-full w-full animate-bounce-slow opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent 60%)]" />
        <div className="absolute h-full w-full animate-wave-slow opacity-15 bg-[radial-gradient(circle_at_30%_50%,rgba(236,72,153,0.1),transparent 60%)]" />
      </div>
    </motion.section>
  );
};

export default HeroSection;
