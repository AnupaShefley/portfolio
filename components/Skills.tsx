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

function SkillCard({
  skill,
  isInView,
  delay,
}: {
  skill: Skill
  isInView: boolean
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-teal-medium/20 p-6 rounded-lg border border-teal-medium/30 h-full flex flex-col"
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
  )
}

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-teal-dark mb-12 text-center md:text-left"
          >
            My Skills
          </motion.h2>

          {/* Large screens: 2x2 grid — Top left: Image, Top right: Designer, Bottom left: Analyst, Bottom right: Developer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-16">
            {/* Top left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden md:min-h-[280px]"
            >
              <Image
                src={asset('/skills.jpg')}
                alt="Skills and experience in design and development"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Top right - Designer */}
            <SkillCard skill={skills[0]} isInView={isInView} delay={0.3} />

            {/* Bottom left - Analyst */}
            <SkillCard skill={skills[2]} isInView={isInView} delay={0.4} />

            {/* Bottom right - Developer */}
            <SkillCard skill={skills[1]} isInView={isInView} delay={0.5} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
