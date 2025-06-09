'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Star, ArrowRight } from 'lucide-react';

export default function AboutNadiaPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Nadia Elmagrabi
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a Psychotherapist & wellness coach specializing in Past Life Regressions, I support working professionals and creative visionaries to step confidently into their radiance and power.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Combining the many modalities I've studied over the last 20 years into a unique, integrated, and soulful approach, working with me helps people reconnect to the deepest parts of themselves.
            </p>
            
            <div className="space-y-3 mb-8">
              <h3 className="font-semibold text-gray-900">My areas of expertise:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clearing trauma, subconscious blocks & ancestral wounds</li>
                <li>• Reconnecting to your soul essence & purpose</li>
                <li>• Unearthing your hidden gifts, talents & passions</li>
              </ul>
            </div>

            <Link
              href="/about-nadia"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 gap-2"
            >
              Read More About Nadia <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl"
          >
            <div className="text-center space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Embody Your Purpose</h3>
                <p className="text-gray-700">Feel expressed and at peace</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Star className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Release What's Keeping You Stuck</h3>
                <p className="text-gray-700">Break free from inherited patterns</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
