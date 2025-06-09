'use client';

import { motion } from 'framer-motion';
import { Moon, Star, Sun } from 'lucide-react';

export default function SacredJourneyStructureSection() {
  const phases = [
    {
      number: 1,
      title: "Sacred Foundation Phase",
      subtitle: "Weeks 1-2: Human Design Illumination",
      description: "Deep sacred dive into your unique celestial chart and divine energetic blueprint",
      icon: Moon,
      color: "mystical-purple",
      element: "Lunar Wisdom"
    },
    {
      number: 2,
      title: "Soul Exploration Phase", 
      subtitle: "Weeks 3-4: Past Life Sacred Journey",
      description: "Guided soul regression sessions and divine healing integration across lifetimes",
      icon: Star,
      color: "cosmic-blue", 
      element: "Stellar Navigation"
    },
    {
      number: 3,
      title: "Divine Mastery Phase",
      subtitle: "Weeks 5-6: Intuitive Sacred Awakening",
      description: "Develop your psychic temple abilities and deepen your spiritual cosmic connection",
      icon: Sun,
      color: "spiritual-gold",
      element: "Solar Empowerment"
    }
  ];

  return (
    <section className="py-24 cosmic-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
            Your Sacred Transformation Journey
          </h2>
          <p className="text-xl text-moonstone max-w-3xl mx-auto">
            A comprehensive 6-week divine program designed for profound soul integration
          </p>
        </motion.div>

        {/* Sacred Journey Structure */}
        <div className="mystical-card p-12 mb-16">
          <h3 className="text-3xl font-bold text-sacred-white mb-12 text-center spiritual-text-shadow">
            Sacred Program Structure
          </h3>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                {/* Sacred Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-${phase.color}/30 to-${phase.color}/10 flex items-center justify-center ethereal-glow`}>
                    <div className={`absolute inset-2 rounded-full border-2 border-${phase.color}/50 flex items-center justify-center`}>
                      <span className={`text-2xl font-bold text-${phase.color}`}>
                        {phase.number}
                      </span>
                    </div>
                    <phase.icon className={`absolute -top-2 -right-2 w-8 h-8 text-${phase.color} floating-animation`} />
                  </div>
                </div>

                {/* Phase Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-2">
                    <span className={`text-${phase.color} font-semibold text-sm uppercase tracking-wider`}>
                      {phase.element}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-sacred-white mb-2 spiritual-text-shadow">
                    {phase.title}
                  </h4>
                  <h5 className={`text-lg font-semibold text-${phase.color} mb-4`}>
                    {phase.subtitle}
                  </h5>
                  <p className="text-moonstone leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Sacred Connector Line (not for last item) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute left-12 mt-24 w-0.5 h-16 bg-gradient-to-b from-spiritual-gold/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sacred Geometry Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex justify-center items-center gap-8">
            <div className="flower-of-life rotating-slow opacity-30"></div>
            <div className="merkaba-pattern rotating opacity-20"></div>
            <div className="flower-of-life rotating-slow opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
