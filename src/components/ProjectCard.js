import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {

  // Randomly select one image from 1 to 9 — memoized so it doesn’t change every re-render
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return `/project${randomIndex}.webp`;
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const shortDescription =
    project.description?.length > 100
      ? project.description.slice(0, 100) + "..."
      : project.description;

  return (
    <>
      {/* Project Card */}
      <motion.div
        layout
        key={project._id}
        whileHover={{ scale: 1.03 }}
        className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={ randomImage ||project.imageUrl }
          alt={project.title}
          className="w-full h-40 md:h-48 object-cover rounded-t-xl"
        />
        <div className="p-4 flex flex-col">
          <h5 className="text-2xl font-semibold text-black dark:text-white mb-2 hover:text-orange-500 transition-all duration-300">
            {project.title}
          </h5>
          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-4">
            {shortDescription}
          </p>
          <div className="flex justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-orange-500 text-white font-medium text-sm py-2 px-4 rounded-full hover:shadow-lg transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-orange-500 text-white font-medium text-sm py-2 px-4 rounded-full hover:shadow-lg transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-orange-500 text-2xl font-bold"
              >
                ×
              </button>

              <div className="p-6 overflow-y-auto max-h-[90vh]">
                <img
                  src={randomImage ||  project.imageUrl }
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-xl mb-6"
                />
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line">
                  {project.description ||
                    "No detailed description provided for this project."}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 justify-center mt-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-indigo-500 to-orange-500 text-white font-medium text-lg py-2 px-6 rounded-full hover:shadow-lg transition-all"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium text-lg py-2 px-6 rounded-full hover:shadow-lg transition-all"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
