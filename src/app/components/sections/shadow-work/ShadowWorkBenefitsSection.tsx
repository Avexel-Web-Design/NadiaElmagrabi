'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ShadowWorkBenefitsSection() {
  const benefits = [
    "Heal deep-rooted patterns that keep you stuck",
    "Develop authentic self-acceptance and compassion",
    "Transform triggers into sources of empowerment",
    "Improve relationships through conscious awareness",
    "Access hidden strengths and creative potential",
    "Break free from self-sabotaging behaviors",
    "Integrate all aspects of yourself with love"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-amethyst/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
              Transform Your Life Through Shadow Integration
            </h2>
            <p className="text-xl text-earth body-text mb-8">
              Shadow work isn't about fixing what's wrong with you—it's about reclaiming the wholeness that was always there.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <Check className="w-6 h-6 text-sage mr-3 flex-shrink-0" />
                  <span className="text-earth body-text">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Shadow work journey"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
