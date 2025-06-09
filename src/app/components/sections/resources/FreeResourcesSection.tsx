'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const freeResources = [
  {
    title: "Daily Spiritual Practice Checklist",
    description: "A simple checklist to help you maintain consistent spiritual practices",
    type: "PDF"
  },
  {
    title: "Chakra Balancing Quick Guide",
    description: "Essential information about the seven chakras and balancing techniques",
    type: "PDF"
  },
  {
    title: "Manifestation Journal Template",
    description: "A structured journal template for conscious manifestation practice",
    type: "PDF"
  },
  {
    title: "Energy Protection Techniques",
    description: "Practical methods to protect and cleanse your energy field",
    type: "PDF"
  }
];

export default function FreeResourcesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Free Resources
          </h2>
          <p className="text-xl text-earth body-text max-w-3xl mx-auto">
            Start your spiritual journey with these complimentary tools and guides
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream/80 backdrop-blur-sm rounded-xl p-6 divine-shadow mystical-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Download className="w-6 h-6 text-sage mr-3" />
                <span className="bg-sage/20 text-sage px-2 py-1 rounded text-sm font-medium body-text">
                  {resource.type}
                </span>
              </div>
              <h3 className="font-semibold sacred-text text-forest mb-3">{resource.title}</h3>
              <p className="text-earth body-text text-sm mb-4">{resource.description}</p>
              <button className="w-full earth-gradient text-cream py-2 rounded-lg font-medium sacred-text hover:opacity-90 transition-opacity duration-300">
                Download Free
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
