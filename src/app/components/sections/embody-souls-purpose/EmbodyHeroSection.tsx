'use client';

import { motion } from 'framer-motion';

export default function EmbodyHeroSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Human Design & Past Life Regression
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-8">
            Embody Your Soul's Purpose
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A transformative journey to align with your true calling. This offering combines Human Design and Past Life Regression to help you access the wisdom within and guide you toward embodying your soul's purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
