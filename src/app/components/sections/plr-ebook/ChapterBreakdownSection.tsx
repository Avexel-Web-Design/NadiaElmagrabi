'use client';

import { motion } from 'framer-motion';

const chapters = [
  {
    number: "01",
    title: "Understanding Past Life Regression",
    description: "The science, spirituality, and methodology behind PLR work"
  },
  {
    number: "02", 
    title: "Preparation and Safety",
    description: "Essential preparation techniques and safety protocols"
  },
  {
    number: "03",
    title: "Self-Guided PLR Techniques",
    description: "Step-by-step methods for accessing past life memories"
  },
  {
    number: "04",
    title: "Interpreting Your Experiences",
    description: "How to understand and validate your past life insights"
  },
  {
    number: "05",
    title: "Healing and Integration",
    description: "Practical methods for healing past life trauma and patterns"
  },
  {
    number: "06",
    title: "Case Studies",
    description: "Real examples of past life patterns and their resolution"
  },
  {
    number: "07",
    title: "Advanced Techniques",
    description: "Deeper methods for experienced practitioners"
  },
  {
    number: "08",
    title: "Living Your Soul's Purpose",
    description: "How past life awareness guides your current life path"
  }
];

export default function ChapterBreakdownSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Complete Chapter Breakdown
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to understanding and practicing past life regression
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-purple-600 mb-3">{chapter.number}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{chapter.title}</h3>
              <p className="text-gray-600 text-sm">{chapter.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
