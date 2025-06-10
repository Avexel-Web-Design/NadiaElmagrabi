'use client'
import { motion } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/24/outline'
import { use3DCard } from '../../hooks/use3DCard'
import { Podcast } from '../../data/podcasts'

interface PodcastCardProps {
  podcast: Podcast;
  index: number;
}

export default function PodcastCard({ podcast, index }: PodcastCardProps) {
  const { cardRef, cardProps } = use3DCard({
    maxRotateX: 8,
    maxRotateY: 8,
    scale: 1.02,
    perspective: 1000
  })
  const getPlatformIcon = () => {
    return (
      <PlayIcon className="h-5 w-5" />
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Human Design':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Past Life Therapy':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Healing Journey':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Wellness & Crystals':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Wellness & Self-Care':
        return 'bg-pink-100 text-pink-800 border-pink-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      {...cardProps}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
      className="card-3d bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group motion-safe"
    >
      {/* Category Badge */}
      <div className="p-6 pb-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(podcast.category)}`}>
          {podcast.category}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 serif-heading group-hover:text-purple-700 transition-colors duration-300">
          {podcast.title}
        </h3>
        
        <p className="text-purple-600 font-medium text-sm mb-3 serif-body">
          Hosted by {podcast.hostName}
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 serif-body line-clamp-4">
          {podcast.description}
        </p>
        
        {/* Listen Button */}        <motion.a
          href={podcast.listenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg transform hover:scale-105"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {getPlatformIcon()}
          <span className="ml-2">Listen Now</span>
        </motion.a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent opacity-50 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-transparent opacity-50 rounded-full translate-y-12 -translate-x-12"></div>
    </motion.div>
  )
}
