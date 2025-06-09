'use client';

import { motion } from 'framer-motion';
import { Flame, Moon, Star, Heart } from 'lucide-react';

export default function PersonalStorySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Sacred Background */}
      <div className="absolute inset-0 celestial-gradient">
        <div className="stardust-bg opacity-20"></div>
      </div>

      {/* Floating Sacred Elements */}
      <div className="absolute top-20 left-10 floating-slow opacity-20">
        <Flame className="w-10 h-10 text-spiritual-gold" />
      </div>
      <div className="absolute bottom-20 right-16 floating-medium opacity-30">
        <Star className="w-8 h-8 text-cosmic-blue" />
      </div>
      <div className="absolute top-1/3 right-10 floating-fast opacity-25">
        <Moon className="w-6 h-6 text-ethereal-pink" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flame className="w-10 h-10 text-spiritual-gold ethereal-glow" />
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white spiritual-text-shadow">
              Why This Sacred Work Chose Me
            </h2>
            <Flame className="w-10 h-10 text-spiritual-gold ethereal-glow" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mystical-card p-8 rounded-2xl relative overflow-hidden"
        >
          {/* Sacred Heart Animation */}
          <div className="absolute top-6 right-6 floating-slow opacity-30">
            <Heart className="w-12 h-12 text-spiritual-gold animate-pulse" />
          </div>

          <div className="space-y-6 text-white/90 leading-relaxed font-cormorant relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg"
            >
              My own sacred healing odyssey began in my early twenties when I realized that despite 
              having everything I thought I desired, I felt empty and severed from my divine essence. 
              I was carrying patterns of silence, people-pleasing, and self-doubt that I later discovered 
              weren't even mine—they belonged to the sacred women in my ancestral lineage.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Through my own past-life remembrance work, I uncovered lifetimes where I had been silenced, 
              persecuted for my divine gifts, and forced to hide my sacred truth. These soul revelations 
              helped me understand why I struggled to speak my power, why I dimmed my celestial light, 
              and why I felt unsafe being fully witnessed in my radiance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              As I alchemized these ancient patterns, everything in my cosmic reality began to transform. 
              I found my sacred voice, stepped into my divine sovereignty, and discovered my soul's true 
              purpose. But more importantly, I realized that my healing was creating ripples of light 
              throughout my entire family constellation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-spiritual-gold/20 to-cosmic-blue/20 p-6 rounded-lg border border-spiritual-gold/30 backdrop-blur-sm"
            >
              <div className="text-center mb-4">
                <Star className="w-8 h-8 text-spiritual-gold mx-auto rotating" />
              </div>
              <p className="text-spiritual-gold font-semibold text-center font-cormorant text-lg">
                "This is why I'm so passionate about this sacred work. When one soul heals, she doesn't 
                just transform her own reality—she transforms the lives of every being who comes after her. 
                She becomes the first woman in her lineage to rise into her divine power, and in doing so, 
                she gives cosmic permission for others to do the same."
              </p>
            </motion.div>

            {/* Sacred Phoenix Symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-center pt-6"
            >
              <Flame className="w-16 h-16 text-spiritual-gold mx-auto ethereal-glow animate-pulse" />
              <p className="text-cosmic-blue font-cinzel text-sm mt-2">
                From Ashes to Divine Radiance
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
