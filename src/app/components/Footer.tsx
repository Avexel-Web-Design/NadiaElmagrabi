'use client'
import { motion } from 'framer-motion'
import { HeartIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline'
import { useDailyQuote } from '../hooks/useDailyQuote'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const dailyQuote = useDailyQuote()

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'Facebook', href: '#', icon: '👤' },
    { name: 'Email', href: 'mailto:nadia@example.com', icon: '✉️' },
  ]

  return (
    <footer className="liquid-glass-strong mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >            <h3 className="text-2xl font-bold spiritual-gradient serif-heading">
              Nadia Elmagrabi
            </h3>
            <p className="text-gray-600 leading-relaxed serif-body">
              Guiding souls on their journey of self-discovery through Human Design 
              and Past Life Regression. Illuminate your path to authentic living.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="liquid-glass p-3 rounded-full hover:liquid-glass-strong text-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >            <h4 className="text-lg font-semibold text-gray-800 flex items-center serif-heading">
              <SparklesIcon className="h-5 w-5 mr-2 text-purple-600" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About Me', 'Human Design Readings', 'Past Life Regression', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-purple-700 transition-colors serif-body"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spiritual Quote */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >            <h4 className="text-lg font-semibold text-gray-800 flex items-center serif-heading">
              <SunIcon className="h-5 w-5 mr-2 text-yellow-600" />
              Daily Inspiration
            </h4>
            <blockquote className="liquid-glass p-4 rounded-lg italic text-gray-700 serif-body">
              &ldquo;{dailyQuote}&rdquo;
            </blockquote>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >          <div className="flex items-center space-x-2 text-gray-600 mb-4 md:mb-0 serif-body">
            <HeartIcon className="h-4 w-4 text-red-400" />
            <span>Made with love by <a href="https://avexel.co" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">Avexel</a></span>
          </div>
          
          <div className="text-center md:text-right text-gray-600 serif-body">
            <p>&copy; {currentYear} Nadia Elmagrabi. All rights reserved.</p>            <p className="text-sm mt-1">
              Embrace your cosmic blueprint
            </p>
          </div>        </motion.div>
      </div>
    </footer>
  )
}
