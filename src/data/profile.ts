export interface Profile {
  name: string
  role: string
  tagline: string
  summary: string
  imageSrc: string
  imageAlt: string
}

export const profile: Profile = {
  name: 'Gabriel Iglesias',
  role: 'Software Engineer',
  tagline:
    '8+ years delivering production software across ESG, TV, banking, and telecom.',
  summary:
    'Full-stack software engineer with 8+ years of experience across ESG, TV, online banking, and telecommunications. Experienced in technical leadership and hands-on full-stack development — leading teams, driving technical decisions, and building scalable, high-quality software. Passionate about AI and LLM-powered workflows for developer productivity, software architecture automation, and product delivery.',
  imageSrc: '/avatar-placeholder.svg',
  imageAlt: 'Empty avatar placeholder',
}
