'use client';

import { motion } from 'framer-motion';

export default function VideoTestimonialsSection() {
  return (
    <section className="py-20 bg-cream/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Video Testimonials
          </h2>
          <p className="text-xl body-text text-earth/80 max-w-3xl mx-auto">
            Hear directly from clients about their transformational experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-sage/20 backdrop-blur-sm rounded-2xl aspect-video flex items-center justify-center mystical-border"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4 divine-shadow">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="body-text text-earth/80 font-medium">Video testimonials coming soon</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-sage/20 backdrop-blur-sm rounded-2xl aspect-video flex items-center justify-center mystical-border"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4 divine-shadow">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="body-text text-earth/80 font-medium">Video testimonials coming soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
