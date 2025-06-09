'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Award } from 'lucide-react';

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: Heart,
      title: "Clearing Trauma & Subconscious Blocks",
      description: "I help you identify and release deep-seated patterns, ancestral wounds, and limiting beliefs that operate beneath conscious awareness."
    },
    {
      icon: Star,
      title: "Reconnecting to Your Soul Essence",
      description: "Through Human Design and intuitive work, I guide you back to your authentic self and help you understand your unique spiritual blueprint."
    },
    {
      icon: Award,
      title: "Unearthing Hidden Gifts & Talents",
      description: "Discover the unique gifts you came here to share and learn how to embody them fully in your daily life and work."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-clay/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-4">
            Areas of Expertise
          </h2>
          <p className="text-xl body-text text-earth">
            20+ years of study and practice in transformational healing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-cream/80 p-8 rounded-2xl divine-shadow mystical-border text-center backdrop-blur-sm"
            >
              <item.icon className="w-12 h-12 text-sage mx-auto mb-6" />
              <h3 className="text-xl font-bold sacred-text text-forest mb-4">{item.title}</h3>
              <p className="text-earth body-text leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
