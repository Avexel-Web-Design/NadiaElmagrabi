'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 spiritual-gradient text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 sacred-text">
            Ready to Begin Your Transformation?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 sacred-text">Book a Free Consultation</h3>
              <p className="mb-6 body-text">Let&apos;s jump on a call and explore how I can help</p>
              <Link
                href="https://calendly.com/nadiaelmagrabi/30min"
                className="bg-gold text-deep-purple px-6 py-3 rounded-full font-semibold hover:bg-copper hover:text-cream transition-all duration-300 inline-block divine-shadow body-text"
              >
                Schedule Now
              </Link>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 sacred-text">Grab Your Free Gifts</h3>
              <p className="mb-6 body-text">Enjoy resources to nourish your body, mind & spirit</p>
              <Link
                href="/resources"
                className="bg-cream/20 text-cream px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-amethyst transition-all duration-300 inline-block mystical-border body-text"
              >
                Get Resources
              </Link>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 sacred-text">Schedule Me to Speak</h3>
              <p className="mb-6 body-text">For your program, podcast, or community</p>
              <Link
                href="/contact"
                className="bg-earth text-cream px-6 py-3 rounded-full font-semibold hover:bg-clay hover:text-forest transition-all duration-300 inline-block divine-shadow body-text"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
