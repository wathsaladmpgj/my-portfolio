'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete?: () => void;
}

const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
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
    // Generate particles only on client side
    const particleData = [...Array(50)].map((_, i) => ({
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
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
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
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 mx-auto border-4 border-orange-500/30 border-t-orange-500 rounded-full"
            />
            
            {/* Inner Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl shadow-orange-500/50 border-2 border-orange-500">
                <img 
                  src="/myimage.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className = 'w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50';
                      parent.innerHTML = '<span class="text-3xl font-bold text-white">W</span>';
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
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Loading</span>
          </h2>
          
          {/* Progress Bar */}
          <div className="w-64 mx-auto bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Percentage */}
          <motion.p
            className="text-gray-400 mt-4 text-xl font-semibold"
            key={progress}
          >
            {progress}%
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-2 justify-center mt-6"
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
              className="w-3 h-3 bg-orange-500 rounded-full"
            />
          ))}
        </motion.div>

        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="text-gray-500 mt-8 text-sm"
        >
          Preparing your experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
