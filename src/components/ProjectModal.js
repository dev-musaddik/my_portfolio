import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[80vw] h-[80vh] max-w-[1200px] max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-y-auto"
            style={{ transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <img
                  src={project.imageUrl || "/project.WEBP"}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg w-max hover:shadow-lg transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold py-2 px-4 rounded-lg w-max hover:shadow-lg transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
