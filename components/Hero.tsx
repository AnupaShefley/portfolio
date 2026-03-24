'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from 'framer-motion'
import { asset } from '@/lib/asset'

const INTRO_DELAY = 0.9

// clip-path inset() with 0 top/bottom clips descenders (e.g. “g”, “y”); negative em keeps ink visible.
const clipY = '-0.5em'

export default function Hero() {
  const { scrollY } = useScroll()

  // Scroll-reactive parallax: text scales down, blurs, and fades as user scrolls
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.92])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroBlur = useTransform(scrollY, [0, 500], [0, 10])
  const heroBlurStr = useTransform(heroBlur, (v: number) => `blur(${v}px)`)
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0])

  // Mouse-following spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 })
  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${smoothX}px ${smoothY}px, rgba(130,196,187,0.15), transparent 70%)`

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    },
    [mouseX, mouseY]
  )

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 sticky top-0 z-0"
      onMouseMove={handleMouseMove}
    >
      {/* Background stack only — overflow hidden here so hero text is never clipped by the section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={asset('/Landing.jpg')}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Softer overlay — reduced from 82% to ~55% so the image breathes */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(180deg, rgba(224,242,241,0.62) 0%, rgba(224,242,241,0.5) 50%, rgba(224,242,241,0.62) 100%)',
          }}
        />

        {/* Animated gradient mesh — slowly shifting coloured blobs */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `
            radial-gradient(ellipse at 20% 50%, rgba(130,196,187,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(78,124,126,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(46,71,60,0.15) 0%, transparent 50%)
          `,
            backgroundSize: '200% 200%',
            animation: 'meshShift 20s ease infinite',
          }}
        />

        {/* Mouse-following spotlight (desktop only) */}
        <motion.div
          className="absolute inset-0 z-[3] pointer-events-none hidden md:block"
          style={{ background: spotlightBg }}
        />
      </div>

      {/* Parallax wrapper — scales down, blurs, and fades on scroll */}
      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          filter: heroBlurStr,
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* "Designer" — clip-path reveal from left (no overflow-hidden: it clipped descenders on "g") */}
          <div className="relative z-[1] mb-3 md:mb-6 pb-1 md:pb-2">
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-teal-content block tracking-tight leading-normal drop-shadow-[0_2px_8px_rgba(224,242,241,0.9)]"
              initial={{ clipPath: `inset(${clipY} 100% ${clipY} 0)`, opacity: 0 }}
              animate={{ clipPath: `inset(${clipY} 0% ${clipY} 0)`, opacity: 1 }}
              transition={{
                delay: INTRO_DELAY + 0.6,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Designer
            </motion.span>
          </div>

          {/* Main name — clip-path reveals with stagger */}
          <h1 className="relative z-0 text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-teal-dark flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-8 drop-shadow-[0_0_40px_rgba(130,196,187,0.12)]">
            <motion.span
              initial={{ clipPath: `inset(${clipY} 100% ${clipY} 0)`, opacity: 0 }}
              animate={{ clipPath: `inset(${clipY} 0% ${clipY} 0)`, opacity: 1 }}
              transition={{
                delay: INTRO_DELAY,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ANUPA
            </motion.span>
            <motion.span
              initial={{ clipPath: `inset(${clipY} 0 ${clipY} 100%)`, opacity: 0 }}
              animate={{ clipPath: `inset(${clipY} 0 ${clipY} 0)`, opacity: 1 }}
              transition={{
                delay: INTRO_DELAY + 0.15,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              SHEFLEY
            </motion.span>
          </h1>

          {/* "Developer" — clip-path reveal from right */}
          <div className="relative z-[1] mt-2 md:mt-4 md:text-right pb-1 md:pb-2">
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-teal-content block tracking-tight leading-normal drop-shadow-[0_2px_8px_rgba(224,242,241,0.9)]"
              initial={{ clipPath: `inset(${clipY} 0 ${clipY} 100%)`, opacity: 0 }}
              animate={{ clipPath: `inset(${clipY} 0 ${clipY} 0)`, opacity: 1 }}
              transition={{
                delay: INTRO_DELAY + 0.6,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Developer
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-6 md:mt-8 text-center text-sm md:text-base text-teal-dark/70 font-medium tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO_DELAY + 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            UX / UI Designer — turning complex workflows into intuitive products
          </motion.p>

        </div>
      </motion.div>

      {/* Scroll-down indicator — fades out as user scrolls */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: INTRO_DELAY + 1.8, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-teal-dark/60">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-teal-dark/40 to-transparent"
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
