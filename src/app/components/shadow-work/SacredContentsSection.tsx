'use client';

import { motion } from 'framer-motion';
import { BookOpen, Heart, Shield, Star, Moon, Gem } from 'lucide-react';

const sacredContents = [
  {
    icon: Moon,
    title: "Understanding Shadow Alchemy",
    description: "Learn the sacred art of shadow work - why it's essential for soul healing and how it transforms your spiritual journey",
    element: "Water"
  },
  {
    icon: Heart,
    title: "Sacred Self-Compassion Practices",
    description: "Develop the divine loving awareness needed to approach your shadow with cosmic kindness and soul acceptance",
    element: "Air"
  },
  {
    icon: Shield,
    title: "Mystical Protection & Boundaries", 
    description: "Essential sacred guidelines for practicing shadow work safely and knowing when to seek spiritual support",
    element: "Earth"
  },
  {
    icon: Star,
    title: "Transformational Soul Exercises",
    description: "Step-by-step mystical practices to identify and work with your shadow patterns through divine awareness",
    element: "Fire"
  },
  {
    icon: Gem,
    title: "Daily Integration Rituals",
    description: "Sacred practices to integrate shadow work insights into your everyday life and conscious relationships",
    element: "Water"
  },
  {
    icon: BookOpen,
    title: "Common Shadow Archetypes",
    description: "Recognize universal shadow aspects and how they manifest in soul relationships and life patterns",
    element: "Air"
  }
];

const elementColors = {
  Fire: { bg: 'from-orange-500/20 to-red-500/20', border: 'border-orange-400/40', icon: 'text-orange-400' },
  Water: { bg: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-400/40', icon: 'text-blue-400' },
  Earth: { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-400/40', icon: 'text-green-400' },
  Air: { bg: 'from-yellow-500/20 to-pink-500/20', border: 'border-yellow-400/40', icon: 'text-yellow-400' }
};

export default function SacredContentsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-midnight-black via-cosmic-blue to-mystic-purple overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-spiritual-gold/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-ethereal-pink/15 blur-3xl animate-float-delayed"></div>
      </div>

      {/* Sacred Geometry Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-spiritual-gold/30 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-ethereal-pink/20 rounded-full animate-spin-reverse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-spiritual-gold to-ethereal-pink mr-4"></div>
            <span className="font-cormorant text-lg text-spiritual-gold uppercase tracking-widest">Sacred Wisdom Within</span>
            <div className="w-1 h-12 bg-gradient-to-b from-ethereal-pink to-spiritual-gold ml-4"></div>
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6 sacred-text-shadow">
            What's Inside This 
            <span className="bg-gradient-to-r from-spiritual-gold to-ethereal-pink bg-clip-text text-transparent"> Sacred Guide</span>
          </h2>
          
          <p className="font-cormorant text-xl md:text-2xl text-cosmic-blue-light max-w-4xl mx-auto leading-relaxed">
            Everything you need to understand and begin working with your shadow aspects through 
            <span className="text-spiritual-gold"> divine safety</span> and 
            <span className="text-ethereal-pink"> mystical effectiveness</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredContents.map((item, index) => {
            const colors = elementColors[item.element as keyof typeof elementColors];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className={`sacred-card bg-gradient-to-br ${colors.bg} backdrop-blur-xl rounded-3xl p-8 
                           border ${colors.border} shadow-mystical hover:shadow-golden-glow 
                           transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Element Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/20 ${colors.icon} 
                                  backdrop-blur-sm border border-white/30`}>
                    {item.element}
                  </span>
                </div>

                {/* Sacred Symbol Background */}
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-32 h-32 border-2 border-current rounded-full animate-spin-slow"></div>
                </div>

                <div className={`w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl 
                               flex items-center justify-center mb-6 shadow-mystical ${colors.border} border
                               group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${colors.icon} shadow-glow`} />
                </div>
                
                <h3 className="font-cinzel text-xl font-bold text-white mb-4 sacred-text-shadow group-hover:text-spiritual-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-cormorant text-cosmic-blue-light leading-relaxed">
                  {item.description}
                </p>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className={`absolute top-4 left-4 w-2 h-2 ${colors.icon} rounded-full animate-float opacity-60`}></div>
                  <div className={`absolute bottom-8 right-8 w-1 h-1 ${colors.icon} rounded-full animate-float-delayed opacity-40`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
