'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { asset } from '@/lib/asset'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sticky top-0 z-0"
    >
      {/* Background image - landing.jpg fills the hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset('/Landing.jpg')}
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
          {/* Designer - above name, scrolls in from left */}
          <motion.div
            className="overflow-hidden mb-2 md:mb-4 pb-3 md:pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-teal-content block tracking-tight drop-shadow-[0_2px_8px_rgba(224,242,241,0.9)]"
              initial={{ x: '-120%' }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.9,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Designer
            </motion.span>
          </motion.div>

          {/* Main name - giant to small with bounce */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-teal-dark flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-8 drop-shadow-[0_0_40px_rgba(130,196,187,0.12)]"
            initial={{ scale: 5, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 14,
              mass: 0.8,
            }}
          >
            <motion.span>ANUPA</motion.span>
            <motion.span>SHEFLEY</motion.span>
          </motion.h1>

          {/* Developer - below name, scrolls in from right */}
          <motion.div
            className="mt-2 md:mt-4 overflow-hidden md:text-right pb-3 md:pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-teal-content block tracking-tight drop-shadow-[0_2px_8px_rgba(224,242,241,0.9)]"
              initial={{ x: '120%' }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.9,
                duration: 1,
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
