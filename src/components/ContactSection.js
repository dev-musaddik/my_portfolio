import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { submitContactMessage } from '../api/axiosInstance';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactMessage(formState);
      alert("Thanks for reaching out! I'll get back to you soon.");
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8801704253995",
      href: "tel:+8801704253995",
      color: "text-green-500 bg-green-500/10"
    },
    {
      icon: Mail,
      label: "Email",
      value: "musaddikh13@gmail.com",
      href: "mailto:musaddikh13@gmail.com",
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajbari, 7700 Bangladesh",
      href: "#",
      color: "text-purple-500 bg-purple-500/10"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Have a project in mind or want to discuss the latest tech? I'm just a message away.
            </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left: Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
            >
                <div className="space-y-6">
                    {contactDetails.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
                        >
                            <div className={`p-3 rounded-xl ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.label}</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                     
                     <h3 className="text-xl font-bold mb-4 z-10 relative">Find me online</h3>
                     <div className="flex gap-4 z-10 relative">
                        <a href="https://github.com/dev-musaddik" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/musaddikh13/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                     </div>
                </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 dark:border-gray-800 relative z-10"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea 
                            id="message" 
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                            required
                        />
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                        {!loading && <Send className="w-5 h-5" />}
                    </motion.button>
                </form>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
