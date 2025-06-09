import TestimonialsHeroSection from '../components/sections/testimonials/TestimonialsHeroSection';
import TestimonialsStatsSection from '../components/sections/testimonials/TestimonialsStatsSection';
import TestimonialsGridSection from '../components/sections/testimonials/TestimonialsGridSection';
import VideoTestimonialsSection from '../components/sections/testimonials/VideoTestimonialsSection';
import TestimonialsCTASection from '../components/sections/testimonials/TestimonialsCTASection';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen earth-gradient">
      <TestimonialsHeroSection />
      <TestimonialsStatsSection />
      <TestimonialsGridSection />
      <VideoTestimonialsSection />
      <TestimonialsCTASection />
    </div>
  );
}
