'use client';

import { motion } from 'framer-motion';

export default function PLRFAQSection() {
  const faqs = [
    {
      question: "Is past life regression safe to do alone?",
      answer: "Yes, when done with proper preparation and the techniques outlined in this book. I provide comprehensive safety protocols and guidelines for self-guided practice."
    },
    {
      question: "What if I don't believe in past lives?",
      answer: "This book approaches PLR from both spiritual and psychological perspectives. Even if viewed as symbolic or metaphorical, the healing insights gained are profound and practical."
    },
    {
      question: "How long does it take to see results?",
      answer: "Many readers report insights from their first session. However, deeper healing and pattern transformation typically unfold over several sessions and ongoing integration work."
    },
    {
      question: "Do I need any special equipment or experience?",
      answer: "No special equipment is needed. The book is designed for complete beginners, though experienced practitioners will also find advanced techniques valuable."
    },
    {
      question: "What format is the eBook available in?",
      answer: "The eBook is delivered as a high-quality PDF that works on all devices - computer, tablet, and smartphone. Audio files are provided as MP3 downloads."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
