'use client';

import { motion } from 'framer-motion';
import { Eye, Heart, Sparkles, CheckCircle } from 'lucide-react';

export default function SacredModalitiesSection() {
  const modalities = [
    {
      icon: Eye,
      title: "Human Design Wisdom",
      description: "Understand your unique sacred blueprint to navigate life with divine authenticity and cosmic ease. Learn to trust your inner temple and make decisions aligned with your soul's true nature.",
      color: "mystical-purple",
      gradient: "from-mystical-purple/20 to-ethereal-pink/20",
      features: [
        "Sacred chart illumination",
        "Divine strategy & authority guidance", 
        "Spiritual life application"
      ]
    },
    {
      icon: Heart,
      title: "Past Life Soul Regression",
      description: "A sacred, gentle process to explore past incarnations, uncovering divine insights and healing relevant to your current soul journey. Release ancient patterns that no longer serve your highest good.",
      color: "cosmic-blue",
      gradient: "from-cosmic-blue/20 to-mystical-purple/20",
      features: [
        "Sacred guided soul journey",
        "Divine healing & integration",
        "Karmic pattern recognition"
      ]
    },
    {
      icon: Sparkles,
      title: "Intuitive Sacred Development",
      description: "Learn to receive divine messages from spirit and use your sacred intuition as a guiding celestial force in decision-making. Develop your psychic gifts and deepen your spiritual connection.",
      color: "ethereal-pink",
      gradient: "from-ethereal-pink/20 to-spiritual-gold/20",
      features: [
        "Divine spirit communication",
        "Intuitive temple strengthening",
        "Sacred decision-making guidance"
      ]
    }
  ];

  return (
    <section className="py-24 celestial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
            Sacred Modalities Woven Together
          </h2>
          <p className="text-xl text-moonstone max-w-3xl mx-auto">
            Three divine pathways combined for profound soul transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {modalities.map((modality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mystical-card p-8 group hover:scale-105 transition-all duration-500"
            >
              {/* Sacred Icon */}
              <div className="mb-8 text-center">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${modality.gradient} flex items-center justify-center ethereal-glow floating-animation`}>
                  <modality.icon className={`w-10 h-10 text-${modality.color}`} />
                </div>
              </div>

              {/* Sacred Title */}
              <h3 className="text-2xl font-bold text-sacred-white mb-6 text-center spiritual-text-shadow">
                {modality.title}
              </h3>

              {/* Divine Description */}
              <p className="text-moonstone mb-8 leading-relaxed text-center">
                {modality.description}
              </p>

              {/* Sacred Features */}
              <ul className="space-y-4">
                {modality.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 text-${modality.color} flex-shrink-0`} />
                    <span className="text-moonstone">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Sacred Decoration */}
              <div className="mt-8 text-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
