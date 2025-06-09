'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Sparkles } from 'lucide-react';

export default function SacredAboutNadiaSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-midnight-black via-cosmic-blue to-mystic-purple overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-spiritual-gold/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-ethereal-pink/15 blur-3xl animate-float-delayed"></div>
      </div>

      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20">
          <div className="w-32 h-32 border border-spiritual-gold/30 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-20 right-20">
          <div className="w-24 h-24 border border-ethereal-pink/30 rounded-full animate-spin-reverse"></div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-spiritual-gold to-ethereal-pink mr-4"></div>
            <span className="font-cormorant text-lg text-spiritual-gold uppercase tracking-widest">Sacred Guide</span>
            <div className="w-1 h-8 bg-gradient-to-b from-ethereal-pink to-spiritual-gold ml-4"></div>
          </div>

          {/* Sacred Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="relative w-40 h-40 mx-auto">
              {/* Sacred Aura */}
              <div className="absolute -inset-8 bg-gradient-to-r from-spiritual-gold/30 via-ethereal-pink/30 to-mystic-purple/30 
                            rounded-full blur-2xl animate-pulse-gentle"></div>
              
              {/* Portrait Container */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-spiritual-gold/50 shadow-golden-glow">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                  alt="Nadia Elmagrabi - Sacred Shadow Work Guide"
                  className="w-full h-full object-cover"
                />
                {/* Sacred Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-purple/20 to-transparent"></div>
              </div>

              {/* Floating Sacred Symbols */}
              <div className="absolute -top-4 -right-4 animate-float">
                <Star className="w-8 h-8 text-spiritual-gold shadow-golden-glow" />
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                <Sparkles className="w-6 h-6 text-ethereal-pink shadow-pink-glow" />
              </div>
              <div className="absolute top-0 left-0 animate-float">
                <Heart className="w-6 h-6 text-mystic-purple" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-8 sacred-text-shadow">
              About 
              <span className="bg-gradient-to-r from-spiritual-gold to-ethereal-pink bg-clip-text text-transparent">
                Nadia Elmagrabi
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="sacred-card bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-spiritual-gold/30 shadow-mystical"
          >
            <p className="font-cormorant text-xl md:text-2xl text-cosmic-blue-light leading-relaxed text-center">
              As a <span className="text-spiritual-gold">transformational guide</span> and{" "}
              <span className="text-ethereal-pink">intuitive healer</span>, I've spent over a sacred decade 
              helping beautiful souls reclaim their divine wholeness through the mystical arts of shadow integration. 
              This guide represents the foundational <span className="text-mystic-purple">sacred teachings</span> I share 
              with all my soul clients—because true transformation begins with embracing every luminous and shadow 
              aspect of <span className="text-spiritual-gold">who you are</span>.
            </p>

            {/* Sacred Divider */}
            <div className="flex items-center justify-center my-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-spiritual-gold to-transparent"></div>
              <Sparkles className="w-6 h-6 text-spiritual-gold mx-4" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-spiritual-gold to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-spiritual-gold to-ethereal-pink rounded-full 
                              flex items-center justify-center mx-auto mb-4 shadow-golden-glow">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="font-cinzel text-2xl font-bold text-white mb-2">10+</div>
                <div className="font-cormorant text-cosmic-blue-light">Years of Sacred Practice</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ethereal-pink to-mystic-purple rounded-full 
                              flex items-center justify-center mx-auto mb-4 shadow-pink-glow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="font-cinzel text-2xl font-bold text-white mb-2">1000+</div>
                <div className="font-cormorant text-cosmic-blue-light">Souls Transformed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-mystic-purple to-spiritual-gold rounded-full 
                              flex items-center justify-center mx-auto mb-4 shadow-mystical">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="font-cinzel text-2xl font-bold text-white mb-2">∞</div>
                <div className="font-cormorant text-cosmic-blue-light">Divine Love & Guidance</div>
              </motion.div>
            </div>

            {/* Sacred Blessing Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-spiritual-gold to-transparent"></div>
                <Heart className="w-6 h-6 text-spiritual-gold mx-6" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-spiritual-gold to-transparent"></div>
              </div>
              
              <p className="font-cormorant text-lg text-cosmic-blue-light italic leading-relaxed max-w-2xl mx-auto">
                "It is my sacred honor to walk alongside you on this transformational journey. 
                May this guide serve as a gentle companion as you reclaim your divine wholeness."
              </p>
              
              <p className="font-cinzel text-spiritual-gold mt-4 text-sm tracking-widest">
                — NADIA ELMAGRABI —
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
