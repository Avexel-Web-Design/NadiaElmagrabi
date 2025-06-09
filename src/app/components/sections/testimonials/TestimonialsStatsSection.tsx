'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: "500+", label: "Lives Transformed" },
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Sessions Completed" },
  { number: "98%", label: "Client Satisfaction" }
];

export default function TestimonialsStatsSection() {
  return (
    <section className="py-16 bg-cream/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-2">
                {stat.number}
              </div>
              <div className="body-text text-earth/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
