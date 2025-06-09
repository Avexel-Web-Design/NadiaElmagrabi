import EmbodyHeroSection from '../components/sections/embody-souls-purpose/EmbodyHeroSection';
import ModalitiesSection from '../components/sections/embody-souls-purpose/ModalitiesSection';
import BenefitsSection from '../components/sections/embody-souls-purpose/BenefitsSection';
import ProgramStructureSection from '../components/sections/embody-souls-purpose/ProgramStructureSection';
import EmbodyFAQSection from '../components/sections/embody-souls-purpose/EmbodyFAQSection';

export default function EmbodyYourSoulsPurpose() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-16">
      <EmbodyHeroSection />
      <ModalitiesSection />
      <BenefitsSection />
      <ProgramStructureSection />
      <EmbodyFAQSection />
    </main>
  );
}
