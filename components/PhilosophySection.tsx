'use client'

import { motion } from 'framer-motion'

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative z-10 min-h-[60vh] md:min-h-[50vh] flex items-center justify-center py-24 md:py-32"
    >
      {/* Distinct background - darker panel so it stands out over the hero */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Hi..I am a developer and I love to solve problems.
            <br />
            So what am I doing with a portfolio site?
            <br />
            Well, I want to solve them{' '}
            <strong className="font-semibold text-teal-light/90">before</strong>{' '}
            they have a chance to become a problem!
          </p>
        </div>
      </motion.div>
    </section>
  )
}
