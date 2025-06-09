import ShadowWorkHeroSection from '../components/sections/shadow-work/ShadowWorkHeroSection';
import WhatsInsideSection from '../components/sections/shadow-work/WhatsInsideSection';
import ShadowWorkBenefitsSection from '../components/sections/shadow-work/ShadowWorkBenefitsSection';
import ShadowWorkTestimonialsSection from '../components/sections/shadow-work/ShadowWorkTestimonialsSection';
import ShadowWorkAboutSection from '../components/sections/shadow-work/ShadowWorkAboutSection';
import ShadowWorkCTASection from '../components/sections/shadow-work/ShadowWorkCTASection';

export default function ShadowWorkPDFPage() {
  return (
    <div className="min-h-screen">
      <ShadowWorkHeroSection />
      <WhatsInsideSection />
      <ShadowWorkBenefitsSection />
      <ShadowWorkTestimonialsSection />
      <ShadowWorkAboutSection />
      <ShadowWorkCTASection />
    </div>
  );
}
