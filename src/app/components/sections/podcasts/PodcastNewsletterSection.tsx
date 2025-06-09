'use client';

import { motion } from 'framer-motion';

export default function PodcastNewsletterSection() {
  return (
    <section className="py-20 bg-cream/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="earth-gradient rounded-2xl p-8 md:p-12 text-center text-cream divine-shadow"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text mb-6">
            Get Notified of New Episodes
          </h2>
          <p className="text-xl body-text text-cream/80 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for episode updates, exclusive content, and spiritual insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg body-text text-earth bg-cream/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cream border border-cream/30"
            />
            <button className="bg-cream text-forest px-6 py-3 rounded-lg font-semibold sacred-text hover:bg-cream/90 hover:text-earth transition-all duration-300 divine-shadow">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
