import AboutHeroSection from '../components/sections/about/AboutHeroSection';
import MainStorySection from '../components/sections/about/MainStorySection';
import ExpertiseSection from '../components/sections/about/ExpertiseSection';

export default function AboutNadia() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-16">
      <AboutHeroSection />
      <MainStorySection />
      <ExpertiseSection />
      {/* Additional sections would be imported here */}
    </main>
  );
}
