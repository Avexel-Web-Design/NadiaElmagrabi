'use client';

import { motion } from 'framer-motion';
import { Download, Star, Sparkles, Moon, Sun } from 'lucide-react';

const freeResources = [
  {
    title: "Daily Sacred Practice Checklist",
    description: "A divine checklist to help you maintain consistent spiritual practices and cosmic alignment",
    type: "Sacred PDF",
    element: "earth"
  },
  {
    title: "Chakra Activation Quick Guide", 
    description: "Essential mystical knowledge about the seven chakras and divine balancing techniques",
    type: "Sacred PDF",
    element: "air"
  },
  {
    title: "Manifestation Moon Journal Template",
    description: "A structured sacred journal template for conscious manifestation and lunar magic practice",
    type: "Sacred PDF", 
    element: "water"
  },
  {
    title: "Energy Protection Rituals",
    description: "Powerful methods to protect and cleanse your energy field with sacred techniques",
    type: "Sacred PDF",
    element: "fire"
  }
];

const elementStyles = {
  earth: {
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700'
  },
  air: {
    gradient: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50',
    border: 'border-sky-200', 
    icon: 'text-sky-600',
    button: 'bg-sky-600 hover:bg-sky-700'
  },
  water: {
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  fire: {
    gradient: 'from-red-500 to-pink-500',
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'text-red-600',
    button: 'bg-red-600 hover:bg-red-700'
  }
};

type ElementType = keyof typeof elementStyles;

export default function SacredFreeResourcesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <div className="flower-of-life w-24 h-24"></div>
        </div>
        <div className="absolute top-40 right-20">
          <div className="merkaba w-20 h-20"></div>
        </div>
        <div className="absolute bottom-20 left-40">
          <div className="merkaba w-16 h-16"></div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="flower-of-life w-28 h-28"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Sacred Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-300/30 mb-6"
          >
            <Star className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-800 font-cinzel">Sacred Gifts</span>
            <Star className="w-5 h-5 text-emerald-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-gray-800 mb-6"
          >
            Divine 
            <span className="text-emerald-600"> Free Resources</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-cormorant leading-relaxed"
          >
            Begin your sacred journey with these complimentary tools and mystical guides, 
            gifted to support your spiritual awakening
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeResources.map((resource, index) => {
            const elementStyle = elementStyles[resource.element as ElementType];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${elementStyle.bg} ${elementStyle.border} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 relative overflow-hidden`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${elementStyle.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <Download className={`w-6 h-6 ${elementStyle.icon} group-hover:animate-bounce`} />
                    <span className={`${elementStyle.bg} ${elementStyle.border} border px-3 py-1 rounded-full text-sm font-medium font-cinzel`}>
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-800 mb-3 font-cinzel group-hover:text-gray-900 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-cormorant">
                    {resource.description}
                  </p>

                  {/* Sacred Element Icons */}
                  <div className="flex items-center justify-center mb-4 opacity-30">
                    {resource.element === 'earth' && <Moon className="w-4 h-4 text-amber-600" />}
                    {resource.element === 'air' && <Star className="w-4 h-4 text-sky-600" />}
                    {resource.element === 'water' && <Sparkles className="w-4 h-4 text-blue-600" />}
                    {resource.element === 'fire' && <Sun className="w-4 h-4 text-red-600" />}
                  </div>

                  <motion.button 
                    className={`w-full ${elementStyle.button} text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg group font-cinzel`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                      Receive Sacred Gift
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
