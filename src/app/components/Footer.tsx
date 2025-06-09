import Link from 'next/link';
import { Heart, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">Nadia Elmagrabi</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformational Guide helping women align with their spiritual path through ancestral healing and soul-level transformation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/nadia_elmagrabi/" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/n.elmagrabi/" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/nadia-elmagrabi-72083329" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-nadia" className="text-gray-300 hover:text-purple-400 transition-colors">About Nadia</Link></li>
              <li><Link href="/embody-your-souls-purpose" className="text-gray-300 hover:text-purple-400 transition-colors">Soul's Purpose</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-purple-400 transition-colors">Free Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/embody-your-souls-purpose" className="text-gray-300 hover:text-purple-400 transition-colors">Human Design & PLR</Link></li>
              <li><Link href="/shadow-work-pdf" className="text-gray-300 hover:text-purple-400 transition-colors">Shadow Work PDF</Link></li>
              <li><Link href="/plr-session-ebook" className="text-gray-300 hover:text-purple-400 transition-colors">PLR Session eBook</Link></li>
              <li><Link href="/podcasts" className="text-gray-300 hover:text-purple-400 transition-colors">Podcasts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <Link 
                href="https://calendly.com/nadiaelmagrabi/30min"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>
              <Link 
                href="/contact"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Form</span>
              </Link>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-300 text-sm mb-3">Get free resources and updates</p>
              <Link
                href="/resources"
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all duration-300 inline-block"
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
              <Link href="/privacy" className="text-gray-300 hover:text-purple-400 text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-purple-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              Artwork by <Link href="https://www.ruthcisse.com/" className="text-purple-400 hover:text-purple-300">Ruthie Cisse</Link> | 
              Photography by Natalie Fons-Welke
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
