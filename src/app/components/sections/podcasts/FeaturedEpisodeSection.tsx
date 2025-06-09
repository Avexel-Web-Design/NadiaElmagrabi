'use client';

import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

const featuredPodcast = {
  id: 1,
  title: "Awakening to Your Soul's Purpose",
  description: "Discover the signs that your soul is calling you to step into your authentic purpose and how to answer that call with courage and clarity.",
  duration: "32 min",
  date: "Dec 15, 2023",
  image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  category: "Soul Purpose",
  spotify: "https://open.spotify.com/episode/example1",
  apple: "https://podcasts.apple.com/episode/example1"
};

export default function FeaturedEpisodeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Episode
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {featuredPodcast.category}
                </span>
                <span className="text-purple-100 text-sm">{featuredPodcast.date}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{featuredPodcast.title}</h3>
              <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                {featuredPodcast.description}
              </p>
              <div className="flex items-center mb-6">
                <Clock className="w-5 h-5 text-purple-200 mr-2" />
                <span className="text-purple-100">{featuredPodcast.duration}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredPodcast.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Listen on Spotify
                </a>
                <a
                  href={featuredPodcast.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
                >
                  Apple Podcasts
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={featuredPodcast.image}
                alt={featuredPodcast.title}
                className="w-full h-64 lg:h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300">
                  <Play className="w-8 h-8 text-purple-600 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
