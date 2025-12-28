'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes } from 'react-icons/fa';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'API Security Fundamentals 2025',
      issuer: 'APIsec University',
      date: '2025',
      description: 'The API Security Fundamentals course covers the core threats to APIs and challenges to prevent breach.',
      badge: './apisec1.png',
    },
    {
      title: 'Network Defense',
      issuer: 'Cisco',
      date: '2023',
      description: 'Proficiency in containerization and Docker ecosystem',
      badge: 'https://via.placeholder.com/200/ff7300/ffffff?text=Docker',
    },
    {
      title: 'Networking Devices and Initial Configuration',
      issuer: 'CNCF',
      date: '2023',
      description: 'completed the Networking Devices and Initial Configuration',
      badge: '/cisco1.png',
    },
    {
      title: 'API Begginer',
      issuer: 'Postman',
      date: '2024',
      description: 'Foundation in API concepts',
      badge: '/postman1.png',
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: '2024',
      description: 'Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and application',
      badge: 'postman2.png',
    },
    {
      title: 'GitHub Certified',
      issuer: 'GitHub',
      date: '2025',
      description: 'Advanced git hub for developers',
      badge: '/github.png',
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Professional certifications and credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCert(index)}
              className="bg-gray p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                  <img src={cert.badge} alt={cert.title} className="w-full h-full object-cover" />
                </div>
                <FaAward className="text-3xl text-orange-500 mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-orange-500 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 p-8 rounded-lg border border-orange-500 max-w-lg w-full relative"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                  <FaTimes />
                </button>
                <div className="text-center">
                  <img
                    src={certifications[selectedCert].badge}
                    alt={certifications[selectedCert].title}
                    className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-orange-500"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {certifications[selectedCert].title}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-2">
                    {certifications[selectedCert].issuer}
                  </p>
                  <p className="text-gray-400 mb-4">{certifications[selectedCert].date}</p>
                  <p className="text-gray-300">{certifications[selectedCert].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
