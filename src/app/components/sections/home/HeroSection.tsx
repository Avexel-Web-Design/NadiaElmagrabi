'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            I'm <span className="text-purple-600">Nadia</span>, and I guide women into deep alignment with their spiritual path.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Transformational Guide | Intuitive Healer | Ancestral & Past-Life Specialist
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Some patterns don't start with you but can end with you. I help women break the inherited cycles that keep them small, silent, and stuck. 
            I guide women to reclaim their voice, confidence, and true power through deep ancestral healing, past-life work, and soul-level transformation.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="https://calendly.com/nadiaelmagrabi/15min"
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Let's Talk About You <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Grab Your Free Gifts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
