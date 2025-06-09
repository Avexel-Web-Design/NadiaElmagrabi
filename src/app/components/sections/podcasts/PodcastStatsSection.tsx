'use client';

import { motion } from 'framer-motion';

export default function PodcastStatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Episodes</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Downloads</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">Rating</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Weekly</div>
            <div className="text-gray-600 font-medium">New Episodes</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
