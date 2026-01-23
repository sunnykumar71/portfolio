import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaMobileAlt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaBrain,
  FaServer,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiFirebase,
  SiExpo,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="skill-icon text-cyan-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Backend",
      icon: <FaServer className="skill-icon text-green-400" />,
      skills: ["Java", "Spring Boot", "REST APIs", "JWT Auth"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Database",
      icon: <FaDatabase className="skill-icon text-yellow-400" />,
      skills: ["MySQL", "MongoDB"],
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt className="skill-icon text-purple-400" />,
      skills: ["React Native", "Expo"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="skill-icon text-orange-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS", "Firebase"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Other",
      icon: <FaBrain className="skill-icon text-pink-400" />,
      skills: ["Problem Solving", "DSA", "System Design"],
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mx-auto">Skills</h2>
          <p className="section-subheading mx-auto mt-6">
            Technologies and tools I work with to build amazing products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800/80 rounded-full text-sm text-gray-300 border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
