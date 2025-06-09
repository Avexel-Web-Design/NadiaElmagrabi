'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function PodcastSubscribeSection() {
  return (
    <section className="py-16 bg-sage/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold sacred-text text-forest mb-6">
            Subscribe & Never Miss an Episode
          </h2>
          <p className="text-xl body-text text-earth/80 mb-8">
            Get the latest episodes delivered to your favorite podcast platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://open.spotify.com/show/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-cream px-6 py-3 rounded-lg font-semibold sacred-text hover:bg-earth hover:text-cream/90 transition-all duration-300 flex items-center divine-shadow"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/podcast/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-earth text-cream px-6 py-3 rounded-lg font-semibold sacred-text hover:bg-clay hover:text-cream/90 transition-all duration-300 flex items-center divine-shadow"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Apple Podcasts
            </a>
            <a
              href="https://podcasts.google.com/feed/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ocean text-cream px-6 py-3 rounded-lg font-semibold sacred-text hover:bg-sky hover:text-cream/90 transition-all duration-300 flex items-center divine-shadow"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Google Podcasts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
