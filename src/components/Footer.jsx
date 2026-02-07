import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaDownload,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-2">
              <span className="text-white">Sunny</span>
              <span className="gradient-text-blue">Kumar</span>
            </h3>
            <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-start">
              Made with <FaHeart className="text-red-500 text-xs" /> © {currentYear}
            </p>
          </motion.div>

          {/* Social + Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/sunnykumar71"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sunny-kumar-53a6bb2a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:sunnymagnaxl@gmail.com"
              className="p-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>

            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=1znWrLsB3IuNiY3JhbZyl-oZ3Hz8fsqMH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm"
            >
              <FaDownload size={14} />
              Resume
            </a>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
          >
            <FaArrowUp size={14} />
            <span className="text-sm">Back to top</span>
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
