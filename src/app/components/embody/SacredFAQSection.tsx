'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Moon, Star } from 'lucide-react';

export default function SacredFAQSection() {
  const faqs = [
    {
      question: "Is this sacred program aligned with my soul?",
      answer: "This divine program is perfect for women ready to break free from inherited karmic patterns, discover their authentic soul essence, and step into their sacred purpose. If you feel called to deep spiritual transformation, this is divinely meant for you."
    },
    {
      question: "What if I've never experienced past life regression before?",
      answer: "No previous experience is necessary in this sacred realm! I guide you through a safe, gentle divine process. Many soul sisters find past life regression to be surprisingly natural and deeply healing to their eternal spirit."
    },
    {
      question: "How do I discover my Human Design sacred type?",
      answer: "I'll provide your complete Human Design cosmic chart and reading as part of the divine program. All you need is your birth date, sacred time, and earthly location to unveil your soul's blueprint."
    },
    {
      question: "What kind of sacred support do I receive?",
      answer: "You'll have direct divine access to me throughout the program via email for questions and spiritual support. Each session includes sacred integration time and practical celestial next steps for your journey."
    }
  ];

  return (
    <section className="py-24 celestial-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sacred-white mb-6 spiritual-text-shadow">
            Sacred Questions & Divine Answers
          </h2>
          <p className="text-xl text-moonstone">
            Illuminating the path for your soul's journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mystical-card p-8 group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                {/* Sacred Question Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spiritual-gold/30 to-ethereal-pink/30 flex items-center justify-center ethereal-glow">
                    <HelpCircle className="w-6 h-6 text-spiritual-gold" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-sacred-white mb-4 spiritual-text-shadow">
                    {faq.question}
                  </h3>
                  <p className="text-moonstone leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>

                {/* Sacred Symbol */}
                <div className="flex-shrink-0 mt-2">
                  {index % 2 === 0 ? (
                    <Star className="w-5 h-5 text-spiritual-gold opacity-60 floating-animation" />
                  ) : (
                    <Moon className="w-5 h-5 text-ethereal-pink opacity-60 floating-medium" />
                  )}
                </div>
              </div>

              {/* Sacred Separator */}
              <div className="mt-6 pt-6 border-t border-spiritual-gold/20">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sacred Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="mystical-card p-8 bg-gradient-to-br from-spiritual-gold/10 to-ethereal-pink/10">
            <p className="text-spiritual-gold font-semibold italic text-xl">
              "Trust in the divine timing of your soul's awakening journey"
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flower-of-life opacity-20 rotating-slow"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
