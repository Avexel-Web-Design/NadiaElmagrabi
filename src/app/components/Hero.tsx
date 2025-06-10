'use client'
import { motion } from 'framer-motion'
import { SparklesIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">        <div className="text-center">
          {/* Main Content */}          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 motion-safe"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 serif-heading">            <span className="spiritual-gradient">Discover Your</span>
              <br />
              <span className="text-gray-800 serif-heading">Soul&apos;s Blueprint</span>
            </h1><motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed serif-body motion-safe"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >              Journey into the depths of your authentic self through 
              <span className="font-semibold text-purple-700 serif-heading"> Human Design readings</span> and 
              <span className="font-semibold text-yellow-700 serif-heading"> Past Life Regression</span>. 
              Unlock the wisdom your soul has been waiting to share.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12 motion-safe"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {[
              {
                icon: <SparklesIcon className="h-8 w-8" />,
                title: "Human Design",
                description: "Decode your energetic blueprint"
              },
              {
                icon: <EyeIcon className="h-8 w-8" />,
                title: "Past Life Regression",
                description: "Heal through ancient wisdom"
              },
              {
                icon: <HeartIcon className="h-8 w-8" />,
                title: "Soul Guidance",
                description: "Transform your spiritual journey"
              }            ].map((feature) => (              <motion.div
                key={feature.title}
                className="liquid-glass-card p-6 rounded-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                style={{ transformOrigin: 'center' }}
              >
                <div className="text-purple-600 mb-4 group-hover:text-yellow-600 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 serif-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm serif-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center motion-safe"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >            <motion.a
              href="#services"
              className="btn-spiritual text-lg px-8 py-4 inline-block motion-safe"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ willChange: 'transform' }}
            >
              Explore Readings
            </motion.a>
              <motion.a
              href="#about"
              className="liquid-glass-ultra px-8 py-4 rounded-full text-gray-700 hover:liquid-glass-strong font-medium serif-body motion-safe"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ willChange: 'transform' }}
            >
              Learn More About Nadia
            </motion.a>
          </motion.div>
        </div>
      </div>      {/* Scroll Indicator */}      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 motion-safe"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'transform' }}
      >        <div className="liquid-glass-ultra p-3 rounded-full">
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="text-2xl text-purple-600" 
          />
        </div>
      </motion.div>
    </section>
  )
}
