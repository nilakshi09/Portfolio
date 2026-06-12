import {
  Github,
  Linkedin,
  Mail,
  Server,
  Cpu,
  Database,
  Cloud,
  CircuitBoard,
} from 'lucide-react';

// Navigation
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// Social Links
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/nilakshi09',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/nilakshi-rahangdale',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:nilakshirahangdale31@gmail.com',
    icon: Mail,
  },
];

// Stats
export const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '1', label: 'Internship' },
  { value: '95%', label: 'Sensor Accuracy (Pramaan)' },
  { value: '4+', label: 'Technology Stacks' },
];

// Skills
export const skillGroups = [
  {
    category: 'Frontend',
    icon: Server,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'HTML',
      'CSS',
    ],
  },
  {
    category: 'Backend',
    icon: Cpu,
    skills: ['Node.js', 'Express.js', 'Fastify', 'REST APIs'],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Git', 'GitHub', 'Vercel', 'AWS', 'Postman'],
  },
  {
    category: 'IoT & Systems',
    icon: CircuitBoard,
    skills: [
      'ESP32',
      'Sensor Integration',
      'Real-Time Data Pipelines',
      'Arduino',
    ],
  },
];

// Projects
export const projects = [
  {
    id: 1,
    title: 'FindMyTrial',
    category: 'AI · Healthcare',
    problem:
      'Patients waste weeks searching for trials they don\'t qualify for.',
    description:
      'AI-powered clinical trial matching platform for patients and caregivers. Matches users to relevant trials based on condition, location, and eligibility criteria using intelligent filtering and natural language inputs.',
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'OpenAI API',
      'Tailwind CSS',
    ],
    github: 'https://github.com/nilakshi09',
    live: null,
    mockUI: ['Phase II', 'Oncology', 'Recruiting'],
  },
  {
    id: 2,
    title: 'SpotBot',
    category: 'SaaS · Marketing',
    problem:
      'Marketing agencies lose budget to influencer accounts with fake engagement.',
    description:
      'Influencer fraud detection SaaS for marketing agencies. Analyzes follower authenticity, engagement patterns, and audience quality to surface fraudulent accounts before campaigns launch.',
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
      'Framer Motion',
    ],
    github: 'https://github.com/nilakshi09',
    live: null,
    mockUI: ['Fake Followers 34%', 'Engagement Drop ↓'],
  },
  {
    id: 3,
    title: 'SubSplit',
    category: 'Consumer · FinTech',
    problem:
      'Splitting subscription costs between friends is still done over WhatsApp and guesswork.',
    description:
      'Automated subscription cost-splitting platform for friend groups. Tracks shared plans, calculates each person\'s share, and streamlines payment coordination without manual back-and-forth.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/nilakshi09',
    live: null,
  },
  {
    id: 4,
    title: 'Project Pramaan',
    category: 'IoT · Research',
    problem:
      'Manual water quality testing in rural areas is slow, infrequent, and error-prone.',
    description:
      'ESP32-based IoT water quality monitoring system developed under PIEMR research. Measures pH, TDS, turbidity, and temperature in real time, streams data to a live dashboard, and triggers alerts when parameters breach safe thresholds.',
    stack: [
      'ESP32',
      'Node.js',
      'PostgreSQL',
      'React',
      'Real-Time Pipelines',
      'Sensor APIs',
    ],
    github: 'https://github.com/nilakshi09',
    live: null,
    mockUI: ['pH 7.2 ✓', 'TDS 480ppm ⚠'],
  },
  {
    id: 5,
    title: 'ZenSpace',
    category: 'AI · Mental Health',
    problem:
      'Students lack accessible, personalized tools for daily mental wellness support.',
    description:
      'Digital mental wellness platform with mood tracking, peer support forums, and habit gamification. Integrates OpenAI and TensorFlow for personalized emotional support. Includes admin dashboards to monitor student wellness trends and flag at-risk patterns.',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'OpenAI API',
      'TensorFlow',
      'MongoDB',
    ],
    github: 'https://github.com/nilakshi09',
    live: null,
  },
  {
    id: 6,
    title: 'WanderLust',
    category: 'Full-Stack · PropTech',
    problem:
      'Small rental hosts need a simple way to list properties and manage bookings without complex platforms.',
    description:
      'Property listing and rental management platform. Supports full CRUD operations for listings, RESTful routing, user authentication, and robust error handling — built on a clean MVC backend architecture.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'REST APIs'],
    github: 'https://github.com/nilakshi09',
    live: null,
  },
];

// Experience
export const experience = [
  {
    type: 'work',
    role: 'Full-Stack Developer Intern',
    company: 'NexisparkX Technologies',
    period: 'March 2026 – May 2026',
    badge: 'Internship',
    outcomes: [
      'Developed and maintained ERP modules handling inventory, HR, and workflow automation',
      'Contributed to an LMS platform — built course management, progress tracking, and role-based access',
      'Led frontend and backend development for Project Pramaan — real-time IoT water quality monitoring',
      'Built and integrated RESTful APIs consumed by multiple internal services',
      'Optimized component rendering and API response times, improving overall platform performance',
    ],
  },
];

// Contact Info
export const contactInfo = [
  {
    label: 'EMAIL',
    value: 'nilakshirahangdale31@gmail.com',
    href: 'mailto:nilakshirahangdale31@gmail.com',
  },
  {
    label: 'GITHUB',
    value: 'github.com/nilakshi09',
    href: 'https://github.com/nilakshi09',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/nilakshi-rahangdale',
    href: 'https://linkedin.com/in/nilakshi-rahangdale',
  },
];

// Hero rotating titles
export const heroTitles = [
  'Full-Stack Developer',
  'Frontend Engineer',
  'Next.js Specialist',
  'IoT Systems Builder',
  'Open to Software Engineering Roles',
];

// Hero showcase cards
export const heroShowcaseCards = [
  {
    tag: 'AI · Healthcare',
    title: 'FindMyTrial',
    subtitle: 'AI-powered clinical trial matching',
    mockUI: ['Phase II', 'Oncology', 'Recruiting'],
    rotation: '-2deg',
  },
  {
    tag: 'SaaS · Marketing',
    title: 'SpotBot',
    subtitle: 'Influencer fraud detection platform',
    mockUI: ['Fake Followers 34%', 'Engagement Drop ↓'],
    rotation: '0deg',
  },
  {
    tag: 'IoT · Research',
    title: 'Project Pramaan',
    subtitle: 'Real-time water quality monitoring',
    mockUI: ['pH 7.2 ✓', 'TDS 480ppm ⚠'],
    rotation: '2deg',
  },
];
