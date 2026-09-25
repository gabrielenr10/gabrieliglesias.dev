export interface Profile {
  name: string
  role: string
  tagline: string
  summary: string
  imageSrc: string
  imageAlt: string
}

export const profile: Profile = {
  name: 'Gabriel',
  role: 'Software Engineer',
  tagline: 'I build fast, accessible web applications.',
  summary:
    'Full-stack Software Engineer focused on TypeScript, Astro, and clean component architecture. I ship responsive, static-first sites with a strong eye for maintainability.',
  imageSrc: '/profile.jpg',
  imageAlt: 'Portrait of Gabriel, software engineer',
}
