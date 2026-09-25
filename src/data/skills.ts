export interface SkillGroup {
  area: 'Frontend' | 'Backend' | 'CI/CD' | 'Tools'
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    area: 'Frontend',
    items: ['TypeScript', 'Astro', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  { area: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma'] },
  { area: 'CI/CD', items: ['GitHub Actions', 'pnpm', 'Vercel', 'Netlify'] },
  { area: 'Tools', items: ['Git', 'VS Code', 'Docker', 'Figma'] },
]
