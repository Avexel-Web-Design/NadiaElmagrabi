'use client'
import { motion } from 'framer-motion'
import { StarIcon, HeartIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      review: "Nadia's reading was incredibly accurate and insightful. She helped me understand patterns in my life that I couldn't see before. Her compassionate guidance gave me the clarity I needed to make important decisions.",
      service: "Tarot Reading",
      location: "San Francisco, CA"
    },
    {
      name: "Michael R.",
      rating: 5,
      review: "Working with Nadia has been transformational. Her spiritual guidance helped me through a difficult period in my life. She has a gift for seeing what others cannot and communicating it with such warmth and understanding.",
      service: "Spiritual Counseling",
      location: "Austin, TX"
    },
    {
      name: "Emma L.",
      rating: 5,
      review: "I was skeptical at first, but Nadia's energy healing session was profound. I felt a shift immediately and the positive changes have continued weeks later. She creates such a safe and sacred space.",
      service: "Energy Healing",
      location: "Portland, OR"
    },
    {
      name: "David K.",
      rating: 5,
      review: "Nadia's astrology reading revealed so much about my life purpose and relationships. Her interpretations were spot-on and delivered with such care. I left feeling empowered and with a clear direction forward.",
      service: "Astrology Reading",
      location: "Denver, CO"
    },
    {
      name: "Lisa H.",
      rating: 5,
      review: "The meditation and mindfulness techniques Nadia taught me have become essential parts of my daily routine. She has a wonderful way of making ancient wisdom accessible and practical for modern life.",
      service: "Meditation Coaching",
      location: "Seattle, WA"
    },
    {
      name: "James T.",
      rating: 5,
      review: "Nadia helped me reconnect with my spiritual path when I felt completely lost. Her guidance was gentle yet powerful, and she helped me find my way back to my authentic self. Truly grateful for her wisdom.",
      service: "Spiritual Guidance",
      location: "Phoenix, AZ"
    }
  ]
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HeartIcon className="h-8 w-8 text-purple-600 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              Client Experiences
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            Hear from those who have experienced transformation through our work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500 serif-body">
                  {review.service}
                </span>
              </div>
              
              <div className="mb-4">
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-purple-400 mb-2" />
                <p className="text-gray-700 leading-relaxed serif-body italic">
                  "{review.review}"
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-800 serif-heading">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500 serif-body">
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <HeartIcon className="h-6 w-6 text-red-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 serif-heading">
                Your Journey Awaits
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed serif-body mb-6">
              Every person's spiritual journey is unique. These experiences reflect the deep 
              transformations possible when we open ourselves to guidance and healing. 
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 serif-body"
            >
              Begin Your Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
