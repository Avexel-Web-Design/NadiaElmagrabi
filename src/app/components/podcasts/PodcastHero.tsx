'use client'
import { motion } from 'framer-motion'
import { MicrophoneIcon, SpeakerWaveIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function PodcastHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20 pb-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 motion-safe"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 serif-heading">
              <span className="spiritual-gradient">Podcasts</span>
            </h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed serif-body motion-safe"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              From insightful conversations to sharing my personal journey, I've had the privilege
              of joining incredible podcasts to discuss topics I am truly passionate about.
            </motion.p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12 motion-safe"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {[
              {
                icon: <MicrophoneIcon className="h-8 w-8" />,
                title: "Authentic Conversations",
                description: "Real stories and genuine insights"
              },
              {
                icon: <SpeakerWaveIcon className="h-8 w-8" />,
                title: "Wisdom Sharing",
                description: "Tools and guidance for your journey"
              },
              {
                icon: <HeartIcon className="h-8 w-8" />,
                title: "Heart-Centered",
                description: "Speaking from the soul with love"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 serif-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 serif-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>        </div>
      </div>
    </section>
  )
}
