'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FiMail, FiLinkedin } from 'react-icons/fi'
import type { ContactFormData } from '@/types'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-background">
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
          <p className="text-teal-dark/70 text-center mb-12">
            Have a project in mind? I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-teal-dark mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-teal-medium/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-medium focus:border-transparent transition-all"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-teal-dark mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-teal-medium/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-medium focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-teal-dark mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 border border-teal-medium/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-medium focus:border-transparent transition-all"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-teal-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-teal-medium/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-medium focus:border-transparent transition-all resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-teal-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-content transition-colors"
              >
                Send Message
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  Something went wrong. Please try again or contact me directly via email.
                </motion.div>
              )}
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                  Get in Touch
                </h3>
                <p className="text-teal-dark/80 leading-relaxed mb-8">
                  Feel free to reach out through the form or connect with me on social media.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:contact@anupashefley.com"
                  className="flex items-center gap-4 text-teal-dark hover:text-teal-medium transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-medium/20 flex items-center justify-center group-hover:bg-teal-medium/30 transition-colors">
                    <FiMail className="w-5 h-5 text-teal-dark" />
                  </div>
                  <span className="font-medium">contact@anupashefley.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/anupashefley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-teal-dark hover:text-teal-medium transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-medium/20 flex items-center justify-center group-hover:bg-teal-medium/30 transition-colors">
                    <FiLinkedin className="w-5 h-5 text-teal-dark" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
