'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Star, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/embody-your-souls-purpose', label: 'Soul\'s Purpose' },
    { href: '/about-nadia', label: 'About' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/resources', label: 'Resources' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 cosmic-gradient backdrop-blur-md border-b border-[var(--spiritual-gold)] border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-[var(--spiritual-gold)] flex items-center justify-center ethereal-glow">
              <Sparkles className="w-6 h-6 text-[var(--spiritual-gold)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[var(--spiritual-gold)] spiritual-text-shadow">
                Nadia Elmagrabi
              </span>
              <span className="text-sm text-[var(--ethereal-pink)] tracking-wider font-light">
                ✧ Transformational Guide ✧
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/nadiaelmagrabi/15min"
              className="mystical-button px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              Begin Your Journey
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-[var(--spiritual-gold)] border-opacity-30 cosmic-gradient backdrop-blur-md">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-[var(--moonstone)] hover:text-[var(--spiritual-gold)] transition-all duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/nadiaelmagrabi/15min"
              onClick={() => setIsMenuOpen(false)}
              className="mystical-button w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              <Star className="w-4 h-4" />
              Begin Your Journey
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
