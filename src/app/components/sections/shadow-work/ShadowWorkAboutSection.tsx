'use client';

import { motion } from 'framer-motion';

export default function ShadowWorkAboutSection() {
  return (
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
  );
}
