'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: '1',
    slug: 'highbury-primary',
    title: 'Highbury Primary School',
    category: 'Research / Usability Study',
    description: 'A comprehensive usability study and research project for a primary school website redesign.',
    image: './placeholder-project-1.jpg',
  },
  {
    id: '2',
    slug: 'calendarredesign',
    title: 'iOS Calendar',
    category: 'User Research and Design',
    description: 'User research and design project focusing on improving calendar application usability.',
    image: './placeholder-project-2.jpg',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    category: 'Full-Stack Development',
    description: 'Complete e-commerce solution with modern UI/UX and robust backend architecture.',
    image: './placeholder-project-3.jpg',
  },
]

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 relative bg-teal-content">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-white/70 mb-4">No Blood, But Sweat and Tears</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">My Work</h2>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mt-6 text-sm uppercase tracking-wider text-white underline underline-offset-4 hover:no-underline transition-all"
          >
            Check It Out
          </motion.a>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const cardContent = (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Text content */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-wider text-white/70 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-teal-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">{project.description}</p>
                </div>

                {/* Image placeholder */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-light/30 to-teal-medium/30 flex items-center justify-center">
                    <p className="text-white/50 text-sm">Project Preview</p>
                  </div>
                </div>
              </div>
            )

            const cardClassName =
              'block bg-background/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-background/20 transition-all duration-300 cursor-pointer group'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                {project.slug ? (
                  <Link href={`/works/${project.slug}`} className={cardClassName}>
                    {cardContent}
                  </Link>
                ) : (
                  <div className={cardClassName}>{cardContent}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
