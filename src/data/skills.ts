export type SkillIconKey =
  | 'vue'
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'html'
  | 'css'
  | 'astro'
  | 'tailwind'
  | 'vitest'
  | 'playwright'
  | 'python'
  | 'fastapi'
  | 'nodejs'
  | 'postgresql'
  | 'mongodb'
  | 'pytest'
  | 'git'
  | 'docker'
  | 'aws'
  | 'claude-code'
  | 'opencode'
  | 'cursor'
  | 'mcp'

export interface SkillItem {
  name: string
  icon: SkillIconKey
}

export interface SkillGroup {
  area: 'Frontend' | 'Backend & Data' | 'Tooling & Cloud'
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    area: 'Frontend',
    items: [
      { name: 'Vue', icon: 'vue' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Vitest', icon: 'vitest' },
      { name: 'Playwright', icon: 'playwright' },
    ],
  },
  {
    area: 'Backend & Data',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Pytest', icon: 'pytest' },
    ],
  },
  {
    area: 'Tooling & Cloud',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Claude Code', icon: 'claude-code' },
      { name: 'OpenCode', icon: 'opencode' },
      { name: 'Cursor', icon: 'cursor' },
      { name: 'MCP', icon: 'mcp' },
    ],
  },
]
