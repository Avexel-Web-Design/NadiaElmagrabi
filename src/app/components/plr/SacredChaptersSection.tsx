'use client';

import { motion } from 'framer-motion';
import { Star, Moon, Sun, Gem } from 'lucide-react';

const sacredChapters = [
  {
    number: "01",
    title: "Understanding Sacred Past Life Regression",
    description: "The divine science, sacred spirituality, and mystical methodology behind PLR soul work",
    element: "Fire",
    icon: Sun,
    color: "text-orange-500",
    bg: "from-orange-50 to-red-50"
  },
  {
    number: "02", 
    title: "Sacred Preparation and Divine Safety",
    description: "Essential preparation techniques and divine safety protocols for soul exploration",
    element: "Water",
    icon: Moon,
    color: "text-cosmic-blue",
    bg: "from-blue-50 to-cyan-50"
  },
  {
    number: "03",
    title: "Self-Guided Sacred PLR Techniques",
    description: "Step-by-step mystical methods for accessing divine past life soul memories",
    element: "Air",
    icon: Star,
    color: "text-purple-500",
    bg: "from-purple-50 to-pink-50"
  },
  {
    number: "04",
    title: "Interpreting Your Sacred Experiences",
    description: "How to understand and validate your divine past life sacred insights",
    element: "Earth",
    icon: Gem,
    color: "text-green-500",
    bg: "from-green-50 to-emerald-50"
  },
  {
    number: "05",
    title: "Sacred Healing and Soul Integration",
    description: "Practical methods for healing past life trauma and sacred soul patterns",
    element: "Fire",
    icon: Sun,
    color: "text-orange-500",
    bg: "from-orange-50 to-red-50"
  },
  {
    number: "06",
    title: "Divine Soul Case Studies",
    description: "Real examples of past life sacred patterns and their divine resolution",
    element: "Water",
    icon: Moon,
    color: "text-cosmic-blue",
    bg: "from-blue-50 to-cyan-50"
  },
  {
    number: "07",
    title: "Advanced Sacred Techniques",
    description: "Deeper mystical methods for experienced sacred soul practitioners",
    element: "Air",
    icon: Star,
    color: "text-purple-500",
    bg: "from-purple-50 to-pink-50"
  },
  {
    number: "08",
    title: "Living Your Sacred Soul's Purpose",
    description: "How past life divine awareness guides your current sacred life path",
    element: "Earth",
    icon: Gem,
    color: "text-green-500",
    bg: "from-green-50 to-emerald-50"
  }
];

export default function SacredChaptersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-6xl text-purple-100 animate-float">☾</div>
        <div className="absolute bottom-20 right-20 text-8xl text-purple-100 animate-float-delayed">✦</div>
        <div className="absolute top-1/2 left-10 text-4xl text-purple-100 animate-float">❋</div>
        <div className="absolute top-1/3 right-10 text-5xl text-purple-100 animate-float-delayed">✧</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gray-800 mb-6 sacred-text-glow">
            Sacred Chapter Breakdown
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cormorant">
            A systematic divine approach to understanding and practicing sacred past life regression
          </p>
          
          {/* Sacred Divider */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <div className="text-spiritual-gold text-3xl animate-pulse">✦</div>
            <div className="w-20 h-px bg-gradient-to-r from-spiritual-gold to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sacredChapters.map((chapter, index) => {
            const IconComponent = chapter.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${chapter.bg} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 sacred-glow-soft h-full relative overflow-hidden group-hover:scale-105`}>
                  {/* Sacred Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-3xl font-bold ${chapter.color} sacred-text-glow`}>
                      {chapter.number}
                    </div>
                    <div className={`p-2 rounded-full bg-white/50 backdrop-blur-sm`}>
                      <IconComponent className={`w-5 h-5 ${chapter.color}`} />
                    </div>
                  </div>

                  {/* Element Badge */}
                  <div className="flex items-center justify-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-cormorant ${chapter.color} bg-white/60 backdrop-blur-sm border border-white/30`}>
                      {chapter.element} Element
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-cinzel font-semibold text-gray-800 mb-3 leading-tight">
                    {chapter.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm font-cormorant leading-relaxed">
                    {chapter.description}
                  </p>

                  {/* Floating Sacred Elements */}
                  <div className="absolute top-2 right-2 text-lg text-white/30 animate-float">✦</div>
                  <div className="absolute bottom-2 left-2 text-sm text-white/30 animate-float-delayed">❋</div>
                  
                  {/* Sacred Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sacred Bottom Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto sacred-glow relative">
            {/* Floating Sacred Elements */}
            <div className="absolute -top-4 -left-4 text-2xl text-spiritual-gold animate-float">✦</div>
            <div className="absolute -bottom-4 -right-4 text-2xl text-ethereal-pink animate-float-delayed">❋</div>
            
            <h3 className="text-2xl font-cinzel font-bold text-gray-800 mb-4">
              Eight Sacred Chapters of Soul Transformation
            </h3>
            <p className="text-gray-600 font-cormorant mb-6 leading-relaxed">
              Each chapter builds upon divine foundations, creating a comprehensive sacred journey from preparation through advanced soul mastery. Your soul's wisdom awaits discovery within these sacred pages.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center text-orange-500">
                <Sun className="w-4 h-4 mr-1" />
                <span className="font-cormorant">Fire Wisdom</span>
              </div>
              <div className="flex items-center text-cosmic-blue">
                <Moon className="w-4 h-4 mr-1" />
                <span className="font-cormorant">Water Healing</span>
              </div>
              <div className="flex items-center text-purple-500">
                <Star className="w-4 h-4 mr-1" />
                <span className="font-cormorant">Air Insights</span>
              </div>
              <div className="flex items-center text-green-500">
                <Gem className="w-4 h-4 mr-1" />
                <span className="font-cormorant">Earth Grounding</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
