import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const EcoFleetContent = dynamic(() => import('./EcoFleetContent'))

export const metadata: Metadata = {
  title: 'EcoFleet | Anupa Shefley',
  description:
    'Decision-support and planning tool helping commercial fleets transition from conventional fuels to cleaner alternatives — designed and prototyped using AI-assisted development in React and Next.js.',
}

export default function EcoFleetPage() {
  return <EcoFleetContent />
}
