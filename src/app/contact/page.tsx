import ContactHeroSection from '../components/contact/ContactHeroSection';
import SacredConnectionOptionsSection from '../components/contact/SacredConnectionOptionsSection';
import SacredContactFormSection from '../components/contact/SacredContactFormSection';
import SacredContactInfoSection from '../components/contact/SacredContactInfoSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen cosmic-background">
      {/* Sacred Hero Section */}
      <ContactHeroSection />

      {/* Sacred Connection Options */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SacredConnectionOptionsSection />
        </div>
      </section>

      {/* Sacred Contact Form & Info */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-spiritual-gold/5 to-ethereal-pink/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SacredContactFormSection />
            <SacredContactInfoSection />
          </div>
        </div>
      </section>
    </div>
  );
}
