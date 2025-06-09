'use client';

import ResourcesHeroSection from '../components/resources/ResourcesHeroSection';
import SacredResourcesSection from '../components/resources/SacredResourcesSection';
import SacredFreeResourcesSection from '../components/resources/SacredFreeResourcesSection';
import SacredNewsletterSection from '../components/resources/SacredNewsletterSection';
import ResourcesCTASection from '../components/resources/ResourcesCTASection';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <ResourcesHeroSection />
      <SacredResourcesSection />
      <SacredFreeResourcesSection />
      <SacredNewsletterSection />
      <ResourcesCTASection />
    </div>
  );
}
