'use client';

import { motion } from 'framer-motion';
import { BookOpen, Heart, Shield, Star, Calendar, Users } from 'lucide-react';

export default function WhatsInsideSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Understanding Shadow Work",
      description: "Learn what shadow work is, why it's essential for healing, and how it transforms your life"
    },
    {
      icon: Heart,
      title: "Self-Compassion Practices",
      description: "Develop the loving awareness needed to approach your shadow with kindness and acceptance"
    },
    {
      icon: Shield,
      title: "Safety & Boundaries",
      description: "Essential guidelines for practicing shadow work safely and knowing when to seek support"
    },
    {
      icon: Star,
      title: "Practical Exercises",
      description: "Step-by-step exercises to identify and work with your shadow patterns and triggers"
    },
    {
      icon: Calendar,
      title: "Integration Practices",
      description: "Daily practices to integrate shadow work insights into your everyday life and relationships"
    },
    {
      icon: Users,
      title: "Common Shadow Patterns",
      description: "Recognize common shadow aspects and how they show up in relationships and life patterns"
    }
  ];

  return (
    <section className="py-20 bg-cream/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            What's Inside This Guide
          </h2>
          <p className="text-xl body-text text-earth/80 max-w-3xl mx-auto">
            Everything you need to understand and begin working with your shadow aspects safely and effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream/80 backdrop-blur-sm mystical-border rounded-xl p-6 hover:divine-shadow hover:bg-cream/90 transition-all duration-300"
            >
              <div className="bg-sage/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 soft-glow">
                <item.icon className="w-6 h-6 text-forest" />
              </div>
              <h3 className="text-xl font-semibold sacred-text text-earth mb-3">{item.title}</h3>
              <p className="body-text text-earth/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
