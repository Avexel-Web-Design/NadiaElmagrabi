'use client'
import { motion } from 'framer-motion'
import { StarIcon, EyeIcon, GiftIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Human Design Readings",
      subtitle: "3 Comprehensive Sessions",
      icon: <StarIcon className="h-8 w-8" />,
      price: "Transform Your Life",
      description: "Dive deep into your energetic blueprint with three detailed Human Design sessions that will revolutionize how you understand yourself.",
      features: [
        "Complete Human Design Chart Analysis",
        "Your Energy Type & Strategy",
        "Authority & Decision Making",
        "Life Purpose & Career Guidance",
        "Relationship Dynamics",
        "Health & Well-being Insights"
      ],
      buttonText: "Book Human Design Package",
      externalLink: "https://example.com/human-design-readings",
      gradient: "from-purple-400 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      id: 3,
      title: "Past Life Regression",
      subtitle: "Session + Follow-up",
      icon: <EyeIcon className="h-8 w-8" />,
      price: "Heal Ancient Wounds",
      description: "Journey into your soul's history with a guided regression session followed by integration support to heal and transform.",
      features: [
        "Deep Past Life Regression Session",
        "Soul Pattern Recognition",
        "Karma & Life Lesson Insights",
        "Healing Trauma Across Lifetimes",
        "Follow-up Integration Session",
        "Personalized Healing Plan"
      ],
      buttonText: "Book Regression Journey",
      externalLink: "https://example.com/past-life-regression",
      gradient: "from-yellow-400 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      id: 2,
      title: "Complete Soul Journey",
      subtitle: "Human Design + Regression",
      icon: <GiftIcon className="h-8 w-8" />,
      price: "Ultimate Transformation",
      description: "The most comprehensive spiritual experience combining both Human Design readings and Past Life Regression for complete soul alignment.",
      features: [
        "All Human Design Sessions (3)",
        "Past Life Regression + Follow-up",
        "Soul Blueprint Integration",
        "Lifetime Patterns Analysis",
        "Spiritual Purpose Clarity",
        "Ongoing Email Support"
      ],
      buttonText: "Begin Complete Journey",
      externalLink: "https://example.com/complete-soul-journey",
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      popular: true
    }
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-transparent to-green-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}        <motion.div 
          className="text-center mb-16 motion-safe"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ><h2 className="text-4xl md:text-5xl font-bold mb-6 serif-heading">
            <span className="spiritual-gradient">Sacred Offerings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed serif-body">
            Choose your path to spiritual awakening. Each journey is designed to unlock 
            the deepest wisdom of your soul and guide you toward your most authentic life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (            <motion.div
              key={service.id}
              className={`relative liquid-glass-ultra rounded-3xl p-8 motion-safe ${
                service.popular ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}              transition={{ 
                duration: 0.6, 
                delay: index * 0.2, 
                ease: "easeOut",
                // Fast transitions for hover states
                y: { type: "spring", stiffness: 400, damping: 25 },
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}viewport={{ once: true, amount: 0.2 }}
              animate={{ y: 0, scale: 1 }}              whileHover={{ y: -5, scale: 1.02 }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Popular Badge */}              {service.popular && (
                <motion.div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold motion-safe"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Service Header */}
              <div className="text-center mb-6">                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} text-white mb-4 motion-safe`}                  whileHover={{ rotate: 360 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut",
                    // Fast exit transition
                    rotate: { duration: 0.3, ease: "easeInOut" }
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {service.icon}
                </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 serif-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium serif-body">
                  {service.subtitle}
                </p>
                <div className="mt-3">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                </div>
              </div>              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed serif-body">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (                  <motion.div
                    key={featureIndex}
                    className="flex items-start space-x-3 motion-safe"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.6 + featureIndex * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                  ><CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm serif-body">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}              <motion.a
                href={service.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center bg-gradient-to-r ${service.gradient} text-white py-4 px-6 rounded-2xl font-semibold motion-safe`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                style={{ willChange: 'transform' }}
              >                {service.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}        <motion.div 
          className="text-center mt-16 motion-safe"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6, 
            ease: "easeOut",
            // Fast transitions for hover states
            y: { type: "spring", stiffness: 400, damping: 25 },
            scale: { type: "spring", stiffness: 400, damping: 25 }
          }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
        ><div className="liquid-glass-ultra p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 serif-heading">
              Not Sure Which Path to Choose?
            </h3>
            <p className="text-gray-600 mb-6 serif-body">
              Book a complimentary 15-minute consultation to discover which journey 
              will serve your highest good.
            </p>            <motion.a
              href="mailto:nadia@example.com"
              className="btn-spiritual inline-block motion-safe"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                duration: 0.1, 
                ease: "easeOut",
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}
              style={{ willChange: 'transform' }}
            >
              Schedule Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
