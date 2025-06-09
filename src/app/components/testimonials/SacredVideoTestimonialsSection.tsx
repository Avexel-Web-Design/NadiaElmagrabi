'use client';

import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

export default function SacredVideoTestimonialsSection() {
  return (
    <section className="py-24 celestial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
            Sacred Video Testimonials
          </h2>
          <p className="text-xl text-moonstone max-w-3xl mx-auto">
            Hear directly from divine souls about their transformational celestial experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mystical-card overflow-hidden group"
          >
            <div className="aspect-video bg-gradient-to-br from-mystical-purple/20 to-cosmic-blue/20 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-spiritual-gold to-ethereal-pink rounded-full flex items-center justify-center mx-auto mb-6 ethereal-glow group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-10 h-10 text-sacred-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-sacred-white mb-2 spiritual-text-shadow">
                  Sacred Soul Transformation
                </h3>
                <p className="text-moonstone font-medium">Divine testimonials manifesting soon</p>
              </div>
              
              {/* Sacred Floating Elements */}
              <div className="absolute top-4 right-4 floating-slow">
                <Star className="w-6 h-6 text-spiritual-gold opacity-60" />
              </div>
              <div className="absolute bottom-4 left-4 floating-medium">
                <Star className="w-4 h-4 text-ethereal-pink opacity-50" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mystical-card overflow-hidden group"
          >
            <div className="aspect-video bg-gradient-to-br from-ethereal-pink/20 to-mystical-purple/20 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cosmic-blue to-mystical-purple rounded-full flex items-center justify-center mx-auto mb-6 ethereal-glow group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-10 h-10 text-sacred-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-sacred-white mb-2 spiritual-text-shadow">
                  Celestial Healing Journey
                </h3>
                <p className="text-moonstone font-medium">Sacred stories arriving divinely</p>
              </div>
              
              {/* Sacred Floating Elements */}
              <div className="absolute top-4 left-4 floating-fast">
                <Star className="w-5 h-5 text-cosmic-blue opacity-60" />
              </div>
              <div className="absolute bottom-4 right-4 floating-slow">
                <Star className="w-7 h-7 text-mystical-purple opacity-40" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sacred Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="mystical-card p-6 max-w-2xl mx-auto bg-gradient-to-br from-spiritual-gold/10 to-ethereal-pink/10">
            <p className="text-spiritual-gold font-semibold italic text-lg">
              "Sacred video testimonials are being divinely curated to share the profound transformations of our soul family"
            </p>
            <div className="mt-4">
              <div className="merkaba-pattern mx-auto opacity-30 rotating-slow"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
