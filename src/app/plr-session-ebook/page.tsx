'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star, Clock, Users, Check, Play, Download, CreditCard, Shield } from 'lucide-react';

const features = [
  "Complete PLR methodology and theory",
  "Step-by-step self-guided regression techniques",
  "10+ real case studies and examples",
  "Integration and healing practices",
  "Safety protocols and preparation",
  "3 guided meditation audio recordings",
  "Lifetime access and future updates",
  "Mobile-friendly PDF format"
];

const testimonials = [
  {
    name: "Lisa Chen",
    text: "This eBook completely changed my understanding of my current life patterns. The PLR session I did using these techniques revealed past life trauma that explained so much about my fears. Truly transformational!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Martinez",
    text: "As someone who was skeptical about past lives, this book provided a scientific and practical approach that made me a believer. The techniques work and the results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Amanda Foster",
    text: "The case studies were incredibly helpful in understanding how past life patterns show up in current relationships. I've been able to heal patterns that therapy alone couldn't touch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const chapters = [
  {
    number: "01",
    title: "Understanding Past Life Regression",
    description: "The science, spirituality, and methodology behind PLR work"
  },
  {
    number: "02", 
    title: "Preparation and Safety",
    description: "Essential preparation techniques and safety protocols"
  },
  {
    number: "03",
    title: "Self-Guided PLR Techniques",
    description: "Step-by-step methods for accessing past life memories"
  },
  {
    number: "04",
    title: "Interpreting Your Experiences",
    description: "How to understand and validate your past life insights"
  },
  {
    number: "05",
    title: "Healing and Integration",
    description: "Practical methods for healing past life trauma and patterns"
  },
  {
    number: "06",
    title: "Case Studies",
    description: "Real examples of past life patterns and their resolution"
  },
  {
    number: "07",
    title: "Advanced Techniques",
    description: "Deeper methods for experienced practitioners"
  },
  {
    number: "08",
    title: "Living Your Soul's Purpose",
    description: "How past life awareness guides your current life path"
  }
];

export default function PLRSessionEBookPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-12 h-12 text-pink-300 mr-4" />
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  DIGITAL EBOOK
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Past Life Regression Mastery
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Unlock the mysteries of your soul's journey with this comprehensive guide to self-guided past life regression and healing.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>120-Page eBook</span>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  <span>3 Audio Guides</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>2,000+ Readers</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">$27</span>
                <span className="text-lg text-purple-200 line-through">$47</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Limited Time
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="PLR eBook Cover"
                    className="w-48 h-64 object-cover rounded-lg mx-auto mb-4 shadow-lg"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Instant Access</h3>
                  <p className="text-gray-600">Download immediately after purchase</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">120-Page eBook</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">3 Guided Meditations</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Lifetime Access</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600">Mobile Compatible</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                <a
                  href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center text-lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Get Instant Access - $27
                </a>

                <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    Instant Download
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to safely explore your past lives and heal current life patterns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="bg-purple-100 rounded-full p-2 mr-4">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Complete Chapter Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to understanding and practicing past life regression
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-purple-600 mb-3">{chapter.number}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{chapter.title}</h3>
                <p className="text-gray-600 text-sm">{chapter.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Reader Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how past life regression has transformed lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Content */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exclusive Bonus Content
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Get these valuable bonuses when you purchase today
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <Play className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Guided PLR Meditation</h3>
                <p className="text-purple-100">30-minute guided session to access your most relevant past life</p>
                <div className="text-sm text-purple-200 mt-2">Value: $25</div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <BookOpen className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Integration Workbook</h3>
                <p className="text-purple-100">25-page workbook with exercises and journaling prompts</p>
                <div className="text-sm text-purple-200 mt-2">Value: $15</div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <Clock className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Lifetime Updates</h3>
                <p className="text-purple-100">Get all future editions and bonus content at no extra cost</p>
                <div className="text-sm text-purple-200 mt-2">Value: Priceless</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="text-2xl font-bold mb-2">Total Value: $67</div>
              <div className="text-lg mb-6">Your Price: Only $27</div>
              <a
                href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Get Complete Package - $27
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "Is past life regression safe to do alone?",
                answer: "Yes, when done with proper preparation and the techniques outlined in this book. I provide comprehensive safety protocols and guidelines for self-guided practice."
              },
              {
                question: "What if I don't believe in past lives?",
                answer: "This book approaches PLR from both spiritual and psychological perspectives. Even if viewed as symbolic or metaphorical, the healing insights gained are profound and practical."
              },
              {
                question: "How long does it take to see results?",
                answer: "Many readers report insights from their first session. However, deeper healing and pattern transformation typically unfold over several sessions and ongoing integration work."
              },
              {
                question: "Do I need any special equipment or experience?",
                answer: "No special equipment is needed. The book is designed for complete beginners, though experienced practitioners will also find advanced techniques valuable."
              },
              {
                question: "What format is the eBook available in?",
                answer: "The eBook is delivered as a high-quality PDF that works on all devices - computer, tablet, and smartphone. Audio files are provided as MP3 downloads."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Begin Your Soul's Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let another day pass wondering about your soul's deeper story. Download your guide and start exploring the wisdom of your past lives.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-800 mb-2">$27</div>
                <div className="text-gray-600">One-time purchase • Lifetime access</div>
              </div>
              
              <a
                href="https://gumroad.com/nadiaelmagrabi/plr-ebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center text-lg mb-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </a>
              
              <p className="text-sm text-gray-500">
                30-day money-back guarantee • Secure payment via Gumroad
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
