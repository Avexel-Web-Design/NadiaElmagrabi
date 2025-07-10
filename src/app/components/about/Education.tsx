'use client'
import { motion } from 'framer-motion'
import { AcademicCapIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useDelayedAnimation, useStaggeredAnimation } from '../../hooks/useStaggeredAnimation'

export default function Education() {
  const isLoaded = useDelayedAnimation(100) // Start animations 100ms after component mounts
  const qualifications = [
    {
      degree: "MA in Clinical and Humanistic Psychology",
      institution: "Michigan School for Professional Psychology",
      year: "",
      focus: "Clinical Psychology & Humanistic Approaches",
      icon: AcademicCapIcon,
      color: "purple"
    },
    {
      degree: "Postgraduate Certificate in Psychoanalytic Psychotherapy",
      institution: "Michigan Psychoanalytic Institute",
      year: "",
      focus: "3-Year Certificate Program",
      icon: TrophyIcon,
      color: "yellow"
    },
    {
      degree: "BA in French Language & Literature and Art History",
      institution: "Western Michigan University",
      year: "",
      focus: "Double Major in Languages & Arts",
      icon: SparklesIcon,
      color: "green"
    }
  ]
  const additionalTraining = [
    "Past Life Therapy - trained with internationally known therapist and author Carol Bowman",
    "Certificate of Training for completion of The Human Design Mastermind with Emma Dunwoody",
    "Certificate of Completion for Living Your Design Course with Jenni Crowther",
    "Certificate of Completion for Rave ABCs and Rave Cartography with John and Amy of the Human Design Collective",
    "Intuitive Practitioner Certification - Sacred Balance Academy (Lori Lipton)",
    "Institute for Integrative Nutrition - Certified Holistic Health & Wellness Coach",
    "Trauma-Informed Bodywork & Somatic Psychology - Pacific Center for Awareness and Bodywork"
  ]

  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              Education & Training
            </h2>
          </div>          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            Nearly 25 years of clinical experience combined with specialized transformational training
          </p>
        </motion.div>        {/* Formal Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center serif-heading">
            Formal Education
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform"
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${qual.color}-100 mb-4`}>
                    <IconComponent className={`h-6 w-6 text-${qual.color}-600`} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 serif-heading">
                    {qual.degree}
                  </h4>
                  <p className="text-purple-600 font-medium mb-2 serif-body">
                    {qual.institution}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {qual.year}
                    </span>
                  </div>                  <p className="text-gray-600 text-sm leading-relaxed serif-body">
                    {qual.focus}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>        {/* Additional Training */}        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center serif-heading">
            Specialized Training & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalTraining.map((training, index) => {
              const TrainingItem = ({ training, index }: { training: string, index: number }) => {
                const isVisible = useStaggeredAnimation(600 + index * 100) // Start 600ms after component, stagger by 100ms
                
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-yellow-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 serif-body">{training}</span>
                  </motion.div>
                )
              }
              
              return <TrainingItem key={index} training={training} index={index} />
            })}
          </div>
        </motion.div>        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">            <h3 className="text-2xl font-semibold mb-4 serif-heading">
              A Foundation of Excellence
            </h3>
            <p className="text-lg leading-relaxed serif-body opacity-90">
              My educational journey combines rigorous academic training in psychology and psychotherapy 
              with specialized expertise in transformational healing modalities. With nearly 25 years of 
              experience in clinical psychotherapy, plus extensive personal psychoanalysis and professional 
              supervision, this foundation allows me to offer deep, multidimensional support that honors 
              both traditional therapeutic approaches and innovative healing practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
