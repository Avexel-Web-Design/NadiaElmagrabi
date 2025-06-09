'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Working with Nadia has been absolutely transformational. Her intuitive guidance helped me uncover limiting beliefs I didn't even know I had. I feel more aligned with my soul's purpose than ever before.",
    program: "Embody Your Soul's Purpose"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Nadia's shadow work sessions opened up parts of myself I had been avoiding for years. Her compassionate approach made it safe to explore my deepest fears and transform them into strengths.",
    program: "Shadow Work Session"
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The PLR session with Nadia revealed past life patterns that were affecting my relationships today. It was incredible how this awareness immediately shifted my perspective and healed old wounds.",
    program: "Past Life Regression"
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Nadia's podcasts introduced me to her work, and booking a session was the best decision I've made for my spiritual growth. Her insights are profound and practical at the same time.",
    program: "Individual Session"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The resources Nadia provides are incredible. Her shadow work PDF helped me start my healing journey before we even met. The depth of her knowledge is remarkable.",
    program: "Resources & PDF Guides"
  },
  {
    id: 6,
    name: "Robert Foster",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "After years of feeling stuck in my career, Nadia's guidance helped me reconnect with my authentic self. I've since made major life changes that align with my true purpose.",
    program: "Embody Your Soul's Purpose"
  }
];

export default function TestimonialsGridSection() {
  return (
    <section className="py-20 bg-sage/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Voices of Transformation
          </h2>
          <p className="text-xl body-text text-earth/80 max-w-3xl mx-auto">
            Discover how Nadia's guidance has helped others step into their authentic power and purpose
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream/80 backdrop-blur-sm rounded-2xl p-8 divine-shadow hover:divine-shadow mystical-border transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 mystical-border"
                />
                <div>
                  <h3 className="font-semibold sacred-text text-forest">{testimonial.name}</h3>
                  <p className="text-sm body-text text-earth/70">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-sage/30 absolute -top-2 -left-2" />
                <p className="body-text text-earth/80 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-sage/20">
                <span className="inline-block bg-sage/20 text-forest px-3 py-1 rounded-full text-sm font-medium body-text">
                  {testimonial.program}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
