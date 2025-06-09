'use client';

import { motion } from 'framer-motion';

export default function EmbodyFAQSection() {
  const faqs = [
    {
      question: "Is this program right for me?",
      answer: "This program is perfect for women ready to break free from inherited patterns, discover their authentic self, and step into their soul's purpose. If you feel called to deep transformation, this is for you."
    },
    {
      question: "What if I've never done past life regression before?",
      answer: "No experience is necessary! I guide you through a safe, gentle process. Many clients find past life regression to be surprisingly natural and deeply healing."
    },
    {
      question: "How do I know my Human Design type?",
      answer: "I'll provide your complete Human Design chart and reading as part of the program. All you need is your birth date, time, and location."
    },
    {
      question: "What kind of support do I receive?",
      answer: "You'll have direct access to me throughout the program via email for questions and support. Each session includes integration time and practical next steps."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
