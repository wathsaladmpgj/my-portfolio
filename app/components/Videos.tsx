'use client';

import { motion } from 'framer-motion';
import { FaPlay, FaClock, FaArrowRight } from 'react-icons/fa';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'Building a Serverless Content Moderation System with AWS',
      description: 'Complete workshop recording on building a serverless content moderation system using AWS, presented at Rootcode Cloud Community meetup. Learn end-to-end implementation from architectural design to live deployment with Amazon Rekognition, Lambda, S3, API Gateway, SQS, and CloudWatch.',
      thumbnail: '/videos/video1.jpg',
      duration: '11:32',
      videoUrl: 'https://youtu.be/DaDwoa_M_J4?si=vwhYX3EaiPexUNP3',
    },
    {
      id: 2,
      title: 'AWS Serverless Framework Tutorial - Deploy Node.js API in Minutes',
      description: 'Full guest lecture for AWS Cloud Club Sri Lanka covering serverless basics, deploying Node.js Express API, and building complete applications with DynamoDB. Learn auto-scaling, pay-for-idle benefits, and serverless architecture patterns.',
      thumbnail: '/videos/video2.jpg',
      duration: '33:53',
      videoUrl: 'https://www.youtube.com/watch?v=your-video-2',
    },
    {
      id: 3,
      title: 'AWS VPC Setup Tutorial in Sinhala - Cloud Architecture Basics',
      description: 'Step-by-step guide in Sinhala on building secure and scalable server architecture on AWS Cloud. Learn VPC setup, public/private subnets, Internet Gateway, NAT Gateway, route tables, and security best practices.',
      thumbnail: '/videos/video3.jpg',
      duration: '10:58',
      videoUrl: 'https://www.youtube.com/watch?v=your-video-3',
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
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <FaPlay className="text-white text-5xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  
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
