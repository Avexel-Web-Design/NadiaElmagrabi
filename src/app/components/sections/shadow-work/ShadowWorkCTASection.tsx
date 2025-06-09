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
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Shadow Work Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Download your free guide now and take the first step toward reclaiming your wholeness and authentic power.
          </p>
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <form onSubmit={handleDownload} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
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
