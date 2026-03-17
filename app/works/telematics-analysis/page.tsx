import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const TelematicsContent = dynamic(() => import('./TelematicsContent'))

export const metadata: Metadata = {
  title: 'Telematics Analysis | Anupa Shefley',
  description:
    'A redesign of a telematics duty-cycle analysis workflow – from raw journeys and parameters to clear, quality-checked duty cycles that teams can trust.',
}

export default function TelematicsAnalysisPage() {
  return <TelematicsContent />
}
