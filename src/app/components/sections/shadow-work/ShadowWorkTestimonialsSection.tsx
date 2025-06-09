'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function ShadowWorkTestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "This guide gave me the foundation I needed to start my shadow work journey safely. The exercises are practical and the explanations are so clear.",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "I've read many books on shadow work, but this guide breaks it down in a way that's actually actionable. Highly recommend!",
      rating: 5
    },
    {
      name: "Jennifer L.",
      text: "The self-compassion practices in this guide were game-changing for me. I finally learned how to approach my shadows with love instead of judgment.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What People Are Saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
