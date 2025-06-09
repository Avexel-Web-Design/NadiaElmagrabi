'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star, Clock, Users, Check, Play, Download, CreditCard, Shield, Sparkles } from 'lucide-react';

export default function PLRHeroSection() {
  return (
    <section className="sacred-gradient-cosmic text-white py-20 relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="sacred-stardust"></div>
        <div className="absolute top-20 left-10 text-6xl text-white/10 animate-float">✦</div>
        <div className="absolute bottom-20 right-10 text-8xl text-white/10 animate-float-delayed">❋</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-white/10 animate-float">☾</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-white/10 animate-float-delayed">✧</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="sacred-glow-soft p-3 rounded-full mr-4">
                <BookOpen className="w-8 h-8 text-spiritual-gold" />
              </div>
              <span className="bg-spiritual-gold/20 text-spiritual-gold px-6 py-2 rounded-full text-sm font-medium border border-spiritual-gold/30 sacred-glow-soft">
                ✦ SACRED DIGITAL TREASURE ✦
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-6 sacred-text-glow">
              Past Life Regression
              <span className="block text-spiritual-gold">Soul Mastery</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed font-cormorant">
              Unlock the sacred mysteries of your soul's eternal journey with this divine guide to self-guided past life regression and cosmic healing.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center sacred-glow-soft px-4 py-2 rounded-full bg-white/10">
                <BookOpen className="w-5 h-5 mr-2 text-spiritual-gold" />
                <span>120-Page Sacred Guide</span>
              </div>
              <div className="flex items-center sacred-glow-soft px-4 py-2 rounded-full bg-white/10">
                <Play className="w-5 h-5 mr-2 text-ethereal-pink" />
                <span>3 Mystical Audio Guides</span>
              </div>
              <div className="flex items-center sacred-glow-soft px-4 py-2 rounded-full bg-white/10">
                <Users className="w-5 h-5 mr-2 text-cosmic-blue" />
                <span>2,000+ Soul Seekers</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-spiritual-gold sacred-text-glow">$27</span>
              <span className="text-lg text-purple-200 line-through">$47</span>
              <span className="bg-ethereal-pink text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                ✨ Sacred Offering ✨
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md mx-auto sacred-glow relative">
              {/* Floating Sacred Elements */}
              <div className="absolute -top-4 -right-4 text-2xl animate-float">✦</div>
              <div className="absolute -bottom-4 -left-4 text-2xl animate-float-delayed">❋</div>
              
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Sacred PLR eBook"
                    className="w-48 h-64 object-cover rounded-lg mx-auto mb-4 shadow-lg sacred-glow"
                  />
                  <div className="absolute -top-2 -right-2 bg-spiritual-gold text-white rounded-full p-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-gray-800 mb-2 sacred-text-glow">
                  Sacred Soul Access
                </h3>
                <p className="text-gray-600 font-cormorant">Instant divine download upon purchase</p>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "120-Page Sacred Wisdom",
                  "3 Guided Soul Meditations", 
                  "Eternal Lifetime Access",
                  "Mobile Temple Compatible"
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-cormorant">{item}</span>
                    <div className="bg-ethereal-pink/20 rounded-full p-1">
                      <Check className="w-4 h-4 text-ethereal-pink" />
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sacred-gradient-cosmic text-white py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg sacred-glow font-cinzel"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                ✦ Claim Sacred Access - $27 ✦
              </a>

              <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-cosmic-blue" />
                  <span className="font-cormorant">Sacred Protection</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-1 text-spiritual-gold" />
                  <span className="font-cormorant">Instant Blessing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
