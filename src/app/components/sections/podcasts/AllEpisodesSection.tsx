'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Share } from 'lucide-react';

const podcasts = [
  {
    id: 2,
    title: "Shadow Work: Embracing Your Hidden Self",
    description: "An in-depth exploration of shadow work - what it is, why it's essential for healing, and practical steps to begin integrating your shadow aspects.",
    duration: "45 min",
    date: "Dec 8, 2023",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Shadow Work",
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
    spotify: "https://open.spotify.com/episode/example6",
    apple: "https://podcasts.apple.com/episode/example6"
  }
];

const categories = ["All", "Soul Purpose", "Shadow Work", "Past Lives", "Intuition", "Energy Work", "Healing"];

export default function AllEpisodesSection() {
  return (
    <section className="py-20 bg-sage/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            All Episodes
          </h2>
          <p className="text-xl body-text text-earth/80">
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
              className="px-6 py-2 rounded-full bg-cream/80 body-text text-earth hover:bg-sage hover:text-cream transition-all duration-300 border border-sage/30 mystical-border"
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream/80 backdrop-blur-sm rounded-xl divine-shadow hover:divine-shadow mystical-border transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-forest text-cream px-3 py-1 rounded-full text-sm font-medium sacred-text">
                    {podcast.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-earth/0 hover:bg-earth/20 transition-all duration-300 flex items-center justify-center">
                  <button className="w-12 h-12 bg-cream/0 hover:bg-cream/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300">
                    <Play className="w-6 h-6 text-forest" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-earth/70 body-text text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {podcast.date}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {podcast.duration}
                </div>

                <h3 className="text-xl font-bold sacred-text text-forest mb-3 line-clamp-2">
                  {podcast.title}
                </h3>

                <p className="body-text text-earth/80 mb-4 line-clamp-3">
                  {podcast.description}
                </p>

                <div className="flex gap-2">
                  <a
                    href={podcast.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-forest text-cream py-2 px-4 rounded-lg font-medium sacred-text hover:bg-earth hover:text-cream/90 transition-all duration-300 text-center divine-shadow"
                  >
                    Listen
                  </a>
                  <button className="p-2 text-earth/70 hover:text-forest transition-colors duration-300">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
