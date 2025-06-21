'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Podcast } from '../../data/podcasts'
import PodcastCard from './PodcastCard'
import { useDelayedAnimation } from '../../hooks/useStaggeredAnimation'

interface PodcastGridProps {
  podcasts: Podcast[];
}

export default function PodcastGrid({ podcasts }: PodcastGridProps) {
  const isLoaded = useDelayedAnimation(400) // Start grid animations 400ms after component mounts

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {podcasts.map((podcast, index) => (
          <motion.div
            key={podcast.id}
            layout
          >
            <PodcastCard podcast={podcast} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
