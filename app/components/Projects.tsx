'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'End-to-End DevOps Project on AWS',
      description: 'DevOps project that I designed and implemented using AWS, Kubernetes, CI/CD automation, security scanning, and full-stack monitoring.',
      technologies: ['Prometheus', 'Grafana', 'Docker', 'AWS', 'Kubernetes', 'CI/CD'],
      github: 'https://github.com/wathsaladmpgj/CI-CD',
      demo: 'https://demo.com',
      image: '/project1.png',
    },
    {
      title: 'Local Mail Server Setup on Linux Mint',
      description: 'built a fully functional local mail server on Linux Mint as a hands-on learning project to understand how email systems work internally.',
      technologies: ['Postfix', 'Dovecot', 'Mailutils', 'Linux'],
      demo: 'https://demo.com',
      image: '/project2.png',
    },
    {
      title: 'Warehouse Management System',
      description: 'A full-fledged Warehouse Management System built entirely using Java for the backend and JSP for the frontend.',
      technologies: ['JAVA', 'JSP', 'CSS & JS', 'MySQL'],
      github: 'https://github.com/wathsaladmpgj/warehouse_management_system',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/400x300/ff7300/ffffff?text=CI/CD+Platform',
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Modern web application with Next.js, Firebase, and real-time features',
      technologies: ['Next.js', 'Firebase', 'React', 'Node.js'],
      github: 'https://github.com/OpenStag/openstage-website',
      demo: 'https://openstag.vercel.app/',
      image: '/project4.png',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: index * 0.1 }}
              className="project-card h-96"
            >
              <div className="project-card-inner">
                {/* Front */}
                <div className="project-card-front  border border-gray-800 p-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div className="project-card-back bg-gradient-to-br from-orange-600 to-orange-800 p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white mb-6">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://www.youtube.com/@opencode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 rounded-full text-white hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-10 transition-all group"
          >
            <span className="font-medium">More Projects on LinkdIn</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
