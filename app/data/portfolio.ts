import { 
  NavigationItem, 
  Project, 
  Experience, 
  SkillCategory, 
  TechIcon, 
  ContactInfo,
  SEOData 
} from '../types';

// Navigation Data
export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Personal Information
export const personalInfo = {
  name: 'John Developer',
  title: 'Full Stack Developer & UI/UX Designer',
  bio: 'I create beautiful, functional, and user-centered digital experiences that solve real-world problems with clean code and thoughtful design.',
  profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Snoop_Dogg_2019_by_Glenn_Francis.jpg/800px-Snoop_Dogg_2019_by_Glenn_Francis.jpg',
  aboutImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
};

// Statistics
export const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' }
];

// Technology Icons
export const techIcons: TechIcon = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
};

// Skills Data
export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'RESTful APIs'],
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code', 'Linux'],
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management'],
    iconUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop'
  }
];

// Projects Data
export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, PostgreSQL, and Stripe integration. Features include user authentication, product management, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2339&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather and forecasts for multiple cities with beautiful data visualizations.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'Chart.js', 'Weather API', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

// Experience Data
export const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Led development of multiple web applications using React, Node.js, and cloud technologies. Mentored junior developers and collaborated with cross-functional teams.',
    achievements: [
      'Increased application performance by 40%',
      'Led a team of 5 developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and landing pages for various clients. Worked closely with designers to implement pixel-perfect UI components.',
    achievements: [
      'Delivered 20+ client projects on time',
      'Improved website loading speed by 50%',
      'Mentored 3 junior developers'
    ]
  },
  {
    title: 'Junior Web Developer',
    company: 'Startup Solutions',
    period: '2019 - 2020',
    description: 'Started career building web applications with modern JavaScript frameworks. Gained experience in full-stack development and agile methodologies.',
    achievements: [
      'Built 10+ web applications from scratch',
      'Learned React, Node.js, and database management',
      'Contributed to open source projects'
    ]
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'City, Country'
};

// Social Media Links
export const socialLinks = {
  linkedin: '#',
  github: '#',
  twitter: '#'
};

// SEO Data
export const seoData: SEOData = {
  title: 'John Developer - Full Stack Developer & UI/UX Designer',
  description: 'Professional portfolio of John Developer, a full stack developer and UI/UX designer specializing in React, Next.js, and modern web technologies.',
  keywords: [
    'full stack developer',
    'react developer',
    'next.js',
    'typescript',
    'web development',
    'ui/ux design',
    'portfolio'
  ]
};

// Theme Colors
export const colors = {
  primary: '#2563eb',
  secondary: '#f1f5f9',
  accent: '#3b82f6',
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  }
};