'use client';

import { motion } from 'framer-motion';
import { Download, Star, Shield, Heart, Sparkles } from 'lucide-react';

export default function SacredPLRCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Sacred Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-6xl text-purple-100 animate-float">☾</div>
        <div className="absolute bottom-20 right-20 text-8xl text-purple-100 animate-float-delayed">✦</div>
        <div className="absolute top-1/2 left-10 text-4xl text-purple-100 animate-float">❋</div>
        <div className="absolute top-1/3 right-10 text-5xl text-purple-100 animate-float-delayed">✧</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gray-800 mb-6 sacred-text-glow">
            Begin Your Sacred Soul's Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-cormorant leading-relaxed">
            Don't let another sacred day pass wondering about your soul's deeper divine story. Download your sacred guide and start exploring the eternal wisdom of your past lives.
          </p>
          
          {/* Sacred Divider */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <Heart className="w-6 h-6 text-spiritual-gold animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-spiritual-gold to-transparent"></div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto sacred-glow relative">
            {/* Floating Sacred Elements */}
            <div className="absolute -top-4 -left-4 text-2xl text-spiritual-gold animate-float">✦</div>
            <div className="absolute -bottom-4 -right-4 text-2xl text-ethereal-pink animate-float-delayed">❋</div>
            
            <div className="mb-6">
              <div className="text-4xl font-cinzel font-bold text-gray-800 mb-2 sacred-text-glow">$27</div>
              <div className="text-gray-600 font-cormorant">Sacred one-time investment • Eternal lifetime access</div>
              
              {/* Sacred Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-spiritual-gold" />
                  <span className="font-cormorant">120-page sacred guide + 3 divine audios</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Sparkles className="w-4 h-4 mr-2 text-ethereal-pink" />
                  <span className="font-cormorant">$40 in sacred bonus treasures included</span>
                </div>
              </div>
            </div>
            
            <a
              href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sacred-gradient-cosmic text-white py-4 rounded-lg font-cinzel font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg mb-6 sacred-glow group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              ✦ Download Sacred Guide Now ✦
              <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
            </a>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
              <div className="flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1 text-cosmic-blue" />
                <span className="font-cormorant">Sacred 30-day guarantee</span>
              </div>
              <div className="flex items-center justify-center">
                <Download className="w-3 h-3 mr-1 text-spiritual-gold" />
                <span className="font-cormorant">Instant divine download</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sacred Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 max-w-2xl mx-auto sacred-glow-soft">
            <h3 className="text-lg font-cinzel font-bold text-gray-800 mb-4">
              Join 2,000+ Sacred Soul Seekers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-spiritual-gold mb-1">⭐ 4.9/5</div>
                <div className="text-sm text-gray-600 font-cormorant">Sacred Soul Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ethereal-pink mb-1">💎 2,000+</div>
                <div className="text-sm text-gray-600 font-cormorant">Divine Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cosmic-blue mb-1">🌟 98%</div>
                <div className="text-sm text-gray-600 font-cormorant">Soul Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sacred Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <blockquote className="text-lg font-cormorant italic text-gray-700 max-w-2xl mx-auto">
            "Your soul has been calling you to this sacred moment. Trust the divine timing and allow your past life wisdom to illuminate your present path."
          </blockquote>
          <div className="flex items-center justify-center space-x-2 mt-4 text-spiritual-gold">
            <Star className="w-4 h-4 animate-pulse" />
            <span className="font-cormorant text-sm">— Sacred Soul Wisdom —</span>
            <Star className="w-4 h-4 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
