'use client'

import { motion } from 'framer-motion'

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
          <p className="text-white/60 text-sm">
            Designed and developed with care
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
