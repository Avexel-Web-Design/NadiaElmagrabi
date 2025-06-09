'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-4">
            Transform Your Life
          </h2>
          <p className="text-xl text-earth body-text">
            By delving into these modalities, you'll experience profound shifts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-sage rounded-full p-2 mt-1">
                  <CheckCircle className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold sacred-text text-forest mb-2">Release What No Longer Serves</h3>
                  <p className="text-earth body-text">Clear inherited patterns, ancestral wounds, and past-life imprints that keep you stuck.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-amethyst rounded-full p-2 mt-1">
                  <CheckCircle className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold sacred-text text-forest mb-2">Gain Profound Self-Awareness</h3>
                  <p className="text-earth body-text">Understand your unique design and soul's journey with unprecedented clarity.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-earth rounded-full p-2 mt-1">
                  <CheckCircle className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold sacred-text text-forest mb-2">Step Into Your Power</h3>
                  <p className="text-earth body-text">Confidently embrace the life you're meant to live with authenticity and purpose.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream/80 backdrop-blur-sm p-8 rounded-2xl divine-shadow mystical-border"
          >
            <div className="text-center">
              <Star className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold sacred-text text-forest mb-4">
                Your Soul's Blueprint Awaits
              </h3>
              <p className="text-earth body-text mb-6 leading-relaxed">
                This isn't just healing—it's a complete recalibration of your life force. You'll walk away with tools, insights, and a deep knowing of who you truly are.
              </p>
              <div className="bg-sage/10 backdrop-blur-sm p-4 rounded-lg mystical-border">
                <p className="text-sage font-semibold body-text">
                  "The patterns that kept you small will dissolve, and your authentic power will emerge."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
