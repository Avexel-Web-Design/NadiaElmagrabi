'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles, Moon, Sun, Heart } from 'lucide-react';

export default function ContactHeroSection() {
  const floatingElements = [
    { Icon: Star, delay: 0, x: '10%', y: '20%', duration: 6 },
    { Icon: Sparkles, delay: 1, x: '80%', y: '15%', duration: 8 },
    { Icon: Moon, delay: 2, x: '15%', y: '70%', duration: 7 },
    { Icon: Sun, delay: 3, x: '85%', y: '75%', duration: 5 },
    { Icon: Heart, delay: 4, x: '50%', y: '10%', duration: 9 },
  ];

  return (
    <section className="relative py-20 overflow-hidden sacred-gradient">
      {/* Cosmic Background */}
      <div className="absolute inset-0 cosmic-background opacity-30"></div>
      <div className="absolute inset-0 stardust-animation"></div>

      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="flower-of-life w-96 h-96"></div>
      </div>

      {/* Floating Sacred Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-spiritual-gold opacity-30"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <element.Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Sacred Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-spiritual-gold/30"
          >
            <Heart className="w-5 h-5 text-spiritual-gold" />
            <span className="text-white font-cinzel">Sacred Connection</span>
            <Heart className="w-5 h-5 text-spiritual-gold" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold leading-tight"
          >
            <span className="text-white text-shadow-spiritual">Connect in</span>
            <br />
            <span className="text-spiritual-gold ethereal-glow">
              Sacred Love
            </span>
          </motion.h1>

          {/* Mystical Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-cormorant leading-relaxed"
          >
            Ready to embark on your sacred transformational journey? 
            I'm here to hold space and support you every divine step of the way
          </motion.p>

          {/* Sacred Elements Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center space-x-4 py-6"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <Star className="w-6 h-6 text-spiritual-gold ethereal-glow animate-pulse" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Heart className="w-6 h-6 text-ethereal-pink ethereal-glow animate-pulse" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Moon className="w-6 h-6 text-cosmic-blue ethereal-glow" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Sun className="w-6 h-6 text-mystical-purple ethereal-glow" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Star className="w-6 h-6 text-spiritual-gold ethereal-glow animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-spiritual-gold"></div>
          </motion.div>

          {/* Divine Blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-4"
          >
            <p className="text-white/70 font-cormorant italic text-lg">
              "Every soul connection is a sacred gift"
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Sacred Geometry Accents */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="merkaba w-16 h-16"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="merkaba w-20 h-20"></div>
      </div>
    </section>
  );
}
