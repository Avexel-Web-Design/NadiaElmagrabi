import PodcastHeroSection from '../components/sections/podcasts/PodcastHeroSection';
import PodcastStatsSection from '../components/sections/podcasts/PodcastStatsSection';
import PodcastSubscribeSection from '../components/sections/podcasts/PodcastSubscribeSection';
import FeaturedEpisodeSection from '../components/sections/podcasts/FeaturedEpisodeSection';
import AllEpisodesSection from '../components/sections/podcasts/AllEpisodesSection';
import PodcastNewsletterSection from '../components/sections/podcasts/PodcastNewsletterSection';

export default function PodcastsPage() {
  return (
    <div className="min-h-screen">
      <PodcastHeroSection />
      <PodcastStatsSection />
      <PodcastSubscribeSection />
      <FeaturedEpisodeSection />
      <AllEpisodesSection />
      <PodcastNewsletterSection />
    </div>
  );
}
