'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Monitoring Dashboard',
      description: 'Real-time monitoring solution using Prometheus and Grafana for cloud infrastructure',
      technologies: ['Prometheus', 'Grafana', 'Docker', 'AWS'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo.com',
      image: '/myimage.jpg',
    },
    {
      title: 'Network Automation Tool',
      description: 'Automated network configuration and management system using Python and GNS3',
      technologies: ['Python', 'GNS3', 'Bash', 'Linux'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/400x300/ff7300/ffffff?text=Network+Automation',
    },
    {
      title: 'CI/CD Pipeline Platform',
      description: 'Complete CI/CD solution with automated testing and deployment',
      technologies: ['Docker', 'Git', 'Node.js', 'AWS'],
      github: 'https://github.com/yourusername/project3',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/400x300/ff7300/ffffff?text=CI/CD+Platform',
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Modern web application with Next.js, Firebase, and real-time features',
      technologies: ['Next.js', 'Firebase', 'React', 'Node.js'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/400x300/ff7300/ffffff?text=Web+Application',
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

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default Projects;
