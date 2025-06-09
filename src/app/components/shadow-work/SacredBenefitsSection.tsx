'use client';

import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const sacredBenefits = [
  "Heal deep-rooted soul patterns that keep your spirit bound",
  "Develop authentic self-acceptance through divine compassion",
  "Transform triggers into sources of mystical empowerment", 
  "Improve relationships through sacred conscious awareness",
  "Access hidden soul strengths and cosmic creative potential",
  "Break free from karmic self-sabotaging behaviors",
  "Integrate all aspects of yourself with unconditional love"
];

export default function SacredBenefitsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-mystic-purple via-midnight-black to-cosmic-blue overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-spiritual-gold/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ethereal-pink/15 blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-spiritual-gold to-ethereal-pink mr-4"></div>
              <span className="font-cormorant text-lg text-spiritual-gold uppercase tracking-widest">Soul Transformation</span>
            </div>

            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-8 leading-tight sacred-text-shadow">
              Transform Your Life Through 
              <span className="bg-gradient-to-r from-spiritual-gold to-ethereal-pink bg-clip-text text-transparent">
                {" "}Shadow Integration
              </span>
            </h2>
            
            <p className="font-cormorant text-xl md:text-2xl text-cosmic-blue-light mb-12 leading-relaxed">
              Shadow work isn't about fixing what's broken within you—it's about 
              <span className="text-spiritual-gold"> reclaiming the sacred wholeness</span> that was always there, 
              waiting to be <span className="text-ethereal-pink">divinely remembered</span>.
            </p>

            <div className="space-y-6">
              {sacredBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <div className="relative flex-shrink-0 mr-6 mt-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-spiritual-gold to-ethereal-pink rounded-full 
                                  flex items-center justify-center shadow-golden-glow
                                  group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-spiritual-gold/30 rounded-full blur-lg 
                                  group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  <span className="font-cormorant text-lg text-white leading-relaxed 
                                 group-hover:text-cosmic-blue-light transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-mystical">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Sacred shadow work journey"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Sacred Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-purple/60 via-transparent to-spiritual-gold/20"></div>
              
              {/* Floating Sacred Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 animate-float">
                  <Star className="w-8 h-8 text-spiritual-gold shadow-golden-glow" />
                </div>
                <div className="absolute top-16 right-12 animate-float-delayed">
                  <Sparkles className="w-6 h-6 text-ethereal-pink shadow-pink-glow" />
                </div>
                <div className="absolute bottom-16 left-12 animate-float">
                  <div className="w-12 h-12 border-2 border-spiritual-gold/60 rounded-full animate-spin-slow"></div>
                </div>
                <div className="absolute bottom-8 right-8 animate-float-delayed">
                  <div className="w-8 h-8 bg-gradient-to-r from-ethereal-pink/40 to-mystic-purple/40 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* Sacred Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="sacred-card bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-spiritual-gold/30">
                  <p className="font-cormorant text-lg text-white text-center italic">
                    "In the depths of our shadows lie the greatest treasures of our soul"
                  </p>
                </div>
              </div>
            </div>

            {/* Sacred Geometry Decoration */}
            <div className="absolute -top-8 -right-8 w-16 h-16 border border-spiritual-gold/40 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 border border-ethereal-pink/40 rounded-full animate-spin-reverse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
