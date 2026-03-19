'use client'

import { motion } from 'framer-motion'

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative z-10 flex items-center justify-center py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-teal-dark/95 backdrop-blur-sm z-0" />
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(130,196,187,0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(78,124,126,0.2) 0%, transparent 50%)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-teal-light/70 mb-5"
          >
            My approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug mb-5"
          >
            Twelve years of development.{' '}
            <motion.span
              className="text-teal-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
            >
              Now applied to design.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
          >
            Most designers hand off to developers. I was one. Now, that experience shapes how I research, scope, and prototype—
            so what gets designed is actually built, and shipped faster.
          </motion.p>

        </div>
      </div>
    </section>
  )
}
