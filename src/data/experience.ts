export interface Experience {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Freelance',
    role: 'Software Engineer',
    period: '2023 — Present',
    location: 'Remote',
    highlights: [
      'Build responsive Astro and TypeScript sites with Tailwind CSS',
      'Set up CI pipelines with preview deploys and automated checks',
      'Improved Lighthouse performance and accessibility scores to 95+',
    ],
  },
  {
    company: 'Tech Consultancy',
    role: 'Frontend Developer',
    period: '2021 — 2023',
    location: 'Hybrid',
    highlights: [
      'Shipped component libraries used across multiple client projects',
      'Collaborated with designers to implement mobile-first layouts',
      'Reduced bundle size by migrating legacy pages to static output',
    ],
  },
]
