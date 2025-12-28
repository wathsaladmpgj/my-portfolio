'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Loading from './components/Loading';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Videos = lazy(() => import('./components/Videos'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    // Prevent body scroll during loading
    if (typeof document !== 'undefined') {
      document.body.classList.add('loading');
    }

    // Faster loading on mobile devices
    const loadingTime = checkMobile() ? 1200 : 1500;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable body scroll
      if (typeof document !== 'undefined') {
        document.body.classList.remove('loading');
      }
    }, loadingTime);

    return () => {
      clearTimeout(timer);
      if (typeof document !== 'undefined') {
        document.body.classList.remove('loading');
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loading key="loading" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black light:bg-white transition-colors duration-300">
          <Navigation />
          <Hero />
          <Suspense fallback={<div className="min-h-screen" />}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Videos />
            <Certifications />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      )}
    </ThemeProvider>
  );
}
