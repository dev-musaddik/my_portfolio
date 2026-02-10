import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import HackingOverlay from "./HackingOverlay";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
  // Wait, the error said isAuthenticated, loading, user are unused.
  // And logout is unused.
  // Let's check where they were used. They were used in the old authLinks which I removed/commented out effectively by not using it in the new return.
  
  // Clean up:
  const [isDeveloper, setIsDeveloper] = useState(true);
  const [hacking, setHacking] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  // We don't need auth state if we aren't using it in the Navbar anymore?
  // User wanted "Simple" mode to show Blog/Register/Login.
  // "Heated" shows Portfolio.
  // I replaced the logic for `authLinks` with `simpleLinks`.
  // So I can remove the unused auth logic if it's truly not needed for the current design.
  // Or I should check if "Simple" mode WAS supposed to show "Logout" if logged in?
  // The user said "Simple... show Blog, Register, Login".
  // If logged in, maybe "Login" should be "Logout"?
  // The previous code had `isAuthenticated ? authLinks : PersonalInfoNav`.
  // I replaced it with `simpleLinks` which has hardcoded /login.
  // For now, to fix the build, I will remove the unused variables.
  
  const handleToggle = () => {
    const newMode = !isDeveloper;
    setIsDeveloper(newMode);
    setHacking(true);
    setTimeout(() => setHacking(false), 1200);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Go Pro" }, // Renamed from Experience for punchiness? No, keep standard names but cleaner
    { id: "projects", label: "Work" },
    { id: "education", label: "Edu" },
    { id: "contact", label: "Contact" },
  ];

  const simpleLinks = [
    { id: "blogs", label: "Blog", to: "/blogs" },
    { id: "register", label: "Register", to: "/register" },
    { id: "login", label: "Login", to: "/login" },
  ];

  /* Scroll logic for Smart Navbar */
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) { 
            if (currentScrollY > lastScrollY) {
            setIsVisible(false);
            } else {
            setIsVisible(true);
            }
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      {hacking && <HackingOverlay active={true} />}
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="flex items-center gap-4 bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] px-6 py-3 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)]">
            
            {/* Logo Area */}
            <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mr-4"
            >
            MM
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
            {(isDeveloper ? navLinks : simpleLinks).map((link) => (
                link.to ? (
                    <Link
                    key={link.id}
                    to={link.to}
                    onMouseEnter={() => setHoveredTab(link.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                    >
                    {hoveredTab === link.id && (
                        <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 z-[-1] bg-gray-200/50 dark:bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {link.label}
                    </Link>
                ) : (
                    <a
                    key={link.id}
                    href={link.id === 'experience' ? '#experience' : `#${link.id}`}
                    onMouseEnter={() => setHoveredTab(link.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                    >
                    {hoveredTab === link.id && (
                        <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 z-[-1] bg-gray-200/50 dark:bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {link.label === 'Go Pro' ? 'Experience' : link.label}
                    </a>
                )
            ))}
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2 hidden md:block" />

            {/* Actions Area */}
            <div className="flex items-center gap-3">
                {/* Mode Toggle */}
                <button
                    onClick={handleToggle}
                    className="relative group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    title={isDeveloper ? "Switch to Personal" : "Switch to Developer"}
                >
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${isDeveloper ? 'border-cyan-500 bg-cyan-500/20' : 'border-purple-500 bg-purple-500/20'}`} />
                </button>

                <ThemeToggle />

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>

        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;