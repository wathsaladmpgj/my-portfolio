'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete?: () => void;
}

const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    initialX: number;
    initialY: number;
    initialOpacity: number;
    animateX: number[];
    animateY: number[];
    duration: number;
  }>>([]);

  useEffect(() => {
    // Detect if mobile
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    // Generate fewer particles on mobile for better performance
    const particleCount = checkMobile() ? 15 : 50;
    const particleData = [...Array(particleCount)].map((_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      initialOpacity: Math.random() * 0.5 + 0.2,
      animateX: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      animateY: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      duration: Math.random() * 20 + 10,
    }));
    setParticles(particleData);
  }, []);

  useEffect(() => {
    // Faster loading on mobile for better UX
    const loadingSpeed = isMobile ? 40 : 30;
    const incrementAmount = isMobile ? 3 : 2;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 300); // Shorter delay on mobile
          return 100;
        }
        return prev + incrementAmount;
      });
    }, loadingSpeed);

    return () => clearInterval(timer);
  }, [onLoadingComplete, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden"
      style={{
        // Prevent scrolling on mobile
        touchAction: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Animated Particles Background - Optimized for mobile */}
      <div className="absolute inset-0" style={{ willChange: 'auto' }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute ${isMobile ? 'w-1 h-1' : 'w-1 h-1'} bg-orange-500 rounded-full`}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
              opacity: particle.initialOpacity,
            }}
            animate={{
              x: particle.animateX,
              y: particle.animateY,
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Animated Logo - Optimized for mobile */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 md:mb-8"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: isMobile ? 2.5 : 2, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto border-4 border-orange-500/30 border-t-orange-500 rounded-full"
              style={{ willChange: 'transform' }}
            />
            
            {/* Inner Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ willChange: 'transform' }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-2xl shadow-orange-500/50 border-2 border-orange-500">
                <img 
                  src="/myimage.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className = 'w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50';
                      parent.innerHTML = '<span class="text-2xl md:text-3xl font-bold text-white">W</span>';
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Loading</span>
          </h2>
          
          {/* Progress Bar */}
          <div className="w-48 md:w-64 mx-auto bg-gray-800 rounded-full h-1.5 md:h-2 overflow-hidden shadow-lg">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'width' }}
            />
          </div>
          
          {/* Percentage */}
          <motion.p
            className="text-gray-400 mt-3 md:mt-4 text-lg md:text-xl font-semibold tabular-nums"
            key={progress}
          >
            {progress}%
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 justify-center mt-4 md:mt-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full"
              style={{ willChange: 'transform, opacity' }}
            />
          ))}
        </motion.div>

        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="text-gray-500 mt-6 md:mt-8 text-xs md:text-sm"
        >
          {isMobile ? 'Loading your experience...' : 'Preparing your experience...'}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
