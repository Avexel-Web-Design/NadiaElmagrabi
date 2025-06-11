'use client'
import { motion } from 'framer-motion'
import { AcademicCapIcon, BookOpenIcon, StarIcon } from '@heroicons/react/24/outline'
import { useDelayedAnimation, useStaggeredAnimation } from '../../hooks/useStaggeredAnimation'

export default function Background() {
  const isLoaded = useDelayedAnimation(100) // Start animations 100ms after component mounts
  
  const experiences = [
    {
      title: "Spiritual Counseling Certification",
      organization: "International Association of Spiritual Counselors",
      year: "2018",
      description: "Advanced certification in spiritual guidance and energy healing practices"
    },
    {
      title: "Tarot Master Practitioner",
      organization: "Tarot Certification Board",
      year: "2016",
      description: "Comprehensive training in multiple tarot systems and divination techniques"
    },
    {
      title: "Reiki Master/Teacher",
      organization: "Usui Reiki System",
      year: "2015",
      description: "Master level attunement and certification to teach Reiki healing"
    },
    {
      title: "Crystal Healing Practitioner",
      organization: "Crystal Therapy Institute",
      year: "2014",
      description: "Specialized training in crystal properties and healing applications"
    }
  ]

  return (
    <section id="background" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpenIcon className="h-8 w-8 text-purple-600 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              Professional Background
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            Years of dedicated study and practice in spiritual healing arts
          </p>
        </motion.div>        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => {
            const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
              const isVisible = useStaggeredAnimation(300 + index * 150) // Start 300ms after component, stagger by 150ms
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-white to-purple-50/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 serif-heading">
                        {experience.title}
                      </h3>
                      <p className="text-purple-600 font-medium serif-body">
                        {experience.organization}
                      </p>
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {experience.year}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed serif-body">
                    {experience.description}
                  </p>
                </motion.div>
              )
            }
            
            return <ExperienceCard key={index} experience={experience} index={index} />
          })}
        </div>        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <StarIcon className="h-6 w-6 text-yellow-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 serif-heading">
                Continuous Learning
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed serif-body">
              My spiritual journey is one of constant growth and learning. I regularly attend workshops, 
              retreats, and advanced training programs to deepen my understanding and expand my healing 
              abilities. This commitment to ongoing education ensures that I can offer you the most 
              effective and transformative guidance possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
