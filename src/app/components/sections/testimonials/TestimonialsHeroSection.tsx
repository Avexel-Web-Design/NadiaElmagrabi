'use client';

import { motion } from 'framer-motion';

export default function TestimonialsHeroSection() {
  return (
    <section className="muted-spiritual text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold sacred-text mb-6">
            Client <span className="text-gold">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 body-text max-w-3xl mx-auto">
            Real stories of transformation, healing, and awakening from those who have embarked on their soul's journey
          </p>
        </motion.div>
      </div>
    </section>
  );
}
