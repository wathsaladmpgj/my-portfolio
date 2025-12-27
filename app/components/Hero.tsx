'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import PixelBlast from './PixelBlast';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Pixel Blast Background */}
      <div className="absolute inset-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#FFA500"
          patternScale={2}
          patternDensity={1}
          enableRipples={true}
          transparent={true}
          edgeFade={0.5}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">Hellow,</span>
              <br />
              <span className="gradient-text">I'm Wathsala</span>
              <br />
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              IT undergraduate
            </motion.p>

            <div className="mb-6 text-2xl md:text-3xl h-20">
              <TypeAnimation
                sequence={[
                  'Janith Wathsala',
                  2000,
                  'BSc (Hons) Computer Networks Student',
                  2000,
                  'Building the future of connected experiences through innovation',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text font-semibold"
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Building the future of connected experiences through innovation
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="/cv.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                <FaDownload />
                Download CV
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl shadow-orange-500/50 float-animation"
              >
                <img
                  src="/myimage.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400/ff7300/ffffff?text=Your+Photo';
                  }}
                />
              </motion.div>
              {/* Decorative Circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-orange-500/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-orange-400/20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
