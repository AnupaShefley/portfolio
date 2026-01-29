'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sticky top-0 z-0"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background z-0" />

      {/* Animated gradient orbs - futuristic glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-light rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-medium rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle grid overlay for futuristic feel */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46,71,60,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46,71,60,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Developer - scrolls in slowly from left to right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 overflow-hidden"
          >
            <motion.span
              className="text-6xl md:text-8xl font-sans font-light text-teal-light/60 block mb-4"
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 2.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Developer
            </motion.span>
          </motion.div>

          {/* Main name - staggered slide-up and fade */}
          <motion.h1
            className="text-6xl md:text-9xl font-serif font-bold text-teal-dark mb-8 flex flex-col md:flex-row md:justify-center md:gap-8 drop-shadow-[0_0_40px_rgba(130,196,187,0.15)]"
          >
            <motion.span
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ANUPA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.8,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              SHEFLEY
            </motion.span>
          </motion.h1>

          {/* Designer - scrolls in slowly from right to left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 overflow-hidden"
          >
            <motion.span
              className="text-6xl md:text-8xl font-sans font-light text-teal-light/60 block"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{
                delay: 2.6,
                duration: 2.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Designer
            </motion.span>
          </motion.div>

          {/* Decorative teal block - appears after hero sequence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 4.8 }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-teal-medium/30 rounded-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  )
}
