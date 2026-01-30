'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-6">
        {/* Main About section: image on right (girlriver.jpg), teal overlay on left */}
        <div className="relative">
          <div className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
            {/* Background image - right side, full height */}
            <div className="absolute inset-0">
              <Image
                src="/girlriver.jpg"
                alt=""
                fill
                className="object-cover object-right"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            {/* Teal overlay box - left, ~one-third width, overlapping image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 bottom-0 w-full sm:w-2/3 md:w-1/2 lg:w-[38%] bg-teal-content p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs md:text-sm uppercase tracking-widest text-white font-medium mb-3"
              >
                Prepare Yourself
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6"
              >
                About Me
              </motion.h2>

              <motion.a
                href="#skills"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-xs md:text-sm uppercase tracking-widest text-white underline underline-offset-4 decoration-white/90 hover:decoration-white transition-all w-fit"
              >
                Let&apos;s Dig In
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Beginnings section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 md:mt-32 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-teal-dark mb-6">
              Beginnings
            </h3>
            <p className="text-teal-dark/80 leading-relaxed text-lg">
              I have been fortunate to have spent my childhood in Dubai where they say East meets the West. 
              Growing up in the midst of so many cultures truly shaped my thoughts and ideas. They have helped 
              me to understand and cater to different people with diverse needs and beliefs.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-4 border-teal-light/30">
            <Image
              src="/dubai.jpg"
              alt="Dubai skyline"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
