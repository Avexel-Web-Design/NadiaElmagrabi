'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function PLRFinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage/10 to-clay/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Begin Your Soul's Journey Today
          </h2>
          <p className="text-xl text-earth body-text mb-8 max-w-2xl mx-auto">
            Don't let another day pass wondering about your soul's deeper story. Download your guide and start exploring the wisdom of your past lives.
          </p>
          
          <div className="bg-cream/80 backdrop-blur-sm rounded-2xl divine-shadow mystical-border p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="text-3xl font-bold sacred-text text-forest mb-2">$27</div>
              <div className="text-earth body-text">One-time purchase • Lifetime access</div>
            </div>
            
            <a
              href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full earth-gradient text-cream py-4 rounded-lg font-semibold sacred-text hover:opacity-90 transition-opacity duration-300 flex items-center justify-center text-lg mb-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </a>
            
            <p className="text-sm text-earth/70 body-text">
              30-day money-back guarantee • Secure payment via Gumroad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
