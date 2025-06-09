'use client';

import { motion } from 'framer-motion';
import { BookOpen, Moon, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ShadowWorkHeroSection() {
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sacred download requested for:', email);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-mystic-purple via-cosmic-blue to-midnight-black text-white py-20 overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-spiritual-gold/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-ethereal-pink/15 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cosmic-blue/20 blur-3xl animate-pulse-gentle"></div>
      </div>

      {/* Floating Sacred Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Moon className="w-8 h-8 text-spiritual-gold/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Star className="w-6 h-6 text-ethereal-pink/70" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <Sparkles className="w-7 h-7 text-cosmic-blue/60" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center mb-8">
              <div className="relative mr-6">
                <BookOpen className="w-16 h-16 text-spiritual-gold shadow-golden-glow" />
                <div className="absolute -inset-2 bg-spiritual-gold/20 rounded-full blur-lg"></div>
              </div>
              <span className="bg-gradient-to-r from-spiritual-gold to-ethereal-pink text-white px-6 py-3 rounded-full text-sm font-medium sacred-text-shadow">
                ✨ SACRED WISDOM
              </span>
            </div>
            
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-spiritual-gold via-ethereal-pink to-mystic-purple bg-clip-text text-transparent">
                Shadow Work
              </span>
              <br />
              <span className="text-white sacred-text-shadow">
                Integration Guide
              </span>
            </h1>
            
            <p className="font-cormorant text-xl md:text-2xl text-cosmic-blue-light mb-10 leading-relaxed">
              A sacred 25-page grimoire for understanding, exploring, and integrating your shadow aspects 
              through the mystical arts of <span className="text-spiritual-gold">soul alchemy</span> and 
              <span className="text-ethereal-pink">divine healing</span>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="sacred-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center border border-spiritual-gold/30"
              >
                <BookOpen className="w-8 h-8 text-spiritual-gold mx-auto mb-2" />
                <div className="text-white font-semibold">25 Sacred Pages</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="sacred-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center border border-ethereal-pink/30"
              >
                <Sparkles className="w-8 h-8 text-ethereal-pink mx-auto mb-2" />
                <div className="text-white font-semibold">5,000+ Soul Seekers</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="sacred-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center border border-mystic-purple/30"
              >
                <Star className="w-8 h-8 text-mystic-purple mx-auto mb-2" />
                <div className="text-white font-semibold">4.9/5 Divine Rating</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="sacred-card bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl shadow-mystical p-10 max-w-md mx-auto border border-spiritual-gold/30">
              {/* Sacred Geometry Decoration */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-spiritual-gold/50 rounded-full flex items-center justify-center rotate-45">
                <div className="w-6 h-6 bg-spiritual-gold/30 rounded-full"></div>
              </div>
              
              <div className="text-center mb-8">
                <div className="relative w-24 h-24 bg-gradient-to-br from-spiritual-gold to-ethereal-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-golden-glow">
                  <BookOpen className="w-12 h-12 text-white" />
                  <div className="absolute -inset-2 bg-spiritual-gold/30 rounded-full blur-lg animate-pulse-gentle"></div>
                </div>
                <h3 className="font-cinzel text-3xl font-bold text-white mb-3 sacred-text-shadow">
                  Receive Your Sacred Guide
                </h3>
                <p className="font-cormorant text-lg text-cosmic-blue-light">
                  Begin your shadow integration journey with divine guidance
                </p>
              </div>

              <form onSubmit={handleDownload} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your sacred email address"
                    required
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-lg border border-spiritual-gold/30 rounded-2xl 
                             focus:ring-2 focus:ring-spiritual-gold focus:border-transparent 
                             text-white placeholder-cosmic-blue-light sacred-input"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Sparkles className="w-5 h-5 text-spiritual-gold" />
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(218, 165, 32, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mystical-button bg-gradient-to-r from-spiritual-gold to-ethereal-pink 
                           text-white py-4 rounded-2xl font-semibold text-lg shadow-golden-glow
                           hover:shadow-mystical transition-all duration-300 flex items-center justify-center"
                >
                  <Moon className="w-6 h-6 mr-3" />
                  Download Sacred Guide
                </motion.button>
              </form>

              <p className="text-xs text-cosmic-blue-light text-center mt-6 font-cormorant">
                ✨ Sacred promise: No spiritual spam. Unsubscribe with love anytime. 
                Receive weekly divine insights and soul guidance. ✨
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
