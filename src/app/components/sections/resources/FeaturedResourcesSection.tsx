'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, Headphones, Video, Star, ExternalLink } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Shadow Work Integration Guide",
    description: "A comprehensive 25-page PDF guide to understanding and integrating your shadow aspects for profound healing and wholeness.",
    type: "PDF Guide",
    price: "Free",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Understanding shadow work fundamentals",
      "Practical exercises and journaling prompts",
      "Integration techniques for daily life",
      "Common shadow patterns and triggers"
    ],
    link: "/shadow-work-pdf",
    icon: BookOpen
  },
  {
    id: 2,
    title: "Past Life Regression eBook",
    description: "Discover how past life memories can unlock current life patterns and accelerate your spiritual growth and healing journey.",
    type: "Digital eBook",
    price: "$27",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Complete PLR methodology",
      "Self-guided regression techniques",
      "Case studies and examples",
      "Integration and healing practices"
    ],
    link: "/plr-session-ebook",
    icon: BookOpen
  },
  {
    id: 3,
    title: "Guided Meditation Series",
    description: "A collection of transformational guided meditations designed to help you connect with your higher self and inner wisdom.",
    type: "Audio Series",
    price: "$47",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "12 guided meditation recordings",
      "Chakra balancing and energy clearing",
      "Past life exploration meditations",
      "Daily spiritual practice routines"
    ],
    link: "https://gumroad.com/nadiaelmagrabi",
    icon: Headphones
  },
  {
    id: 4,
    title: "Soul Purpose Activation Workshop",
    description: "A powerful 2-hour recorded workshop to help you identify and embody your soul's deepest calling and life purpose.",
    type: "Video Workshop",
    price: "$97",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "2+ hours of transformational content",
      "Soul purpose identification exercises",
      "Energy activation techniques",
      "Lifetime access and updates"
    ],
    link: "https://gumroad.com/nadiaelmagrabi",
    icon: Video
  }
];

export default function FeaturedResourcesSection() {
  return (
    <section className="py-20 bg-cream/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Featured Digital Products
          </h2>
          <p className="text-xl body-text text-earth/80 max-w-3xl mx-auto">
            Carefully crafted resources to accelerate your spiritual growth and transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream/80 backdrop-blur-sm rounded-2xl divine-shadow overflow-hidden hover:divine-shadow mystical-border transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-forest text-cream px-3 py-1 rounded-full text-sm font-medium sacred-text">
                    {resource.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-cream text-forest px-3 py-1 rounded-full text-sm font-bold sacred-text">
                    {resource.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <resource.icon className="w-6 h-6 text-forest mr-3" />
                  <h3 className="text-xl font-bold sacred-text text-forest">{resource.title}</h3>
                </div>

                <p className="body-text text-earth/80 mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold sacred-text text-earth mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {resource.features.map((feature, i) => (
                      <li key={i} className="flex items-center body-text text-earth/80">
                        <Star className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={resource.link}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold sacred-text transition-all duration-300 divine-shadow ${
                    resource.price === 'Free'
                      ? 'bg-forest hover:bg-earth text-cream'
                      : 'bg-earth hover:bg-clay text-cream'
                  }`}
                >
                  {resource.price === 'Free' ? (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Free
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Get Access - {resource.price}
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
