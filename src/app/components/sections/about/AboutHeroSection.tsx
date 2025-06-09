'use client';

import { motion } from 'framer-motion';

export default function AboutHeroSection() {
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
            Meet <span className="text-purple-600">Nadia Elmagrabi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Transformational Guide | Intuitive Healer | Ancestral & Past-Life Specialist
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Helping women break the inherited cycles that keep them small, silent, and stuck through deep ancestral healing, past-life work, and soul-level transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
