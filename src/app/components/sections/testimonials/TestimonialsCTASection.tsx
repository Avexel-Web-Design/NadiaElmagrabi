'use client';

import { motion } from 'framer-motion';

export default function TestimonialsCTASection() {
  return (
    <section className="py-20 muted-spiritual">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-cream mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl body-text text-cream/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of others who have transformed their lives through authentic spiritual guidance and healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream text-forest px-8 py-4 rounded-full font-semibold sacred-text hover:bg-cream/90 hover:text-earth transition-all duration-300 divine-shadow"
            >
              Book Your Session
            </a>
            <a
              href="/embody-your-souls-purpose"
              className="border-2 border-cream text-cream px-8 py-4 rounded-full font-semibold sacred-text hover:bg-cream hover:text-forest transition-all duration-300"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
