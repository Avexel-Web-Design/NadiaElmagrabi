import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import AboutNadiaSection from './components/home/AboutNadiaSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutNadiaSection />
      <CTASection />
    </main>
  );
}
