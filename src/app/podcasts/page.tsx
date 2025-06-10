import type { Metadata } from 'next'
import PodcastHero from '../components/podcasts/PodcastHero'
import PodcastShowcase from '../components/podcasts/PodcastShowcase'

export const metadata: Metadata = {
  title: 'Podcasts - Nadia Elmagrabi | Human Design & Past Life Regression',
  description: 'Listen to Nadia Elmagrabi\'s podcast appearances discussing Human Design, Past Life Regression, spiritual awakening, and healing. Discover insights and wisdom shared across various platforms.',
  keywords: 'nadia elmagrabi podcasts, human design podcasts, past life regression interviews, spiritual podcasts, healing conversations',
}

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50">
      <PodcastHero />
      <PodcastShowcase />
    </div>
  )
}
