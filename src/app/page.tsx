import HeroSection from './components/sections/home/HeroSection';
import ServicesSection from './components/sections/home/ServicesSection';
import TestimonialsPreviewSection from './components/sections/home/TestimonialsPreviewSection';
import AboutNadiaPreviewSection from './components/sections/home/AboutNadiaPreviewSection';
import CTASection from './components/sections/home/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <HeroSection />
      <ServicesSection />
      <TestimonialsPreviewSection />
      <AboutNadiaPreviewSection />
      <CTASection />
    </main>
  );
}
