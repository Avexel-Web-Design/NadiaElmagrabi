'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage/10 to-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 sacred-text">
            Which path is calling you?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Human Design Service */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="spiritual-gradient p-8 rounded-2xl divine-shadow"
          >
            <h3 className="text-2xl font-bold text-cream mb-4 sacred-text">
              Your Human Design Chart: Align with Trusting Your Path
            </h3>
            <p className="text-cream/90 mb-6 leading-relaxed body-text">
              A 3-session Human Design journey to reconnect with your soul&apos;s natural rhythm. This offering is for those seeking clarity, alignment, and a deeper connection to self.
            </p>
            <Link
              href="https://www.groupregressionsession.com/offers/MpBD2MqT/checkout"
              className="inline-flex items-center bg-gold text-deep-purple px-6 py-3 rounded-full font-semibold hover:bg-copper hover:text-cream transition-all duration-300 gap-2 divine-shadow body-text"
            >
              Book Your First Step Forward <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Soul's Purpose Service */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="earth-gradient p-8 rounded-2xl divine-shadow"
          >
            <h3 className="text-2xl font-bold text-cream mb-4 sacred-text">
              Human Design & Past Life Regression: Embody Your Soul&apos;s Purpose
            </h3>
            <p className="text-cream/90 mb-4 leading-relaxed body-text">
              A transformative journey to align with your true calling. This offering combines Human Design and Past Life Regression to help you access the wisdom within.
            </p>
            <ul className="text-cream/90 mb-6 space-y-2 body-text">
              <li>• Human Design Sessions: Understand your unique energetic blueprint</li>
              <li>• Past Life Regression: Explore past life experiences safely</li>
              <li>• Intuitive Development: Learn to listen to messages from spirit</li>
            </ul>
            <Link
              href="/embody-your-souls-purpose"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 gap-2"
            >
              Your Transformational Journey Starts Here <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
