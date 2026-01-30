'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sticky top-0 z-0"
    >
      {/* Background image - landing.jpg fills the hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Landing.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Soft overlay: light blue-green tint so image is subtle and text is readable (reference) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(224,242,241,0.82) 0%, rgba(224,242,241,0.72) 50%, rgba(224,242,241,0.82) 100%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Designer - top left, bold and visible above ANUPA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mb-2 md:mb-4 pb-3 md:pb-4"
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-teal-content block tracking-tight drop-shadow-[0_2px_8px_rgba(224,242,241,0.9)]"
              initial={{ opacity: 0, x: '-120%', scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Designer
            </motion.span>
          </motion.div>

          {/* Main name - ANUPA left, SHEFLEY right, dark green serif (reference) */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-teal-dark flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-8 drop-shadow-[0_0_40px_rgba(130,196,187,0.12)]"
          >
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ANUPA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              SHEFLEY
            </motion.span>
          </motion.h1>

          {/* Developer - below right, bold and visible below SHEFLEY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 md:mt-4 overflow-hidden md:text-right pb-3 md:pb-4"
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-teal-content block tracking-tight drop-shadow-[0_2px_8px_rgba(224,242,241,0.9)]"
              initial={{ opacity: 0, x: '120%', scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 2,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Developer
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
