export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Desarrollo' | 'QA & Soporte' | 'Full Stack';
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  year: string;
  status: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  phoneRaw: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  githubUrl: string;
  summary: string;
  stats: {
    label: string;
    value: string;
  }[];
}
