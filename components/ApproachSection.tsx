'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { title: 'EMPATHIZE', desc: 'Research and understand the user or customer needs' },
  { title: 'DEFINE', desc: 'Determine the problem, set goals, and establish the roadmap' },
  { title: 'IDEATE', desc: 'Brainstorm product features or map content that solves the problem' },
  { title: 'CREATE', desc: 'Design, test, validate and repeat' },
  { title: 'OPTIMIZE', desc: 'Use data and feedback to improve' },
]

export default function ApproachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="approach" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-teal-dark mb-12">
            My Approach to Design & Writing
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="border-l-4 border-teal-medium pl-4"
                >
                  <h4 className="font-bold text-teal-dark mb-2">{step.title}</h4>
                  <p className="text-teal-dark/80">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden border-4 border-background"
            >
              <Image
                src="./designprocess.jpg"
                alt="My approach to design and writing process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
