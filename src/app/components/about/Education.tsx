'use client'
import { motion } from 'framer-motion'
import { AcademicCapIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Education() {
  const qualifications = [
    {
      degree: "Master of Divinity",
      institution: "Sacred Heart Seminary",
      year: "2012",
      focus: "Comparative Religion & Spiritual Counseling",
      icon: AcademicCapIcon,
      color: "purple"
    },
    {
      degree: "Bachelor of Arts in Psychology",
      institution: "University of California, Berkeley",
      year: "2008",
      focus: "Transpersonal Psychology & Human Development",
      icon: TrophyIcon,
      color: "yellow"
    },
    {
      degree: "Certificate in Holistic Healing",
      institution: "Institute for Integrative Nutrition",
      year: "2013",
      focus: "Mind-Body Connection & Wellness Coaching",
      icon: SparklesIcon,
      color: "green"
    }
  ]

  const additionalTraining = [
    "Advanced Astrology Studies - Kepler College",
    "Meditation Teacher Training - Mindfulness Institute",
    "Energy Healing Certification - Barbara Brennan School",
    "Shamanic Journeying - Foundation for Shamanic Studies",
    "Past Life Regression Therapy - Institute for Past Life Therapy"
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <AcademicCapIcon className="h-8 w-8 text-purple-600 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold spiritual-gradient serif-heading">
              Education & Training
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-body">
            A foundation built on academic excellence and spiritual wisdom
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center serif-heading">
            Formal Education
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed serif-body">
                    {qual.focus}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Additional Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center serif-heading">
            Specialized Training & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalTraining.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-yellow-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 serif-body">{training}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 serif-heading">
              A Lifetime of Learning
            </h3>
            <p className="text-lg leading-relaxed serif-body opacity-90">
              My educational journey reflects a deep commitment to understanding both the scientific 
              and spiritual aspects of human experience. This unique combination allows me to offer 
              grounded, compassionate guidance that honors both wisdom traditions and modern insights.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
