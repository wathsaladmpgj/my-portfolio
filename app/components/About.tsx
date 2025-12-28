'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: 'BSc (Hons) in Computer Networks',
      institution: 'NSBM Green University',
      year: '2023 - Present',
      description: 'Specializing in network infrastructure, cloud computing, and cybersecurity',
    },
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Passionate about technology and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              As a BSc (Hons) Computer Networks student, I am deeply passionate about technology and its 
              transformative power. My academic journey has equipped me with comprehensive knowledge in 
              network infrastructure, cloud computing, and cybersecurity.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in web development, API integration, CI/CD pipelines, and cloud networking. 
              My expertise spans across modern frameworks like Next.js, containerization with Docker, 
              and cloud platforms like AWS and Firebase.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond academics, I run a YouTube channel called <span className="text-orange-500 font-semibold">"OPEN CODE"</span>, 
              where I share my knowledge with the tech community. The channel focuses on tech education, 
              tutorials, and empowering aspiring developers to build innovative solutions.
            </p>
          </motion.div>

          {/* Profile Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Projects Completed', value: '10+' },
              { label: 'YouTube Subscribers', value: '1K+' },
              { label: 'Certifications', value: '10+' },
              { label: 'Years Experience', value: '1+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all"
              >
                <h4 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center gap-6 bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all"
              >
                <div className="text-4xl text-orange-500">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                  <p className="text-orange-500 font-semibold mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{item.year}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
