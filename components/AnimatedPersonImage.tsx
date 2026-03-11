'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface AnimatedPersonImageProps {
  src: string
  alt?: string
  sizes?: string
  className?: string
  /** Stagger delay so multiple figures don't animate in sync (seconds) */
  delay?: number
}

/**
 * Person image with a subtle "alive" animation: gentle float and soft scale pulse
 * to suggest breathing / idle presence.
 */
export function AnimatedPersonImage({
  src,
  alt = '',
  sizes = '80px',
  className = '',
  delay = 0,
}: AnimatedPersonImageProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`relative w-full h-full ${className}`}
      animate={prefersReducedMotion ? {} : {
        y: [0, -5, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes={sizes}
      />
    </motion.div>
  )
}
