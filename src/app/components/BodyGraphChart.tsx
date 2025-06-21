'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function BodyGraphChart() {
  const bodyGraphRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Create script element for the Body Graph Chart
    const script = document.createElement('script')
    script.src = "https://embed.bodygraphchart.com/v1/957/js?token=c07a595a-aa16-4db8-b069-0151ea05d457"
    script.defer = true
    
    // Append script to the container div
    if (bodyGraphRef.current) {
      bodyGraphRef.current.appendChild(script)
    }
    
    // Cleanup function
    return () => {
      if (bodyGraphRef.current && bodyGraphRef.current.contains(script)) {
        bodyGraphRef.current.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="bodygraph" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-heading">
            <span className="spiritual-gradient">Human Design</span>
            <br />
            <span className="text-gray-800 serif-heading">Body Graph</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed serif-body">
            Explore your unique energetic blueprint through this interactive Body Graph Chart.
            Your design reveals how you're meant to navigate the world authentically.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="liquid-glass-card p-6 rounded-2xl shadow-xl"
        >
          {/* Body Graph Chart container */}
          <div 
            ref={bodyGraphRef} 
            className="w-full min-h-[600px] flex items-center justify-center"
          >
            {/* The script will embed the Body Graph Chart here */}
            <div className="text-center py-8">
              <p className="text-gray-500">Loading Body Graph Chart...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
