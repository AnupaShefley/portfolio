'use client'

import { motion } from 'framer-motion'
import { FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-teal-dark text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/80 mb-4">
            © {currentYear} Anupa Shefley. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mb-6">
            Designed and developed with care
          </p>
          <div className="flex justify-center">
            <a
              href="https://linkedin.com/in/anupashefley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
