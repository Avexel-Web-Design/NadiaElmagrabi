'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Resources', href: '/resources', id: 'resources' },
  ]
  
  // Helper function to normalize pathname for matching
  const normalizePathname = (path: string) => {
    return path === '/' ? '/' : path.replace(/\/$/, '')
  }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(() => {
    // Initialize with a function to ensure pathname is available
    console.log('Initial pathname:', pathname)
    const normalizedPathname = normalizePathname(pathname)
    console.log('Normalized pathname:', normalizedPathname)
    const currentNavItem = navItems.find(item => item.href === normalizedPathname)
    console.log('Initial nav item found:', currentNavItem)
    const initialSection = currentNavItem ? currentNavItem.id : 'home'
    console.log('Initial active section:', initialSection)
    return initialSection
  })
  const navRef = useRef<HTMLDivElement>(null)
  const [bubblePosition, setBubblePosition] = useState({ x: 0, width: 80 })  // Set active section based on current pathname
  useEffect(() => {
    console.log('Pathname changed:', pathname)
    const normalizedPathname = normalizePathname(pathname)
    console.log('Normalized pathname:', normalizedPathname)
    const currentNavItem = navItems.find(item => item.href === normalizedPathname)
    console.log('Current nav item:', currentNavItem)
    if (currentNavItem) {
      console.log('Setting active section to:', currentNavItem.id)
      setActiveSection(currentNavItem.id)
    }
  }, [pathname, navItems])
  
  useEffect(() => {
    console.log('Setting isLoaded to true')
    setIsLoaded(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
        // Detect current section
      const sections = ['home', 'about', 'resources']
      const scrollY = window.scrollY + 100 // Offset for navbar height
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const top = rect.top + window.scrollY
          const bottom = top + rect.height
          
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }    }    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])  // Calculate bubble position when active section changes
  useEffect(() => {
    console.log('Bubble calculation triggered. activeSection:', activeSection, 'isLoaded:', isLoaded)
    if (navRef.current && isLoaded) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const activeIndex = navItems.findIndex(item => item.id === activeSection)
        console.log('Active index:', activeIndex, 'for section:', activeSection)
        if (activeIndex !== -1) {
          const navItem = navRef.current?.children[activeIndex + 1] as HTMLElement // +1 because bubble is first child
          console.log('Nav item found:', navItem)
          if (navItem) {
            const navRect = navRef.current!.getBoundingClientRect()
            const itemRect = navItem.getBoundingClientRect()
            const newPosition = {
              x: itemRect.left - navRect.left - 8, // -8 for padding adjustment
              width: itemRect.width + 16 // +16 for padding
            }
            console.log('Setting bubble position:', newPosition)
            setBubblePosition(newPosition)
          }
        }
      })
    }
  }, [activeSection, isLoaded, pathname, navItems])
  // Handle window resize for bubble repositioning
  useEffect(() => {
    const handleResize = () => {
      if (navRef.current && isLoaded) {
        requestAnimationFrame(() => {
          const activeIndex = navItems.findIndex(item => item.id === activeSection)
          if (activeIndex !== -1) {
            const navItem = navRef.current?.children[activeIndex + 1] as HTMLElement
            if (navItem) {
              const navRect = navRef.current!.getBoundingClientRect()
              const itemRect = navItem.getBoundingClientRect()
              setBubblePosition({
                x: itemRect.left - navRect.left - 8,
                width: itemRect.width + 16
              })
            }
          }
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeSection, isLoaded, navItems])
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="text-2xl font-bold spiritual-gradient serif-heading">
                Nadia Elmagrabi
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="block max-md:hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-8 relative" ref={navRef}>
              {/* Sliding liquid glass bubble */}
              <motion.div
                className="absolute top-0 h-full liquid-glass-strong rounded-full pointer-events-none z-0"
                initial={false}
                animate={{
                  x: bubblePosition.x,
                  width: bubblePosition.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
              />
              
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className={`text-gray-700 hover:text-purple-800 px-3 py-2 rounded-md text-sm font-medium relative group serif-body z-10 transition-colors duration-300 cursor-pointer ${
                      activeSection === item.id ? 'text-purple-800 font-semibold' : ''
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-purple-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/90 backdrop-blur-sm mx-4 my-2 rounded-2xl overflow-hidden shadow-lg"
            >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className="text-gray-700 hover:text-purple-800 block px-3 py-2 rounded-md text-base font-medium serif-body cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
