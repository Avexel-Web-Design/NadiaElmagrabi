'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Podcast } from '../../data/podcasts'
import PodcastCard from './PodcastCard'

interface PodcastGridProps {
  podcasts: Podcast[];
}

export default function PodcastGrid({ podcasts }: PodcastGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="wait">
        {podcasts.map((podcast, index) => (
          <motion.div
            key={podcast.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <PodcastCard podcast={podcast} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
