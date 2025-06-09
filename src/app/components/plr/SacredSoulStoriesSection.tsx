'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Flame, Flower2 } from 'lucide-react';

const sacredTestimonials = [
  {
    name: "Lisa Chen",
    text: "This sacred eBook completely transformed my understanding of my soul's eternal patterns. The PLR session I experienced using these divine techniques revealed past life sacred trauma that explained so much about my earthly fears. Truly a soul transformation!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    element: "Fire",
    icon: Flame,
    color: "text-orange-500",
    bg: "from-orange-50 to-red-50"
  },
  {
    name: "David Martinez", 
    text: "As someone who was skeptical about past sacred lives, this divine book provided a spiritual and practical approach that made me a true soul believer. The sacred techniques work and the divine results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    element: "Water",
    icon: Heart,
    color: "text-cosmic-blue", 
    bg: "from-blue-50 to-cyan-50"
  },
  {
    name: "Amanda Foster",
    text: "The sacred case studies were incredibly helpful in understanding how past life divine patterns show up in current sacred relationships. I've been able to heal soul patterns that earthly therapy alone couldn't touch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80", 
    element: "Air",
    icon: Star,
    color: "text-purple-500",
    bg: "from-purple-50 to-pink-50"
  }
];

export default function SacredSoulStoriesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
            Sacred Soul Stories
          </h2>
          <p className="text-xl text-gray-600 font-cormorant">
            See how past life sacred regression has transformed divine souls
          </p>
          
          {/* Sacred Divider */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-spiritual-gold"></div>
            <Flower2 className="w-6 h-6 text-spiritual-gold animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-spiritual-gold to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sacredTestimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${testimonial.bg} rounded-xl p-6 h-full sacred-glow-soft relative overflow-hidden group-hover:scale-105 transition-all duration-300`}>
                  {/* Sacred Header */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover sacred-glow"
                      />
                      <div className={`absolute -bottom-2 -right-2 p-1 rounded-full bg-white shadow-lg`}>
                        <IconComponent className={`w-4 h-4 ${testimonial.color}`} />
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h4 className="font-cinzel font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-spiritual-gold fill-current" />
                        ))}
                      </div>
                      <span className={`text-xs font-cormorant ${testimonial.color} bg-white/60 px-2 py-1 rounded-full`}>
                        {testimonial.element} Soul
                      </span>
                    </div>
                  </div>

                  {/* Sacred Testimonial */}
                  <blockquote className="text-gray-700 font-cormorant italic leading-relaxed mb-4">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Sacred Rating Stars */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-spiritual-gold fill-current' : 'text-gray-200'}`} />
                    ))}
                  </div>

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

        {/* Sacred Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center sacred-glow"
        >
          <h3 className="text-2xl font-cinzel font-bold text-gray-800 mb-6">
            Sacred Soul Transformations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-spiritual-gold mb-2 sacred-text-glow">2,000+</div>
              <div className="text-gray-600 font-cormorant">Sacred Souls Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ethereal-pink mb-2 sacred-text-glow">98%</div>
              <div className="text-gray-600 font-cormorant">Divine Transformation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-blue mb-2 sacred-text-glow">4.9/5</div>
              <div className="text-gray-600 font-cormorant">Sacred Soul Rating</div>
            </div>
          </div>

          {/* Sacred Quote */}
          <div className="mt-8 pt-6 border-t border-purple-200">
            <blockquote className="text-lg font-cormorant italic text-gray-700 max-w-2xl mx-auto">
              "Your soul remembers what your mind has forgotten. These sacred testimonials are just the beginning of your divine transformation."
            </blockquote>
            <div className="flex items-center justify-center space-x-2 mt-4 text-spiritual-gold">
              <Star className="w-4 h-4" />
              <span className="font-cormorant text-sm">Soul Wisdom</span>
              <Star className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
