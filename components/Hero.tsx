'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background z-0" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-light rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-medium rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Developer/Designer labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.span
              className="text-6xl md:text-8xl font-sans font-light text-teal-light/60 block mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Developer
            </motion.span>
          </motion.div>

          {/* Main name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif font-bold text-teal-dark mb-8 flex flex-col md:flex-row md:justify-center md:gap-8"
          >
            <span>ANUPA</span>
            <span>SHEFLEY</span>
          </motion.h1>

          {/* Designer label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <motion.span
              className="text-6xl md:text-8xl font-sans font-light text-teal-light/60 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Designer
            </motion.span>
          </motion.div>

          {/* Philosophy text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-teal-dark/80 leading-relaxed">
              Hi..I am a developer and I love to solve problems.
              <br />
              So what am I doing with a portfolio site?
              <br />
              Well, I want to solve them <strong className="font-semibold">before</strong> they have a chance to become a problem!
            </p>
          </motion.div>

          {/* Decorative teal block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-teal-medium/30 rounded-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  )
}
