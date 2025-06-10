'use client'
import { motion } from 'framer-motion'
import { SparklesIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 opacity-70"></div>
        {/* Floating Spiritual Elements */}
      {isLoaded && (        <>
          <motion.div
            className="absolute top-20 left-10 text-4xl motion-safe"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 0.3,
              y: 0
            }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
          >
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 10, 0] 
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              🌟
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute top-1/4 right-20 text-3xl motion-safe"
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
              opacity: 0.25,
              y: 0
            }}
            transition={{ 
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <motion.div
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, -8, 0] 
              }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              🌙
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/4 left-1/4 text-2xl motion-safe"
            initial={{ opacity: 0, y: 12 }}
            animate={{ 
              opacity: 0.2,
              y: 0
            }}
            transition={{ 
              duration: 1.4,
              delay: 0.6,
              ease: "easeOut"
            }}
          >
            <motion.div
              animate={{ 
                y: [-6, 6, -6],
                rotate: [0, 6, 0] 
              }}
              transition={{ 
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
            >
              ✨
            </motion.div>
          </motion.div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">        <div className="text-center">
          {/* Main Content */}          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 motion-safe"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 serif-heading">
              <span className="spiritual-gradient">Discover Your</span>
              <br />
              <span className="text-gray-800 serif-heading">Soul's Blueprint</span>
            </h1>              <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed serif-body motion-safe"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Journey into the depths of your authentic self through 
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
              }            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="liquid-glass-card p-6 rounded-2xl hover:liquid-glass-strong group motion-safe"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                style={{ 
                  willChange: 'transform',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
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
      >
        <div className="liquid-glass-ultra p-3 rounded-full">
          <motion.div
            className="w-1 h-6 bg-gradient-to-b from-purple-600 to-yellow-500 rounded-full mx-auto"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}
