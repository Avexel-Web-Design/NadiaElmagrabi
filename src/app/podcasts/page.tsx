'use client';

import PodcastsHeroSection from '../components/podcasts/PodcastsHeroSection';
import SacredPodcastStatsSection from '../components/podcasts/SacredPodcastStatsSection';
import SacredFeaturedEpisodeSection from '../components/podcasts/SacredFeaturedEpisodeSection';
import SacredEpisodesGridSection from '../components/podcasts/SacredEpisodesGridSection';
import SacredPodcastNewsletterSection from '../components/podcasts/SacredPodcastNewsletterSection';

export default function PodcastsPage() {
  return (
    <div className="min-h-screen">
      <PodcastsHeroSection />
      <SacredPodcastStatsSection />
      <SacredFeaturedEpisodeSection />
      <SacredEpisodesGridSection />
      <SacredPodcastNewsletterSection />
    </div>
  );
}
