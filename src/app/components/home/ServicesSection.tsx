'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Moon, Sun, Sparkles, Star } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-20 relative">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Flower of Life Pattern */}
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <circle cx="200" cy="150" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <circle cx="200" cy="250" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <circle cx="156" cy="175" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <circle cx="244" cy="175" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <circle cx="156" cy="225" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <circle cx="244" cy="225" r="50" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 spiritual-text-shadow">
            Which Sacred Path is 
            <span className="text-[var(--spiritual-gold)]"> Calling You?</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[var(--spiritual-gold)] via-[var(--ethereal-pink)] to-[var(--mystical-purple)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Human Design Service */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="ethereal-card p-10 relative group hover:scale-105 transition-all duration-500"
          >
            {/* Sacred Symbol */}
            <div className="absolute top-4 right-4">
              <Sun className="w-8 h-8 text-[var(--spiritual-gold)] opacity-50 floating-animation" />
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[var(--spiritual-gold)] flex items-center justify-center ethereal-glow">
                <Sparkles className="w-8 h-8 text-[var(--spiritual-gold)]" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[var(--spiritual-gold)]">
              Your Human Design Chart
            </h3>
            <h4 className="text-xl text-center mb-6 text-[var(--ethereal-pink)]">
              Align with Trusting Your Path
            </h4>
            
            <p className="text-lg leading-relaxed mb-8 text-center">
              A sacred 3-session Human Design journey to reconnect with your soul's natural rhythm. 
              This divine offering is for those seeking clarity, alignment, and a deeper connection to self.
            </p>

            <div className="text-center">
              <Link
                href="https://www.groupregressionsession.com/offers/MpBD2MqT/checkout"
                className="mystical-button px-8 py-4 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <Star className="w-5 h-5" />
                Book Your Sacred Awakening
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-4 left-4 opacity-30">
              <div className="w-6 h-6 border border-[var(--spiritual-gold)] rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Soul's Purpose Service */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="ethereal-card p-10 relative group hover:scale-105 transition-all duration-500"
          >
            {/* Sacred Symbol */}
            <div className="absolute top-4 right-4">
              <Moon className="w-8 h-8 text-[var(--ethereal-pink)] opacity-50 floating-animation" style={{ animationDelay: '1s' }} />
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[var(--ethereal-pink)] flex items-center justify-center ethereal-glow">
                <Moon className="w-8 h-8 text-[var(--ethereal-pink)]" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[var(--ethereal-pink)]">
              Human Design & Past Life Regression
            </h3>
            <h4 className="text-xl text-center mb-6 text-[var(--spiritual-gold)]">
              Embody Your Soul's Purpose
            </h4>
            
            <p className="text-lg leading-relaxed mb-6 text-center">
              A transformative journey to align with your true calling. This sacred offering combines 
              Human Design and Past Life Regression to help you access the ancient wisdom within.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-[var(--spiritual-gold)]" />
                <span>Human Design Sessions: Understand your unique energetic blueprint</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-[var(--ethereal-pink)]" />
                <span>Past Life Regression: Explore past life experiences safely</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-[var(--mystical-purple)]" />
                <span>Intuitive Development: Learn to listen to messages from spirit</span>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/embody-your-souls-purpose"
                className="mystical-button px-8 py-4 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Begin Your Soul's Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-4 left-4 opacity-30">
              <div className="w-4 h-4 border border-[var(--ethereal-pink)] rotate-45 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
