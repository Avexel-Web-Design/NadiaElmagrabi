'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Moon } from 'lucide-react';

export default function TransformationBenefitsSection() {
  const benefits = [
    {
      icon: Moon,
      title: "Release Sacred Shadows",
      description: "Clear inherited ancestral patterns, karmic wounds, and past-life imprints that keep your soul bound in limitation.",
      color: "mystical-purple"
    },
    {
      icon: Star,
      title: "Awaken Divine Self-Awareness", 
      description: "Understand your unique sacred design and soul's eternal journey with unprecedented cosmic clarity.",
      color: "cosmic-blue"
    },
    {
      icon: CheckCircle,
      title: "Embody Your Sacred Power",
      description: "Confidently embrace the divine life you're destined to live with authentic soul purpose and celestial grace.",
      color: "ethereal-pink"
    }
  ];

  return (
    <section className="py-24 spiritual-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
            Transform Your Sacred Existence
          </h2>
          <p className="text-xl text-moonstone max-w-3xl mx-auto">
            By delving into these divine modalities, you'll experience profound soul shifts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ul className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start gap-6"
                >
                  <div className={`bg-gradient-to-br from-${benefit.color}/30 to-${benefit.color}/10 rounded-full p-4 mt-1 ethereal-glow floating-animation`}>
                    <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-sacred-white mb-3 spiritual-text-shadow">
                      {benefit.title}
                    </h3>
                    <p className="text-moonstone leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sacred Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mystical-card p-10 text-center"
          >
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-spiritual-gold/30 to-ethereal-pink/30 flex items-center justify-center ethereal-glow">
                <Star className="w-12 h-12 text-spiritual-gold rotating" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
              Your Soul's Sacred Blueprint Awaits
            </h3>
            
            <p className="text-moonstone mb-8 leading-relaxed text-lg">
              This transcends healing—it's a complete sacred recalibration of your divine life force. 
              You'll emerge with celestial tools, profound insights, and deep knowing of your soul's truth.
            </p>
            
            <div className="mystical-card p-6 bg-gradient-to-br from-spiritual-gold/10 to-ethereal-pink/10">
              <p className="text-spiritual-gold font-semibold text-xl italic">
                "The patterns that kept your soul small will dissolve into stardust, 
                and your authentic divine power will emerge like the dawn."
              </p>
            </div>

            {/* Sacred Geometry Decoration */}
            <div className="mt-8">
              <div className="merkaba-pattern mx-auto rotating-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
