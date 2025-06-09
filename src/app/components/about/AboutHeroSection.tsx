'use client';

import { motion } from 'framer-motion';
import { Sparkles, Moon, Star } from 'lucide-react';

export default function AboutHeroSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Sacred Background */}
      <div className="absolute inset-0 cosmic-gradient">
        <div className="sacred-geometry opacity-20"></div>
        <div className="stardust-bg"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Floating Sacred Symbols */}
          <div className="absolute top-10 left-10 floating-slow opacity-30">
            <Star className="w-8 h-8 text-spiritual-gold" />
          </div>
          <div className="absolute top-20 right-16 floating-medium opacity-40">
            <Moon className="w-6 h-6 text-cosmic-blue" />
          </div>
          <div className="absolute bottom-10 left-1/4 floating-fast opacity-20">
            <Sparkles className="w-10 h-10 text-ethereal-pink" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 text-spiritual-gold mx-auto mb-4 animate-pulse" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-6 spiritual-text-shadow">
            Meet <span className="text-spiritual-gold ethereal-glow">Nadia Elmagrabi</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cosmic-blue mb-8 font-cormorant font-light spiritual-text-shadow"
          >
            Sacred Guide | Soul Alchemist | Ancestral Healer
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed font-cormorant"
          >
            Guiding sacred souls to break inherited cycles and awaken their divine essence through 
            ancestral alchemy, soul remembrance, and mystical transformation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
