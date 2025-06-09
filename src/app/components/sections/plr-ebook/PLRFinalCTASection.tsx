'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function PLRFinalCTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Begin Your Soul's Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let another day pass wondering about your soul's deeper story. Download your guide and start exploring the wisdom of your past lives.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-800 mb-2">$27</div>
              <div className="text-gray-600">One-time purchase • Lifetime access</div>
            </div>
            
            <a
              href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center text-lg mb-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </a>
            
            <p className="text-sm text-gray-500">
              30-day money-back guarantee • Secure payment via Gumroad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
