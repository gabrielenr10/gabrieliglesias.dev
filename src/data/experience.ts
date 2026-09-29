export interface Experience {
  company: string
  role: string
  period: string
  location: string
  workMode: 'Remote' | 'Hybrid' | 'On-site'
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Datamaran',
    role: 'Full-stack Senior Software Engineer & Team Lead',
    period: 'Nov 2021 — Jul 2026',
    location: 'Valencia, Spain',
    workMode: 'Remote',
    highlights: [
      'Led an 8-person team bridging business and engineering, translating business needs into technical context, mentoring engineers, and driving AI-based workflows',
      'Bootstrapped a Module Federation microfrontend monorepo with 3 independently deployable remotes, letting Vue 3 and React modules coexist with minimal integration effort and greater team autonomy',
      'Built event-driven email notifications with Amazon SES, Python, FastAPI, and PostgreSQL, increasing the app return rate by 30%',
      'Cut the main application module size by 40% by removing 3,000+ lines of legacy and dead code, standardizing on PrimeVue, testing with Vitest and Playwright, and supporting the MongoDB to PostgreSQL migration',
    ],
  },
  {
    company: 'Optiva Media - an EPAM Company',
    role: 'Full-stack Developer',
    period: 'Dec 2018 — Nov 2021',
    location: 'Madrid, Spain',
    workMode: 'Hybrid',
    highlights: [
      'Developed Mi Vodafone TV through a complete UI redesign and application logic overhaul in Angular, plus a CRM for managing media content and the app catalog',
      'Built TV platform features including recordings, on-demand channels, and deep-links, integrating third-party APIs for Agile TV, MásMóvil television service',
    ],
  },
  {
    company: 'Synergy GB',
    role: 'Front-End Developer',
    period: 'May 2017 — Nov 2018',
    location: 'Caracas, Venezuela',
    workMode: 'Hybrid',
    highlights: [
      'Developed Banca+ Web banking modules in Angular, including batch payments and profile-based approvals',
      'Integrated two-factor authentication for operation approval, working with a small Node.js backend service',
    ],
  },
]
