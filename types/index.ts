export interface Project {
  id: string
  slug?: string
  title: string
  category: string
  description: string
  image: string
  link?: string
  active?: boolean // If false, project won't be displayed. Defaults to true.
  company?: string // Company or client name
  role?: string // Specific role for this project
}

export interface Skill {
  title: string
  responsibilities: string[]
  tools: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
