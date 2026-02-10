import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const CurrentRole = () => {
  const responsibilities = [
    "Managing client communication & project delivery",
    "Coordinating cross-functional teams (Design & Ads)",
    "Monitoring campaign KPIs & growth metrics",
    "Optimizing operational workflows"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
        
        {/* Left: Role Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">Actively Working</span>
          </div>

          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Project Manager
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-lg">
                <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-400" />
                    <span className="text-indigo-200 font-medium">Axelman Digital</span>
                </div>
                <div className="hidden sm:block text-gray-600">|</div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>Remote</span>
                </div>
            </div>
          </div>

           <a 
            href="https://axelmandigital.co.uk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold border-b border-transparent hover:border-white transition-all pb-0.5 group"
           >
            Visit Company <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

        {/* Right: Responsibilities Card */}
        <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-indigo-500 pl-4">
                    Key Responsibilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {responsibilities.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm md:text-base leading-snug">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </motion.section>
  );
};

export default CurrentRole;
