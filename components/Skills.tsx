'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Skill } from '@/types'
import { asset } from '@/lib/asset'

const skills: Skill[] = [
  {
    title: 'DESIGNER',
    responsibilities: [
      'Map user flows',
      'Create prototypes',
      'Persona creation',
      'Design thinking',
      'Usability testing',
    ],
    tools: ['Figma', 'Adobe XD', 'Miro'],
  },
  {
    title: 'DEVELOPER',
    responsibilities: [
      'Web page creation',
      'File processing solutions',
      'API services',
      'Database mapping',
    ],
    tools: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'ANALYST',
    responsibilities: [
      'Understand client requirements and propose solutions',
      'Liaise with teams to recognize pain points',
      'Study user needs and convert to goals',
    ],
    tools: ['Data Analysis', 'Requirements Gathering', 'Stakeholder Management'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Left side - Image placeholder */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 md:h-96 rounded-lg overflow-hidden"
            >
              <Image
                src={asset('/skills.jpg')}
                alt="Skills and experience in design and development"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right side - Skills */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-serif font-bold text-teal-dark mb-12"
              >
                My Skills
              </motion.h2>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-teal-medium/20 p-6 rounded-lg border border-teal-medium/30"
                  >
                    <h3 className="text-xl font-bold text-teal-dark mb-4 uppercase">
                      {skill.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-teal-dark/80 mb-2">Responsibilities:</p>
                        <ul className="list-none space-y-1 text-teal-dark/70">
                          {skill.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-teal-dark/80 mb-2">Tools:</p>
                        <p className="text-teal-dark/70">{skill.tools.join(', ')}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
