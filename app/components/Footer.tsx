'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@opencode', label: 'YouTube' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" grid md:grid-cols-3 gap-8 text-center"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Janith Wathsala
          </p>
          <li>
            <a href="mailto:your.email@example.com" className="hover:text-orange-500 transition-colors">
              Email: wathsalajanith@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">
             Mobile: +94 71-1519402
            </a>
          </li>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
