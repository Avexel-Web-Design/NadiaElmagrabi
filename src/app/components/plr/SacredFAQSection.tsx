'use client';

import { motion } from 'framer-motion';
import { Star, Moon, Heart, Gem } from 'lucide-react';

const sacredFAQs = [
  {
    question: "Is this sacred guide suitable for complete spiritual beginners?",
    answer: "Absolutely! This divine guide is designed to gently guide souls at all levels, from curious beginners to advanced spiritual practitioners. Every sacred step is explained with divine care and cosmic clarity.",
    element: "Earth",
    icon: Gem,
    color: "text-green-500",
    bg: "from-green-50 to-emerald-50"
  },
  {
    question: "How safe are these sacred PLR techniques to practice alone?",
    answer: "The divine techniques in this guide include comprehensive safety protocols and sacred preparation methods. Each practice is designed to be gentle, grounding, and completely safe for self-guided soul exploration.",
    element: "Fire",
    icon: Star,
    color: "text-orange-500", 
    bg: "from-orange-50 to-red-50"
  },
  {
    question: "What if I don't experience any sacred past life memories?",
    answer: "Every soul's divine journey is unique. The guide includes multiple sacred approaches and techniques. Sometimes divine insights come as feelings, knowings, or symbolic sacred visions rather than clear visual memories.",
    element: "Water",
    icon: Heart,
    color: "text-cosmic-blue",
    bg: "from-blue-50 to-cyan-50"
  },
  {
    question: "How long does it take to see sacred transformation results?",
    answer: "Many souls experience profound divine shifts immediately, while others notice gradual sacred changes over weeks. The guide includes integration practices to help you embody your sacred discoveries in daily life.",
    element: "Air",
    icon: Moon,
    color: "text-purple-500",
    bg: "from-purple-50 to-pink-50"
  }
];

export default function SacredFAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Sacred Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl text-purple-100 animate-float">☾</div>
        <div className="absolute bottom-10 right-10 text-8xl text-purple-100 animate-float-delayed">✦</div>
        <div className="absolute top-1/2 right-1/4 text-4xl text-purple-100 animate-float">❋</div>
        <div className="absolute top-1/4 left-1/3 text-5xl text-purple-100 animate-float-delayed">✧</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gray-800 mb-6 sacred-text-glow">
            Sacred Soul Questions
          </h2>
          <p className="text-xl text-gray-600 font-cormorant">
            Divine answers to help guide your sacred PLR journey
          </p>
          
          {/* Sacred Divider */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <div className="text-spiritual-gold text-2xl animate-pulse">✦</div>
            <div className="w-16 h-px bg-gradient-to-r from-spiritual-gold to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sacredFAQs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${faq.bg} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 sacred-glow-soft h-full relative overflow-hidden group-hover:scale-105`}>
                  {/* Element Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full bg-white/60 backdrop-blur-sm mr-3`}>
                      <IconComponent className={`w-5 h-5 ${faq.color}`} />
                    </div>
                    <span className={`text-xs font-cormorant ${faq.color} bg-white/60 px-2 py-1 rounded-full`}>
                      {faq.element} Element
                    </span>
                  </div>

                  <h3 className="text-lg font-cinzel font-semibold text-gray-800 mb-4 leading-tight">
                    {faq.question}
                  </h3>
                  
                  <p className="text-gray-600 font-cormorant leading-relaxed">
                    {faq.answer}
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

        {/* Sacred Support Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto sacred-glow relative">
            {/* Floating Sacred Elements */}
            <div className="absolute -top-4 -left-4 text-2xl text-spiritual-gold animate-float">✦</div>
            <div className="absolute -bottom-4 -right-4 text-2xl text-ethereal-pink animate-float-delayed">❋</div>
            
            <h3 className="text-2xl font-cinzel font-bold text-gray-800 mb-4">
              Still Have Sacred Questions?
            </h3>
            <p className="text-gray-600 font-cormorant mb-6 leading-relaxed">
              Your soul's unique journey may bring up divine questions not covered here. Trust that within the sacred guide, you'll find comprehensive divine support and detailed cosmic explanations for every aspect of your PLR practice.
            </p>
            <div className="flex items-center justify-center space-x-2 text-spiritual-gold">
              <Star className="w-4 h-4 animate-pulse" />
              <span className="font-cormorant text-sm">Your answers await within the sacred pages</span>
              <Star className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
