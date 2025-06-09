'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight, Heart, Eye, Lightbulb } from 'lucide-react';

export default function EmbodyYourSoulsPurpose() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Human Design & Past Life Regression
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-8">
              Embody Your Soul's Purpose
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A transformative journey to align with your true calling. This offering combines Human Design and Past Life Regression to help you access the wisdom within and guide you toward embodying your soul's purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Three powerful modalities combined for deep transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Human Design Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg"
            >
              <Eye className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Human Design Sessions
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Understand your unique energetic blueprint to navigate life with authenticity and ease. Learn how to trust your inner authority and make decisions aligned with your true nature.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Personal chart reading</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Strategy & authority guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Practical life application</span>
                </li>
              </ul>
            </motion.div>

            {/* Past Life Regression */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl shadow-lg"
            >
              <Heart className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Past Life Regression
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A safe, gentle process to explore past life experiences, uncovering insights and healing relevant to your current journey. Release patterns that no longer serve you.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Safe guided regression</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Healing & integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Pattern recognition</span>
                </li>
              </ul>
            </motion.div>

            {/* Intuitive Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl shadow-lg"
            >
              <Lightbulb className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intuitive Development
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn to listen to messages from spirit and use your intuition as a guiding force in decision-making. Develop your psychic abilities and spiritual connection.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>Spiritual communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>Intuitive strengthening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>Decision-making guidance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Life
            </h2>
            <p className="text-xl text-gray-600">
              By delving into these modalities, you'll experience profound shifts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-full p-2 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Release What No Longer Serves</h3>
                    <p className="text-gray-700">Clear inherited patterns, ancestral wounds, and past-life imprints that keep you stuck.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-indigo-600 rounded-full p-2 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gain Profound Self-Awareness</h3>
                    <p className="text-gray-700">Understand your unique design and soul's journey with unprecedented clarity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-pink-600 rounded-full p-2 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Step Into Your Power</h3>
                    <p className="text-gray-700">Confidently embrace the life you're meant to live with authenticity and purpose.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Soul's Blueprint Awaits
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This isn't just healing—it's a complete recalibration of your life force. You'll walk away with tools, insights, and a deep knowing of who you truly are.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700 font-semibold">
                    "The patterns that kept you small will dissolve, and your authentic power will emerge."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Structure & Investment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Transformation Journey
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive 6-week program designed for deep integration
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Program Structure</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Weeks 1-2: Human Design Foundation</h4>
                  <p className="text-gray-700">Deep dive into your unique chart and energetic blueprint</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Weeks 3-4: Past Life Exploration</h4>
                  <p className="text-gray-700">Guided regression sessions and healing integration</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Weeks 5-6: Intuitive Mastery</h4>
                  <p className="text-gray-700">Develop your psychic abilities and spiritual connection</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Your transformational journey starts with a single step
              </p>
              <Link
                href="https://www.groupregressionsession.com/offers/Loa3JMLQ/checkout"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
              >
                Your Transformational Journey Starts Here <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-6">
                <p className="text-purple-100 text-sm">
                  Investment varies by program length • Payment plans available • 100% satisfaction guarantee
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
            {[
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
            ].map((faq, index) => (
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
    </main>
  );
}
