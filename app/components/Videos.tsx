'use client';

import { motion } from 'framer-motion';
import { FaPlay, FaClock, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'GitHub sinhala | IT කරනවා නම් අනිවාර්යයෙන් දැනගත යුතු GitHub',
      description: 'how to create a GitHub repository and manage your project using basic Git commands. I explain how to create a repo on GitHub, clone it to your local machine, check file changes using git status, save changes with git commit, and upload your project using git push.',
      thumbnail: '/yt1.jpg',
      duration: '11:32',
      videoUrl: 'https://youtu.be/DaDwoa_M_J4?si=vwhYX3EaiPexUNP3',
    },
    {
      id: 2,
      title: 'GitHub sinhala | Git and Git Hub සිංහලෙන්',
      description: 'Learn Git and GitHub in simple language for beginners. This video explains what Git and GitHub are, why developers use them, and the main benefits like version control, teamwork, and code safety. You will also learn how to install Git, configure it, and connect your projects to GitHub step by step.',
      thumbnail: '/yt2.jpg',
      duration: '06:57',
      videoUrl: 'https://youtu.be/GB8Q1JVgjLk?si=A3Xh5_2oxaV478sX',
    },
    {
      id: 3,
      title: 'ඉක්මනින් code කරමු. vs code + git hub copilot',
      description: 'GitHub Copilot is an AI-powered coding assistant that helps developers by generating code suggestions as you type. Whether you’re a beginner or an experienced coder, this tool can save you time and boost your productivity.',
      thumbnail: '/yt3.jpg',
      duration: '04:33',
      videoUrl: 'https://youtu.be/k9mVxZo1WAo?si=grznvdOynsfqVfEv',
    },
  ];

  return (
    <section id="videos" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            CONTENT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Videos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tutorials, talks, and insights on cloud-native development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-800 overflow-hidden">
                  {/* Placeholder - Replace with actual video thumbnails */}
                  <img src={video.thumbnail} alt={video.title} />
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 px-3 py-1 rounded-full flex items-center gap-2">
                    <FaClock className="text-white text-xs" />
                    <span className="text-white text-sm font-medium">{video.duration}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* More Videos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://www.youtube.com/@opencode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 rounded-full text-white hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-10 transition-all group"
          >
            <span className="font-medium">More videos on YouTube</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
