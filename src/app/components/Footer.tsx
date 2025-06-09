import Link from 'next/link';
import { Heart, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-lavender" />
              <span className="text-2xl font-bold sacred-text">Nadia Elmagrabi</span>
            </div>
            <p className="text-cream/80 mb-4 body-text">
              Transformational Guide helping women align with their spiritual path through ancestral healing and soul-level transformation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/nadia_elmagrabi/" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/n.elmagrabi/" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/nadia-elmagrabi-72083329" className="text-cream/70 hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sacred-text">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-nadia" className="text-cream/80 hover:text-gold transition-colors body-text">About Nadia</Link></li>
              <li><Link href="/embody-your-souls-purpose" className="text-cream/80 hover:text-gold transition-colors body-text">Soul's Purpose</Link></li>
              <li><Link href="/testimonials" className="text-cream/80 hover:text-gold transition-colors body-text">Testimonials</Link></li>
              <li><Link href="/resources" className="text-cream/80 hover:text-gold transition-colors body-text">Free Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sacred-text">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/embody-your-souls-purpose" className="text-cream/80 hover:text-gold transition-colors body-text">Human Design & PLR</Link></li>
              <li><Link href="/shadow-work-pdf" className="text-cream/80 hover:text-gold transition-colors body-text">Shadow Work PDF</Link></li>
              <li><Link href="/plr-session-ebook" className="text-cream/80 hover:text-gold transition-colors body-text">PLR Session eBook</Link></li>
              <li><Link href="/podcasts" className="text-cream/80 hover:text-gold transition-colors body-text">Podcasts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <Link 
                href="https://calendly.com/nadiaelmagrabi/30min"
                className="flex items-center space-x-2 text-cream/70 hover:text-gold transition-colors body-text"
              >
                <Phone className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>
              <Link 
                href="/contact"
                className="flex items-center space-x-2 text-cream/70 hover:text-gold transition-colors body-text"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Form</span>
              </Link>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Connected</h4>
              <p className="text-cream/70 text-sm mb-3 body-text">Get free resources and updates</p>
              <Link
                href="/resources"
                className="bg-gold text-forest px-4 py-2 rounded-full text-sm font-semibold sacred-text hover:bg-copper hover:text-cream transition-all duration-300 inline-block divine-shadow"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Nadia Elmagrabi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-cream/70 hover:text-gold text-sm body-text transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-cream/70 hover:text-gold text-sm body-text transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-cream/60 text-xs body-text">
              Artwork by <Link href="https://www.ruthcisse.com/" className="text-gold hover:text-copper">Ruthie Cisse</Link> | 
              Photography by Natalie Fons-Welke
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
