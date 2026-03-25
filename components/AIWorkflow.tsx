'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function ResearchIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal-content"
    >
      <motion.circle
        cx="18"
        cy="18"
        r="10"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      />
      <motion.line
        x1="25.5"
        y1="25.5"
        x2="34"
        y2="34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
      />
      <motion.circle
        cx="18"
        cy="18"
        r="4"
        fill="currentColor"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.4 }}
      />
    </motion.svg>
  )
}

function DesignIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal-content"
    >
      <motion.path
        d="M28 6L34 12L14 32H8V26L28 6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
      />
      <motion.line
        x1="24"
        y1="10"
        x2="30"
        y2="16"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.3, ease: 'easeOut' }}
      />
      <motion.line
        x1="8"
        y1="32"
        x2="18"
        y2="32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}
      />
    </motion.svg>
  )
}

function BuildIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal-content"
    >
      <motion.path
        d="M12 8L4 20L12 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
      <motion.path
        d="M28 8L36 20L28 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      />
      <motion.line
        x1="23"
        y1="6"
        x2="17"
        y2="34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
      />
    </motion.svg>
  )
}

const phases = [
  {
    stage: 'Research',
    description:
      'Synthesises competitive landscapes, user data, and edge cases in hours — not weeks.',
    icon: ResearchIcon,
  },
  {
    stage: 'Design',
    description:
      'Generates layout explorations, copy variants, and component ideas at the speed of thinking.',
    icon: DesignIcon,
  },
  {
    stage: 'Build',
    description:
      'Translates designs into working React / Next.js prototypes the same day.',
    icon: BuildIcon,
  },
]

export default function AIWorkflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative z-10 py-14 md:py-20 bg-background">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 50%, rgba(130,196,187,0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, rgba(78,124,126,0.15) 0%, transparent 50%)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-teal-content/60 mb-4 text-center"
        >
          <span className="text-violet-500 mr-1.5">✦</span>
          AI in my workflow
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-serif font-bold text-teal-dark leading-snug mb-12 text-center max-w-2xl mx-auto"
        >
          AI runs through every phase of how I work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.stage}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.25 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-xl bg-white/70 backdrop-blur-sm ring-1 ring-teal-medium/20 shadow-sm p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-light/20 ring-1 ring-teal-medium/15 flex items-center justify-center mb-4">
                  <Icon />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-violet-500 mb-1.5">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-lg font-serif font-bold text-teal-dark mb-2">
                  {phase.stage}
                </h3>
                <p className="text-teal-dark/60 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
