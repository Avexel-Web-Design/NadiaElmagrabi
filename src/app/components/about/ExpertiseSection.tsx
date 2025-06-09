'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Crown, Moon, Sun, Sparkles } from 'lucide-react';

export default function ExpertiseSection() {
  type ElementType = 'earth' | 'air' | 'fire';

  const sacredExpertise: Array<{
    icon: any;
    element: ElementType;
    title: string;
    description: string;
  }> = [
    {
      icon: Heart,
      element: 'earth' as ElementType,
      title: "Clearing Soul Wounds & Ancestral Shadows",
      description: "I help you identify and transmute deep-seated patterns, ancestral wounds, and limiting beliefs that operate beneath conscious awareness through sacred alchemy."
    },
    {
      icon: Star,
      element: 'air' as ElementType,
      title: "Reconnecting to Your Divine Essence",
      description: "Through Human Design and intuitive arts, I guide you back to your authentic soul blueprint and help you remember your unique cosmic signature."
    },
    {
      icon: Crown,
      element: 'fire' as ElementType,
      title: "Unearthing Sacred Gifts & Ancient Wisdom",
      description: "Discover the divine gifts you incarnated to share and learn how to embody them fully in your earthly mission and soul work."
    }
  ];

  const elementColors: Record<ElementType, string> = {
    earth: 'text-green-400',
    air: 'text-cosmic-blue',
    fire: 'text-spiritual-gold'
  };

  const elementBgs: Record<ElementType, string> = {
    earth: 'from-green-400/20 to-emerald-600/20',
    air: 'from-cosmic-blue/20 to-indigo-600/20',
    fire: 'from-spiritual-gold/20 to-orange-600/20'
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 celestial-gradient">
        <div className="stardust-bg opacity-30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-slow opacity-20">
        <Sun className="w-12 h-12 text-spiritual-gold" />
      </div>
      <div className="absolute bottom-20 right-10 floating-medium opacity-20">
        <Moon className="w-10 h-10 text-cosmic-blue" />
      </div>
      <div className="absolute top-1/2 left-1/4 floating-fast opacity-15">
        <Sparkles className="w-8 h-8 text-ethereal-pink" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-spiritual-gold rotating" />
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white spiritual-text-shadow">
              Sacred Arts of Transformation
            </h2>
            <Star className="w-8 h-8 text-spiritual-gold rotating" />
          </div>
          <p className="text-xl text-cosmic-blue font-cormorant spiritual-text-shadow">
            Two decades of mystical study and sacred practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sacredExpertise.map((expertise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mystical-card p-8 rounded-2xl text-center relative overflow-hidden group"
            >
              {/* Elemental Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${elementBgs[expertise.element]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating Symbol */}
              <div className="absolute top-4 right-4 floating-slow opacity-30">
                <expertise.icon className={`w-6 h-6 ${elementColors[expertise.element]}`} />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <expertise.icon className={`w-12 h-12 ${elementColors[expertise.element]} mx-auto ethereal-glow`} />
                </motion.div>
                
                <h3 className="text-xl font-cinzel font-bold text-white mb-4">
                  {expertise.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed font-cormorant">
                  {expertise.description}
                </p>

                {/* Sacred Element Indicator */}
                <div className="mt-6 pt-4 border-t border-white/20">
                  <span className={`text-sm font-cinzel ${elementColors[expertise.element]} capitalize`}>
                    Sacred Element: {expertise.element}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sacred Geometry Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flower-of-life w-24 h-24 mx-auto opacity-30"></div>
          <p className="text-white/70 font-cormorant italic mt-4">
            "All healing arts flow from the sacred geometry of the soul"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
