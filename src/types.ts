export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  headline: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl: string;
  category: 'systems' | 'web';
  neonColor: 'lime' | 'cyan' | 'amber' | 'pink' | 'violet';
  metrics?: { label: string; value: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
    explanation: string;
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  neonColor: string;
  skills: {
    name: string;
    level: string;
    highlight?: string;
  }[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  details: string[];
  highlight?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  badge: string;
  badgeColor: 'lime' | 'cyan' | 'amber' | 'violet';
  link?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  skillsCovered: string[];
  badgeColor: 'lime' | 'cyan' | 'amber';
}

export interface TrainingItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  bullets: string[];
  techStack: string[];
}

export interface CloudNode {
  id: string;
  title: string;
  role: string;
  description: string;
  status: 'online' | 'processing' | 'standby';
  latency: string;
  icon: string;
}
