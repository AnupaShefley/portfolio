import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const PortfolioSiteContent = dynamic(() => import('./PortfolioSiteContent'))

export const metadata: Metadata = {
  title: 'Portfolio Site | Anupa Shefley',
  description:
    'A look behind the scenes — how I designed and developed this portfolio from scratch using Next.js, Tailwind CSS, Framer Motion and AI-assisted workflows.',
}

export default function PortfolioSitePage() {
  return <PortfolioSiteContent />
}
