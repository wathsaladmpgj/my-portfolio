'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaVideo,
  FaCertificate,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Videos', href: '#videos', icon: <FaVideo /> },
    { name: 'Certifications', href: '#certifications', icon: <FaCertificate /> },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 120;

          menuItems.forEach(item => {
            const section = document.getElementById(item.href.substring(1));
            if (section) {
              if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
              ) {
                setActiveSection(item.href.substring(1));
              }
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP NAV BAR */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-black/90 backdrop-blur-lg center pt-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-16 relative">
            {/* Mobile Logo - Left Side */}
            <div className="md:hidden absolute left-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                JW
              </span>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex gap-2 bg-gray-900/60 rounded-full p-2 border border-gray-800">
              {menuItems.map(item => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(item.href);
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              {/* Theme Toggle Button - Desktop */}
              <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* Mobile Button (kept visually at right while nav is centered) */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white text-2xl absolute right-4"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-72 bg-black z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-semibold">Navigation</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-3">
              {menuItems.map(item => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo(item.href);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-3 text-lg px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle Button - Mobile */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 text-lg px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all w-full"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
