'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  "Complete PLR methodology and theory",
  "Step-by-step self-guided regression techniques",
  "10+ real case studies and examples",
  "Integration and healing practices",
  "Safety protocols and preparation",
  "3 guided meditation audio recordings",
  "Lifetime access and future updates",
  "Mobile-friendly PDF format"
];

export default function PLRFeaturesSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            What You'll Discover
          </h2>
          <p className="text-xl text-earth body-text max-w-3xl mx-auto">
            Everything you need to safely explore your past lives and heal current life patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="bg-sage/20 rounded-full p-2 mr-4">
                <Check className="w-5 h-5 text-sage" />
              </div>
              <span className="text-earth body-text text-lg">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
