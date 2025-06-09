'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Eye, Flower2, Feather, Gem } from 'lucide-react';

export default function TrainingCredentialsSection() {
  const sacredTraining = [
    "Licensed Sacred Psychotherapist with 20+ years experience",
    "Certified Human Design Oracle & Cosmic Blueprint Reader",
    "Gene Keys Guardian and Sacred Keeper",
    "Past Life Remembrance & Soul Regression Certified",
    "Embodied Energetics & Somatic Soul Healing",
    "Ancestral Alchemy & Lineage Liberation Specialist"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="merkaba-pattern"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flower2 className="w-8 h-8 text-spiritual-gold" />
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-mystical-purple">
              Sacred Training & Divine Philosophy
            </h2>
            <Flower2 className="w-8 h-8 text-spiritual-gold" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mystical-card p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Floating Sacred Symbol */}
            <div className="absolute top-4 right-4 floating-slow opacity-30">
              <Gem className="w-10 h-10 text-spiritual-gold" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-12 h-12 text-spiritual-gold ethereal-glow" />
                <h3 className="text-2xl font-cinzel font-bold text-white">
                  Sacred Training & Mystical Arts
                </h3>
              </div>
              
              <ul className="space-y-4 text-white/90 font-cormorant">
                {sacredTraining.map((training, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-spiritual-gold rounded-full mt-2 ethereal-glow"></div>
                    <span>{training}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Sacred Seal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <Eye className="w-full h-full text-spiritual-gold rotating-slow" />
                </div>
                <p className="text-spiritual-gold font-cinzel text-sm">
                  Sacred Seal of Mastery
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Feather className="w-8 h-8 text-cosmic-blue" />
              <h3 className="text-2xl font-cinzel font-bold text-mystical-purple">
                My Sacred Healing Philosophy
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-cormorant">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I believe that healing is not just about addressing symptoms, but about remembering 
                who you truly are beneath the veils of conditioning, trauma, and inherited patterns. 
                Every soul carries ancient wisdom waiting to be awakened.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My approach weaves together the practical wisdom of psychology with the profound 
                insights of mystical healing. I work with you on multiple dimensions—mental, emotional, 
                energetic, and ancestral—to create soul-deep transformation.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Every session is divinely tailored to your unique soul blueprint and where you are 
                in your sacred healing journey. I create a safe, sacred temple where you can explore, 
                heal, and reclaim the luminous parts of yourself that have been hidden or wounded.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-cosmic-blue/10 to-mystical-purple/10 p-6 rounded-lg border border-cosmic-blue/20"
              >
                <Users className="w-8 h-8 text-cosmic-blue mb-4" />
                <p className="text-mystical-purple font-semibold font-cormorant">
                  "True healing happens in sacred relationship. My role is to witness your divine truth, 
                  guide your soul's process, and help you remember your innate cosmic wholeness."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
