'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles, Heart, Moon } from 'lucide-react';

const sacredStats = [
  {
    number: "50+",
    label: "Sacred Episodes",
    icon: Star,
    element: "air",
    delay: 0
  },
  {
    number: "10K+",
    label: "Divine Downloads", 
    icon: Sparkles,
    element: "fire",
    delay: 0.1
  },
  {
    number: "4.9★",
    label: "Sacred Rating",
    icon: Heart,
    element: "water", 
    delay: 0.2
  },
  {
    number: "Weekly",
    label: "New Awakenings",
    icon: Moon,
    element: "earth",
    delay: 0.3
  }
];

const elementColors = {
  earth: {
    bg: "from-green-500/20 to-emerald-600/20",
    icon: "text-emerald-600",
    glow: "shadow-emerald-500/20"
  },
  air: {
    bg: "from-blue-500/20 to-cyan-600/20", 
    icon: "text-cyan-600",
    glow: "shadow-cyan-500/20"
  },
  fire: {
    bg: "from-red-500/20 to-orange-600/20",
    icon: "text-orange-600", 
    glow: "shadow-orange-500/20"
  },
  water: {
    bg: "from-purple-500/20 to-pink-600/20",
    icon: "text-pink-600",
    glow: "shadow-pink-500/20"
  }
};

export default function SacredPodcastStatsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-gold/5 to-ethereal-pink/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mystical-purple mb-6 font-cinzel">
            Sacred Podcast Journey
          </h2>
          <p className="text-xl text-cosmic-blue max-w-3xl mx-auto font-cormorant">
            Witness the divine growth of our sacred community and the transformational power of spiritual wisdom
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sacredStats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = elementColors[stat.element as keyof typeof elementColors];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="text-center group"
              >
                <div className={`relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${colors.bg} 
                              flex items-center justify-center mb-4 group-hover:scale-110 
                              transition-transform duration-300 shadow-lg ${colors.glow}`}>
                  <Icon className={`w-8 h-8 ${colors.icon} group-hover:scale-110 transition-transform duration-300`} />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-spiritual-gold animate-float" />
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: stat.delay + 0.2 }}
                  className="space-y-2"
                >
                  <div className="text-3xl md:text-4xl font-bold text-mystical-purple font-cinzel 
                                group-hover:text-spiritual-gold transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-cosmic-blue font-medium font-cormorant">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Sacred Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-spiritual-gold/10 to-ethereal-pink/10 
                        rounded-full border border-spiritual-gold/20">
            <Star className="w-5 h-5 text-spiritual-gold mr-2" />
            <span className="text-cosmic-blue font-cormorant italic">
              Each listen is a sacred step on your soul's journey
            </span>
            <Star className="w-5 h-5 text-spiritual-gold ml-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
