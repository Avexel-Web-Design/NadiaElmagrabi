'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Moon } from 'lucide-react';

export default function AboutCTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Sacred Cosmic Background */}
      <div className="absolute inset-0 cosmic-gradient">
        <div className="sacred-geometry opacity-20"></div>
        <div className="stardust-bg"></div>
      </div>

      {/* Floating Sacred Elements */}
      <div className="absolute top-20 left-20 floating-slow opacity-30">
        <Star className="w-10 h-10 text-spiritual-gold" />
      </div>
      <div className="absolute bottom-20 right-20 floating-medium opacity-25">
        <Moon className="w-8 h-8 text-cosmic-blue" />
      </div>
      <div className="absolute top-1/2 left-10 floating-fast opacity-20">
        <Sparkles className="w-12 h-12 text-ethereal-pink" />
      </div>
      <div className="absolute top-1/3 right-10 floating-slow opacity-35">
        <Sparkles className="w-6 h-6 text-spiritual-gold" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Sacred Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 text-spiritual-gold mx-auto ethereal-glow animate-pulse" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-8 text-white spiritual-text-shadow">
            Ready to Begin Your Sacred Healing Journey?
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-cosmic-blue mb-8 leading-relaxed font-cormorant spiritual-text-shadow"
          >
            If you feel the cosmic call to break the ancient patterns that have been passed down through 
            your sacred lineage and step into your divine authentic power, I would be honored to guide 
            you on this mystical journey of soul remembrance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="https://calendly.com/nadiaelmagrabi/30min"
              className="mystical-btn-primary group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Sacred Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link
              href="/embody-your-souls-purpose"
              className="mystical-btn-secondary"
            >
              Explore Sacred Programs
            </Link>
          </motion.div>

          {/* Sacred Blessing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
          >
            <Star className="w-8 h-8 text-spiritual-gold mx-auto mb-4 rotating" />
            <p className="text-white/90 font-cormorant italic">
              "May your healing journey be blessed with divine grace, ancient wisdom, and cosmic love. 
              The path of sacred transformation awaits your radiant soul."
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-spiritual-gold rounded-full ethereal-glow"></div>
              <div className="w-2 h-2 bg-cosmic-blue rounded-full ethereal-glow"></div>
              <div className="w-2 h-2 bg-ethereal-pink rounded-full ethereal-glow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
