import type { Project } from '@/types'
import { asset } from '@/lib/asset'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'highbury-primary',
    title: 'Highbury Primary School',
    category: 'Research / Usability Study',
    description: 'A comprehensive usability study and research project for a primary school website redesign.',
    image: asset('/highbury.jpg'),
    active: true,
  },
  {
    id: '2',
    slug: 'calendarredesign',
    title: 'iOS Calendar Redesign for Conference Meetings',
    category: 'User Research and Design',
    description: 'User research and design project focusing on improving calendar application usability.',
    image: asset('/ios.jpg'),
    active: true,
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    category: 'Full-Stack Development',
    description: 'Complete e-commerce solution with modern UI/UX and robust backend architecture.',
    image: asset('/designprocess.jpg'),
    active: false, // Set to false to hide, true to show
  },
  {
    id: '4',
    slug: 'ecofleet',
    title: 'EcoFleet',
    category: 'Research, Design and stakeholder alignment',
    description: 'Fleet management and mobility solution focused on sustainability and efficiency.',
    image: asset('/designprocess.jpg'), // TODO: Replace with EcoFleet image
    company: 'Dynamon',
    role: 'UX/UI Designer',
    active: true,
  },
  {
    id: '5',
    slug: 'zero-webapp',
    title: 'ZERO Webapp',
    category: 'Web Application / Data Platform',
    description: 'Enterprise web application for managing and visualising operational data at scale.',
    image: asset('/designprocess.jpg'),
    active: true,
  },
  {
    id: '6',
    slug: 'zero2',
    title: 'ZERO2 Webapp',
    category: 'Master Data Management',
    description:
      'Case study mirroring the Murphy Oil master data management web experience in a web-native layout.',
    image: asset('/designprocess.jpg'),
    active: true,
  },
]
