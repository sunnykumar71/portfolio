import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaUser className="text-3xl text-blue-400" />,
      title: "Who I Am",
      description:
        "I am a final-year Computer Science and Engineering undergraduate at the Indian Institute of Information Technology (IIIT), Kalyani. I have a strong interest in software development and problem-solving. I enjoy learning concepts deeply and applying them in real-world projects.",
    },
    {
      icon: <FaCode className="text-3xl text-purple-400" />,
      title: "What I Do",
      description:
        "I develop full-stack web and mobile applications using Java, Spring Boot, React.js, React Native, MongoDB, MySQL, and RESTful APIs. I design modular backend architectures, implement JWT authentication, and build responsive frontends with modern CSS frameworks.",
    },
    {
      icon: <FaRocket className="text-3xl text-cyan-400" />,
      title: "What I Want",
      description:
        "I am actively seeking entry-level opportunities as a Full-Stack Developer or Backend Developer. I want to contribute to real-world software systems, learn from experienced engineers, and integrate AI/ML with web and mobile applications.",
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
          <p className="section-subheading mx-auto mt-6">
            A brief introduction about who I am, what I do, and what I'm aiming for.
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
              className="glass-card p-8 text-center"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
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
