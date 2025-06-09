import EmbodyHeroSection from '../components/sections/embody-souls-purpose/EmbodyHeroSection';
import ModalitiesSection from '../components/sections/embody-souls-purpose/ModalitiesSection';
import BenefitsSection from '../components/sections/embody-souls-purpose/BenefitsSection';
import ProgramStructureSection from '../components/sections/embody-souls-purpose/ProgramStructureSection';
import EmbodyFAQSection from '../components/sections/embody-souls-purpose/EmbodyFAQSection';

export default function EmbodyYourSoulsPurpose() {
  return (
    <main className="min-h-screen earth-gradient pt-16">
      <EmbodyHeroSection />
      <ModalitiesSection />
      <BenefitsSection />
      <ProgramStructureSection />
      <EmbodyFAQSection />
    </main>
  );
}
