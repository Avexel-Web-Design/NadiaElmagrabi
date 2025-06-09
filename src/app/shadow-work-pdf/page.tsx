'use client';

import ShadowWorkHeroSection from '../components/shadow-work/ShadowWorkHeroSection';
import SacredContentsSection from '../components/shadow-work/SacredContentsSection';
import SacredBenefitsSection from '../components/shadow-work/SacredBenefitsSection';
import SacredTestimonialsSection from '../components/shadow-work/SacredTestimonialsSection';
import SacredAboutNadiaSection from '../components/shadow-work/SacredAboutNadiaSection';
import SacredShadowWorkCTASection from '../components/shadow-work/SacredShadowWorkCTASection';

export default function ShadowWorkPDFPage() {
  return (
    <div className="min-h-screen">
      <ShadowWorkHeroSection />
      <SacredContentsSection />
      <SacredBenefitsSection />
      <SacredTestimonialsSection />
      <SacredAboutNadiaSection />
      <SacredShadowWorkCTASection />
    </div>
  );
}
