'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { asset } from '@/lib/asset'

const projects: Project[] = [
  {
    id: '1',
    slug: 'highbury-primary',
    title: 'Highbury Primary School',
    category: 'Research / Usability Study',
    description: 'A comprehensive usability study and research project for a primary school website redesign.',
    image: asset('/highbury.jpg'),
  },
  {
    id: '2',
    slug: 'calendarredesign',
    title: 'iOS Calendar',
    category: 'User Research and Design',
    description: 'User research and design project focusing on improving calendar application usability.',
    image: asset('/ios.jpg'),
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    category: 'Full-Stack Development',
    description: 'Complete e-commerce solution with modern UI/UX and robust backend architecture.',
    image: asset('/designprocess.jpg'),
  },
]

const WORK_HEADER_IMAGE = asset('/works.jpg')

const headerTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.28, delayChildren: 0.4 },
  },
}

const headerTextItem = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" ref={ref} className="relative bg-teal-content pt-8 md:pt-10 overflow-x-hidden">
      {/* My Work header – two-column grid, image left (overlapping), teal block right */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] md:min-h-[480px]">
          {/* Left: large image – reveal slowly from the left */}
          <motion.div
            className="relative overflow-visible min-h-[280px] md:min-h-0 order-2 md:order-1 overflow-hidden md:overflow-visible"
            initial={{ opacity: 0, x: '-35%' }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-35%' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 md:inset-y-0 md:left-0 md:right-0 md:-right-[12%] md:-top-6 md:-bottom-6 z-10">
              <Image
                src={WORK_HEADER_IMAGE}
                alt="Workspace and design process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Right: solid muted teal block – text reveals from the left with stagger */}
          <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 bg-teal-content md:bg-[#3d6b6d] order-1 md:order-2 z-20">
            <motion.div
              className="max-w-sm"
              variants={headerTextVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.p
                variants={headerTextItem}
                className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-4"
              >
                No Blood, But Sweat and Tears
              </motion.p>
              <motion.h2
                variants={headerTextItem}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
              >
                My Work
              </motion.h2>
              <motion.div variants={headerTextItem}>
                <Link
                  href="#contact"
                  className="inline-block text-sm uppercase tracking-wider text-white underline underline-offset-4 hover:no-underline transition-all"
                >
                  Check it out
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <div className="container mx-auto px-6 py-24 md:py-32">
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

                {/* Project image */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            )

            const cardClassName =
              'block bg-background/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-background/20 transition-all duration-300 cursor-pointer group'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{
                  duration: 1.1,
                  delay: 0.25 + index * 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="transition-shadow duration-300 hover:shadow-xl"
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
