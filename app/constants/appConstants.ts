export const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    path: "M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z",
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M18.2 2.3h3.3l-7.2 8.3 8.5 11.2h-6.7l-5.2-6.8-6 6.8H1.6l7.7-8.8L1.2 2.3H8l4.7 6.2zm-1.2 17.5h1.8L7 4.2H5.1z",
  },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Passion for Coding" }
];

export const codeLines: { t: string; c: string }[] = [
  { t: "const dev = {", c: "text-violet-300" },
  { t: '  name: "Neeraj Kukreti",', c: "text-foreground" },
  { t: '  role: "Software Developer",', c: "text-foreground" },
  { t: '  stack: [MERN Stack,React Native,Next.js],', c: "text-foreground" },
  { t: '  passion: "problem-solving",', c: "text-cyan-300" },
  { t: "  available: true,", c: "text-emerald-300" },
  { t: "};", c: "text-violet-300" },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  gradient: string;
  pattern: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Nebula Analytics',
    category: 'Dashboard',
    year: '2026',
    description: 'A real-time analytics dashboard with live charts, custom filters and a command palette.',
    tags: ['React', 'D3.js', 'WebSocket', 'Tailwind'],
    gradient: 'from-violet-600 via-fuchsia-500 to-cyan-400',
    pattern: 'radial',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p2',
    title: 'Lumen Commerce',
    category: 'E-Commerce',
    year: '2025',
    description: 'A headless storefront with buttery transitions, cart animations and instant search.',
    tags: ['Next.js', 'Stripe', 'GSAP', 'TS'],
    gradient: 'from-cyan-400 via-sky-500 to-indigo-500',
    pattern: 'rings',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p3',
    title: 'Pulse Music',
    category: 'Media',
    year: '2025',
    description: 'An immersive web music player with 3D visualizer and gesture-driven navigation.',
    tags: ['React', 'Three.js', 'WebAudio', 'Framer'],
    gradient: 'from-rose-500 via-violet-600 to-cyan-400',
    pattern: 'waves',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p4',
    title: 'Atlas Docs',
    category: 'Developer Tool',
    year: '2024',
    description: 'A documentation platform with AI-assisted search, live code blocks and dark theming.',
    tags: ['Next.js', 'MDX', 'Shiki', 'Postgres'],
    gradient: 'from-emerald-400 via-cyan-400 to-violet-500',
    pattern: 'grid',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export type Skill = {
  name: string;
  icon: string;
};

export const skills: Skill[] = [
  { name: 'HTML5', icon: 'Code' },
  { name: 'CSS3', icon: 'Palette' },
  { name: 'JavaScript', icon: 'Braces' },
  { name: 'React', icon: 'Atom' },
  { name: 'Next.js', icon: 'Triangle' },
  { name: 'GSAP', icon: 'Zap' },
  { name: 'Tailwind', icon: 'Wind' },
  { name: 'Node.js', icon: 'Hexagon' },
];


export type Skills = {
  name: string;
  icon: string;
  level: number;
};

export const MySkills: Skills[] = [
  { name: 'HTML5', icon: 'Code', level: 95 },
  { name: 'CSS3', icon: 'Palette', level: 93 },
  { name: 'JavaScript', icon: 'Braces', level: 90 },
  { name: 'React', icon: 'Atom', level: 92 },
  { name: 'Next.js', icon: 'Triangle', level: 85 },
  { name: 'GSAP', icon: 'Zap', level: 80 },
  { name: 'Tailwind', icon: 'Wind', level: 95 },
  { name: 'Node.js', icon: 'Hexagon', level: 78 },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: 'e1',
    role: 'Senior Front-End Engineer',
    company: 'Vertex Studio',
    period: '2023 — Present',
    location: 'San Francisco, CA',
    description: 'Leading the front-end practice for a creative digital agency serving startups and Fortune 500 brands.',
    highlights: [
      'Architected a motion design system used across 30+ client projects',
      'Cut average page load times by 40% with code-splitting and image pipelines',
      'Mentored 4 junior developers on React, GSAP and accessibility',
    ],
    tags: ['React', 'Next.js', 'GSAP', 'Three.js'],
  },
  {
    id: 'e2',
    role: 'Front-End Developer',
    company: 'Lattice Labs',
    period: '2021 — 2023',
    location: 'Remote',
    description: 'Built and maintained a design-system-driven product UI for a B2B SaaS analytics platform.',
    highlights: [
      'Shipped a component library adopted by 6 product teams',
      'Implemented real-time data visualizations with D3 and WebSocket',
      'Drove a design-to-code workflow that halved handoff time',
    ],
    tags: ['React', 'TypeScript', 'D3.js', 'Storybook'],
  },
  {
    id: 'e3',
    role: 'UI Developer',
    company: 'Brightwave Agency',
    period: '2019 — 2021',
    location: 'New York, NY',
    description: 'Crafted marketing sites and interactive landing experiences for high-growth tech clients.',
    highlights: [
      'Delivered 20+ pixel-perfect marketing pages with scroll-driven animation',
      'Built reusable animation primitives in Framer Motion',
      'Collaborated closely with designers in a tight feedback loop',
    ],
    tags: ['JavaScript', 'Framer Motion', 'Tailwind', 'Vite'],
  },
];
