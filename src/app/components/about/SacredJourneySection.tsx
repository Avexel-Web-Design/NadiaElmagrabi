'use client';

import { motion } from 'framer-motion';
import { Heart, Flower2, Feather } from 'lucide-react';

export default function SacredJourneySection() {
  return (
    <section className="py-20 bg-white relative">
      {/* Subtle Sacred Geometry */}
      <div className="absolute inset-0 opacity-5">
        <div className="flower-of-life"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Feather className="w-8 h-8 text-spiritual-gold" />
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-mystical-purple">
                My Sacred Journey to Healing
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-cormorant">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg"
              >
                As a Sacred Psychotherapist & Soul Guide specializing in Past Life Remembrance, I support 
                luminous beings and creative visionaries to step boldly into their divine radiance and cosmic power.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My path to becoming a sacred healer wasn't linear. Like many of the souls I work with, 
                I carried the weight of ancestral patterns that kept me from fully embodying my authentic essence. 
                It was through my own profound healing odyssey that I discovered the alchemical power of 
                merging traditional therapy with mystical healing arts.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Over two sacred decades, I've studied and woven together numerous healing modalities, 
                crafting a unique approach that addresses not just the symptoms, but the soul-deep roots 
                of what keeps us bound. I believe that true alchemy happens when we honor the mind, 
                body, and spirit as one sacred vessel.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My work flows from the depths of my soul. I understand intimately what it feels like to 
                carry generational wounds, to feel severed from your divine purpose, and to struggle with 
                trusting your inner oracle. This is why I'm so passionate about helping souls break these 
                ancient chains—not just for themselves, but for the generations that follow in their light.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mystical-card p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Sacred Symbol Animation */}
            <div className="absolute top-4 right-4 floating-slow opacity-30">
              <Flower2 className="w-12 h-12 text-spiritual-gold" />
            </div>

            <div className="text-center relative z-10">
              <Heart className="w-16 h-16 text-spiritual-gold mx-auto mb-6 ethereal-glow animate-pulse" />
              <h3 className="text-2xl font-cinzel font-bold text-white mb-4">
                My Sacred Mission
              </h3>
              <p className="text-white/90 leading-relaxed mb-6 font-cormorant">
                To guide sacred souls back to their divine essence, helping them reclaim their voice, 
                cosmic confidence, and ancient power. I believe every soul has the capacity to heal 
                not just themselves, but their entire ancestral lineage.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-spiritual-gold font-semibold italic font-cormorant">
                  "Some patterns don't start with you, but they can end with you through sacred alchemy."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
