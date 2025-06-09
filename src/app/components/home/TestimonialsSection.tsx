'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "My biggest 'AHA' moment was realizing the grief I carried was deeply tied to my ancestral past. With Nadia's guidance, I was able to release the heaviness and step into a profound sense of peace, love, and clarity.",
      author: "Ruthie Cisse",
      element: "earth"
    },
    {
      text: "Working with Nadia helped me connect the dots between my current fears and relationships and the emotional imprint of my past lives. This experience was a powerful piece of my healing journey.",
      author: "Julia B",
      element: "water"
    },
    {
      text: "Nadia is a very loving human being, and she was very committed to my process of transformation. I invite you to evolve with Nadia's guidance, it's life-changing.",
      author: "Pamy",
      element: "fire"
    }
  ];

  const getElementColor = (element: string) => {
    switch (element) {
      case 'earth': return 'var(--spiritual-gold)';
      case 'water': return 'var(--ethereal-pink)';
      case 'fire': return 'var(--mystical-purple)';
      default: return 'var(--spiritual-gold)';
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'earth': return Star;
      case 'water': return Heart;
      case 'fire': return Sparkles;
      default: return Star;
    }
  };

  return (
    <section className="py-20 relative spiritual-gradient">
      {/* Celestial Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[var(--spiritual-gold)] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-[var(--ethereal-pink)] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[var(--mystical-purple)] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-[var(--spiritual-gold)] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 spiritual-text-shadow">
            Sacred 
            <span className="text-[var(--spiritual-gold)]"> Transformations</span>
          </h2>
          <p className="text-xl text-[var(--moonstone)] max-w-3xl mx-auto leading-relaxed">
            Witness the profound journeys of souls who have walked this path before you
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[var(--spiritual-gold)] via-[var(--ethereal-pink)] to-[var(--mystical-purple)] mx-auto rounded-full mt-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const ElementIcon = getElementIcon(testimonial.element);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="ethereal-card p-8 relative group hover:scale-105 transition-all duration-500"
              >
                {/* Element Symbol */}
                <div className="absolute top-4 right-4">
                  <ElementIcon 
                    className="w-6 h-6 opacity-50 floating-animation" 
                    style={{ 
                      color: getElementColor(testimonial.element),
                      animationDelay: `${index}s`
                    }} 
                  />
                </div>

                {/* Sacred Stars Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star 
                        className="w-6 h-6 mx-1 fill-current" 
                        style={{ color: getElementColor(testimonial.element) }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-4 text-6xl text-[var(--spiritual-gold)] opacity-20 font-serif">"</div>
                  <p className="text-lg leading-relaxed italic text-center relative z-10">
                    {testimonial.text}
                  </p>
                  <div className="absolute -bottom-8 -right-4 text-6xl text-[var(--spiritual-gold)] opacity-20 font-serif rotate-180">"</div>
                </div>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: getElementColor(testimonial.element) }}></div>
                  <p className="font-semibold text-lg" style={{ color: getElementColor(testimonial.element) }}>
                    ~ {testimonial.author}
                  </p>
                </div>

                {/* Sacred Geometry Decoration */}
                <div className="absolute bottom-4 left-4 opacity-20">
                  <div 
                    className="w-8 h-8 border rounded-full animate-spin" 
                    style={{ 
                      borderColor: getElementColor(testimonial.element),
                      animationDuration: '10s'
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <div className="ethereal-card p-8 max-w-md mx-auto">
            <Sparkles className="w-12 h-12 text-[var(--spiritual-gold)] mx-auto mb-4 floating-animation" />
            <p className="text-lg mb-6">Discover more sacred transformations</p>
            <Link
              href="/testimonials"
              className="inline-flex items-center text-[var(--spiritual-gold)] font-semibold hover:text-[var(--spiritual-deep-gold)] transition-colors gap-2 text-lg"
            >
              <Heart className="w-5 h-5" />
              Read More Soul Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
