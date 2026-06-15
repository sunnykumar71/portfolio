import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaUser className="text-3xl text-blue-400" />,
      title: "Who I Am",
      description:
        "I'm Sunny Kumar, a B.Tech graduate in Computer Science and Engineering from IIIT Kalyani and a passionate Java Full Stack Developer. I specialize in building modern web applications using Java, Spring Boot, React.js, MySQL, HTML, CSS, and JavaScript. I enjoy solving real-world problems by developing clean, scalable, and efficient software solutions.",
    },
    {
      icon: <FaCode className="text-3xl text-purple-400" />,
      title: "What I Do",
      description:
        "I design and develop responsive full-stack web applications using Java, Spring Boot, React.js, MySQL, HTML, CSS, and JavaScript. I build secure REST APIs, create scalable backend systems, and develop intuitive user interfaces while following clean coding practices and using Git and GitHub for version control.",
    },
    {
      icon: <FaRocket className="text-3xl text-cyan-400" />,
      title: "What I Want",
      description:
        "I am seeking a Software Developer or Java Full Stack Developer role where I can apply my technical skills, contribute to real-world projects, and continue learning from experienced professionals. My goal is to build impactful software solutions while growing into a skilled full-stack engineer.",
    },
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mx-auto">About Me</h2>
          <p className="section-subheading mx-auto mt-6 max-w-3xl">
            Passionate about building scalable web applications with modern
            technologies and continuously learning to create impactful software
            solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>

              <h3 className="text-xl font-semibold mb-4 text-white">
                {card.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;