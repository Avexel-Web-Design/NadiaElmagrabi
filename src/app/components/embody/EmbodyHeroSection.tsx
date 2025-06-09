'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

export default function EmbodyHeroSection() {
  return (
    <section className="relative py-24 cosmic-gradient overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 stardust-bg opacity-30"></div>
      
      {/* Floating Sacred Symbols */}
      <div className="absolute top-20 left-10 floating-slow">
        <Star className="w-8 h-8 text-spiritual-gold opacity-60" />
      </div>
      <div className="absolute top-40 right-16 floating-medium">
        <Sparkles className="w-6 h-6 text-ethereal-pink opacity-50" />
      </div>
      <div className="absolute bottom-32 left-1/4 floating-fast">
        <Star className="w-10 h-10 text-mystical-purple opacity-40" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Sacred Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-sacred-white mb-8 spiritual-text-shadow">
            Sacred Soul Alignment
          </h1>
          
          {/* Mystical Subtitle */}
          <h2 className="text-3xl md:text-4xl text-spiritual-gold font-semibold mb-12 spiritual-text-shadow">
            Embody Your Soul's Sacred Purpose
          </h2>
          
          {/* Divine Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-moonstone max-w-5xl mx-auto leading-relaxed mb-16"
          >
            A transformative sacred journey to align with your true divine calling. This sacred offering 
            weaves together Human Design wisdom and Past Life Regression healing to help you access the 
            ancient wisdom within and guide you toward embodying your soul's deepest purpose.
          </motion.p>
          
          {/* Sacred Geometry Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="flower-of-life rotating-slow opacity-30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
