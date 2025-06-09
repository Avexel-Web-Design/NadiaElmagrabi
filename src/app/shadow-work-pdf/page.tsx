'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, Star, Check, Users, Calendar, Heart, Shield } from 'lucide-react';
import { useState } from 'react';

export default function ShadowWorkPDFPage() {
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and PDF download
    console.log('Download requested for:', email);
    // You would typically send this to your backend or email service
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                  FREE GUIDE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shadow Work Integration Guide
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
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
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Free Guide</h3>
                  <p className="text-gray-600">Start your shadow work journey today</p>
                </div>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Free Guide
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam. Unsubscribe anytime. By downloading, you'll also receive my weekly newsletter with spiritual insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What's Inside This Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand and begin working with your shadow aspects safely and effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Understanding Shadow Work",
                description: "Learn what shadow work is, why it's essential for healing, and how it transforms your life"
              },
              {
                icon: Heart,
                title: "Self-Compassion Practices",
                description: "Develop the loving awareness needed to approach your shadow with kindness and acceptance"
              },
              {
                icon: Shield,
                title: "Safety & Boundaries",
                description: "Essential guidelines for practicing shadow work safely and knowing when to seek support"
              },
              {
                icon: Star,
                title: "Practical Exercises",
                description: "Step-by-step exercises to identify and work with your shadow patterns and triggers"
              },
              {
                icon: Calendar,
                title: "Integration Practices",
                description: "Daily practices to integrate shadow work insights into your everyday life and relationships"
              },
              {
                icon: Users,
                title: "Common Shadow Patterns",
                description: "Recognize common shadow aspects and how they show up in relationships and life patterns"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Transform Your Life Through Shadow Integration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Shadow work isn't about fixing what's wrong with you—it's about reclaiming the wholeness that was always there.
              </p>

              <div className="space-y-4">
                {[
                  "Heal deep-rooted patterns that keep you stuck",
                  "Develop authentic self-acceptance and compassion",
                  "Transform triggers into sources of empowerment",
                  "Improve relationships through conscious awareness",
                  "Access hidden strengths and creative potential",
                  "Break free from self-sabotaging behaviors",
                  "Integrate all aspects of yourself with love"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Shadow work journey"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            {[
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
            ].map((testimonial, index) => (
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

      {/* About Nadia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              alt="Nadia Elmagrabi"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Nadia Elmagrabi</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              As a transformational guide and intuitive healer, I've spent over a decade helping souls reclaim their wholeness through shadow integration. This guide represents the foundational teachings I share with all my clients—because true transformation begins with embracing every part of who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
    </div>
  );
}
