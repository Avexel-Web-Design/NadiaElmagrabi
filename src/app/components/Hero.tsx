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
            className="grid md:grid-cols-3 gap-8 mb-12 motion-safe"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {[
              {
                icon: <SparklesIcon className="h-10 w-10" />,
                title: "Human Design",
                description: "Decode your energetic blueprint",
                gradient: "from-purple-400 to-indigo-600",
                bgGradient: "from-purple-50 to-indigo-50"
              },
              {
                icon: <EyeIcon className="h-10 w-10" />,
                title: "Past Life Regression",
                description: "Heal through ancient wisdom",
                gradient: "from-yellow-400 to-orange-600",
                bgGradient: "from-yellow-50 to-orange-50"
              },
              {
                icon: <HeartIcon className="h-10 w-10" />,
                title: "Soul Guidance",
                description: "Transform your spiritual journey",
                gradient: "from-green-400 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50"
              }            ].map((feature, index) => (              <motion.div
                key={feature.title}
                className="hero-feature-card liquid-glass-card p-8 rounded-3xl group relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                style={{ transformOrigin: 'center' }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`hero-icon-container inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <div className="text-white drop-shadow-sm">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 serif-heading group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base serif-body leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
      </div>      {/* Gradient Transition to About Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-purple-50/30 to-purple-50/60 pointer-events-none z-5"></div>      {/* Scroll Indicator */}      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 motion-safe z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'transform' }}
        onClick={() => {
          const nextSection = document.querySelector('#about');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      ><div className="liquid-glass-ultra p-3 rounded-full hover:liquid-glass-strong transition-all duration-300">
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="text-2xl text-purple-600" 
          />
        </div>
      </motion.div>
    </section>
  )
}
