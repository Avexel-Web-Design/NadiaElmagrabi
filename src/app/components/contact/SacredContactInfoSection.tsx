'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Calendar, Star, Moon, Sun, Heart } from 'lucide-react';

export default function SacredContactInfoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 relative"
    >
      {/* Floating Sacred Elements */}
      <div className="absolute -top-6 -right-6 text-ethereal-pink opacity-30">
        <Moon className="w-10 h-10 animate-float" />
      </div>
      <div className="absolute top-20 -left-4 text-spiritual-gold opacity-25">
        <Star className="w-6 h-6 animate-float-delayed" />
      </div>

      {/* Sacred Contact Information */}
      <div className="sacred-card p-8">
        <h2 className="text-3xl font-bold text-mystical-purple mb-6 font-cinzel">
          Sacred Contact Information
        </h2>
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start group"
          >
            <div className="bg-gradient-to-br from-spiritual-gold/20 to-ethereal-pink/20 
                          p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-mystical-purple" />
            </div>
            <div>
              <h3 className="font-semibold text-mystical-purple font-cinzel">Sacred Email</h3>
              <p className="text-cosmic-blue font-cormorant">nadia@nadiaelmagrabi.com</p>
              <p className="text-sm text-cosmic-blue/70 mt-1 italic">
                I respond with divine timing within 24 hours
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start group"
          >
            <div className="bg-gradient-to-br from-cosmic-blue/20 to-mystical-purple/20 
                          p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-cosmic-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-mystical-purple font-cinzel">Sacred Space</h3>
              <p className="text-cosmic-blue font-cormorant">Online Sessions Worldwide</p>
              <p className="text-sm text-cosmic-blue/70 mt-1 italic">
                Serving souls globally through the divine connection of technology
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start group"
          >
            <div className="bg-gradient-to-br from-ethereal-pink/20 to-spiritual-gold/20 
                          p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-ethereal-pink" />
            </div>
            <div>
              <h3 className="font-semibold text-mystical-purple font-cinzel">Sacred Hours</h3>
              <div className="space-y-1 font-cormorant">
                <p className="text-cosmic-blue flex items-center">
                  <Sun className="w-4 h-4 mr-2 text-spiritual-gold" />
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
                <p className="text-cosmic-blue flex items-center">
                  <Star className="w-4 h-4 mr-2 text-ethereal-pink" />
                  Saturday: 10:00 AM - 4:00 PM EST
                </p>
                <p className="text-cosmic-blue/70 flex items-center">
                  <Moon className="w-4 h-4 mr-2 text-mystical-purple" />
                  Sunday: Closed for sacred rest and renewal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sacred Discovery Call CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple via-cosmic-blue to-ethereal-pink opacity-90"></div>
        <div className="absolute inset-0 cosmic-background opacity-30"></div>
        
        <div className="relative p-8 text-white">
          <div className="absolute top-4 right-4 text-spiritual-gold opacity-60">
            <Heart className="w-8 h-8 animate-float" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 font-cinzel">
            Ready to Transform Your Sacred Life?
          </h3>
          <p className="text-purple-100 mb-6 font-cormorant text-lg">
            Book your complimentary divine discovery call to explore how we can walk together 
            on your sacred spiritual journey of awakening.
          </p>
          <motion.a
            href="https://calendly.com/nadiaelmagrabi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-mystical-purple px-8 py-4 rounded-lg font-semibold 
                     hover:bg-spiritual-gold hover:text-white transition-all duration-300 
                     inline-flex items-center group shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-cinzel">Book Sacred Discovery Call</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Sacred FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="sacred-card p-8"
      >
        <h3 className="text-2xl font-bold text-mystical-purple mb-6 font-cinzel">
          Sacred Inquiries & Divine Answers
        </h3>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-l-4 border-spiritual-gold pl-4"
          >
            <h4 className="font-semibold text-mystical-purple font-cinzel mb-2">
              How quickly will you respond to my sacred message?
            </h4>
            <p className="text-cosmic-blue font-cormorant">
              I honor all messages with divine timing and typically respond within 24 hours during sacred business days, 
              always with love and intentional presence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-l-4 border-ethereal-pink pl-4"
          >
            <h4 className="font-semibold text-mystical-purple font-cinzel mb-2">
              Do you offer sacred complimentary consultations?
            </h4>
            <p className="text-cosmic-blue font-cormorant">
              Yes! I offer blessed 15-minute divine discovery calls to feel into our sacred connection 
              and see if our energies align for this transformational journey.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-l-4 border-cosmic-blue pl-4"
          >
            <h4 className="font-semibold text-mystical-purple font-cinzel mb-2">
              What sacred timezone are you in?
            </h4>
            <p className="text-cosmic-blue font-cormorant">
              I'm anchored in Eastern Standard Time (EST) but work with beautiful souls worldwide, 
              honoring all timezones in our sacred scheduling dance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="border-l-4 border-mystical-purple pl-4"
          >
            <h4 className="font-semibold text-mystical-purple font-cinzel mb-2">
              What can I expect from our sacred work together?
            </h4>
            <p className="text-cosmic-blue font-cormorant">
              Our journey together will be deeply transformational, combining ancient wisdom with modern healing 
              to guide you home to your soul's deepest truth and highest expression.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
