import AboutHeroSection from '../components/sections/about/AboutHeroSection';
import MainStorySection from '../components/sections/about/MainStorySection';
import ExpertiseSection from '../components/sections/about/ExpertiseSection';

export default function AboutNadia() {
  return (
    <main className="min-h-screen nature-gradient pt-16">
      <AboutHeroSection />
      <MainStorySection />
      <ExpertiseSection />
      {/* Additional sections would be imported here */}
    </main>
  );
}
