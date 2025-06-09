'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/embody-your-souls-purpose', label: 'Soul&apos;s Purpose' },
    { href: '/about-nadia', label: 'About' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/resources', label: 'Resources' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b mystical-border divine-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-amethyst" />
            <span className="text-2xl font-bold text-forest sacred-text">Nadia Elmagrabi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-earth hover:text-amethyst transition-colors font-medium body-text"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/nadiaelmagrabi/15min"
              className="bg-amethyst text-cream px-6 py-2 rounded-full font-semibold hover:bg-deep-purple transition-all duration-300 divine-shadow body-text"
            >
              Book Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-earth hover:text-amethyst hover:bg-sage/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t mystical-border bg-cream"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-earth hover:text-amethyst hover:bg-sage/10 rounded-md transition-colors body-text"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://calendly.com/nadiaelmagrabi/15min"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-amethyst text-cream px-6 py-3 rounded-full font-semibold hover:bg-deep-purple transition-all duration-300 mt-4 divine-shadow body-text"
              >
                Book Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
