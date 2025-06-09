'use client';

import { motion } from 'framer-motion';
import { Play, BookOpen, Clock, Star, Sparkles, Gem } from 'lucide-react';

const sacredBonuses = [
  {
    icon: Play,
    title: "Sacred PLR Meditation",
    description: "30-minute guided divine session to access your most relevant sacred past life",
    value: "$25",
    element: "Fire",
    color: "text-orange-500",
    bg: "from-orange-50 to-red-50"
  },
  {
    icon: BookOpen,
    title: "Divine Integration Workbook", 
    description: "25-page sacred workbook with soul exercises and divine journaling prompts",
    value: "$15",
    element: "Water",
    color: "text-cosmic-blue",
    bg: "from-blue-50 to-cyan-50"
  },
  {
    icon: Clock,
    title: "Eternal Lifetime Updates",
    description: "Get all future sacred editions and divine bonus content at no extra cosmic cost",
    value: "Priceless",
    element: "Air",
    color: "text-purple-500", 
    bg: "from-purple-50 to-pink-50"
  }
];

export default function SacredBonusTreasuresSection() {
  return (
    <section className="py-20 sacred-gradient-cosmic relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="sacred-stardust"></div>
        <div className="absolute top-10 left-10 text-6xl text-white/10 animate-float">✦</div>
        <div className="absolute bottom-10 right-10 text-8xl text-white/10 animate-float-delayed">❋</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-white/10 animate-float">☾</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-white/10 animate-float-delayed">✧</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 sacred-text-glow">
            Sacred Bonus Treasures
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto font-cormorant">
            Receive these divine bonus treasures when you claim your sacred soul access today
          </p>
          
          {/* Sacred Divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <Sparkles className="w-8 h-8 text-spiritual-gold animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-spiritual-gold to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sacredBonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full sacred-glow relative overflow-hidden group-hover:scale-105 transition-all duration-300">
                  {/* Sacred Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm sacred-glow-soft">
                      <IconComponent className="w-12 h-12 text-spiritual-gold" />
                    </div>
                  </div>

                  {/* Element Badge */}
                  <div className="flex justify-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-cormorant ${bonus.color} bg-white/20 backdrop-blur-sm border border-white/30`}>
                      {bonus.element} Treasure
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-cinzel font-bold text-center mb-4 text-white">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-purple-100 text-center mb-6 font-cormorant leading-relaxed">
                    {bonus.description}
                  </p>
                  
                  <div className="text-center">
                    <div className="text-sm text-purple-200 font-cormorant mb-2">Sacred Value:</div>
                    <div className="text-2xl font-bold text-spiritual-gold sacred-text-glow">
                      {bonus.value}
                    </div>
                  </div>

                  {/* Floating Sacred Elements */}
                  <div className="absolute top-2 right-2 text-xl text-white/20 animate-float">✦</div>
                  <div className="absolute bottom-2 left-2 text-lg text-white/20 animate-float-delayed">❋</div>
                  
                  {/* Sacred Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sacred Value Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto sacred-glow relative">
            {/* Floating Sacred Elements */}
            <div className="absolute -top-4 -left-4 text-3xl text-spiritual-gold animate-float">✦</div>
            <div className="absolute -bottom-4 -right-4 text-3xl text-ethereal-pink animate-float-delayed">❋</div>
            
            <div className="text-3xl font-cinzel font-bold text-white mb-2 sacred-text-glow">
              Total Sacred Value: $67
            </div>
            <div className="text-xl font-cormorant text-purple-100 mb-6">
              Your Divine Investment: Only $27
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-spiritual-gold">
              <Star className="w-6 h-6 animate-pulse" />
              <span className="font-cormorant text-lg">83% Sacred Soul Savings</span>
              <Star className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Sacred Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <a
            href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-spiritual-gold text-white rounded-xl font-cinzel font-semibold text-lg hover:scale-105 transition-all duration-300 sacred-glow group"
          >
            <Gem className="w-6 h-6 mr-3 group-hover:animate-spin" />
            ✦ Claim Your Sacred Treasures - $27 ✦
            <Sparkles className="w-6 h-6 ml-3 group-hover:animate-pulse" />
          </a>
          
          <p className="text-purple-100 font-cormorant mt-4 text-sm">
            Sacred offering available for a limited divine time only
          </p>
        </motion.div>
      </div>
    </section>
  );
}
