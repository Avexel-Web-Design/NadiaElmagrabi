'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProgramStructureSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-4">
            Your Transformation Journey
          </h2>
          <p className="text-xl text-earth body-text">
            A comprehensive 6-week program designed for deep integration
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-sage/10 to-amethyst/10 backdrop-blur-sm p-8 rounded-2xl divine-shadow mystical-border mb-12">
          <h3 className="text-2xl font-bold sacred-text text-forest mb-6 text-center">Program Structure</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage text-cream rounded-full w-8 h-8 flex items-center justify-center font-bold sacred-text">1</div>
              <div>
                <h4 className="font-semibold sacred-text text-forest">Weeks 1-2: Human Design Foundation</h4>
                <p className="text-earth body-text">Deep dive into your unique chart and energetic blueprint</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amethyst text-cream rounded-full w-8 h-8 flex items-center justify-center font-bold sacred-text">2</div>
              <div>
                <h4 className="font-semibold sacred-text text-forest">Weeks 3-4: Past Life Exploration</h4>
                <p className="text-earth body-text">Guided regression sessions and healing integration</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-earth text-cream rounded-full w-8 h-8 flex items-center justify-center font-bold sacred-text">3</div>
              <div>
                <h4 className="font-semibold sacred-text text-forest">Weeks 5-6: Intuitive Mastery</h4>
                <p className="text-earth body-text">Develop your psychic abilities and spiritual connection</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="earth-gradient text-cream p-8 rounded-2xl divine-shadow">
            <h3 className="text-2xl font-bold sacred-text mb-4">Ready to Begin?</h3>
            <p className="text-cream/90 body-text mb-6 text-lg">
              Your transformational journey starts with a single step
            </p>
            <Link
              href="https://www.groupregressionsession.com/offers/Loa3JMLQ/checkout"
              className="bg-cream text-forest px-8 py-4 rounded-full font-semibold sacred-text text-lg hover:bg-cream/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              Your Transformational Journey Starts Here <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="mt-6">
              <p className="text-cream/80 body-text text-sm">
                Investment varies by program length • Payment plans available • 100% satisfaction guarantee
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
