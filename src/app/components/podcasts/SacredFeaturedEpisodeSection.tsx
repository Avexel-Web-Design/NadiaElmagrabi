'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Clock, ExternalLink, Star, Sparkles } from 'lucide-react';

const featuredEpisode = {
  id: 1,
  title: "Awakening to Your Soul's Purpose",
  description: "Discover the sacred signs that your soul is calling you to step into your authentic divine purpose and how to answer that mystical call with courage, clarity, and unwavering faith in your spiritual journey.",
  duration: "32 min",
  date: "Dec 15, 2023",
  image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  category: "Soul Purpose",
  spotify: "https://open.spotify.com/episode/example1",
  apple: "https://podcasts.apple.com/episode/example1"
};

export default function SacredFeaturedEpisodeSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 cosmic-background opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mystical-purple mb-6 font-cinzel">
            Sacred Featured Episode
          </h2>
          <p className="text-xl text-cosmic-blue max-w-3xl mx-auto font-cormorant">
            Dive deep into this transformational conversation that's touching souls worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Floating Sacred Elements */}
          <div className="absolute -top-6 -left-6 text-spiritual-gold opacity-40">
            <Star className="w-8 h-8 animate-float" />
          </div>
          <div className="absolute -bottom-4 -right-4 text-ethereal-pink opacity-40">
            <Sparkles className="w-6 h-6 animate-float-delayed" />
          </div>

          <div className="sacred-card p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Episode Content */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <span className="bg-gradient-to-r from-spiritual-gold to-ethereal-pink 
                                   text-white px-4 py-2 rounded-full text-sm font-medium font-cinzel">
                      {featuredEpisode.category}
                    </span>
                    <div className="ml-4 text-cosmic-blue/70 text-sm font-cormorant flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredEpisode.date}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {featuredEpisode.duration}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-mystical-purple mb-6 font-cinzel leading-tight">
                    {featuredEpisode.title}
                  </h3>

                  <p className="text-lg text-cosmic-blue mb-8 leading-relaxed font-cormorant">
                    {featuredEpisode.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={featuredEpisode.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mystical-button px-8 py-4 rounded-lg font-semibold flex items-center justify-center group"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-cinzel">Listen on Spotify</span>
                    </motion.a>
                    
                    <motion.a
                      href={featuredEpisode.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-mystical-purple border-2 border-mystical-purple px-8 py-4 
                               rounded-lg font-semibold hover:bg-mystical-purple hover:text-white 
                               transition-all duration-300 flex items-center justify-center group"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-cinzel">Apple Podcasts</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Episode Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative group">
                  <img
                    src={featuredEpisode.image}
                    alt={featuredEpisode.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-2xl 
                             group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Sacred Play Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/20 to-cosmic-blue/20 
                                rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center 
                               shadow-2xl group-hover:shadow-spiritual-gold/50 transition-all duration-300"
                    >
                      <Play className="w-10 h-10 text-mystical-purple ml-1" />
                    </motion.button>
                  </div>
                  
                  {/* Sacred Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-spiritual-gold via-ethereal-pink to-mystical-purple 
                                rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10 blur-lg"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
