'use client';

import { motion } from 'framer-motion';

export default function ResourcesCTASection() {
  return (
    <section className="py-20 bg-sage/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Ready for Personalized Guidance?
          </h2>
          <p className="text-xl body-text text-earth/80 mb-8 max-w-2xl mx-auto">
            While resources are powerful, nothing replaces the transformational impact of personalized spiritual guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-cream px-8 py-4 rounded-full font-semibold sacred-text hover:bg-earth hover:text-cream/90 transition-all duration-300 divine-shadow"
            >
              Book a Session
            </a>
            <a
              href="/embody-your-souls-purpose"
              className="border-2 border-forest text-forest px-8 py-4 rounded-full font-semibold sacred-text hover:bg-forest hover:text-cream transition-all duration-300"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
