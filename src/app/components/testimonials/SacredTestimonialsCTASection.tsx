'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles, Heart } from 'lucide-react';

export default function SacredTestimonialsCTASection() {
  const floatingElements = [
    { Icon: Star, delay: 0, x: '10%', y: '20%', duration: 6 },
    { Icon: Sparkles, delay: 1, x: '80%', y: '15%', duration: 8 },
    { Icon: Heart, delay: 2, x: '15%', y: '70%', duration: 7 },
    { Icon: Star, delay: 3, x: '85%', y: '75%', duration: 5 },
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
          <element.Icon className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Sacred Blessing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-spiritual-gold/30"
          >
            <Sparkles className="w-5 h-5 text-spiritual-gold" />
            <span className="text-white font-cinzel">Sacred Transformation Awaits</span>
            <Sparkles className="w-5 h-5 text-spiritual-gold" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-white leading-tight"
          >
            Ready to Write Your Own
            <span className="block text-spiritual-gold ethereal-glow">
              Sacred Success Story?
            </span>
          </motion.h2>

          {/* Mystical Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-cormorant leading-relaxed"
          >
            Join the sacred circle of souls who have awakened to their divine purpose through 
            authentic spiritual guidance, mystical healing, and cosmic transformation
          </motion.p>

          {/* Sacred Elements Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center space-x-4 py-6"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <Star className="w-6 h-6 text-spiritual-gold ethereal-glow" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Heart className="w-6 h-6 text-ethereal-pink ethereal-glow" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Star className="w-6 h-6 text-spiritual-gold ethereal-glow" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-spiritual-gold"></div>
          </motion.div>

          {/* Sacred Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://calendly.com/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="sacred-button-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              Begin Your Sacred Journey
              <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/embody-your-souls-purpose"
              className="sacred-button-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5 group-hover:pulse transition-all duration-300" />
              Explore Sacred Programs
            </motion.a>
          </motion.div>

          {/* Divine Blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8"
          >
            <p className="text-white/70 font-cormorant italic text-lg">
              "May your journey be blessed with divine guidance and cosmic love"
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
