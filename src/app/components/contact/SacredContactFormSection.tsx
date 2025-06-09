'use client';

import { motion } from 'framer-motion';
import { Send, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function SacredContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Sacred message submitted:', formData);
    // You would typically send this to your backend or email service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Floating Sacred Elements */}
      <div className="absolute -top-4 -left-4 text-spiritual-gold opacity-30">
        <Star className="w-8 h-8 animate-float" />
      </div>
      <div className="absolute -top-2 -right-2 text-ethereal-pink opacity-40">
        <Sparkles className="w-6 h-6 animate-float-delayed" />
      </div>

      <div className="sacred-card p-8">
        <h2 className="text-3xl font-bold text-mystical-purple mb-6 font-cinzel">
          Send Me a Sacred Message
        </h2>
        <p className="text-cosmic-blue mb-8 font-cormorant text-lg">
          Have questions about my sacred offerings or ready to begin your divine transformation? 
          Fill out this sacred form and I'll respond with love and light.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-mystical-purple mb-2 font-cinzel">
              Sacred Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-spiritual-gold/30 rounded-lg 
                       focus:ring-2 focus:ring-mystical-purple focus:border-mystical-purple 
                       bg-white/90 backdrop-blur-sm transition-all duration-300
                       hover:border-spiritual-gold/50"
              placeholder="Your divine name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-mystical-purple mb-2 font-cinzel">
              Sacred Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-spiritual-gold/30 rounded-lg 
                       focus:ring-2 focus:ring-mystical-purple focus:border-mystical-purple 
                       bg-white/90 backdrop-blur-sm transition-all duration-300
                       hover:border-spiritual-gold/50"
              placeholder="your@sacred-email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-mystical-purple mb-2 font-cinzel">
              Sacred Topic *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-spiritual-gold/30 rounded-lg 
                       focus:ring-2 focus:ring-mystical-purple focus:border-mystical-purple 
                       bg-white/90 backdrop-blur-sm transition-all duration-300
                       hover:border-spiritual-gold/50"
            >
              <option value="">Choose your sacred path</option>
              <option value="session">Sacred Session Booking</option>
              <option value="souls-purpose">Embody Your Soul's Purpose Journey</option>
              <option value="shadow-work">Shadow Work Sacred Inquiry</option>
              <option value="plr">Past Life Regression Divine Exploration</option>
              <option value="general">General Sacred Question</option>
              <option value="collaboration">Divine Collaboration Opportunity</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-mystical-purple mb-2 font-cinzel">
              Your Sacred Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-spiritual-gold/30 rounded-lg 
                       focus:ring-2 focus:ring-mystical-purple focus:border-mystical-purple 
                       bg-white/90 backdrop-blur-sm transition-all duration-300
                       hover:border-spiritual-gold/50 resize-none"
              placeholder="Share what your soul is calling for... I'm here to support your divine journey"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mystical-button py-4 rounded-lg font-semibold 
                     flex items-center justify-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-spiritual-gold/20 to-mystical-purple/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-cinzel">Send Sacred Message</span>
            <div className="absolute -top-1 -right-1 text-spiritual-gold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.button>
        </form>

        {/* Sacred Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 p-4 bg-gradient-to-r from-spiritual-gold/10 to-ethereal-pink/10 
                   rounded-lg border border-spiritual-gold/20"
        >
          <p className="text-sm text-cosmic-blue font-cormorant italic text-center">
            ✨ Your message is blessed with love and light as it travels to me ✨
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
