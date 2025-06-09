'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, Star, Users } from 'lucide-react';
import { useState } from 'react';

export default function ShadowWorkHeroSection() {
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and PDF download
    console.log('Download requested for:', email);
    // You would typically send this to your backend or email service
  };

  return (
    <section className="spiritual-gradient text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-12 h-12 text-gold mr-4" />
              <span className="bg-earth/80 text-cream px-4 py-2 rounded-full text-sm font-medium">
                FREE GUIDE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold sacred-text mb-6">
              Shadow Work Integration Guide
            </h1>
            <p className="text-xl text-cream/90 body-text mb-8 leading-relaxed">
              A comprehensive 25-page guide to understanding, exploring, and integrating your shadow aspects for profound healing and wholeness.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                <span>25-Page PDF</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>5,000+ Downloads</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-cream/95 backdrop-blur-sm rounded-2xl divine-shadow mystical-border p-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-sage" />
                </div>
                <h3 className="text-2xl font-bold sacred-text text-forest mb-2">Get Your Free Guide</h3>
                <p className="text-earth body-text">Start your shadow work journey today</p>
              </div>

              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-forest body-text"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full earth-gradient text-cream py-3 rounded-lg font-semibold sacred-text hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Guide
                </button>
              </form>

              <p className="text-xs text-earth/70 body-text text-center mt-4">
                No spam. Unsubscribe anytime. By downloading, you'll also receive my weekly newsletter with spiritual insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
