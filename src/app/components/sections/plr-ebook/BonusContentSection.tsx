'use client';

import { motion } from 'framer-motion';
import { Play, BookOpen, Clock, CreditCard } from 'lucide-react';

export default function BonusContentSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Exclusive Bonus Content
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Get these valuable bonuses when you purchase today
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Play className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Guided PLR Meditation</h3>
              <p className="text-purple-100">30-minute guided session to access your most relevant past life</p>
              <div className="text-sm text-purple-200 mt-2">Value: $25</div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <BookOpen className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Integration Workbook</h3>
              <p className="text-purple-100">25-page workbook with exercises and journaling prompts</p>
              <div className="text-sm text-purple-200 mt-2">Value: $15</div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Clock className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Lifetime Updates</h3>
              <p className="text-purple-100">Get all future editions and bonus content at no extra cost</p>
              <div className="text-sm text-purple-200 mt-2">Value: Priceless</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="text-2xl font-bold mb-2">Total Value: $67</div>
            <div className="text-lg mb-6">Your Price: Only $27</div>
            <a
              href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Get Complete Package - $27
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
