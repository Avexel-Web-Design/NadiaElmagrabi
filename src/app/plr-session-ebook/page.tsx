'use client';

import PLRHeroSection from '../components/plr/PLRHeroSection';
import SacredDiscoveriesSection from '../components/plr/SacredDiscoveriesSection';
import SacredChaptersSection from '../components/plr/SacredChaptersSection';
import SacredSoulStoriesSection from '../components/plr/SacredSoulStoriesSection';
import SacredBonusTreasuresSection from '../components/plr/SacredBonusTreasuresSection';
import SacredFAQSection from '../components/plr/SacredFAQSection';
import SacredPLRCTASection from '../components/plr/SacredPLRCTASection';

export default function PLRSessionEBookPage() {
  return (
    <div className="min-h-screen">
      <PLRHeroSection />
      <SacredDiscoveriesSection />
      <SacredChaptersSection />
      <SacredSoulStoriesSection />
      <SacredBonusTreasuresSection />
      <SacredFAQSection />
      <SacredPLRCTASection />
    </div>
  );
}
