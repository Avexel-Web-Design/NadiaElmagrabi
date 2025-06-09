import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactOptionsSection from '../components/sections/contact/ContactOptionsSection';
import ContactFormSection from '../components/sections/contact/ContactFormSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />
      <ContactOptionsSection />
      <ContactFormSection />
    </div>
  );
}
