'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, Instagram } from 'lucide-react';

export default function ContactOptionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold sacred-text text-forest mb-6">
            Connect With Me
          </h2>
          <p className="text-xl text-earth body-text max-w-3xl mx-auto">
            Choose the way that feels most aligned for you to reach out and begin our conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-sage" />
            </div>
            <h3 className="text-xl font-semibold sacred-text text-forest mb-2">Book a Session</h3>
            <p className="text-earth body-text mb-4">Schedule your transformational session directly</p>
            <a
              href="https://calendly.com/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="earth-gradient text-cream px-6 py-2 rounded-full font-medium sacred-text hover:opacity-90 transition-opacity duration-300"
            >
              Schedule Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-amethyst/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-amethyst" />
            </div>
            <h3 className="text-xl font-semibold sacred-text text-forest mb-2">Email Me</h3>
            <p className="text-earth body-text mb-4">Send me a message and I'll respond within 24 hours</p>
            <a
              href="mailto:nadia@nadiaelmagrabi.com"
              className="bg-amethyst text-cream px-6 py-2 rounded-full font-medium sacred-text hover:opacity-90 transition-opacity duration-300"
            >
              Send Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-earth/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-earth" />
            </div>
            <h3 className="text-xl font-semibold sacred-text text-forest mb-2">WhatsApp</h3>
            <p className="text-earth body-text mb-4">Quick questions or to schedule a call</p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-earth text-cream px-6 py-2 rounded-full font-medium sacred-text hover:opacity-90 transition-opacity duration-300"
            >
              Message
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-forest" />
            </div>
            <h3 className="text-xl font-semibold sacred-text text-earth mb-2">Instagram</h3>
            <p className="body-text text-earth/80 mb-4">Follow for daily inspiration and updates</p>
            <a
              href="https://instagram.com/nadiaelmagrabi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-cream px-6 py-2 rounded-full font-medium sacred-text hover:bg-earth hover:text-cream/90 transition-all duration-300 divine-shadow"
            >
              Follow
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
