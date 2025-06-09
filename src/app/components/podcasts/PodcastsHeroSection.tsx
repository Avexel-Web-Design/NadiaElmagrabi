'use client';

import { motion } from 'framer-motion';
import { Headphones, Star, Sparkles, Moon } from 'lucide-react';

export default function PodcastsHeroSection() {
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
        <Moon className="w-10 h-10 text-mystical-purple opacity-40" />
      </div>
      <div className="absolute bottom-20 right-20 floating-slow">
        <Headphones className="w-12 h-12 text-cosmic-blue opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Sacred Icon & Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="relative">
              <Headphones className="w-16 h-16 text-ethereal-pink mr-6 animate-float" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-spiritual-gold animate-float-delayed" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-sacred-white spiritual-text-shadow font-cinzel">
              Soul Awakening <span className="text-spiritual-gold">Podcast</span>
            </h1>
          </motion.div>
          
          {/* Divine Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-moonstone max-w-4xl mx-auto leading-relaxed mb-16 font-cormorant"
          >
            Sacred weekly episodes exploring spiritual awakening, divine healing, and conscious living 
            for the modern soul seeker on their mystical journey of transformation
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
