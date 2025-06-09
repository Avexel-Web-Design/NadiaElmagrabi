'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden stardust-bg">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--spiritual-gold)] rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[var(--ethereal-pink)] rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[var(--mystical-purple)] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          {/* Mystical Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 spiritual-text-shadow">
              I'm <span className="text-[var(--spiritual-gold)] floating-animation inline-block">Nadia</span>, 
              <br />
              <span className="text-[var(--ethereal-pink)]">and I guide women</span>
              <br />
              into deep alignment with their
              <br />
              <span className="text-[var(--spiritual-gold)] relative">
                spiritual path
                <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-[var(--spiritual-gold)] animate-pulse" />
              </span>
            </h1>
          </motion.div>

          {/* Sacred Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl text-[var(--spiritual-gold)] mb-4 font-light tracking-wide">
              ✧ Transformational Guide ✧ Intuitive Healer ✧ Ancestral & Past-Life Specialist ✧
            </p>
          </motion.div>

          {/* Sacred Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="ethereal-card p-8 mb-12 max-w-5xl mx-auto"
          >
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              ✨ Some patterns don't start with you but can end with you ✨
            </p>
            <p className="text-lg leading-relaxed text-[var(--moonstone)]">
              I help women break the inherited cycles that keep them small, silent, and stuck. 
              I guide women to reclaim their voice, confidence, and true power through deep ancestral healing, 
              past-life work, and soul-level transformation.
            </p>
          </motion.div>
          
          {/* Mystical Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="https://calendly.com/nadiaelmagrabi/15min"
              className="mystical-button px-10 py-4 rounded-full text-lg flex items-center gap-3 hover:scale-105 transition-all duration-300"
            >
              <Star className="w-5 h-5" />
              Begin Your Sacred Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="sacred-border bg-transparent text-[var(--spiritual-gold)] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[var(--spiritual-gold)] hover:text-[var(--cosmic-deep-blue)] transition-all duration-300"
            >
              Receive Your Free Gifts
            </Link>
          </motion.div>

          {/* Floating Sacred Elements */}
          <div className="absolute top-20 left-10 floating-animation" style={{ animationDelay: '1s' }}>
            <Star className="w-6 h-6 text-[var(--spiritual-gold)] opacity-50" />
          </div>
          <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-5 h-5 text-[var(--ethereal-pink)] opacity-50" />
          </div>
          <div className="absolute bottom-20 left-20 floating-animation" style={{ animationDelay: '3s' }}>
            <Star className="w-4 h-4 text-[var(--mystical-purple)] opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
