export interface Project {
  id: string
  slug?: string
  title: string
  category: string
  description: string
  image: string
  link?: string
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
