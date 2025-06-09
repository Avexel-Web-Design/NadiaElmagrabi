'use client';

import { motion } from 'framer-motion';
import { Mail, Star, Sparkles, Heart, Moon } from 'lucide-react';
import { useState } from 'react';

export default function SacredPodcastNewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sacred email submitted:', email);
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 cosmic-background opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Floating Sacred Elements */}
          <div className="absolute -top-6 -left-6 text-spiritual-gold opacity-40">
            <Star className="w-8 h-8 animate-float" />
          </div>
          <div className="absolute -top-4 -right-4 text-ethereal-pink opacity-40">
            <Sparkles className="w-6 h-6 animate-float-delayed" />
          </div>
          <div className="absolute -bottom-6 -left-4 text-mystical-purple opacity-30">
            <Moon className="w-10 h-10 animate-float" />
          </div>
          <div className="absolute -bottom-4 -right-6 text-cosmic-blue opacity-30">
            <Heart className="w-8 h-8 animate-float-delayed" />
          </div>

          {/* Sacred Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple via-cosmic-blue to-ethereal-pink"></div>
            <div className="absolute inset-0 cosmic-background opacity-30"></div>
            
            <div className="relative p-8 md:p-12 text-center text-white">
              {/* Sacred Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <Mail className="w-16 h-16 text-spiritual-gold animate-float" />
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-ethereal-pink animate-float-delayed" />
                  </div>
                </div>
              </motion.div>

              {/* Sacred Heading */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-6 font-cinzel"
              >
                Get Sacred Notifications of New Episodes
              </motion.h2>
              
              {/* Divine Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed font-cormorant"
              >
                Subscribe to my sacred newsletter for divine episode updates, exclusive spiritual content, 
                and mystical insights to illuminate your soul's journey
              </motion.p>
              
              {/* Sacred Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your sacred email"
                    required
                    className="w-full px-6 py-4 rounded-lg text-mystical-purple bg-white/95 backdrop-blur-sm 
                             focus:outline-none focus:ring-2 focus:ring-spiritual-gold font-cormorant text-lg
                             placeholder:text-cosmic-blue/70 transition-all duration-300"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 right-3 opacity-60">
                    <Heart className="w-5 h-5 text-ethereal-pink" />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-mystical-purple px-8 py-4 rounded-lg font-semibold 
                           hover:bg-spiritual-gold hover:text-white transition-all duration-300 
                           shadow-lg hover:shadow-spiritual-gold/50 group font-cinzel"
                >
                  <span className="flex items-center">
                    Sacred Subscribe
                    <Star className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </motion.button>
              </motion.form>

              {/* Sacred Blessing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex items-center justify-center"
              >
                <div className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full 
                              border border-white/20">
                  <Sparkles className="w-4 h-4 text-spiritual-gold mr-2" />
                  <span className="text-sm text-purple-100 font-cormorant italic">
                    Join our sacred circle of awakening souls
                  </span>
                  <Sparkles className="w-4 h-4 text-spiritual-gold ml-2" />
                </div>
              </motion.div>

              {/* Sacred Privacy Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-6 text-sm text-purple-200/80 font-cormorant"
              >
                ✨ Your sacred energy is honored - no spam, only divine love ✨
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
