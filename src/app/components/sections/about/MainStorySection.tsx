'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function MainStorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
              My Journey to Healing
            </h2>
            <div className="space-y-6 text-earth body-text leading-relaxed">
              <p className="text-lg">
                As a Psychotherapist & wellness coach specializing in Past Life Regressions, I support working professionals and creative visionaries to step confidently into their radiance and power.
              </p>
              <p>
                My path to becoming a healer wasn't linear. Like many of the women I work with, I carried the weight of ancestral patterns that kept me from fully expressing my authentic self. It was through my own deep healing journey that I discovered the transformative power of combining traditional therapy with spiritual healing modalities.
              </p>
              <p>
                Over the last 20 years, I've studied and integrated numerous healing modalities, developing a unique approach that addresses not just the symptoms, but the root causes of what keeps us stuck. I believe that true healing happens when we address the mind, body, and soul as one interconnected system.
              </p>
              <p>
                My work is deeply personal. I understand what it feels like to carry generational trauma, to feel disconnected from your purpose, and to struggle with trusting your inner voice. That's why I'm so passionate about helping women break these cycles—not just for themselves, but for the generations that follow.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="earth-gradient p-8 rounded-2xl divine-shadow"
          >
            <div className="text-center">
              <Heart className="w-16 h-16 text-sage mx-auto mb-6" />
              <h3 className="text-2xl font-bold sacred-text text-cream mb-4">
                My Mission
              </h3>
              <p className="text-cream/90 body-text leading-relaxed mb-6">
                To guide women back to their authentic selves, helping them reclaim their voice, confidence, and true power. I believe every woman has the capacity to heal not just herself, but her entire lineage.
              </p>
              <div className="bg-cream/20 backdrop-blur-sm p-4 rounded-lg mystical-border">
                <p className="text-cream font-semibold italic body-text">
                  "Some patterns don't start with you, but they can end with you."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
