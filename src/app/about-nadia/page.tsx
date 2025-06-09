'use client';

import AboutHeroSection from '../components/about/AboutHeroSection';
import SacredJourneySection from '../components/about/SacredJourneySection';
import ExpertiseSection from '../components/about/ExpertiseSection';
import TrainingCredentialsSection from '../components/about/TrainingCredentialsSection';
import PersonalStorySection from '../components/about/PersonalStorySection';
import AboutCTASection from '../components/about/AboutCTASection';

export default function AboutNadia() {
  return (
    <main className="min-h-screen pt-16">
      <AboutHeroSection />
      <SacredJourneySection />
      <ExpertiseSection />
      <TrainingCredentialsSection />
      <PersonalStorySection />
      <AboutCTASection />
    </main>
  );
}
