'use client';

import { motion } from 'framer-motion';

export default function SacredStatsSection() {
  const stats = [
    { number: "500+", label: "Sacred Souls Transformed", element: "Earth" },
    { number: "10+", label: "Years of Divine Wisdom", element: "Air" },
    { number: "1000+", label: "Sacred Sessions Completed", element: "Fire" },
    { number: "98%", label: "Soul Satisfaction Rate", element: "Water" }
  ];

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Earth': return 'text-spiritual-gold';
      case 'Air': return 'text-cosmic-blue';
      case 'Fire': return 'text-ethereal-pink';
      case 'Water': return 'text-mystical-purple';
      default: return 'text-spiritual-gold';
    }
  };

  return (
    <section className="py-20 celestial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center mystical-card p-6 group hover:scale-105 transition-all duration-500"
            >
              <div className={`text-4xl md:text-5xl font-bold ${getElementColor(stat.element)} mb-3 spiritual-text-shadow`}>
                {stat.number}
              </div>
              <div className="text-moonstone font-medium mb-2">{stat.label}</div>
              <div className={`text-sm ${getElementColor(stat.element)} opacity-70 italic`}>
                {stat.element} Element
              </div>
              
              {/* Sacred Decoration */}
              <div className="mt-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
