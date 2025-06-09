'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Which path is calling you?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Human Design Service */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Human Design Chart: Align with Trusting Your Path
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A 3-session Human Design journey to reconnect with your soul's natural rhythm. This offering is for those seeking clarity, alignment, and a deeper connection to self.
              </p>
              <Link
                href="https://www.groupregressionsession.com/offers/MpBD2MqT/checkout"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 gap-2"
              >
                Book Your First Step Forward <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Soul's Purpose Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Human Design & Past Life Regression: Embody Your Soul's Purpose
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A transformative journey to align with your true calling. This offering combines Human Design and Past Life Regression to help you access the wisdom within.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Human Design Sessions: Understand your unique energetic blueprint</li>
                <li>• Past Life Regression: Explore past life experiences safely</li>
                <li>• Intuitive Development: Learn to listen to messages from spirit</li>
              </ul>
              <Link
                href="/embody-your-souls-purpose"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 gap-2"
              >
                Your Transformational Journey Starts Here <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Transformations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "My biggest 'AHA' moment was realizing the grief I carried was deeply tied to my ancestral past. With Nadia's guidance, I was able to release the heaviness and step into a profound sense of peace, love, and clarity.",
                author: "Ruthie Cisse"
              },
              {
                text: "Working with Nadia helped me connect the dots between my current fears and relationships and the emotional imprint of my past lives. This experience was a powerful piece of my healing journey.",
                author: "Julia B"
              },
              {
                text: "Nadia is a very loving human being, and she was very committed to my process of transformation. I invite you to evolve with Nadia's guidance, it's life-changing.",
                author: "Pamy"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-purple-600 font-semibold">~{testimonial.author}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors gap-2"
            >
              Read More Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Nadia Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Nadia Elmagrabi
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a Psychotherapist & wellness coach specializing in Past Life Regressions, I support working professionals and creative visionaries to step confidently into their radiance and power.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Combining the many modalities I've studied over the last 20 years into a unique, integrated, and soulful approach, working with me helps people reconnect to the deepest parts of themselves.
              </p>
              
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-gray-900">My areas of expertise:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clearing trauma, subconscious blocks & ancestral wounds</li>
                  <li>• Reconnecting to your soul essence & purpose</li>
                  <li>• Unearthing your hidden gifts, talents & passions</li>
                </ul>
              </div>

              <Link
                href="/about-nadia"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 gap-2"
              >
                Read More About Nadia <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl"
            >
              <div className="text-center space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Embody Your Purpose</h3>
                  <p className="text-gray-700">Feel expressed and at peace</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Star className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Release What's Keeping You Stuck</h3>
                  <p className="text-gray-700">Break free from inherited patterns</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Begin Your Transformation?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Book a Free Consultation</h3>
                <p className="mb-6">Let's jump on a call and explore how I can help</p>
                <Link
                  href="https://calendly.com/nadiaelmagrabi/30min"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
                >
                  Schedule Now
                </Link>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Grab Your Free Gifts</h3>
                <p className="mb-6">Enjoy resources to nourish your body, mind & spirit</p>
                <Link
                  href="/resources"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
                >
                  Get Resources
                </Link>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Schedule Me to Speak</h3>
                <p className="mb-6">For your program, podcast, or community</p>
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
