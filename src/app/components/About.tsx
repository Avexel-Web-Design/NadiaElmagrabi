'use client'
import { motion } from 'framer-motion'
import { StarIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function About() {
  const credentials = [
    { icon: <AcademicCapIcon className="h-6 w-6" />, text: "Certified Human Design Analyst" },
    { icon: <StarIcon className="h-6 w-6" />, text: "Past Life Regression Therapist" },
    { icon: <GlobeAltIcon className="h-6 w-6" />, text: "Energy Healing Practitioner" }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="motion-safe"
          >            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 serif-heading motion-safe"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Meet <span className="spiritual-gradient">Nadia</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-gray-700 leading-relaxed text-lg serif-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                For over a decade, I've been privileged to guide souls on their journey 
                of self-discovery and spiritual awakening. My path began with my own 
                profound transformation through Human Design, which revealed the 
                authentic blueprint of my being.
              </p>
              
              <p>
                Through Past Life Regression, I've witnessed countless individuals 
                heal ancient wounds, understand recurring patterns, and step into 
                their true power. Each session is a sacred space where your soul's 
                wisdom unfolds naturally.
              </p>
              
              <p>
                My approach combines ancient wisdom with modern understanding, 
                creating a bridge between your cosmic design and earthly experience. 
                Together, we'll unlock the keys to your most authentic, fulfilling life.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div 
              className="mt-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >                  <div className="text-purple-600">
                    {credential.icon}
                  </div>
                  <span className="font-medium serif-body">{credential.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >            <div className="liquid-glass-ultra p-8 rounded-3xl relative overflow-hidden">
              {/* Placeholder for Nadia's photo */}
              <div className="aspect-square bg-gradient-to-br from-purple-200 via-yellow-100 to-green-200 rounded-2xl flex items-center justify-center relative overflow-hidden liquid-glass-card">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-yellow-200/30 to-green-300/30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />                <div className="relative z-10 text-center">
                  <p className="text-gray-600 font-medium serif-heading">
                    Nadia Elmagrabi
                  </p>
                  <p className="text-gray-500 text-sm serif-body">
                    Soul Guide & Healer
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}<motion.div
              className="mt-6 liquid-glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-gray-600 italic mb-3 serif-body">
                "Nadia's guidance transformed my understanding of myself. 
                The Human Design reading was like receiving a manual for my soul."
              </blockquote>
              <cite className="text-sm text-gray-500 font-medium serif-body">
                — Sarah M., Spiritual Seeker
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
