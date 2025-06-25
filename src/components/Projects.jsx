import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section__header">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="proj-card"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            whileHover="hover"
            variants={{
              hover: { rotateX: 5, rotateY: 5, scale: 1.02 },
            }}
          >
            <div className="proj-image-wrapper">
              <motion.img
                src={project.image}
                alt={project.title}
                className="proj-image"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
              />
              <div className="shimmer" />
            </div>

            <motion.h3
              className="proj-title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 + 0.4, duration: 0.4 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="proj-desc"
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 + 0.55, duration: 0.4 }}
            >
              {project.description}
            </motion.p>

            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-btn"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              View Project
              <span className="underline" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
