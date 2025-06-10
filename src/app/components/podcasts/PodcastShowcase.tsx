'use client'
import { motion } from 'framer-motion'
import { podcasts } from '../../data/podcasts'
import PodcastHero from './PodcastHero'
import PodcastGrid from './PodcastGrid'

export default function PodcastShowcase() {

  return (
    <div className="min-h-screen">      {/* Podcasts Section */}
      <section className="py-20 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-heading">
              Featured <span className="spiritual-gradient">Episodes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
              Discover conversations that explore the depths of Human Design, 
              Past Life Regression, and the journey of spiritual awakening.
            </p>
          </motion.div>          {/* Podcast Grid */}
          <PodcastGrid 
            podcasts={podcasts}
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-20 p-12 rounded-3xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 serif-heading">
              Ready to <span className="spiritual-gradient">Begin Your Journey?</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto serif-body">
              If these conversations resonate with you, I'd love to guide you on your own 
              path of discovery through personalized Human Design readings and Past Life Regression sessions.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 serif-heading text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
