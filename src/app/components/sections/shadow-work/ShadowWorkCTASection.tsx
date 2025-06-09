'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState } from 'react';

export default function ShadowWorkCTASection() {
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and PDF download
    console.log('Download requested for:', email);
    // You would typically send this to your backend or email service
  };

  return (
    <section className="py-20 earth-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-cream mb-6">
            Ready to Begin Your Shadow Work Journey?
          </h2>
          <p className="text-xl body-text text-cream/80 mb-8 max-w-2xl mx-auto">
            Download your free guide now and take the first step toward reclaiming your wholeness and authentic power.
          </p>
          <div className="bg-cream/95 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mystical-border divine-shadow">
            <form onSubmit={handleDownload} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent body-text text-earth bg-cream/50"
              />
              <button
                type="submit"
                className="w-full bg-forest text-cream py-3 rounded-lg font-semibold sacred-text hover:bg-earth hover:text-cream/90 transition-all duration-300 flex items-center justify-center divine-shadow"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Your Free Guide
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
