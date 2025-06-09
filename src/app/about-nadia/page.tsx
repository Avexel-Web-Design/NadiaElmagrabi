'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Star, Award, BookOpen, Users, ArrowRight } from 'lucide-react';

export default function AboutNadia() {
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
              Meet <span className="text-purple-600">Nadia Elmagrabi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Transformational Guide | Intuitive Healer | Ancestral & Past-Life Specialist
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Helping women break the inherited cycles that keep them small, silent, and stuck through deep ancestral healing, past-life work, and soul-level transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My Journey to Healing
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  As a Psychotherapist & wellness coach specializing in Past Life Regressions, I support working professionals and creative visionaries to step confidently into their radiance and power.
                </p>
                <p>
                  My path to becoming a healer wasn't linear. Like many of the women I work with, I carried the weight of ancestral patterns that kept me from fully expressing my authentic self. It was through my own deep healing journey that I discovered the transformative power of combining traditional therapy with spiritual healing modalities.
                </p>
                <p>
                  Over the last 20 years, I've studied and integrated numerous healing modalities, developing a unique approach that addresses not just the symptoms, but the root causes of what keeps us stuck. I believe that true healing happens when we address the mind, body, and soul as one interconnected system.
                </p>
                <p>
                  My work is deeply personal. I understand what it feels like to carry generational trauma, to feel disconnected from your purpose, and to struggle with trusting your inner voice. That's why I'm so passionate about helping women break these cycles—not just for themselves, but for the generations that follow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl"
            >
              <div className="text-center">
                <Heart className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  My Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To guide women back to their authentic selves, helping them reclaim their voice, confidence, and true power. I believe every woman has the capacity to heal not just herself, but her entire lineage.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-purple-700 font-semibold italic">
                    "Some patterns don't start with you, but they can end with you."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600">
              20+ years of study and practice in transformational healing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Clearing Trauma & Subconscious Blocks",
                description: "I help you identify and release deep-seated patterns, ancestral wounds, and limiting beliefs that operate beneath conscious awareness."
              },
              {
                icon: Star,
                title: "Reconnecting to Your Soul Essence",
                description: "Through Human Design and intuitive work, I guide you back to your authentic self and help you understand your unique spiritual blueprint."
              },
              {
                icon: Award,
                title: "Unearthing Hidden Gifts & Talents",
                description: "Discover the unique gifts you came here to share and learn how to embody them fully in your daily life and work."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <item.icon className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
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
              Professional Training & Philosophy
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl"
            >
              <BookOpen className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Training & Modalities</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Licensed Psychotherapist with 20+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Certified Human Design Specialist</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Gene Keys Guide and Practitioner</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Past Life Regression Therapy Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Embodied Energetics & Somatic Healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Ancestral & Lineage Healing Specialist</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Healing Philosophy</h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I believe that healing is not just about addressing symptoms, but about remembering who you truly are beneath the layers of conditioning, trauma, and inherited patterns.
                </p>
                <p>
                  My approach combines the practical wisdom of psychology with the deep insights of spiritual healing. I work with you on multiple levels—mental, emotional, energetic, and ancestral—to create lasting transformation.
                </p>
                <p>
                  Every session is tailored to your unique needs and where you are in your healing journey. I create a safe, sacred space where you can explore, heal, and reclaim the parts of yourself that have been hidden or wounded.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <p className="text-purple-700 font-semibold">
                    "True healing happens in relationship. My role is to witness your truth, guide your process, and help you remember your innate wholeness."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why This Work Chose Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                My own healing journey began in my early twenties when I realized that despite having everything I thought I wanted, I felt empty and disconnected from my true self. I was carrying patterns of silence, people-pleasing, and self-doubt that I later discovered weren't even mine—they belonged to the women in my lineage.
              </p>
              <p>
                Through my own past-life regression work, I uncovered lifetimes where I had been silenced, persecuted for my gifts, and forced to hide my truth. These revelations helped me understand why I struggled to speak up, why I dimmed my light, and why I felt unsafe being fully seen.
              </p>
              <p>
                As I healed these patterns, everything in my life began to shift. I found my voice, stepped into my power, and discovered my true purpose. But more importantly, I realized that my healing was creating ripples of change throughout my entire family system.
              </p>
              <p className="text-purple-700 font-semibold bg-purple-50 p-4 rounded-lg">
                "This is why I'm so passionate about this work. When one woman heals, she doesn't just transform her own life—she transforms the lives of every woman who comes after her. She becomes the first woman in her lineage to rise, and in doing so, she gives permission for others to do the same."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              If you feel called to break the patterns that have been passed down through your lineage and step into your authentic power, I would be honored to guide you on this journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://calendly.com/nadiaelmagrabi/30min"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/embody-your-souls-purpose"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Explore My Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
