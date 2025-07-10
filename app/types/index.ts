// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
}

// Project Types
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

// Experience Types
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

// Skills Types
export interface SkillCategory {
  title: string;
  skills: string[];
  iconUrl: string;
}

export interface TechIcon {
  [key: string]: string;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}