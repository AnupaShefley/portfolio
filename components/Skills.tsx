'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Skill } from '@/types'
import { asset } from '@/lib/asset'
import TiltCard from './TiltCard'

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
    aiTools: ['Bolt', 'v0', 'Galileo AI', 'Midjourney'],
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
    aiTools: ['Cursor', 'GitHub Copilot', 'Bolt', 'Claude'],
  },
  {
    title: 'ANALYST',
    responsibilities: [
      'Understand client requirements and propose solutions',
      'Liaise with teams to recognize pain points',
      'Study user needs and convert to goals',
    ],
    tools: ['Data Analysis', 'Requirements Gathering', 'Stakeholder Management'],
    aiTools: ['ChatGPT', 'Perplexity', 'Notion AI', 'Microsoft Copilot'],
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
    <TiltCard className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(8px)' }}
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
                  <span className="mr-2">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-dark/80 mb-2">Tools:</p>
            <p className="text-teal-dark/70">{skill.tools.join(', ')}</p>
          </div>
          <div className="pt-3 border-t border-teal-medium/20">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-teal-content/70 mb-2">AI tools</p>
            <div className="flex flex-wrap gap-1.5">
              {skill.aiTools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded-full bg-teal-content/10 text-teal-dark text-xs font-medium ring-1 ring-teal-content/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(8px)' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(6px)' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-teal-dark mb-8 text-center md:text-left"
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -50, filter: 'blur(8px)' }}
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

            <SkillCard skill={skills[0]} isInView={isInView} delay={0.3} />
            <SkillCard skill={skills[2]} isInView={isInView} delay={0.4} />
            <SkillCard skill={skills[1]} isInView={isInView} delay={0.5} />
          </div>

        </motion.div>
      </div>
    </section>
  )
}
