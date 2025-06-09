'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

export default function EmbodyCTASection() {
  return (
    <section className="py-24 spiritual-gradient relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 stardust-bg opacity-20"></div>
      
      {/* Floating Sacred Symbols */}
      <div className="absolute top-16 left-8 floating-slow">
        <Star className="w-6 h-6 text-spiritual-gold opacity-40" />
      </div>
      <div className="absolute bottom-20 right-12 floating-medium">
        <Sparkles className="w-8 h-8 text-ethereal-pink opacity-30" />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mystical-card p-12 text-center relative">
            {/* Sacred Geometric Decoration */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spiritual-gold to-ethereal-pink flex items-center justify-center ethereal-glow">
                <Star className="w-6 h-6 text-sacred-white rotating" />
              </div>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
              Ready to Begin Your Sacred Awakening?
            </h3>
            
            <p className="text-xl text-moonstone mb-12 max-w-3xl mx-auto leading-relaxed">
              Your transformational soul journey starts with a single sacred step into your divine destiny
            </p>
            
            {/* Sacred CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <Link
                href="https://www.groupregressionsession.com/offers/Loa3JMLQ/checkout"
                className="mystical-btn-primary text-lg px-12 py-4 inline-flex items-center gap-3 group"
              >
                <span>Your Sacred Transformational Journey Starts Here</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Sacred Investment Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mystical-card p-6 bg-gradient-to-br from-spiritual-gold/10 to-ethereal-pink/10"
            >
              <p className="text-moonstone text-sm leading-relaxed">
                Sacred Investment varies by divine program length • 
                <span className="text-spiritual-gold mx-2">✦</span>
                Sacred payment plans available • 
                <span className="text-spiritual-gold mx-2">✦</span>
                100% soul satisfaction guarantee
              </p>
            </motion.div>

            {/* Sacred Blessing */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8"
            >
              <p className="text-spiritual-gold font-semibold italic text-lg">
                "May your soul's sacred purpose illuminate the path before you"
              </p>
            </motion.div>

            {/* Sacred Geometry at Bottom */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="merkaba-pattern opacity-30 rotating-slow"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
