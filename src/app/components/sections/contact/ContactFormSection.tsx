'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend or email service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold sacred-text text-forest mb-6">Send Me a Message</h2>
            <p className="text-earth body-text mb-8">
              Have questions about my services or ready to begin your transformation? Fill out the form below and I'll get back to you personally.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest body-text mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-forest body-text bg-cream/50"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest body-text mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-forest body-text bg-cream/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-forest body-text mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-forest body-text bg-cream/50"
                >
                  <option value="">Select a topic</option>
                  <option value="session">Book a Session</option>
                  <option value="souls-purpose">Embody Your Soul's Purpose Program</option>
                  <option value="shadow-work">Shadow Work Inquiry</option>
                  <option value="plr">Past Life Regression</option>
                  <option value="general">General Question</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest body-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-forest body-text bg-cream/50"
                  placeholder="Tell me about what you're looking for support with..."
                />
              </div>

              <button
                type="submit"
                className="w-full earth-gradient text-cream py-3 rounded-lg font-semibold sacred-text hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">nadia@nadiaelmagrabi.com</p>
                    <p className="text-sm text-gray-500 mt-1">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Online Sessions Worldwide</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients globally via video call</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Availability</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-sm text-gray-500 mt-1">Sunday: Closed for rest and renewal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Life?</h3>
              <p className="text-purple-100 mb-6">
                Book your complimentary discovery call to explore how we can work together on your spiritual journey.
              </p>
              <a
                href="https://calendly.com/nadiaelmagrabi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Discovery Call
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">How quickly will you respond?</h4>
                  <p className="text-gray-600 text-sm">I typically respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Do you offer free consultations?</h4>
                  <p className="text-gray-600 text-sm">Yes! I offer complimentary 15-minute discovery calls to see if we're a good fit.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">What timezone are you in?</h4>
                  <p className="text-gray-600 text-sm">I'm based in Eastern Standard Time (EST) but work with clients worldwide.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
