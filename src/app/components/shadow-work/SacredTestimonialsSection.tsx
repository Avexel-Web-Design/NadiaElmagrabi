'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Sparkles } from 'lucide-react';

const sacredTestimonials = [
  {
    name: "Sarah M.",
    title: "Soul Seeker",
    text: "This sacred guide gave me the divine foundation I needed to start my shadow work journey safely. The mystical exercises are deeply transformational and the cosmic explanations illuminated my path.",
    rating: 5,
    element: "Water"
  },
  {
    name: "Michael R.", 
    title: "Spiritual Practitioner",
    text: "I've explored many sacred texts on shadow work, but this guide breaks it down through divine wisdom that's actually actionable. The soul alchemy is profound!",
    rating: 5,
    element: "Fire"
  },
  {
    name: "Jennifer L.",
    title: "Light Worker",
    text: "The sacred self-compassion practices in this guide were absolutely life-changing for me. I finally learned how to approach my shadows with unconditional love instead of spiritual judgment.",
    rating: 5,
    element: "Air"
  }
];

const elementColors = {
  Fire: { bg: 'from-orange-500/20 to-red-500/20', border: 'border-orange-400/30', accent: 'text-orange-400' },
  Water: { bg: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-400/30', accent: 'text-blue-400' },
  Air: { bg: 'from-yellow-500/20 to-pink-500/20', border: 'border-yellow-400/30', accent: 'text-yellow-400' }
};

export default function SacredTestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-cosmic-blue via-mystic-purple to-midnight-black overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-spiritual-gold/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-ethereal-pink/15 blur-3xl animate-float-delayed"></div>
      </div>

      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-spiritual-gold rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-ethereal-pink rounded-full animate-spin-reverse"></div>
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
            <Heart className="w-8 h-8 text-spiritual-gold mr-4" />
            <span className="font-cormorant text-lg text-spiritual-gold uppercase tracking-widest">Sacred Testimonials</span>
            <Heart className="w-8 h-8 text-spiritual-gold ml-4" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6 sacred-text-shadow">
            What 
            <span className="bg-gradient-to-r from-spiritual-gold to-ethereal-pink bg-clip-text text-transparent">
              {" "}Soul Seekers{" "}
            </span>
            Are Sharing
          </h2>
          
          <p className="font-cormorant text-xl text-cosmic-blue-light max-w-3xl mx-auto">
            Divine transformations and sacred breakthroughs from our mystical shadow work community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sacredTestimonials.map((testimonial, index) => {
            const colors = elementColors[testimonial.element as keyof typeof elementColors];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5 }}
                className={`sacred-card bg-gradient-to-br ${colors.bg} backdrop-blur-xl rounded-3xl p-8 
                           border ${colors.border} shadow-mystical hover:shadow-golden-glow 
                           transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Element Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/20 ${colors.accent} 
                                  backdrop-blur-sm border border-white/30`}>
                    {testimonial.element}
                  </span>
                </div>

                {/* Floating Sacred Elements */}
                <div className="absolute -top-2 -left-2 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <Sparkles className={`w-6 h-6 ${colors.accent} animate-float`} />
                </div>
                <div className="absolute -bottom-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className={`w-8 h-8 border ${colors.border} rounded-full animate-spin-slow`}></div>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-6 h-6 text-spiritual-gold fill-current shadow-golden-glow" />
                    </motion.div>
                  ))}
                </div>
                
                <blockquote className="font-cormorant text-lg text-white leading-relaxed mb-6 italic text-center">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-spiritual-gold to-ethereal-pink rounded-full 
                                mx-auto mb-3 shadow-golden-glow flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-cinzel font-bold text-white text-lg sacred-text-shadow">{testimonial.name}</p>
                  <p className={`font-cormorant text-sm ${colors.accent} opacity-80`}>{testimonial.title}</p>
                </div>

                {/* Sacred Quote Marks */}
                <div className="absolute top-8 left-8 text-6xl font-cinzel text-spiritual-gold/20 leading-none">"</div>
                <div className="absolute bottom-8 right-8 text-6xl font-cinzel text-ethereal-pink/20 leading-none rotate-180">"</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
