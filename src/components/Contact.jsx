import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaPhone } from "react-icons/fa";
import resume from "../assets/resume_sunny.pdf";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaGithub className="contact-icon text-white" />,
      label: "GitHub",
      value: "github.com/sunnykumar71",
      href: "https://github.com/sunnykumar71",
      external: true,
    },
    {
      icon: <FaLinkedin className="contact-icon text-blue-500" />,
      label: "LinkedIn",
      value: "sunny-kumar-53a6bb2a7",
      href: "https://www.linkedin.com/in/sunny-kumar-53a6bb2a7/",
      external: true,
    },
    {
      icon: <FaFilePdf className="contact-icon text-red-400" />,
      label: "Resume",
      value: "Download Resume",
      href: resume,
      download: "resume_sunny.pdf",
    },
    {
      icon: <FaEnvelope className="contact-icon text-green-400" />,
      label: "Email",
      value: "sunnymagnaxl@gmail.com",
      href: "mailto:sunnymagnaxl@gmail.com",
    },
    {
      icon: <FaPhone className="contact-icon text-yellow-400" />,
      label: "Phone",
      value: "+91 6207277021",
      href: "tel:+916207277021",
    },
  ];

  return (
    <section id="contact" className="min-h-screen px-6 py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mx-auto">Contact Me</h2>
          <p className="section-subheading mx-auto mt-6">
            Let's connect! Feel free to reach out for opportunities or just to say hi.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              download={item.download}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card contact-card block group"
            >
              {item.icon}
              <p className="font-semibold text-white mb-1">{item.label}</p>
              <p className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Prefer email? Send me a message directly:
          </p>
          <a
            href="mailto:sunnymagnaxl@gmail.com"
            className="btn-primary inline-flex"
          >
            <FaEnvelope />
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
