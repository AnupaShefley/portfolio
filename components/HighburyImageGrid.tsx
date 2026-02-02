'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { asset } from '@/lib/asset'

const IMAGES = [
  asset('/highbury1.png'),
  asset('/highbury2.png'),
  asset('/highbury3.png'),
  asset('/highbury4.png'),
] as const

/** Shuffle array with a fixed seed so order is stable across renders. */
function shuffledWithSeed<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  let n = out.length
  const seededRandom = (i: number) => {
    const x = Math.sin(seed * 9999 + i * 12345) * 10000
    return x - Math.floor(x)
  }
  while (n > 1) {
    const i = Math.floor(seededRandom(n) * n)
    n--
    ;[out[n], out[i]] = [out[i], out[n]]
  }
  return out
}

/** Build one row of 4 image srcs from the 3 base images in random order. */
function buildRow(seed: number): string[] {
  const order = shuffledWithSeed([0, 1, 2, 3], seed)
  return order.map((i) => IMAGES[i])
}

const ROW1_IMAGES = buildRow(1)
const ROW2_IMAGES = buildRow(2)

const stagger = 0.08
const duration = 0.9
const ease = [0.22, 1, 0.36, 1] as const

export default function HighburyImageGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px', amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Map full scroll range (0→1) so rows keep moving for the whole time the section is in view
  const topRowX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -60, -120, -180, -240, -280]
  )
  const bottomRowX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 60, 120, 180, 240, 280]
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-teal-content/5 py-12 md:py-16"
      aria-label="Highbury Primary School website mockups"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Top row – enters from left, scroll moves it left */}
        <motion.div
          className="grid grid-cols-4 gap-2 md:gap-4 mb-2 md:mb-4"
          style={{ x: topRowX }}
        >
          {ROW1_IMAGES.map((src, i) => (
            <motion.div
              key={`row1-${i}`}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-teal-content/10 shadow-lg"
              initial={{ opacity: 0, x: -120 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
              transition={{
                duration,
                delay: i * stagger,
                ease,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 20vw"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row – enters from right, scroll moves it right */}
        <motion.div
          className="grid grid-cols-4 gap-2 md:gap-4"
          style={{ x: bottomRowX }}
        >
          {ROW2_IMAGES.map((src, i) => (
            <motion.div
              key={`row2-${i}`}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-teal-content/10 shadow-lg"
              initial={{ opacity: 0, x: 120 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
              transition={{
                duration,
                delay: 0.2 + i * stagger,
                ease,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 20vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
