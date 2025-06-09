'use client';

import TestimonialsHeroSection from '../components/testimonials/TestimonialsHeroSection';
import SacredStatsSection from '../components/testimonials/SacredStatsSection';
import SacredTestimonialsGrid from '../components/testimonials/SacredTestimonialsGrid';
import SacredVideoTestimonialsSection from '../components/testimonials/SacredVideoTestimonialsSection';
import SacredTestimonialsCTASection from '../components/testimonials/SacredTestimonialsCTASection';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <TestimonialsHeroSection />
      <SacredStatsSection />
      <SacredTestimonialsGrid />
      <SacredVideoTestimonialsSection />
      <SacredTestimonialsCTASection />
    </div>
  );
}
