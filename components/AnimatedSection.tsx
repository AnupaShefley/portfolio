'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  /** Stagger index for child animations (optional) */
  staggerIndex?: number
  /** Custom transition delay in seconds */
  delay?: number
  /** Reduce motion for accessibility */
  reducedMotion?: boolean
}

export function AnimatedSection({
  children,
  className = '',
  staggerIndex = 0,
  delay = 0,
  reducedMotion = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', amount: 0.15 })

  if (reducedMotion) {
    return <section className={className}>{children}</section>
  }

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            delay: delay + staggerIndex * 0.06,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.section>
  )
}

interface AnimatedDivProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function AnimatedDiv({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedDivProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px', amount: 0.2 })

  const directionOffset = {
    up: { y: 36 },
    down: { y: -36 },
    left: { x: 36 },
    right: { x: -36 },
  }[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionOffset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
