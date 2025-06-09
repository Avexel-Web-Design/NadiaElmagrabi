import PLRHeroSection from '../components/sections/plr-ebook/PLRHeroSection';
import PLRFeaturesSection from '../components/sections/plr-ebook/PLRFeaturesSection';
import ChapterBreakdownSection from '../components/sections/plr-ebook/ChapterBreakdownSection';
import PLRTestimonialsSection from '../components/sections/plr-ebook/PLRTestimonialsSection';
import BonusContentSection from '../components/sections/plr-ebook/BonusContentSection';
import PLRFAQSection from '../components/sections/plr-ebook/PLRFAQSection';
import PLRFinalCTASection from '../components/sections/plr-ebook/PLRFinalCTASection';

export default function PLRSessionEBookPage() {
  return (
    <div className="min-h-screen muted-spiritual">
      <PLRHeroSection />
      <PLRFeaturesSection />
      <ChapterBreakdownSection />
      <PLRTestimonialsSection />
      <BonusContentSection />
      <PLRFAQSection />
      <PLRFinalCTASection />
    </div>
  );
}
