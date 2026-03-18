'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { hashLink, pathLink } from '@/lib/link'

const navItems = [
  { label: 'About', href: '/about', isPage: true },
  { label: 'Work', href: '/#work', isPage: false },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pathname = usePathname()
  const isHome = pathname === '/'

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (href.startsWith('/#')) {
      const hash = href.slice(1)
      if (pathname === '/') {
        const element = document.querySelector(hash)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // Use basePath-aware link when navigating from other pages
        window.location.href = hashLink(href)
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-serif italic text-teal-dark font-semibold hover:opacity-80 transition-opacity"
        >
          Anupa Shefley
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isPage ? (
              <Link
                key={item.href}
                href={pathLink(item.href)}
                className="text-teal-dark hover:text-teal-medium transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={hashLink(item.href)}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-teal-dark hover:text-teal-medium transition-colors font-medium"
              >
                {item.label}
              </a>
            )
          )}
          <Link
            href={hashLink('/#contact')}
            onClick={(e) => isHome && scrollToSection(e, '/#contact')}
            className="inline-block"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-teal-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-content transition-colors"
            >
              Let's chat
            </motion.span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-teal-dark z-50"
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-sm border-t border-teal-medium/20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.href}
                    href={pathLink(item.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-teal-dark hover:text-teal-medium transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={hashLink(item.href)}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-teal-dark hover:text-teal-medium transition-colors font-medium py-2"
                  >
                    {item.label}
                  </a>
                )
              )}
              <Link
                href={hashLink('/#contact')}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block"
              >
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="block bg-teal-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-content transition-colors text-center mt-2"
                >
                  Let's chat
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
