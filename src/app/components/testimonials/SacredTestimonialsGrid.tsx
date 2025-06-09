'use client';

import { motion } from 'framer-motion';
import { Star, Moon, Heart, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Working with Nadia has been absolutely transformational. Her divine intuitive guidance helped me uncover sacred limiting beliefs I didn't even know existed in my soul. I feel more aligned with my soul's divine purpose than ever before.",
    program: "Sacred Soul Purpose Embodiment",
    element: "Moon"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Nadia's sacred shadow work sessions opened up divine parts of myself I had been avoiding for lifetimes. Her compassionate celestial approach made it safe to explore my deepest fears and transform them into sacred strengths.",
    program: "Sacred Shadow Work Session",
    element: "Star"
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The divine PLR session with Nadia revealed sacred past life patterns that were affecting my soul relationships today. It was incredible how this cosmic awareness immediately shifted my perspective and healed ancient wounds.",
    program: "Sacred Past Life Regression",
    element: "Heart"
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Nadia's divine podcasts introduced me to her sacred work, and booking a celestial session was the best decision I've made for my spiritual soul growth. Her insights are profound and divinely practical at the same time.",
    program: "Sacred Individual Session",
    element: "Sparkles"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The sacred resources Nadia provides are absolutely divine. Her shadow work PDF helped me start my healing soul journey before we even met in sacred space. The depth of her celestial knowledge is remarkable.",
    program: "Sacred Resources & Divine PDF Guides",
    element: "Moon"
  },
  {
    id: 6,
    name: "Robert Foster",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "After years of feeling stuck in my earthly career, Nadia's divine guidance helped me reconnect with my authentic sacred self. I've since made major life changes that align with my soul's true divine purpose.",
    program: "Sacred Soul Purpose Embodiment",
    element: "Star"
  }
];

export default function SacredTestimonialsGrid() {
  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Moon': return Moon;
      case 'Star': return Star;
      case 'Heart': return Heart;
      case 'Sparkles': return Sparkles;
      default: return Star;
    }
  };

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Moon': return 'mystical-purple';
      case 'Star': return 'spiritual-gold';
      case 'Heart': return 'ethereal-pink';
      case 'Sparkles': return 'cosmic-blue';
      default: return 'spiritual-gold';
    }
  };

  return (
    <section className="py-24 spiritual-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
            Voices of Sacred Transformation
          </h2>
          <p className="text-xl text-moonstone max-w-4xl mx-auto">
            Discover how divine guidance has helped sacred souls step into their authentic power and celestial purpose
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const ElementIcon = getElementIcon(testimonial.element);
            const elementColor = getElementColor(testimonial.element);
            
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mystical-card p-8 group hover:scale-105 transition-all duration-500 relative"
              >
                {/* Sacred Element Symbol */}
                <div className="absolute -top-3 -right-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${elementColor}/30 to-${elementColor}/10 flex items-center justify-center ethereal-glow floating-animation`}>
                    <ElementIcon className={`w-5 h-5 text-${elementColor}`} />
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 sacred-border"
                  />
                  <div>
                    <h3 className="font-semibold text-sacred-white text-lg spiritual-text-shadow">{testimonial.name}</h3>
                    <p className="text-sm text-moonstone">{testimonial.location}</p>
                  </div>
                </div>

                {/* Sacred Star Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-spiritual-gold fill-current floating-animation" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>

                {/* Sacred Quote */}
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-8 h-8 text-spiritual-gold opacity-30">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <p className="text-moonstone leading-relaxed pl-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Sacred Program Badge */}
                <div className="pt-4 border-t border-spiritual-gold/20">
                  <span className={`inline-block bg-gradient-to-r from-${elementColor}/20 to-${elementColor}/10 text-${elementColor} px-4 py-2 rounded-full text-sm font-medium border border-${elementColor}/30`}>
                    {testimonial.program}
                  </span>
                </div>

                {/* Sacred Decoration */}
                <div className="mt-6 text-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
