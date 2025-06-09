'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, Headphones, Video, Star, ExternalLink, Gem, Flame } from 'lucide-react';

const sacredResources = [
  {
    id: 1,
    title: "Sacred Shadow Integration Guide",
    description: "A comprehensive 25-page mystical guide to understanding and integrating your shadow aspects for profound healing and divine wholeness.",
    type: "Sacred PDF",
    price: "Free Gift",
    element: "earth",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Understanding shadow work fundamentals",
      "Sacred exercises and mystical journaling prompts", 
      "Divine integration techniques for daily practice",
      "Common shadow patterns and cosmic triggers"
    ],
    link: "/shadow-work-pdf",
    icon: BookOpen
  },
  {
    id: 2,
    title: "Past Life Akashic Records eBook",
    description: "Discover how past life memories and soul contracts can unlock current life patterns and accelerate your spiritual ascension journey.",
    type: "Divine eBook",
    price: "$27",
    element: "air",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Complete PLR sacred methodology",
      "Self-guided regression techniques",
      "Akashic record case studies",
      "Soul integration and healing practices"
    ],
    link: "/plr-session-ebook",
    icon: BookOpen
  },
  {
    id: 3,
    title: "Divine Meditation Transmissions",
    description: "A collection of channeled guided meditations designed to help you connect with your higher self and cosmic consciousness.",
    type: "Sacred Audio",
    price: "$47",
    element: "water",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "12 channeled meditation transmissions",
      "Chakra activation and energy clearing",
      "Past life exploration journeys",
      "Daily ascension practice routines"
    ],
    link: "https://gumroad.com/nadiaelmagrabi",
    icon: Headphones
  },
  {
    id: 4,
    title: "Soul Purpose Activation Ceremony",
    description: "A powerful 2-hour sacred workshop to help you identify and embody your soul's deepest calling and divine life mission.",
    type: "Sacred Workshop",
    price: "$97",
    element: "fire",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "2+ hours of transformational content",
      "Soul purpose activation ceremonies",
      "Divine energy attunement techniques",
      "Lifetime access and cosmic updates"
    ],
    link: "https://gumroad.com/nadiaelmagrabi",
    icon: Video
  }
];

const elementStyles = {
  earth: {
    gradient: 'from-amber-600 to-orange-600',
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700',
    ring: 'ring-amber-200'
  },
  air: {
    gradient: 'from-sky-600 to-cyan-600', 
    badge: 'bg-sky-100 text-sky-800 border-sky-200',
    icon: 'text-sky-600',
    button: 'bg-sky-600 hover:bg-sky-700',
    ring: 'ring-sky-200'
  },
  water: {
    gradient: 'from-blue-600 to-indigo-600',
    badge: 'bg-blue-100 text-blue-800 border-blue-200', 
    icon: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700',
    ring: 'ring-blue-200'
  },
  fire: {
    gradient: 'from-red-600 to-pink-600',
    badge: 'bg-red-100 text-red-800 border-red-200',
    icon: 'text-red-600', 
    button: 'bg-red-600 hover:bg-red-700',
    ring: 'ring-red-200'
  }
};

type ElementType = keyof typeof elementStyles;

export default function SacredResourcesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <div className="flower-of-life w-32 h-32"></div>
        </div>
        <div className="absolute bottom-20 right-20">
          <div className="flower-of-life w-40 h-40"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-spiritual-gold/10 to-ethereal-pink/10 backdrop-blur-sm rounded-full px-6 py-3 border border-spiritual-gold/30 mb-6"
          >
            <Gem className="w-5 h-5 text-spiritual-gold" />
            <span className="text-gray-800 font-cinzel">Featured Divine Products</span>
            <Gem className="w-5 h-5 text-spiritual-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-gray-800 mb-6"
          >
            Sacred Digital 
            <span className="text-spiritual-gold"> Treasures</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-cormorant leading-relaxed"
          >
            Carefully crafted mystical resources to accelerate your spiritual ascension and divine transformation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sacredResources.map((resource, index) => {
            const elementStyle = elementStyles[resource.element as ElementType];
            
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`sacred-card group hover:scale-105 transition-all duration-300 ${elementStyle.ring} hover:ring-4`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${elementStyle.gradient} opacity-20`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`${elementStyle.badge} border px-3 py-1 rounded-full text-sm font-medium font-cinzel`}>
                      {resource.type}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold font-cinzel">
                      {resource.price}
                    </span>
                  </div>

                  {/* Floating Sacred Icons */}
                  <div className="absolute bottom-4 right-4 opacity-30">
                    {resource.element === 'earth' && <Gem className="w-6 h-6 text-white" />}
                    {resource.element === 'air' && <Star className="w-6 h-6 text-white" />}
                    {resource.element === 'water' && <Moon className="w-6 h-6 text-white" />}
                    {resource.element === 'fire' && <Flame className="w-6 h-6 text-white" />}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <resource.icon className={`w-6 h-6 ${elementStyle.icon} mr-3`} />
                    <h3 className="text-xl font-bold text-gray-800 font-cinzel">{resource.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed font-cormorant">
                    {resource.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 font-cinzel">Divine Inclusions:</h4>
                    <ul className="space-y-2">
                      {resource.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-spiritual-gold mr-2 flex-shrink-0" />
                          <span className="font-cormorant">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={resource.link}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white ${
                      resource.price === 'Free Gift'
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                        : `${elementStyle.button}`
                    } shadow-lg hover:shadow-xl group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {resource.price === 'Free Gift' ? (
                      <>
                        <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        <span className="font-cinzel">Receive Sacred Gift</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        <span className="font-cinzel">Access Divine Wisdom - {resource.price}</span>
                      </>
                    )}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
