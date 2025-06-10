'use client'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const contactMethods = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email",
      description: "Send me your questions",
      contact: "nadia@example.com",
      href: "mailto:nadia@example.com"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone",
      description: "Call for urgent matters",
      contact: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Sessions",
      description: "Online & In-Person",
      contact: "Worldwide Available",
      href: "#services"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-purple-50 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}        <motion.div 
          className="text-center mb-16 motion-safe"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ><h2 className="text-4xl md:text-5xl font-bold mb-6 serif-heading">
            <span className="spiritual-gradient">Begin Your Journey</span>
          </h2>          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed serif-body">
            Ready to unlock the mysteries of your soul? I&apos;m here to guide you 
            every step of the way. Reach out and let&apos;s start your transformation today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="motion-safe"
          >
            <div className="space-y-8">              <div className="liquid-glass-ultra p-8 rounded-3xl">                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center serif-heading">
                  <HeartIcon className="h-6 w-6 mr-3 text-pink-500" />
                  Let&apos;s Connect
                </h3>
                
                <div className="space-y-6">                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 liquid-glass-card rounded-xl motion-safe"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, amount: 0.8 }}
                      whileHover={{ x: 5 }}
                      style={{ willChange: 'transform' }}
                    >
                      <div className="text-purple-600 mt-1">
                        {method.icon}
                      </div>
                      <div className="flex-1">                        <h4 className="font-semibold text-gray-800 mb-1 serif-heading">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2 serif-body">
                          {method.description}
                        </p>
                        <a 
                          href={method.href}
                          className="text-purple-700 font-medium hover:text-purple-900 transition-colors serif-body"
                        >
                          {method.contact}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Spiritual Quote */}              <motion.div
                className="liquid-glass p-6 rounded-2xl motion-safe"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  &ldquo;The cave you fear to enter holds the treasure you seek. 
                  Let me help you find the courage to discover your inner gold.&rdquo;
                </blockquote>
                <cite className="block mt-4 text-right text-gray-500 font-medium">
                  — Nadia Elmagrabi
                </cite>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="motion-safe"
          ><div className="liquid-glass-ultra p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 serif-heading">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="motion-safe"
                  ><label className="block text-gray-700 font-medium mb-2 serif-body">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full liquid-glass-card px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all serif-body"
                      placeholder="Your first name"
                    />
                  </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="motion-safe"
                  ><label className="block text-gray-700 font-medium mb-2 serif-body">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full liquid-glass-card px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all serif-body"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </div>                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="motion-safe"
                ><label className="block text-gray-700 font-medium mb-2 serif-body">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full liquid-glass-card px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all serif-body"
                    placeholder="your@email.com"
                  />
                </motion.div>                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="motion-safe"
                >                  <label className="block text-gray-700 font-medium mb-2 serif-body">
                    I&apos;m interested in
                  </label>
                  <select className="w-full liquid-glass-card px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all serif-body">
                    <option>Select a service</option>
                    <option>Human Design Readings</option>
                    <option>Past Life Regression</option>
                    <option>Complete Soul Journey</option>
                    <option>Free Consultation</option>
                  </select>
                </motion.div>                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="motion-safe"
                ><label className="block text-gray-700 font-medium mb-2 serif-body">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full liquid-glass-card px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all resize-none serif-body"
                    placeholder="Tell me about your spiritual journey and what you're seeking..."
                  ></textarea>
                </motion.div>                <motion.button
                  type="submit"
                  className="w-full btn-spiritual py-4 text-lg motion-safe"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform' }}
                >
                  Send Message ✨
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
