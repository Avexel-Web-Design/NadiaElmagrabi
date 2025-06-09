import Link from 'next/link';
import { Heart, Mail, Phone, Instagram, Facebook, Linkedin, Star, Sparkles, Moon, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="cosmic-gradient border-t border-[var(--spiritual-gold)] border-opacity-30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--spiritual-gold)] flex items-center justify-center ethereal-glow">
                <Heart className="w-6 h-6 text-[var(--ethereal-pink)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[var(--spiritual-gold)] spiritual-text-shadow font-cinzel">
                  Nadia Elmagrabi
                </span>
                <span className="text-sm text-[var(--ethereal-pink)] tracking-wider font-light">
                  ✧ Sacred Transformations ✧
                </span>
              </div>
            </div>
            <p className="text-[var(--moonstone)] mb-6 leading-relaxed">
              Divine guide illuminating the path to soul-level transformation through ancestral healing and spiritual awakening.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/nadia_elmagrabi/" className="group">
                <div className="w-10 h-10 rounded-full border border-[var(--spiritual-gold)] border-opacity-50 flex items-center justify-center hover:border-opacity-100 hover:bg-[var(--spiritual-gold)] hover:bg-opacity-20 transition-all duration-300 ethereal-glow">
                  <Instagram className="w-5 h-5 text-[var(--moonstone)] group-hover:text-[var(--spiritual-gold)]" />
                </div>
              </Link>
              <Link href="https://www.facebook.com/n.elmagrabi/" className="group">
                <div className="w-10 h-10 rounded-full border border-[var(--spiritual-gold)] border-opacity-50 flex items-center justify-center hover:border-opacity-100 hover:bg-[var(--spiritual-gold)] hover:bg-opacity-20 transition-all duration-300 ethereal-glow">
                  <Facebook className="w-5 h-5 text-[var(--moonstone)] group-hover:text-[var(--spiritual-gold)]" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/nadia-elmagrabi-72083329" className="group">
                <div className="w-10 h-10 rounded-full border border-[var(--spiritual-gold)] border-opacity-50 flex items-center justify-center hover:border-opacity-100 hover:bg-[var(--spiritual-gold)] hover:bg-opacity-20 transition-all duration-300 ethereal-glow">
                  <Linkedin className="w-5 h-5 text-[var(--moonstone)] group-hover:text-[var(--spiritual-gold)]" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--spiritual-gold)] font-cinzel flex items-center gap-2">
              <Star className="w-5 h-5" />
              Sacred Paths
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-nadia" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sparkles className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  About Nadia
                </Link>
              </li>
              <li>
                <Link href="/embody-your-souls-purpose" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sparkles className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  Soul's Purpose
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sparkles className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  Sacred Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sparkles className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  Divine Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--spiritual-gold)] font-cinzel flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Mystical Offerings
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/embody-your-souls-purpose" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sun className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  Human Design & PLR
                </Link>
              </li>
              <li>
                <Link href="/shadow-work-pdf" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sun className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  Shadow Work Guide
                </Link>
              </li>
              <li>
                <Link href="/plr-session-ebook" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sun className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  PLR Sacred Journey
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 flex items-center gap-2 group">
                  <Sun className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  Wisdom Podcasts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--spiritual-gold)] font-cinzel flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Sacred Connection
            </h3>
            <div className="space-y-4">
              <Link 
                href="https://calendly.com/nadiaelmagrabi/30min"
                className="flex items-center space-x-3 text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full border border-[var(--spiritual-gold)] border-opacity-50 flex items-center justify-center group-hover:border-opacity-100 group-hover:bg-[var(--spiritual-gold)] group-hover:bg-opacity-20 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Divine Consultation</span>
              </Link>
              <Link 
                href="/contact"
                className="flex items-center space-x-3 text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full border border-[var(--spiritual-gold)] border-opacity-50 flex items-center justify-center group-hover:border-opacity-100 group-hover:bg-[var(--spiritual-gold)] group-hover:bg-opacity-20 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Sacred Messages</span>
              </Link>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl border border-[var(--spiritual-gold)] border-opacity-30 ethereal-glow bg-gradient-to-br from-[var(--cosmic-blue)] to-[var(--mystical-purple)] bg-opacity-20 backdrop-blur-sm">
              <h4 className="font-semibold mb-3 text-[var(--spiritual-gold)] font-cinzel flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Join Our Sacred Circle
              </h4>
              <p className="text-[var(--moonstone)] text-sm mb-4 leading-relaxed">
                Receive divine insights and sacred resources for your spiritual journey
              </p>
              <Link
                href="/resources"
                className="mystical-button px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                <Star className="w-4 h-4" />
                Enter Sacred Space
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--spiritual-gold)] border-opacity-30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--moonstone)] text-sm flex items-center gap-2">
              <Heart className="w-4 h-4 text-[var(--ethereal-pink)]" />
              © 2025 Nadia Elmagrabi. All sacred rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] text-sm transition-colors">Privacy Sanctuary</Link>
              <Link href="/terms" className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] text-sm transition-colors">Sacred Terms</Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-[var(--moonstone)] text-xs opacity-70 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1">
                ✨ Artwork by <Link href="https://www.ruthcisse.com/" className="text-[var(--ethereal-pink)] hover:text-[var(--spiritual-gold)] transition-colors">Ruthie Cisse</Link>
              </span>
              <span className="flex items-center gap-1">
                📸 Photography by Natalie Fons-Welke
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
