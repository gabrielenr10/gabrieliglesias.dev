export interface Education {
  school: string
  degree: string
  period: string
  notes?: string
}

export const education: Education[] = [
  {
    school: 'B.S. Computer Science',
    degree: 'Bachelor of Science',
    period: '2017 — 2021',
    notes: 'Focus on software engineering, databases, and web systems.',
  },
  {
    school: 'Online Certifications',
    degree: 'Continuous learning',
    period: '2021 — Present',
    notes: 'Modern TypeScript, cloud fundamentals, and CI/CD practices.',
  },
]
