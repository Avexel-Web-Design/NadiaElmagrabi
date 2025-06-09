'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail, MessageCircle, Instagram, Star, Sparkles, Heart, Moon } from 'lucide-react';

const sacredConnections = [
  {
    icon: Calendar,
    title: "Book Sacred Session",
    description: "Schedule your divine transformational session directly through my calendar",
    color: "purple",
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    link: "https://calendly.com/nadiaelmagrabi",
    buttonText: "Schedule Sacred Time",
    element: "earth"
  },
  {
    icon: Mail,
    title: "Send Sacred Message",
    description: "Email me your heart's calling and I'll respond with divine love within 24 hours",
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200", 
    buttonColor: "bg-pink-600 hover:bg-pink-700",
    link: "mailto:nadia@nadiaelmagrabi.com",
    buttonText: "Send Sacred Email",
    element: "air"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Connection",
    description: "Quick sacred questions or to schedule a divine call through WhatsApp",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700", 
    link: "https://wa.me/1234567890",
    buttonText: "Sacred WhatsApp",
    element: "water"
  },
  {
    icon: Instagram,
    title: "Divine Instagram",
    description: "Follow for daily spiritual inspiration, sacred wisdom, and cosmic updates",
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    buttonColor: "bg-violet-600 hover:bg-violet-700",
    link: "https://instagram.com/nadiaelmagrabi", 
    buttonText: "Follow Sacred Journey",
    element: "fire"
  }
];

const elementIcons = {
  earth: Moon,
  air: Star,
  water: Sparkles,
  fire: Heart
};

type ElementType = keyof typeof elementIcons;

export default function SacredConnectionOptionsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <div className="flower-of-life w-32 h-32"></div>
        </div>
        <div className="absolute bottom-20 right-20">
          <div className="merkaba w-28 h-28"></div>
        </div>
        <div className="absolute top-40 right-40">
          <div className="flower-of-life w-24 h-24"></div>
        </div>
        <div className="absolute bottom-40 left-40">
          <div className="merkaba w-20 h-20"></div>
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
            <Heart className="w-5 h-5 text-spiritual-gold" />
            <span className="text-gray-800 font-cinzel">Sacred Communication</span>
            <Heart className="w-5 h-5 text-spiritual-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-gray-800 mb-6"
          >
            Connect With My
            <span className="text-spiritual-gold"> Sacred Soul</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-cormorant leading-relaxed"
          >
            Choose the divine pathway that feels most aligned for your soul to reach out 
            and begin our sacred conversation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sacredConnections.map((connection, index) => {
            const ElementIcon = elementIcons[connection.element as ElementType];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${connection.bgColor} ${connection.borderColor} border-2 rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${connection.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Sacred Icon Container */}
                  <motion.div
                    className={`bg-gradient-to-br ${connection.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <connection.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-cinzel group-hover:text-gray-900 transition-colors">
                    {connection.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-cormorant text-sm">
                    {connection.description}
                  </p>

                  {/* Sacred Element Icon */}
                  <div className="flex items-center justify-center mb-4 opacity-30">
                    <ElementIcon className="w-5 h-5 text-gray-400" />
                  </div>

                  <motion.a
                    href={connection.link}
                    target={connection.link.startsWith('http') ? '_blank' : undefined}
                    rel={connection.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${connection.buttonColor} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg group inline-flex items-center justify-center w-full font-cinzel`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Star className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                    {connection.buttonText}
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
