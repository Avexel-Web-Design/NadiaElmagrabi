'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Clock, ExternalLink, Headphones, Download, Share } from 'lucide-react';

const podcasts = [
  {
    id: 1,
    title: "Awakening to Your Soul's Purpose",
    description: "Discover the signs that your soul is calling you to step into your authentic purpose and how to answer that call with courage and clarity.",
    duration: "32 min",
    date: "Dec 15, 2023",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Soul Purpose",
    featured: true,
    spotify: "https://open.spotify.com/episode/example1",
    apple: "https://podcasts.apple.com/episode/example1"
  },
  {
    id: 2,
    title: "Shadow Work: Embracing Your Hidden Self",
    description: "An in-depth exploration of shadow work - what it is, why it's essential for healing, and practical steps to begin integrating your shadow aspects.",
    duration: "45 min",
    date: "Dec 8, 2023",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Shadow Work",
    featured: false,
    spotify: "https://open.spotify.com/episode/example2",
    apple: "https://podcasts.apple.com/episode/example2"
  },
  {
    id: 3,
    title: "Past Life Memories and Present Healing",
    description: "How past life experiences influence your current relationships, patterns, and soul lessons - plus a guided meditation for past life exploration.",
    duration: "38 min",
    date: "Dec 1, 2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Past Lives",
    featured: false,
    spotify: "https://open.spotify.com/episode/example3",
    apple: "https://podcasts.apple.com/episode/example3"
  },
  {
    id: 4,
    title: "Intuitive Development for Beginners",
    description: "Simple yet powerful practices to develop your intuitive abilities and learn to trust the wisdom of your inner guidance system.",
    duration: "29 min",
    date: "Nov 24, 2023",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Intuition",
    featured: false,
    spotify: "https://open.spotify.com/episode/example4",
    apple: "https://podcasts.apple.com/episode/example4"
  },
  {
    id: 5,
    title: "Energy Protection and Cleansing",
    description: "Essential techniques for protecting your energy field, clearing negative influences, and maintaining energetic boundaries in daily life.",
    duration: "26 min",
    date: "Nov 17, 2023",
    image: "https://images.unsplash.com/photo-1552160793-5d0c06b7bccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Energy Work",
    featured: false,
    spotify: "https://open.spotify.com/episode/example5",
    apple: "https://podcasts.apple.com/episode/example5"
  },
  {
    id: 6,
    title: "Healing Generational Patterns",
    description: "Understanding how ancestral trauma and patterns influence your life, and powerful practices for healing across generations.",
    duration: "41 min",
    date: "Nov 10, 2023",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Healing",
    featured: false,
    spotify: "https://open.spotify.com/episode/example6",
    apple: "https://podcasts.apple.com/episode/example6"
  }
];

const categories = ["All", "Soul Purpose", "Shadow Work", "Past Lives", "Intuition", "Energy Work", "Healing"];

export default function PodcastsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-12 h-12 text-pink-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Soul Awakening <span className="text-pink-300">Podcast</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Weekly episodes exploring spiritual awakening, healing, and conscious living for the modern soul seeker
            </p>
          </motion.div>
        </div>
      </section>

      {/* Podcast Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Episodes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Downloads</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Weekly</div>
              <div className="text-gray-600 font-medium">New Episodes</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
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

      {/* Featured Episode */}
      {podcasts.filter(p => p.featured).map((podcast, index) => (
        <section key={podcast.id} className="py-20 bg-white">
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
                      {podcast.category}
                    </span>
                    <span className="text-purple-100 text-sm">{podcast.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{podcast.title}</h3>
                  <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                    {podcast.description}
                  </p>
                  <div className="flex items-center mb-6">
                    <Clock className="w-5 h-5 text-purple-200 mr-2" />
                    <span className="text-purple-100">{podcast.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={podcast.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Listen on Spotify
                    </a>
                    <a
                      href={podcast.apple}
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
                    src={podcast.image}
                    alt={podcast.title}
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
      ))}

      {/* All Episodes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              All Episodes
            </h2>
            <p className="text-xl text-gray-600">
              Explore the complete collection of transformational conversations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-6 py-2 rounded-full bg-white text-gray-600 hover:bg-purple-600 hover:text-white transition-colors duration-300 border border-gray-200"
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.filter(p => !p.featured).map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {podcast.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="w-12 h-12 bg-white bg-opacity-0 hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300">
                      <Play className="w-6 h-6 text-purple-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {podcast.date}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {podcast.duration}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {podcast.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {podcast.description}
                  </p>

                  <div className="flex gap-2">
                    <a
                      href={podcast.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 text-center"
                    >
                      Listen
                    </a>
                    <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-300">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Notified of New Episodes
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter for episode updates, exclusive content, and spiritual insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
