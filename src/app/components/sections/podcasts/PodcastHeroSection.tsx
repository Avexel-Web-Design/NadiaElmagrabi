'use client';

import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

export default function PodcastHeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Headphones className="w-12 h-12 text-pink-300 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              Soul Awakening <span className="text-pink-300">Podcast</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Weekly episodes exploring spiritual awakening, healing, and conscious living for the modern soul seeker
          </p>
        </motion.div>
      </div>
    </section>
  );
}
