'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-dark mb-4 text-center">
            Let's Chat
          </h2>
          <div className="flex flex-col items-center gap-3 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm ring-1 ring-teal-medium/25 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-teal-dark/80 tracking-wide">
                Currently available
              </span>
            </motion.div>

            <p className="text-teal-dark/70 text-center">
              Looking for an AI-fluent designer, or have a product to prototype? I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-teal-medium/25 shadow-sm p-6 md:p-8"
            >
              <p className="text-teal-dark/80 leading-relaxed mb-6">
                The quickest way to reach me is via email or LinkedIn.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:anupa.shefley@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-dark text-white px-5 py-3 font-medium hover:bg-teal-content transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                  Email me
                </motion.a>

                <a
                  href="mailto:anupa.shefley@gmail.com"
                  className="text-sm text-teal-dark/70 underline underline-offset-4 decoration-teal-dark/30 hover:decoration-teal-dark/60 transition-colors text-center sm:text-left break-all"
                >
                  anupa.shefley@gmail.com
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-teal-medium/20">
                <a
                  href="https://linkedin.com/in/anupashefley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-teal-dark hover:text-teal-medium transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full bg-teal-medium/20 flex items-center justify-center group-hover:bg-teal-medium/30 transition-colors">
                    <FiLinkedin className="w-5 h-5 text-teal-dark" />
                  </span>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
