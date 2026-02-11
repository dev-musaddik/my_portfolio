import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MobileNav = ({ isDeveloper, setIsDeveloper, navLinks, simpleLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setIsOpen(false);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const activeLinks = isDeveloper ? navLinks : simpleLinks;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-gray-800 dark:text-white hover:bg-white/10 rounded-full transition-colors"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-3xl origin-top z-40 flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="absolute top-6 left-6">
                 {/* Mobile Toggle */}
                 <button
                    onClick={() => {
                        setIsDeveloper(!isDeveloper);
                        // Optional: close menu or keep open? Keep open to explore.
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-sm font-medium"
                >
                    <div className={`w-3 h-3 rounded-full ${isDeveloper ? 'bg-cyan-500' : 'bg-purple-500'}`} />
                    {isDeveloper ? 'Developer Mode' : 'Personal Mode'}
                </button>
            </div>

            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-6 items-center justify-center text-center"
            >
              {activeLinks.map((link) => (
                <div key={link.id} className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                        {link.to ? (
                            <Link
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-purple-400 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                href={link.id === 'experience' ? '#experience' : `#${link.id}`}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-purple-400 transition-colors"
                            >
                                {link.label === 'Go Pro' ? 'Experience' : link.label}
                            </a>
                        )}
                    </motion.div>
                </div>
              ))}
              
              {!isDeveloper && (
                  <div className="overflow-hidden mt-8">
                       <motion.div variants={mobileLinkVars}>
                            <button
                                onClick={logout}
                                className="text-xl font-medium text-red-500 hover:text-red-400 transition-colors"
                            >
                                Logout
                            </button>
                       </motion.div>
                  </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
