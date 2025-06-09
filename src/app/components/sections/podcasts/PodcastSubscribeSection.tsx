'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function PodcastSubscribeSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Subscribe & Never Miss an Episode
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest episodes delivered to your favorite podcast platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://open.spotify.com/show/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/podcast/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Apple Podcasts
            </a>
            <a
              href="https://podcasts.google.com/feed/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
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
