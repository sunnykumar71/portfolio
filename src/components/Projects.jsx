import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Frontend", "Full Stack", "Mobile"];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase skills, projects, and contact information with 3D animations.",
      tech: ["React.js", "Tailwind CSS", "Three.js"],
      category: "Frontend",
      github: "https://github.com/sunnykumar71/sunny-portfolio",
      live: "https://sunnykumar71.github.io/sunny-portfolio/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Todo Application",
      description:
        "Task management app with add, edit, and delete functionality with clean UI.",
      tech: ["React.js", "CSS"],
      category: "Frontend",
      github: "https://github.com/sunnykumar71",
      live: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "React Native Todo App",
      description:
        "Mobile application for managing daily tasks with native performance.",
      tech: ["React Native", "Expo"],
      category: "Mobile",
      github: "https://github.com/sunnykumar71",
      live: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Java Full Stack Project",
      description:
        "Full-stack web application with backend APIs and database integration.",
      tech: ["Java", "Spring Boot", "MySQL"],
      category: "Full Stack",
      github: "https://github.com/sunnykumar71",
      live: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mx-auto">Projects</h2>
          <p className="section-subheading mx-auto mt-6">
            Some of the projects I have built to practice and demonstrate my skills.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card project-card p-6 relative overflow-hidden group"
              >
                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-gray-800/80 rounded text-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
