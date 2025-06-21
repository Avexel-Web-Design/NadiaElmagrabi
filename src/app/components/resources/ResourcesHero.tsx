'use client'
import { motion } from 'framer-motion'
import { BookOpenIcon, PlayIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function ResourcesHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
              <span className="spiritual-gradient">Resources</span>
            </h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed serif-body motion-safe"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Discover a curated collection of transformational tools, guided sessions, and wisdom 
              to support you on your spiritual journey of self-discovery and healing.
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
                icon: <BookOpenIcon className="h-8 w-8" />,
                title: "Curated Tools",
                description: "Handpicked resources for transformation"              },
              {
                icon: <PlayIcon className="h-8 w-8" />,
                title: "Guided Sessions",
                description: "Immersive experiences for healing"
              },
              {
                icon: <HeartIcon className="h-8 w-8" />,
                title: "Heart-Centered",
                description: "Tools created with love and intention"
              }
            ].map((feature, index) => (              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded 
                    ? hoveredIndex === index
                      ? { opacity: 1, y: -8, scale: 1.05 }
                      : { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ 
                  duration: hoveredIndex === index ? 0.3 : 0.15, 
                  delay: isLoaded ? 0 : 0.8 + index * 0.1,
                  ease: "easeOut" 
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
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
