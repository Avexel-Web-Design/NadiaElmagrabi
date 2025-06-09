import ResourcesHeroSection from '../components/sections/resources/ResourcesHeroSection';
import FeaturedResourcesSection from '../components/sections/resources/FeaturedResourcesSection';
import FreeResourcesSection from '../components/sections/resources/FreeResourcesSection';
import ResourcesNewsletterSection from '../components/sections/resources/ResourcesNewsletterSection';
import ResourcesCTASection from '../components/sections/resources/ResourcesCTASection';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen nature-gradient">
      <ResourcesHeroSection />
      <FeaturedResourcesSection />
      <FreeResourcesSection />
      <ResourcesNewsletterSection />
      <ResourcesCTASection />
    </div>
  );
}
