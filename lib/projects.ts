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
  },
  {
    id: '2',
    slug: 'calendarredesign',
    title: 'iOS Calendar Redesign for Conference Meetings',
    category: 'User Research and Design',
    description: 'User research and design project focusing on improving calendar application usability.',
    image: asset('/ios.jpg'),
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    category: 'Full-Stack Development',
    description: 'Complete e-commerce solution with modern UI/UX and robust backend architecture.',
    image: asset('/designprocess.jpg'),
  },
]
