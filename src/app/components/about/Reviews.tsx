'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { StarIcon, HeartIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'
import { useDelayedAnimation, useStaggeredAnimation } from '../../hooks/useStaggeredAnimation'

export default function Reviews() {
  const isLoaded = useDelayedAnimation(100) // Start animations 100ms after component mounts
  const reviews = [
    {
      name: "Gabriela M.",
      rating: 5,
      review: "Working with Nadia has been a wonderful experience for my past life regression therapy. She has a way of delivering the message in a loving and empathetic way to help me navigate past trauma. She brought clarity and perspective while trying to reconcile my current and past life experiences. While the regression session was emotional, the experience with her was reassuring and calming as she created a safe space to manifest and let go! I would do it again!",
    },    {
      name: "Julia B.",
      rating: 5,
      review: "Before working with Nadia, I had been exploring my lineage to help me understand my inner pain. I wanted to go deeper, so I reached out for a past life regression. The experience was very emotional. What I learned gave me an understanding of my soul's emotional state when I came into this life. I understand my depression and from where it stems. The regression with Nadia was a big piece of the puzzle for me, for which I am truly grateful.",
    },
    {
      name: "Sarah",
      rating: 5,
      review: "Before working with Nadia, I felt stuck—like something deeper needed to be uncovered. Our past life regression session was a breakthrough. The emotional release was powerful, and I finally understood what had been holding me back. Since then, my relationships have shifted, and I’ve been able to heal wounds I didn’t even know I was carrying. Combining Human Design and Akashic Records brought even more clarity. I’m so grateful for Nadia’s wisdom and the beautiful modalities she shares.",
    },
    {
      name: "Cherie L.",
      rating: 5,
      review: "I deeply enjoyed my regression with Nadia. It helped me understand and begin releasing trauma and fears I’ve carried in this lifetime. Her professionalism and wisdom are exceptional—she creates a powerful space for healing and insight.",
    },
    {
      name: "Ali L.",
      rating: 5,
      review: "Working with Nadia feels like lying under your favorite tree, safe and at peace. Her calming presence helped ease my nerves during my first Past Life Regression, and what I discovered—especially seeing myself as a young girl—deepened my understanding of self-love. Her sessions are a powerful tool for healing and self-discovery.",
    },
    {
      name: "Jess G.",
      rating: 5,
      review: "My past life regression with Nadia was a very powerful and enlightening experience. During my session I gained insight into fears and behaviors I have. It was a relief to understand my experiences and my fears. Since meeting with Nadia I have been able to release those fears and have felt more at peace with my place in life.",
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
    <section id="reviews" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              Client Experiences
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            Hear from those who have experienced transformation through our work together
          </p>
        </motion.div>        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => {
            const ReviewCard = ({ review, index }: { review: any, index: number }) => {
              const isVisible = useStaggeredAnimation(400 + index * 100) // Start 400ms after component, stagger by 100ms
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {renderStars(review.rating)}
                    </div>
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
                    </div>
                  </div>
                </motion.div>
              )
            }
            
            return <ReviewCard key={index} review={review} index={index} />
          })}
        </motion.div>        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 serif-heading">
                Your Journey Awaits
              </h3>
            </div>            <p className="text-gray-600 leading-relaxed serif-body mb-6">
              Every person's spiritual journey is unique. These experiences reflect the deep 
              transformations possible when we open ourselves to guidance and healing. 
            </p>
            <Link href="/#services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 serif-body"
              >
                Begin Your Transformation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
