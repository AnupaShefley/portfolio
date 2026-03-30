import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const DesignSystemContent = dynamic(() => import('./DesignSystemContent'))

export const metadata: Metadata = {
  title: 'EcoFleet Design System | Anupa Shefley',
  description:
    'A shared visual and interaction language built for the EcoFleet project — covering colour, typography, spacing, components, data visualisation and feedback patterns.',
}

export default function DesignSystemPage() {
  return <DesignSystemContent />
}
