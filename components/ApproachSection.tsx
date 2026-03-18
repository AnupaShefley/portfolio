'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { asset } from '@/lib/asset'

const steps = [
  {
    stage: 'Empathise',
    title: 'I find out who actually uses the product — and how many.',
    desc: 'Most design starts with personas. I start with real numbers — actual traffic, active users, and drop-off points — to understand whether the problem is even real before any assumptions are made.',
  },
  {
    stage: 'Define',
    title: 'I frame problems with edge cases already in them.',
    desc: 'My engineering background means I include empty states, error conditions, and data constraints before any wireframe exists — so solutions are scoped for what can realistically be built.',
  },
  {
    stage: 'Ideate',
    title: 'I filter out ideas that look good but don\'t help.',
    desc: 'Bloated images, decorative animations, and flashy transitions get cut early. If it slows the page or distracts from the task, it doesn\'t make it to the next stage — no matter how good it looks in a mockup.',
  },
  {
    stage: 'Create',
    title: 'I prototype in Bolt, Cursor, and Figma Make.',
    desc: 'Depending on the complexity, I build working prototypes in code or high-fidelity tools — handling real interactions so the team receives something ready to evaluate, not just approve.',
  },
  {
    stage: 'Optimise',
    title: 'Small wins don\'t wait in a ticket queue.',
    desc: 'When feedback reveals a quick fix — a layout tweak, a label change, a loading state — I implement it myself. Changes that get deprioritised as minor for the dev team are often things I can ship the same day.',
  },
]

export default function ApproachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="approach" ref={ref} className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 50, filter: 'blur(8px)' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-10 items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-teal-dark mb-2">
                My Approach to Design
              </h3>
              <p className="text-teal-dark/50 text-sm">
                How twelve years as a developer changes every stage of the process.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-48 md:h-56 rounded-lg overflow-hidden"
            >
              <Image
                src={asset('/designprocess.jpg')}
                alt="My approach to the design process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <div className="divide-y divide-teal-medium/20">
            {steps.map((step, index) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-6"
              >
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2.5">
                  <span className="text-5xl md:text-6xl font-serif font-bold text-teal-medium/25 leading-none tabular-nums select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-teal-content px-2.5 py-1 rounded-full ring-1 ring-teal-content/30 bg-teal-content/5 w-fit">
                    {step.stage}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-teal-dark mb-1.5 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-teal-dark/65 leading-relaxed text-[15px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
