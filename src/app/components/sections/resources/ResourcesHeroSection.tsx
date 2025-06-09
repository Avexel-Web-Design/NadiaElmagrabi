'use client';

import { motion } from 'framer-motion';

export default function ResourcesHeroSection() {
  return (
    <section className="nature-gradient text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold sacred-text mb-6">
            Spiritual <span className="text-gold">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 body-text max-w-3xl mx-auto">
            Discover transformational tools, guides, and teachings to support your spiritual journey and personal growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}
