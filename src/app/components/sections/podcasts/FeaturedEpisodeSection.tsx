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
    <section className="py-20 bg-cream/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-4">
            Featured Episode
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="nature-gradient rounded-2xl overflow-hidden divine-shadow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-cream/30 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-sm font-medium sacred-text mr-3">
                  {featuredPodcast.category}
                </span>
                <span className="text-cream/80 body-text text-sm">{featuredPodcast.date}</span>
              </div>
              <h3 className="text-3xl font-bold sacred-text text-cream mb-4">{featuredPodcast.title}</h3>
              <p className="text-cream/80 body-text text-lg mb-6 leading-relaxed">
                {featuredPodcast.description}
              </p>
              <div className="flex items-center mb-6">
                <Clock className="w-5 h-5 text-cream/70 mr-2" />
                <span className="text-cream/80 body-text">{featuredPodcast.duration}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredPodcast.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cream text-forest px-6 py-3 rounded-lg font-semibold sacred-text hover:bg-cream/90 hover:text-earth transition-all duration-300 flex items-center divine-shadow"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Listen on Spotify
                </a>
                <a
                  href={featuredPodcast.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-cream text-cream px-6 py-3 rounded-lg font-semibold sacred-text hover:bg-cream hover:text-forest transition-all duration-300"
                >
                  Apple Podcasts
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={featuredPodcast.image}
                alt={featuredPodcast.title}
                className="w-full h-64 lg:h-full object-cover rounded-xl mystical-border"
              />
              <div className="absolute inset-0 bg-earth/20 rounded-xl flex items-center justify-center">
                <button className="w-16 h-16 bg-cream/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cream transition-all duration-300 divine-shadow">
                  <Play className="w-8 h-8 text-forest ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
