'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Share, Star, Sparkles, Heart, Moon } from 'lucide-react';
import { useState } from 'react';

const sacredEpisodes = [
  {
    id: 2,
    title: "Shadow Work: Embracing Your Hidden Sacred Self",
    description: "An in-depth divine exploration of shadow work - what it is, why it's essential for soul healing, and practical sacred steps to begin integrating your shadow aspects with love.",
    duration: "45 min",
    date: "Dec 8, 2023",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Shadow Work",
    element: "water",
    spotify: "https://open.spotify.com/episode/example2",
    apple: "https://podcasts.apple.com/episode/example2"
  },
  {
    id: 3,
    title: "Past Life Memories and Sacred Present Healing",
    description: "How past life experiences influence your current relationships, divine patterns, and soul lessons - plus a guided meditation for sacred past life exploration.",
    duration: "38 min",
    date: "Dec 1, 2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Past Lives",
    element: "earth",
    spotify: "https://open.spotify.com/episode/example3",
    apple: "https://podcasts.apple.com/episode/example3"
  },
  {
    id: 4,
    title: "Divine Intuitive Development for Sacred Beginners",
    description: "Simple yet powerful sacred practices to develop your intuitive abilities and learn to trust the divine wisdom of your inner guidance system.",
    duration: "29 min",
    date: "Nov 24, 2023",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Intuition",
    element: "air",
    spotify: "https://open.spotify.com/episode/example4",
    apple: "https://podcasts.apple.com/episode/example4"
  },
  {
    id: 5,
    title: "Sacred Energy Protection and Divine Cleansing",
    description: "Essential spiritual techniques for protecting your sacred energy field, clearing negative influences, and maintaining divine energetic boundaries in daily life.",
    duration: "26 min",
    date: "Nov 17, 2023",
    image: "https://images.unsplash.com/photo-1552160793-5d0c06b7bccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Energy Work",
    element: "fire",
    spotify: "https://open.spotify.com/episode/example5",
    apple: "https://podcasts.apple.com/episode/example5"
  },
  {
    id: 6,
    title: "Healing Sacred Generational Patterns",
    description: "Understanding how ancestral trauma and sacred patterns influence your divine life, and powerful practices for healing across generations with love and light.",
    duration: "41 min",
    date: "Nov 10, 2023",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Healing",
    element: "earth",
    spotify: "https://open.spotify.com/episode/example6",
    apple: "https://podcasts.apple.com/episode/example6"
  }
];

const sacredCategories = [
  { name: "All Sacred Episodes", value: "All", icon: Star, element: "spirit" },
  { name: "Soul Purpose", value: "Soul Purpose", icon: Heart, element: "fire" },
  { name: "Shadow Work", value: "Shadow Work", icon: Moon, element: "water" },
  { name: "Past Lives", value: "Past Lives", icon: Star, element: "earth" },
  { name: "Intuition", value: "Intuition", icon: Sparkles, element: "air" },
  { name: "Energy Work", value: "Energy Work", icon: Star, element: "fire" },
  { name: "Healing", value: "Healing", icon: Heart, element: "earth" }
];

const elementColors = {
  earth: { 
    bg: "from-green-500/20 to-emerald-600/20", 
    border: "border-emerald-500/30",
    text: "text-emerald-600",
    hover: "hover:bg-emerald-600"
  },
  air: { 
    bg: "from-blue-500/20 to-cyan-600/20", 
    border: "border-cyan-500/30",
    text: "text-cyan-600", 
    hover: "hover:bg-cyan-600"
  },
  fire: { 
    bg: "from-red-500/20 to-orange-600/20", 
    border: "border-orange-500/30",
    text: "text-orange-600",
    hover: "hover:bg-orange-600"
  },
  water: { 
    bg: "from-purple-500/20 to-pink-600/20", 
    border: "border-pink-500/30",
    text: "text-pink-600",
    hover: "hover:bg-pink-600"
  },
  spirit: {
    bg: "from-spiritual-gold/20 to-ethereal-pink/20",
    border: "border-spiritual-gold/30", 
    text: "text-spiritual-gold",
    hover: "hover:bg-spiritual-gold"
  }
};

export default function SacredEpisodesGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEpisodes = selectedCategory === "All" 
    ? sacredEpisodes 
    : sacredEpisodes.filter(episode => episode.category === selectedCategory);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-ethereal-pink/5 to-cosmic-blue/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mystical-purple mb-6 font-cinzel">
            All Sacred Episodes
          </h2>
          <p className="text-xl text-cosmic-blue max-w-3xl mx-auto font-cormorant">
            Explore the complete collection of divine transformational conversations for your soul's journey
          </p>
        </motion.div>

        {/* Sacred Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sacredCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = elementColors[category.element as keyof typeof elementColors];
            const isActive = selectedCategory === category.value;
            
            return (
              <motion.button
                key={category.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 
                          flex items-center group font-cinzel relative overflow-hidden
                          ${isActive 
                            ? `bg-gradient-to-r ${colors.bg} ${colors.border} border-2 ${colors.text}` 
                            : `bg-white text-cosmic-blue border-2 border-cosmic-blue/20 ${colors.hover} hover:text-white`
                          }`}
              >
                <Icon className={`w-4 h-4 mr-2 ${isActive ? colors.text : 'text-cosmic-blue group-hover:text-white'}`} />
                {category.name}
                {isActive && (
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-3 h-3 text-spiritual-gold animate-float" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Sacred Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((episode, index) => {
            const colors = elementColors[episode.element as keyof typeof elementColors];
            
            return (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="sacred-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Sacred Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${colors.bg} backdrop-blur-sm ${colors.text} 
                                   px-3 py-1 rounded-full text-sm font-medium font-cinzel border ${colors.border}`}>
                      {episode.category}
                    </span>
                  </div>
                  
                  {/* Sacred Play Button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 
                                flex items-center justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/0 group-hover:bg-white/90 backdrop-blur-sm rounded-full 
                               flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      <Play className="w-6 h-6 text-mystical-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </div>
                  
                  {/* Floating Sacred Element */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-5 h-5 text-spiritual-gold animate-float" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-cosmic-blue/70 text-sm mb-4 font-cormorant">
                    <Calendar className="w-4 h-4 mr-2" />
                    {episode.date}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {episode.duration}
                  </div>

                  <h3 className="text-xl font-bold text-mystical-purple mb-3 line-clamp-2 font-cinzel 
                               group-hover:text-spiritual-gold transition-colors duration-300">
                    {episode.title}
                  </h3>

                  <p className="text-cosmic-blue mb-6 line-clamp-3 font-cormorant leading-relaxed">
                    {episode.description}
                  </p>

                  <div className="flex gap-2">
                    <motion.a
                      href={episode.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 mystical-button py-2 px-4 rounded-lg font-medium text-center font-cinzel"
                    >
                      Sacred Listen
                    </motion.a>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-cosmic-blue hover:text-spiritual-gold transition-colors duration-300"
                    >
                      <Share className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sacred Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-spiritual-gold/10 to-ethereal-pink/10 
                        rounded-full border border-spiritual-gold/20">
            <Heart className="w-5 h-5 text-ethereal-pink mr-3" />
            <span className="text-cosmic-blue font-cormorant italic text-lg">
              May each episode illuminate your path to divine awakening
            </span>
            <Heart className="w-5 h-5 text-ethereal-pink ml-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
