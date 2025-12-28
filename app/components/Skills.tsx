'use client';

import { motion } from 'framer-motion';
import { DiJenkins } from 'react-icons/di';
import {
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaNode,
  FaReact,
  FaNetworkWired,
  FaPython,
  FaJenkins,
} from 'react-icons/fa';
import {
  SiPrometheus,
  SiGrafana,
  SiFirebase,
  SiNextdotjs,
  SiGnubash,
  SiPython,
  SiSpringboot,
  SiJenkins,
} from 'react-icons/si';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const skills = [
    { name: 'Linux', icon: <FaLinux />, color: 'text-yellow-500' },
    { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
    { name: 'AWS', icon: <FaAws />, color: 'text-orange-400' },
    { name: 'GNS3', icon: <FaNetworkWired />, color: 'text-green-500' },
    { name: 'Prometheus', icon: <SiPrometheus />, color: 'text-red-400' },
    { name: 'Grafana', icon: <SiGrafana />, color: 'text-orange-500' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
    { name: 'Jenkins', icon: <SiJenkins />, color: 'text-cyan-400' },
    { name: 'Spring', icon: <SiSpringboot />, color: 'text-green-600' },
    { name: 'Python', icon: <SiPython/>, color: 'text-gray-400' },
  ];

  return (
    <section id="skills" className="section-padding ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: isMobile ? '0px' : '-50px' }}
              transition={{ duration: isMobile ? 0.2 : 0.4, delay: isMobile ? 0 : index * 0.05 }}
              whileHover={isMobile ? {} : { scale: 1.05, y: -5 }}
              className="skill-card bg-black p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all group relative"
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`text-5xl ${skill.color} ${!isMobile && 'group-hover:scale-110'} transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold">{skill.name}</h3>
              </div>
              
              {/* Tooltip - Hidden on mobile */}
              {!isMobile && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-orange-500 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {skill.name}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Cloud & DevOps',
              items: ['AWS', 'Docker', 'CI/CD', 'Prometheus', 'Grafana','Git & GitHub'],
            },
            {
              title: 'Web/Application Development',
              items: ['Next.js', 'React', 'Node.js', 'Firebase','Spring', 'API Integration'],
            },
            {
              title: 'Networking',
              items: ['GNS3', 'Linux', 'Network Security', 'Cloud Networking','Cisco Packet Tracer','Network Devices'],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black p-6 rounded-lg border border-gray-800 "
            >
              <h3 className="text-xl font-bold gradient-text mb-4">{category.title}</h3>
              <ul className="space-y-2 grid md:grid-cols-2 gap-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
