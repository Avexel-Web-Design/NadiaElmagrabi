'use client'
import { motion } from 'framer-motion'
import { podcasts } from '../../data/podcasts'
import PodcastGrid from './PodcastGrid'
import { useDelayedAnimation } from '../../hooks/useStaggeredAnimation'
import { use3DCard } from '../../hooks/use3DCard'
import { BookOpenIcon, PlayIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'

export default function ResourcesShowcase() {
  const isLoaded = useDelayedAnimation(200) // Start animations 200ms after component mounts

  // Create 3D card hooks for each resource card
  const card3D1 = use3DCard({
    maxRotateX: 8,
    maxRotateY: 8,
    scale: 1.02,
    perspective: 1000
  })
  
  const card3D2 = use3DCard({
    maxRotateX: 8,
    maxRotateY: 8,
    scale: 1.02,
    perspective: 1000
  })

  const cardRefs = [card3D1, card3D2]

  const additionalResources = [
    {
      title: "Past Life Regression Session + Ebook",
      description: "Experience a transformative recorded past life regression session paired with an insightful ebook to deepen your understanding of your soul's journey.",
      type: "Guided Session & Ebook",
      link: "https://www.groupregressionsession.com/offers/d5edCHpR/checkout",
      icon: <PlayIcon className="h-8 w-8" />,
      featured: true
    },
    {
      title: "Shadow Work PDF Guide",
      description: "A comprehensive guide to shadow work practices, offering tools and insights to help you integrate and heal your shadow aspects.",
      type: "PDF Guide",
      link: "https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/2147605294/downloads/2c30e0-05e2-fb-15f-717afa5a46b2_Shadow_Work_PDF.pdf",
      icon: <DocumentArrowDownIcon className="h-8 w-8" />,
      featured: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Additional Resources Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-heading">
              Transformational <span className="spiritual-gradient">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
              Curated tools and experiences designed to support your journey of self-discovery, 
              healing, and spiritual awakening.
            </p>
          </motion.div>          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {additionalResources.map((resource, index) => {
              const { cardRef, cardProps } = cardRefs[index]
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <div 
                    ref={cardRef}
                    {...cardProps}
                    className="card-3d bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-purple-100 hover:border-purple-200 overflow-hidden relative"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-purple-600 mr-4 group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 serif-heading text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 serif-body leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <motion.a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 serif-heading shadow-lg hover:shadow-xl group-hover:shadow-lg transform hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Access Resource
                    </motion.a>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent opacity-50 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-transparent opacity-50 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>      {/* Podcasts Section */}
      <section className="py-20 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
          />          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
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
