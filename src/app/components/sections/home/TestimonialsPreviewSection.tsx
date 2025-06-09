'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

export default function TestimonialsPreviewSection() {
  const testimonials = [
    {
      text: "My biggest 'AHA' moment was realizing the grief I carried was deeply tied to my ancestral past. With Nadia's guidance, I was able to release the heaviness and step into a profound sense of peace, love, and clarity.",
      author: "Ruthie Cisse"
    },
    {
      text: "Working with Nadia helped me connect the dots between my current fears and relationships and the emotional imprint of my past lives. This experience was a powerful piece of my healing journey.",
      author: "Julia B"
    },
    {
      text: "Nadia is a very loving human being, and she was very committed to my process of transformation. I invite you to evolve with Nadia's guidance, it's life-changing.",
      author: "Pamy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 sacred-text">
            Client Transformations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-cream/80 p-6 rounded-2xl divine-shadow mystical-border"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-earth mb-4 italic body-text">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="text-amethyst font-semibold sacred-text">~{testimonial.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors gap-2"
          >
            Read More Testimonials <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
