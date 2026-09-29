export interface Education {
  school: string
  degree: string
  period: string
  notes?: string
}

export const education: Education[] = [
  {
    school: 'Simón Bolívar University',
    degree: "Bachelor's Degree in Computer Engineering",
    period: '2011 — 2018',
  },
  {
    school: 'ILAC, Canada',
    degree: 'English as a Second Language',
    period: '2015',
  },
]
