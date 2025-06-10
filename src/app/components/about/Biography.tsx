'use client'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Biography() {
  return (
    <section id="biography" className="py-20 bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <SparklesIcon className="h-8 w-8 text-purple-600 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              About Me
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            Discover the journey that led me to spiritual guidance and healing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 serif-heading">
                My Spiritual Journey
              </h3>
              <p className="text-gray-600 leading-relaxed serif-body mb-4">
                For over a decade, I have been deeply immersed in the world of spiritual guidance, 
                helping individuals discover their true path and purpose. My journey began with my 
                own spiritual awakening, which led me to explore various healing modalities and 
                divination practices.
              </p>
              <p className="text-gray-600 leading-relaxed serif-body">
                Through years of study and practice, I have developed a unique approach that combines 
                traditional wisdom with modern understanding, creating a safe space for transformation 
                and growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 serif-heading">
                My Mission
              </h3>
              <p className="text-gray-600 leading-relaxed serif-body mb-4">
                I believe that everyone has the power to transform their life and connect with their 
                highest self. My mission is to guide you through this transformative process with 
                compassion, wisdom, and authenticity.
              </p>
              <p className="text-gray-600 leading-relaxed serif-body">
                Whether you're seeking clarity in relationships, career guidance, or spiritual growth, 
                I am here to help you unlock the answers that already exist within you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
