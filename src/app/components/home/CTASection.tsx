'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Gift, MessageCircle, Star, Sparkles, Heart } from 'lucide-react';

export default function CTASection() {
  const ctaItems = [
    {
      title: "Book a Sacred Consultation",
      description: "Let's connect on a divine call and explore how I can guide your transformation",
      icon: Calendar,
      href: "https://calendly.com/nadiaelmagrabi/30min",
      buttonText: "Schedule Your Sacred Call",
      color: "var(--spiritual-gold)",
      element: "fire"
    },
    {
      title: "Receive Your Sacred Gifts",
      description: "Embrace divine resources to nourish your body, mind & spirit on your journey",
      icon: Gift,
      href: "/resources",
      buttonText: "Claim Your Gifts",
      color: "var(--ethereal-pink)",
      element: "water"
    },
    {
      title: "Invite Sacred Wisdom",
      description: "For your program, podcast, or spiritual community gathering",
      icon: MessageCircle,
      href: "/contact",
      buttonText: "Connect with Nadia",
      color: "var(--mystical-purple)",
      element: "air"
    }
  ];

  return (
    <section className="py-20 relative cosmic-gradient">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          {/* Merkaba */}
          <g transform="translate(400,300)">
            <polygon points="0,-60 -52,30 52,30" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
            <polygon points="0,60 -52,-30 52,-30" stroke="currentColor" strokeWidth="1" className="text-[var(--spiritual-gold)]" />
          </g>
          {/* Additional Sacred Geometry */}
          <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="1" fill="none" className="text-[var(--ethereal-pink)]" />
          <circle cx="650" cy="450" r="60" stroke="currentColor" strokeWidth="1" fill="none" className="text-[var(--mystical-purple)]" />
        </svg>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 floating-animation">
          <Star className="w-4 h-4 text-[var(--spiritual-gold)] opacity-50" />
        </div>
        <div className="absolute top-3/4 right-1/4 floating-animation" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-5 h-5 text-[var(--ethereal-pink)] opacity-50" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 floating-animation" style={{ animationDelay: '4s' }}>
          <Heart className="w-3 h-3 text-[var(--mystical-purple)] opacity-50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 spiritual-text-shadow">
            Ready to Begin Your 
            <span className="text-[var(--spiritual-gold)]"> Sacred Transformation?</span>
          </h2>
          <p className="text-xl text-[var(--moonstone)] max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the path that resonates with your soul's calling
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[var(--spiritual-gold)] via-[var(--ethereal-pink)] to-[var(--mystical-purple)] mx-auto rounded-full"></div>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="ethereal-card p-8 text-center relative group hover:scale-105 transition-all duration-500"
            >
              {/* Sacred Element Decoration */}
              <div className="absolute top-4 right-4 opacity-30">
                <div 
                  className="w-6 h-6 rounded-full border animate-pulse"
                  style={{ borderColor: item.color }}
                ></div>
              </div>

              {/* Icon */}
              <div className="mb-8">
                <div 
                  className="w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center ethereal-glow floating-animation"
                  style={{ 
                    borderColor: item.color,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <item.icon className="w-10 h-10" style={{ color: item.color }} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: item.color }}>
                {item.title}
              </h3>
              
              <p className="text-lg leading-relaxed mb-8 text-[var(--moonstone)]">
                {item.description}
              </p>

              {/* Button */}
              <Link
                href={item.href}
                className="mystical-button px-8 py-4 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <Star className="w-5 h-5" />
                {item.buttonText}
              </Link>

              {/* Sacred Geometry Decoration */}
              <div className="absolute bottom-4 left-4 opacity-20">
                {item.element === 'fire' && (
                  <div className="w-6 h-6 border border-[var(--spiritual-gold)] rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
                )}
                {item.element === 'water' && (
                  <div className="w-6 h-6 border border-[var(--ethereal-pink)] rounded-full animate-pulse"></div>
                )}
                {item.element === 'air' && (
                  <div className="w-6 h-6 border border-[var(--mystical-purple)] animate-bounce" style={{ animationDuration: '3s' }}></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Sacred Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="ethereal-card p-8 max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-[var(--spiritual-gold)] mx-auto mb-6 floating-animation" />
            <p className="text-xl leading-relaxed italic">
              "Your soul has been waiting for this moment. Trust the calling that brought you here."
            </p>
            <div className="w-24 h-0.5 bg-[var(--spiritual-gold)] mx-auto mt-6"></div>
            <p className="text-lg text-[var(--spiritual-gold)] mt-4 font-semibold">
              ~ Nadia Elmagrabi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
