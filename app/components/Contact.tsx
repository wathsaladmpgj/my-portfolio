'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaMedium, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'www.linkedin.com/in/janith-wathsala', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/wathsaladmpgj', label: 'GitHub' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@bluezhe-c5n', label: 'YouTube' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/qr/WFRWF6JAD3SMM1', label: 'Whatsapp' },
    { icon: <FaMedium />, url: 'https://medium.com/@yourusername', label: 'Medium' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/janith_wathsala88?igsh=cngxcjgzbWtpOTMx', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            CONNECT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Interested in collaborating or simply saying hello? I’d love to connect.
          </p>

          {/* Social Media Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                className="px-8 py-4 bg-transparent border border-gray-700 rounded-full text-white hover:border-orange-500 transition-all text-base font-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{social.icon}</span>
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
