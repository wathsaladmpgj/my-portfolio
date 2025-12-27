'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket, FaGithub } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            My journey in tech communities and organizations
          </p>
        </motion.div>

        {/* IEEE Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 pixel-blast-bg p-8 rounded-lg border border-gray-800"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="text-5xl text-orange-500">
              <FaUsers />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                IEEE Computer Society Student Branch Chapter of NSBM
              </h3>
              <p className="text-orange-500 font-semibold mb-4">Member & Leader | 2025 - Present</p>
              <p className="text-gray-300 mb-4">
                Active member and leader in organizing technical workshops, hackathons, and community events. 
                Collaborated with team members using GitHub for project management and code collaboration.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h4 className="text-orange-500 font-semibold mb-2">Teamwork</h4>
              <p className="text-gray-300 text-sm">
                Led teams in organizing technical events and workshops for over 100+ students
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h4 className="text-orange-500 font-semibold mb-2">GitHub Collaboration</h4>
              <p className="text-gray-300 text-sm">
                Managed multiple projects using Git version control and collaborative workflows
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h4 className="text-orange-500 font-semibold mb-2">Technical Skills</h4>
              <p className="text-gray-300 text-sm">
                Enhanced skills in web development,Web application development and cloud computing
              </p>
            </div>
          </div>
        </motion.div>

        {/* OpenStage Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black pixel-blast-bg p-8 rounded-lg border border-gray-800"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="text-5xl gradient-text">
              <FaRocket />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                OpenStage - Co-Founder
              </h3>
              <p className="text-orange-500 font-semibold mb-4">Co-Founder & Developer | 2025 - Present</p>
              <p className="text-gray-300 mb-6">
                Co-founded OpenStage, an innovative platform designed to empower students through 
                collaboration, skill development, and creative innovation. The platform bridges 
                the gap between theoretical knowledge and practical application.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-orange-500">
                  <FaLightbulb />
                </div>
                <h4 className="text-xl font-bold text-white">Vision</h4>
              </div>
              <p className="text-gray-300">
                To create a global platform where students can showcase their talents, 
                collaborate on projects, and build innovative solutions that address real-world challenges.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-orange-500">
                  <FaGithub />
                </div>
                <h4 className="text-xl font-bold text-white">Mission</h4>
              </div>
              <p className="text-gray-300">
                Empower the next generation of innovators by providing tools, resources, 
                and community support to transform ideas into impactful projects and foster continuous learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
