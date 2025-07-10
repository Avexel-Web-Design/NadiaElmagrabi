'use client'
import { motion } from 'framer-motion'

export default function Biography() {
  return (
    <section id="biography" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              About Me
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            Transformational Guide | Intuitive Psychotherapist | Specialist in Past Life Healing, Ancestral Work & Human Design
          </p>
        </motion.div>        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex-1">              <h3 className="text-2xl font-semibold text-gray-800 mb-4 serif-heading">
                My Spiritual Journey
              </h3>
              <p className="text-gray-600 leading-relaxed serif-body mb-4">
                I wasn't raised with any specific religion or talk about spirituality. However, a 
                spontaneous spiritual awakening at the age of 20 sparked a lifelong journey of healing, 
                self-discovery, and a profound exploration of metaphysics and the nature of consciousness.
              </p>
              <p className="text-gray-600 leading-relaxed serif-body">
                Over the past 35 years, I've immersed myself in a wide range of modalities, from my 
                MA in Clinical and Humanistic Psychology to training in Past Life Therapy with Carol Bowman, 
                advanced Human Design training, and certification in intuitive development.
              </p>
            </div>
          </motion.div>          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex-1">              <h3 className="text-2xl font-semibold text-gray-800 mb-4 serif-heading">
                My Mission
              </h3>
              <p className="text-gray-600 leading-relaxed serif-body mb-4">
                I help women break through the invisible patterns that keep them stuck—ancestral wounds, 
                past-life imprints, limiting beliefs, and outdated roles—so they can step into their 
                soul's highest expression.
              </p>
              <p className="text-gray-600 leading-relaxed serif-body">
                With nearly 25 years of experience as an intuitive psychotherapist and expertise in 
                Past Life Therapy, ancestral healing, Human Design, and embodied energetics, I guide 
                women through deep, multidimensional transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
