import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Sparkles, Briefcase, Flame } from "lucide-react";

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
      className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 via-indigo-50/70 to-fuchsia-50/60 dark:from-gray-900/80 dark:via-gray-800/70 dark:to-gray-900/60 backdrop-blur-xl p-4 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
    >
      <SectionTitle
        eyebrow="About"
        title="About Me"
        subtitle="Turning creativity and logic into powerful web experiences."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side — Text Section */}
        <div className="order-2 lg:order-1 space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-500/10 via-orange-500/10 to-rose-500/10 rounded-xl border border-white/10 shadow-md">
            <Briefcase className="text-orange-500 w-6 h-6" />
            <p className="text-sm md:text-base font-medium">
              Currently driving success as a <span className="font-semibold text-orange-500">Project Manager</span> at {""}
              <a
                href="https://axelmandigital.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline font-semibold"
              >
                Axelman Digital
              </a>
              <span className="inline-flex items-center gap-1 ml-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-2 py-0.5 rounded-full border border-orange-200 dark:border-orange-800 animate-pulse">
                <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" />
                <span className="text-sm font-bold bg-gradient-to-b from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                  UK
                </span>
              </span>
            </p>
          </div>

          <p className="text-lg font-medium">
            I'm <span className="text-orange-500 font-semibold">Musaddik Hossain</span>. I bridge the gap between complex engineering and strategic business goals. 
            More than just managing timelines, I bring deep technical expertise to leadership.
          </p>

          <p>
            With a strong background in <span className="text-indigo-500 font-medium">Full-Stack Development (MERN, TypeScript)</span>, 
            I understand the code behind the product. This empowers me to lead development teams effectively, make informed architectural decisions, 
            and ensure that quality is built into every step of the process.
          </p>

          <p>
            At <span className="font-semibold">Axelman Digital</span>, I advocate for both the user and the developer, optimizing workflows 
            to deliver high-performance digital solutions that drive real business growth.
          </p>

          <p>
            I am passionate about building systems that scale and teams that thrive.
          </p>

          {/* Resume Button */}
          <a
            href="/Musaddik_Hossain_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-orange-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Right Side — Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
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