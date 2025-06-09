'use client';

import { motion } from 'framer-motion';
import { Check, Star, Gem, Heart } from 'lucide-react';

const sacredFeatures = [
  "Complete PLR sacred methodology and divine theory",
  "Step-by-step self-guided soul regression techniques", 
  "10+ real soul journey case studies and sacred examples",
  "Integration and cosmic healing practices",
  "Divine safety protocols and sacred preparation",
  "3 guided meditation audio soul recordings",
  "Eternal lifetime access and future cosmic updates",
  "Mobile-friendly sacred PDF format"
];

// Group features by element for sacred theming
const elementalFeatures = [
  { 
    element: "Fire", 
    icon: Star, 
    color: "text-orange-500",
    bg: "bg-orange-50",
    features: sacredFeatures.slice(0, 2)
  },
  { 
    element: "Water", 
    icon: Heart, 
    color: "text-cosmic-blue",
    bg: "bg-blue-50", 
    features: sacredFeatures.slice(2, 4)
  },
  { 
    element: "Air", 
    icon: Gem, 
    color: "text-purple-500",
    bg: "bg-purple-50",
    features: sacredFeatures.slice(4, 6)
  },
  { 
    element: "Earth", 
    icon: Check, 
    color: "text-green-500",
    bg: "bg-green-50",
    features: sacredFeatures.slice(6, 8)
  }
];

export default function SacredDiscoveriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Sacred Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 text-6xl text-purple-100 animate-float">☾</div>
        <div className="absolute bottom-10 left-10 text-8xl text-purple-100 animate-float-delayed">✧</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-purple-50 animate-slow-spin">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gray-800 mb-6 sacred-text-glow">
            Sacred Soul Discoveries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cormorant">
            Everything your soul needs to safely explore divine past lives and heal current life sacred patterns
          </p>
          
          {/* Sacred Divider */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <div className="text-spiritual-gold text-2xl">✦</div>
            <div className="w-16 h-px bg-gradient-to-r from-spiritual-gold to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {elementalFeatures.map((group, groupIndex) => {
            const IconComponent = group.icon;
            return (
              <motion.div
                key={group.element}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                className="relative"
              >
                <div className={`${group.bg} rounded-2xl p-6 h-full sacred-glow-soft relative overflow-hidden`}>
                  {/* Elemental Header */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-3 rounded-full ${group.bg} border-2 border-white sacred-glow`}>
                      <IconComponent className={`w-6 h-6 ${group.color}`} />
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-cinzel font-bold text-center mb-4 ${group.color}`}>
                    {group.element} Element
                  </h3>

                  {/* Sacred Features */}
                  <div className="space-y-4">
                    {group.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (groupIndex * 0.2) + (index * 0.1) }}
                        className="flex items-start"
                      >
                        <div className={`rounded-full p-1 mr-3 mt-1 ${group.bg} border border-white/50`}>
                          <Check className={`w-3 h-3 ${group.color}`} />
                        </div>
                        <span className="text-gray-700 text-sm font-cormorant leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Sacred Elements */}
                  <div className="absolute -top-2 -right-2 text-xl text-white/30 animate-float">✦</div>
                  <div className="absolute -bottom-2 -left-2 text-lg text-white/30 animate-float-delayed">❋</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sacred Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto sacred-glow">
            <h3 className="text-2xl font-cinzel font-bold text-gray-800 mb-4">
              Begin Your Sacred Soul Journey
            </h3>
            <p className="text-gray-600 font-cormorant mb-6">
              Trust in the divine timing of your soul's calling to explore these sacred mysteries
            </p>
            <div className="flex items-center justify-center space-x-2 text-spiritual-gold">
              <Star className="w-5 h-5 animate-pulse" />
              <span className="font-cormorant">Your soul remembers what your mind has forgotten</span>
              <Star className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
