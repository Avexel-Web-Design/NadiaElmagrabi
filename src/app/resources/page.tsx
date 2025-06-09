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

const freeResources = [
  {
    title: "Daily Spiritual Practice Checklist",
    description: "A simple checklist to help you maintain consistent spiritual practices",
    type: "PDF"
  },
  {
    title: "Chakra Balancing Quick Guide",
    description: "Essential information about the seven chakras and balancing techniques",
    type: "PDF"
  },
  {
    title: "Manifestation Journal Template",
    description: "A structured journal template for conscious manifestation practice",
    type: "PDF"
  },
  {
    title: "Energy Protection Techniques",
    description: "Practical methods to protect and cleanse your energy field",
    type: "PDF"
  }
];

export default function ResourcesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Spiritual <span className="text-pink-300">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Discover transformational tools, guides, and teachings to support your spiritual journey and personal growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Featured Digital Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                      {resource.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {resource.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={resource.link}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                      resource.price === 'Free'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
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

      {/* Free Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Free Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your spiritual journey with these complimentary tools and guides
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 text-green-600 mr-3" />
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                    {resource.type}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                  Download Free
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to receive new resources, spiritual insights, and exclusive content delivered to your inbox
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready for Personalized Guidance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              While resources are powerful, nothing replaces the transformational impact of personalized spiritual guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/nadiaelmagrabi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Book a Session
              </a>
              <a
                href="/embody-your-souls-purpose"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
