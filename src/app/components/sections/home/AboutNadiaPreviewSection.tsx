'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Star, ArrowRight } from 'lucide-react';

export default function AboutNadiaPreviewSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6 sacred-text">
              Meet Nadia Elmagrabi
            </h2>
            <p className="text-lg text-earth mb-6 leading-relaxed body-text">
              As a Psychotherapist & wellness coach specializing in Past Life Regressions, I support working professionals and creative visionaries to step confidently into their radiance and power.
            </p>
            <p className="text-earth mb-6 leading-relaxed body-text">
              Combining the many modalities I&apos;ve studied over the last 20 years into a unique, integrated, and soulful approach, working with me helps people reconnect to the deepest parts of themselves.
            </p>
            
            <div className="space-y-3 mb-8">
              <h3 className="font-semibold text-forest sacred-text">My areas of expertise:</h3>
              <ul className="space-y-2 text-earth body-text">
                <li>• Clearing trauma, subconscious blocks & ancestral wounds</li>
                <li>• Reconnecting to your soul essence & purpose</li>
                <li>• Unearthing your hidden gifts, talents & passions</li>
              </ul>
            </div>

            <Link
              href="/about-nadia"
              className="inline-flex items-center bg-amethyst text-cream px-6 py-3 rounded-full font-semibold hover:bg-deep-purple transition-all duration-300 gap-2 divine-shadow body-text"
            >
              Read More About Nadia <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="earth-gradient p-8 rounded-2xl divine-shadow"
          >
            <div className="text-center space-y-6">
              <div className="bg-cream/95 p-6 rounded-xl divine-shadow mystical-border">
                <Heart className="w-12 h-12 text-amethyst mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2 sacred-text">Embody Your Purpose</h3>
                <p className="text-earth body-text">Feel expressed and at peace</p>
              </div>
              <div className="bg-cream/95 p-6 rounded-xl divine-shadow mystical-border">
                <Star className="w-12 h-12 text-ocean mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2 sacred-text">Release What&apos;s Keeping You Stuck</h3>
                <p className="text-earth body-text">Break free from inherited patterns</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
