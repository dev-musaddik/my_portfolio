import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { axiosInstance } from "../api/axiosInstance";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axiosInstance.get(`/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error("Error fetching project details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Project not found!
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-5xl mx-auto py-16 px-6 text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to="/projects"
        className="inline-block mb-6 text-indigo-500 hover:orange-500 font-semibold transition"
      >
        ← Back to Projects
      </Link>

      <div className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
        <img
          src={project.imageUrl || "/project.WEBP"}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            {project.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
            {project.fullDescription || project.description}
          </p>

          {project.technologies && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
