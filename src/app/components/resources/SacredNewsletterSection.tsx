'use client';

import { motion } from 'framer-motion';
import { Mail, Star, Sparkles, Heart } from 'lucide-react';

export default function SacredNewsletterSection() {
  const floatingElements = [
    { Icon: Star, delay: 0, x: '15%', y: '25%', duration: 6 },
    { Icon: Sparkles, delay: 1, x: '80%', y: '20%', duration: 8 },
    { Icon: Heart, delay: 2, x: '20%', y: '75%', duration: 7 },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Sacred Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flower-of-life w-96 h-96"></div>
        </div>
      </div>

      {/* Floating Sacred Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-spiritual-gold opacity-20"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <element.Icon className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sacred-card-gradient p-8 md:p-12 text-center text-white rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Sacred Geometry Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8">
              <div className="merkaba w-16 h-16"></div>
            </div>
            <div className="absolute bottom-8 right-8">
              <div className="merkaba w-20 h-20"></div>
            </div>
          </div>

          <div className="relative">
            {/* Sacred Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-cinzel">Sacred Circle Connection</span>
              <Mail className="w-5 h-5 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-6"
            >
              Stay Connected to the 
              <span className="block text-spiritual-gold ethereal-glow">
                Sacred Circle
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-cormorant leading-relaxed"
            >
              Subscribe to receive divine resources, mystical insights, channeled wisdom, 
              and exclusive sacred content delivered with love to your soul
            </motion.p>

            {/* Sacred Elements Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white/50"></div>
              <Star className="w-5 h-5 text-white/70" />
              <div className="w-8 h-0.5 bg-white/50"></div>
              <Heart className="w-5 h-5 text-ethereal-pink" />
              <div className="w-8 h-0.5 bg-white/50"></div>
              <Star className="w-5 h-5 text-white/70" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your sacred email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-3 focus:ring-white/30 backdrop-blur-sm bg-white/90 font-cormorant placeholder-gray-500"
              />
              <motion.button 
                className="sacred-button-secondary text-white border-white hover:bg-white hover:text-cosmic-blue font-cinzel"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Join Sacred Circle
              </motion.button>
            </motion.div>

            {/* Divine Blessing */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-white/70 font-cormorant italic text-sm mt-6"
            >
              "Your email is sacred to us and will be honored with divine respect"
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
