'use client';

import { motion } from 'framer-motion';
import { Moon, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

export default function SacredShadowWorkCTASection() {
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sacred download requested for:', email);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-spiritual-gold via-ethereal-pink to-mystic-purple overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-mystic-purple/20 blur-3xl animate-float-delayed"></div>
      </div>

      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/20 rounded-full animate-spin-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-pulse-gentle"></div>
      </div>

      {/* Floating Sacred Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 animate-float">
          <Star className="w-8 h-8 text-white/60" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-delayed">
          <Sparkles className="w-10 h-10 text-white/50" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float">
          <Moon className="w-6 h-6 text-white/70" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-1 h-12 bg-white/60 mr-4"></div>
            <span className="font-cormorant text-lg text-white uppercase tracking-widest">Begin Your Sacred Journey</span>
            <div className="w-1 h-12 bg-white/60 ml-4"></div>
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-8 leading-tight sacred-text-shadow">
            Ready to Begin Your
            <br />
            <span className="bg-gradient-to-r from-white via-cosmic-blue-light to-white bg-clip-text text-transparent">
              Shadow Work Journey?
            </span>
          </h2>
          
          <p className="font-cormorant text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Download your sacred guide now and take the first divine step toward 
            <span className="text-cosmic-blue-light font-semibold"> reclaiming your wholeness</span> and 
            <span className="text-white font-semibold"> authentic mystical power</span>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <div className="sacred-card bg-white/20 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-mystical">
              {/* Sacred Symbol */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-full 
                            flex items-center justify-center mx-auto mb-8 shadow-white-glow">
                <Moon className="w-10 h-10 text-white" />
                <div className="absolute -inset-3 bg-white/20 rounded-full blur-lg animate-pulse-gentle"></div>
              </div>

              <form onSubmit={handleDownload} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your sacred email address"
                    required
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-lg border border-white/40 rounded-2xl 
                             focus:ring-2 focus:ring-white focus:border-transparent 
                             text-white placeholder-white/70 sacred-input text-lg"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Sparkles className="w-6 h-6 text-white/70" />
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mystical-button bg-gradient-to-r from-white to-cosmic-blue-light 
                           text-mystic-purple py-4 rounded-2xl font-bold text-lg shadow-white-glow
                           hover:shadow-mystical transition-all duration-300 flex items-center justify-center
                           border border-white/50"
                >
                  <Star className="w-6 h-6 mr-3" />
                  Get Your Sacred Guide
                </motion.button>
              </form>

              <div className="flex items-center justify-center mt-8">
                <div className="w-12 h-px bg-white/30"></div>
                <Sparkles className="w-5 h-5 text-white/60 mx-4" />
                <div className="w-12 h-px bg-white/30"></div>
              </div>

              <p className="text-sm text-white/80 text-center mt-6 font-cormorant leading-relaxed">
                ✨ Sacred promise: No spiritual spam. Unsubscribe with love anytime.<br />
                Receive weekly divine insights and mystical guidance. ✨
              </p>
            </div>
          </motion.div>

          {/* Sacred Blessing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-white/30"></div>
              <Moon className="w-6 h-6 text-white/70 mx-6" />
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            
            <p className="font-cormorant text-lg text-white/90 italic max-w-2xl mx-auto leading-relaxed">
              "May this sacred guide illuminate your path to wholeness and awaken the divine light within your shadows. 
              Blessed be your journey of integration and transformation."
            </p>
            
            <p className="font-cinzel text-white/80 mt-4 text-sm tracking-widest">
              — WITH INFINITE LOVE & LIGHT —
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
