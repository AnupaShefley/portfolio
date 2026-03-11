import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const SyntheticsContent = dynamic(() => import('./SyntheticsContent'))

export const metadata: Metadata = {
  title: 'Synthetics – Fleet Scheduling Redesign | Anupa Shefley',
  description:
    'Case study: redesigning the Synthetic Telematics scheduling interface from a hierarchical table into a calendar-based system for 50+ vehicles.',
}

export default function SyntheticsPage() {
  return <SyntheticsContent />
}
