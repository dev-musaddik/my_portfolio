import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Sparkles, Briefcase } from "lucide-react";

const AboutSection = () => {
  const SectionTitle = ({ eyebrow, title, subtitle }) => (
    <div className="max-w-3xl mx-auto text-center space-y-3">
      {eyebrow && (
        <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-600 dark:text-gray-400">
          <Sparkles className="h-4 w-4" /> {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-bold">
  <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
    {title}
  </span>
</h1>

      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 via-indigo-50/70 to-fuchsia-50/60 dark:from-gray-900/80 dark:via-gray-800/70 dark:to-gray-900/60 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
    >
      <SectionTitle
        eyebrow="About"
        title="About Me"
        subtitle="Turning creativity and logic into powerful web experiences."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side — Text Section */}
        <div className="order-2 lg:order-1 space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-500/10 via-orange-500/10 to-rose-500/10 rounded-xl border border-white/10 shadow-md">
            <Briefcase className="text-orange-500 w-6 h-6" />
            <p className="text-sm md:text-base font-medium">
              Currently working as a <span className="font-semibold text-orange-500">Shopify Developer & SEO Intern</span> at {""}
              <a
                href="https://axelmandigital.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline font-semibold"
              >
                Axelman Digital
              </a>{" "}
              {/* (Remote, BD Time: 3 PM – 12 AM) */}
            </p>
          </div>

          <p className="text-lg font-medium">
            I'm <span className="text-orange-500 font-semibold">Musaddik Hossain</span>, a passionate Full-Stack Developer who thrives on
            building fast, modern, and user-focused web applications that leave
            a lasting impression.
          </p>

          <p>
            I specialize in crafting scalable solutions using technologies like
            <span className="text-indigo-500 font-medium"> React, Node.js, Express, Tailwind CSS</span>, and
            <span className="text-rose-500 font-medium"> TypeScript</span>. My focus is to merge creativity with performance,
            ensuring each project is beautiful and functional.
          </p>

          <p>
            At Axelman Digital, I collaborate with talented teams to design and
            optimize Shopify stores, ensuring top-notch SEO performance and smooth
            user experiences across platforms.
          </p>

          <p>
            Beyond work, I continuously explore new tools, frameworks, and design
            systems to stay at the cutting edge of frontend and backend development.
          </p>

          {/* Resume Button */}
          <a
            href="/Musaddik_Hossain_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-orange-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Right Side — Profile Image */}
        <div className="flex justify-center order-1 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-orange-500 to-rose-500 blur opacity-40 group-hover:opacity-70 transition duration-500" />
            <img
              src="/profile.webp"
              alt="Musaddik Hossain Profile"
              className="relative rounded-full h-72 w-72 md:h-96 md:w-96 object-cover border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;