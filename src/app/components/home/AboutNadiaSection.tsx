'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Star, ArrowRight, Sparkles, Moon, Sun } from 'lucide-react';

export default function AboutNadiaSection() {
  return (
    <section className="py-20 relative">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[var(--spiritual-gold)] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-[var(--ethereal-pink)] rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-[var(--mystical-purple)] rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 spiritual-text-shadow">
                Meet 
                <span className="text-[var(--spiritual-gold)]"> Nadia Elmagrabi</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--spiritual-gold)] to-[var(--ethereal-pink)] rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                As a <span className="text-[var(--spiritual-gold)] font-semibold">Psychotherapist & wellness coach</span> specializing 
                in Past Life Regressions, I support working professionals and creative visionaries to step confidently 
                into their radiance and power.
              </p>
              
              <p className="text-[var(--moonstone)]">
                Combining the many sacred modalities I've studied over the last <span className="text-[var(--ethereal-pink)] font-semibold">20 years</span> 
                into a unique, integrated, and soulful approach, working with me helps people reconnect to the deepest parts of themselves.
              </p>
            </div>
            
            {/* Expertise List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-bold mb-6 text-[var(--spiritual-gold)]">
                ✧ My Sacred Areas of Expertise ✧
              </h3>
              <div className="space-y-4">
                {[
                  {
                    text: "Clearing trauma, subconscious blocks & ancestral wounds",
                    icon: Heart,
                    color: "var(--ethereal-pink)"
                  },
                  {
                    text: "Reconnecting to your soul essence & purpose",
                    icon: Star,
                    color: "var(--spiritual-gold)"
                  },
                  {
                    text: "Unearthing your hidden gifts, talents & passions",
                    icon: Sparkles,
                    color: "var(--mystical-purple)"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center ethereal-glow"
                      style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}` }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10"
            >
              <Link
                href="/about-nadia"
                className="mystical-button px-8 py-4 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Discover Nadia's Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Sacred Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* First Sacred Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="ethereal-card p-8 text-center relative group hover:scale-105 transition-all duration-500"
            >
              {/* Sacred Symbol */}
              <div className="absolute top-4 right-4">
                <Sun className="w-6 h-6 text-[var(--spiritual-gold)] opacity-50 floating-animation" />
              </div>

              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[var(--spiritual-gold)] flex items-center justify-center ethereal-glow floating-animation">
                <Heart className="w-8 h-8 text-[var(--spiritual-gold)]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[var(--spiritual-gold)]">
                Embody Your Purpose
              </h3>
              <p className="text-lg text-[var(--moonstone)]">
                Feel expressed, aligned, and at peace with your soul's true calling
              </p>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 opacity-30">
                <div className="w-4 h-4 border border-[var(--spiritual-gold)] rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Second Sacred Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="ethereal-card p-8 text-center relative group hover:scale-105 transition-all duration-500"
            >
              {/* Sacred Symbol */}
              <div className="absolute top-4 right-4">
                <Moon className="w-6 h-6 text-[var(--ethereal-pink)] opacity-50 floating-animation" style={{ animationDelay: '1s' }} />
              </div>

              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[var(--ethereal-pink)] flex items-center justify-center ethereal-glow floating-animation" style={{ animationDelay: '0.5s' }}>
                <Star className="w-8 h-8 text-[var(--ethereal-pink)]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[var(--ethereal-pink)]">
                Release What's Keeping You Stuck
              </h3>
              <p className="text-lg text-[var(--moonstone)]">
                Break free from inherited patterns and ancestral wounds that no longer serve
              </p>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 opacity-30">
                <div className="w-3 h-3 border border-[var(--ethereal-pink)] rotate-45 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Third Sacred Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="ethereal-card p-8 text-center relative group hover:scale-105 transition-all duration-500"
            >
              {/* Sacred Symbol */}
              <div className="absolute top-4 right-4">
                <Sparkles className="w-6 h-6 text-[var(--mystical-purple)] opacity-50 floating-animation" style={{ animationDelay: '2s' }} />
              </div>

              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[var(--mystical-purple)] flex items-center justify-center ethereal-glow floating-animation" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-8 h-8 text-[var(--mystical-purple)]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[var(--mystical-purple)]">
                Awaken Your Sacred Gifts
              </h3>
              <p className="text-lg text-[var(--moonstone)]">
                Discover the hidden talents and wisdom that have been waiting to emerge
              </p>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 opacity-30">
                <div className="w-5 h-5 border border-[var(--mystical-purple)] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
