'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, Sun } from 'lucide-react';

export default function ResourcesCTASection() {
  const floatingElements = [
    { Icon: Star, delay: 0, x: '10%', y: '20%', duration: 6 },
    { Icon: Sparkles, delay: 1, x: '85%', y: '15%', duration: 8 },
    { Icon: Heart, delay: 2, x: '15%', y: '75%', duration: 7 },
    { Icon: Sun, delay: 3, x: '80%', y: '80%', duration: 5 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <div className="flower-of-life w-32 h-32"></div>
        </div>
        <div className="absolute bottom-20 right-20">
          <div className="merkaba w-28 h-28"></div>
        </div>
      </div>

      {/* Floating Sacred Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-spiritual-gold opacity-20"
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
          {/* Sacred Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-spiritual-gold/10 to-cosmic-blue/10 backdrop-blur-sm rounded-full px-6 py-3 border border-spiritual-gold/30"
          >
            <Heart className="w-5 h-5 text-spiritual-gold" />
            <span className="text-gray-800 font-cinzel">Sacred Personal Guidance</span>
            <Heart className="w-5 h-5 text-spiritual-gold" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-gray-800 leading-tight"
          >
            Ready for Personalized
            <span className="block text-spiritual-gold text-shadow-spiritual">
              Divine Guidance?
            </span>
          </motion.h2>

          {/* Mystical Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-cormorant leading-relaxed"
          >
            While sacred resources are powerful tools, nothing replaces the transformational magic 
            of personalized spiritual guidance and one-on-one divine connection
          </motion.p>

          {/* Sacred Elements Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center space-x-4 py-6"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <Star className="w-6 h-6 text-spiritual-gold animate-pulse" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Heart className="w-6 h-6 text-ethereal-pink" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Sun className="w-6 h-6 text-cosmic-blue" />
            <div className="w-8 h-0.5 bg-spiritual-gold"></div>
            <Star className="w-6 h-6 text-spiritual-gold animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-spiritual-gold"></div>
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
              Book Sacred Session
              <Heart className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/embody-your-souls-purpose"
              className="sacred-button-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin transition-all duration-300" />
              Explore Divine Programs
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
            <p className="text-gray-500 font-cormorant italic text-lg">
              "May your path be illuminated with sacred wisdom and divine love"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
