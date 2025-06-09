'use client';

import { motion } from 'framer-motion';
import { BookOpen, Play, Users, Check, CreditCard, Shield, Download } from 'lucide-react';

export default function PLRHeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-12 h-12 text-pink-300 mr-4" />
              <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                DIGITAL EBOOK
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Past Life Regression Mastery
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Unlock the mysteries of your soul's journey with this comprehensive guide to self-guided past life regression and healing.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>120-Page eBook</span>
              </div>
              <div className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                <span>3 Audio Guides</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>2,000+ Readers</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">$27</span>
              <span className="text-lg text-purple-200 line-through">$47</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Limited Time
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="PLR eBook Cover"
                  className="w-48 h-64 object-cover rounded-lg mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Instant Access</h3>
                <p className="text-gray-600">Download immediately after purchase</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">120-Page eBook</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">3 Guided Meditations</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Lifetime Access</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Mobile Compatible</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              </div>

              <a
                href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center text-lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Get Instant Access - $27
              </a>

              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  Instant Download
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
