'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Life
          </h2>
          <p className="text-xl text-gray-600">
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
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Release What No Longer Serves</h3>
                  <p className="text-gray-700">Clear inherited patterns, ancestral wounds, and past-life imprints that keep you stuck.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-indigo-600 rounded-full p-2 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gain Profound Self-Awareness</h3>
                  <p className="text-gray-700">Understand your unique design and soul's journey with unprecedented clarity.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-pink-600 rounded-full p-2 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step Into Your Power</h3>
                  <p className="text-gray-700">Confidently embrace the life you're meant to live with authenticity and purpose.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="text-center">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Soul's Blueprint Awaits
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This isn't just healing—it's a complete recalibration of your life force. You'll walk away with tools, insights, and a deep knowing of who you truly are.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-700 font-semibold">
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
