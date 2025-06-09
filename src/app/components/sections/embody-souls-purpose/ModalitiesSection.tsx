'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Eye, Heart, Lightbulb } from 'lucide-react';

export default function ModalitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-clay/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-4">
            What's Included
          </h2>
          <p className="text-xl text-earth body-text">
            Three powerful modalities combined for deep transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Human Design Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-sage/10 backdrop-blur-sm p-8 rounded-2xl divine-shadow mystical-border"
          >
            <Eye className="w-12 h-12 text-sage mb-6" />
            <h3 className="text-2xl font-bold sacred-text text-forest mb-4">
              Human Design Sessions
            </h3>
            <p className="text-earth body-text mb-6 leading-relaxed">
              Understand your unique energetic blueprint to navigate life with authenticity and ease. Learn how to trust your inner authority and make decisions aligned with your true nature.
            </p>
            <ul className="space-y-2 text-earth body-text">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage" />
                <span>Personal chart reading</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage" />
                <span>Strategy & authority guidance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage" />
                <span>Practical life application</span>
              </li>
            </ul>
          </motion.div>

          {/* Past Life Regression */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-amethyst/10 backdrop-blur-sm p-8 rounded-2xl divine-shadow mystical-border"
          >
            <Heart className="w-12 h-12 text-amethyst mb-6" />
            <h3 className="text-2xl font-bold sacred-text text-forest mb-4">
              Past Life Regression
            </h3>
            <p className="text-earth body-text mb-6 leading-relaxed">
              A safe, gentle process to explore past life experiences, uncovering insights and healing relevant to your current journey. Release patterns that no longer serve you.
            </p>
            <ul className="space-y-2 text-earth body-text">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amethyst" />
                <span>Safe guided regression</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amethyst" />
                <span>Healing & integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amethyst" />
                <span>Pattern recognition</span>
              </li>
            </ul>
          </motion.div>

          {/* Intuitive Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-earth/10 backdrop-blur-sm p-8 rounded-2xl divine-shadow mystical-border"
          >
            <Lightbulb className="w-12 h-12 text-earth mb-6" />
            <h3 className="text-2xl font-bold sacred-text text-forest mb-4">
              Intuitive Development
            </h3>
            <p className="text-earth body-text mb-6 leading-relaxed">
              Learn to listen to messages from spirit and use your intuition as a guiding force in decision-making. Develop your psychic abilities and spiritual connection.
            </p>
            <ul className="space-y-2 text-earth body-text">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-earth" />
                <span>Spiritual communication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-earth" />
                <span>Intuitive strengthening</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-earth" />
                <span>Decision-making guidance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
