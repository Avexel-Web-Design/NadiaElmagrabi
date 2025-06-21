import type { Metadata } from 'next'
import ResourcesHero from '../components/resources/ResourcesHero'
import ResourcesShowcase from '../components/resources/ResourcesShowcase'

export const metadata: Metadata = {
  title: 'Resources - Nadia Elmagrabi | Human Design & Past Life Regression',
  description: 'Explore Nadia Elmagrabi\'s curated resources including podcasts, guided sessions, and transformational tools for Human Design, Past Life Regression, and spiritual awakening.',
  keywords: 'nadia elmagrabi resources, human design resources, past life regression tools, spiritual resources, healing tools, guided sessions',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 pb-107">
      <ResourcesHero />
      <ResourcesShowcase />
    </div>
  )
}
