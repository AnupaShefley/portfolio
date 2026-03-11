import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const NavbarContent = dynamic(() => import('./NavbarContent'))

export const metadata: Metadata = {
  title: 'Navigation Bar Redesign | Anupa Shefley',
  description:
    'Case study on redesigning the global navigation bar to improve findability, consistency and user flows across the product.',
}

export default function NavbarPage() {
  return <NavbarContent />
}
