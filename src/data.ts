import { Project, SkillCategory, EducationItem, AchievementItem, CertificateItem, CloudNode, TrainingItem } from './types';

export const PROFILE = {
  name: 'Shalender Singh',
  initials: 'SS',
  role: 'Computer Science Engineering Student',
  targetRole: 'Aspiring Cloud & Backend Engineer',
  university: 'Lovely Professional University',
  location: 'Phagwara, Punjab, India',
  email: 'thecodingdev9@gmail.com',
  phone: '+91 76961 39091',
  phoneClean: '+917696139091',
  github: 'https://github.com/thecodingdev24',
  githubUser: 'thecodingdev24',
  linkedin: 'https://www.linkedin.com/in/shalender-singh-rawat/',
  cohort: "GSA '26 Cohort",
  headline: 'Engineering the Backbone of Cloud Systems',
  bioSummary: 'Building the servers, infrastructure, and distributed logic that run underneath modern software. Second-year CSE undergraduate with an end-to-end shipping mindset, certified in Cloud Computing by Infosys.',
  resumeUrl: '/Shalender_Singh_Resume.pdf',
  resumeFilename: 'Shalender_Singh_Resume.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 'tikki-topple',
    title: 'Tikki Topple Game',
    period: 'APR 2026 — MAY 2026',
    role: 'SOLO ARCHITECT & DEVELOPER',
    headline: 'Turn-based Strategy Board Game Engine in Python & Pygame',
    description: 'A full-scale digital rendition of the strategy board game built purely in Python with Pygame. Features custom board state management, rule validations, algorithmic AI difficulty tiers, and a procedural sound synthesizer.',
    category: 'systems',
    neonColor: 'violet',
    metrics: [
      { label: 'Turns Managed', value: '20' },
      { label: 'AI Difficulties', value: '3 (Easy, Med, Hard)' },
      { label: 'External Audio Files', value: '0 (100% Synthesized)' },
      { label: 'Architecture', value: 'Modular OOP' },
    ],
    bullets: [
      'Engineered a deterministic turn-based state machine handling 20 rounds with strict placement validation and scoring.',
      'Developed 3 levels of algorithmic AI opponents from random heuristics to minimax-style predictive tile movements.',
      'Constructed a dynamic audio synthesizer directly in Python utilizing NumPy/Pygame sound buffers to generate procedural tones without relying on external WAV/MP3 assets.',
      'Decoupled game engine logic from UI rendering, input handling, and state preservation to maintain clean MVC separation.',
    ],
    tags: ['Python', 'Pygame', 'State Machine', 'Algorithmic AI', 'Audio Synthesis', 'OOP Design'],
    githubUrl: 'https://github.com/thecodingdev24/tikki-topplegame',
    codeSnippet: {
      filename: 'audio_engine.py',
      language: 'python',
      explanation: 'Procedural sine-wave tone generation without external asset bloat:',
      code: `import numpy as np
import pygame

def generate_tone(frequency: float, duration_sec: float, sample_rate=44100):
    """Synthesizes dynamic acoustic feedback in-memory."""
    n_samples = int(round(duration_sec * sample_rate))
    buf = np.sin(2 * np.pi * frequency * np.arange(n_samples) / sample_rate)
    # Apply anti-pop envelope dampening
    envelope = np.linspace(1.0, 0.05, n_samples)
    sound_array = np.int16(buf * envelope * 32767)
    return pygame.sndarray.make_sound(sound_array)`
    }
  },
  {
    id: 'carvault',
    title: 'CarVault — Automotive Specs Platform',
    period: 'NOV 2025',
    role: 'SOLO DEVELOPER',
    headline: 'High-Performance Automotive Spec Explorer & Visual Comparison',
    description: 'An interactive automotive catalogue and specification engine showcasing vehicle horsepower, drivetrain mechanics, acceleration metrics, and engine architectures with instant client-side filtering.',
    category: 'web',
    neonColor: 'cyan',
    metrics: [
      { label: 'Client Performance', value: '60 FPS Transitions' },
      { label: 'Layout Framework', value: 'Responsive CSS Grid' },
      { label: 'Spec Metrics', value: 'HP, Torque, 0-60, Trans' },
      { label: 'Search Speed', value: '< 2ms Local Filter' },
    ],
    bullets: [
      'Architected a structured data schema for vehicle specifications including displacement, aspiration, power output, and transmission types.',
      'Engineered responsive grid cards with reactive micro-interactions, dark/light contrast balance, and tactile hover states.',
      'Implemented real-time client-side keyword search and attribute filtering without page reloads.',
      'Optimized CSS rendering pipelines to guarantee sub-millisecond layout reflows across mobile and desktop displays.',
    ],
    tags: ['JavaScript', 'HTML5 Semantic', 'CSS3 Architecture', 'Responsive Layout', 'DOM Filtering'],
    githubUrl: 'https://github.com/thecodingdev24/carvault',
    codeSnippet: {
      filename: 'spec_engine.js',
      language: 'javascript',
      explanation: 'Instant multi-attribute client filtering:',
      code: `const filterVehicles = (dataset, query, filterClass) => {
  const normalized = query.trim().toLowerCase();
  return dataset.filter(car => {
    const matchesQuery = car.model.toLowerCase().includes(normalized) ||
                         car.make.toLowerCase().includes(normalized);
    const matchesClass = filterClass === 'all' || car.category === filterClass;
    return matchesQuery && matchesClass;
  });
};`
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages utilized for system algorithms, low-level logic, and cloud services.',
    neonColor: 'lime',
    skills: [
      { name: 'Java', level: 'Intermediate', highlight: 'Object-oriented structures, collections, JVM fundamentals' },
      { name: 'Python', level: 'Proficient', highlight: 'Data structures, Pygame game engine, algorithmic logic' },
      { name: 'JavaScript', level: 'Proficient', highlight: 'ES6+, DOM manipulation, asynchronous event loops' },
      { name: 'C', level: 'Intermediate', highlight: 'Memory management, pointers, system-level primitives' },
      { name: 'C++', level: 'Intermediate', highlight: 'OOP concepts, STL containers, algorithm efficiency' },
    ],
  },
  {
    id: 'cloud-backend',
    name: 'Cloud & Infrastructure',
    description: 'Cloud architecture principles, backend microservices, and network protocols.',
    neonColor: 'cyan',
    skills: [
      { name: 'Cloud Computing Architecture', level: 'Certified (Infosys)', highlight: 'IaaS, PaaS, SaaS, virtualization, scaling' },
      { name: 'RESTful API Principles', level: 'Intermediate', highlight: 'HTTP methods, status codes, payload design' },
      { name: 'Server Fundamentals', level: 'Active Focus', highlight: 'Client-server topologies, reverse proxies, DNS routing' },
      { name: 'Linux Command Line', level: 'Proficient', highlight: 'Bash navigation, process inspection, file permissions' },
    ],
  },
  {
    id: 'databases-tools',
    name: 'Databases & Developer Tooling',
    description: 'Data storage engines, version control pipelines, and collaborative workflows.',
    neonColor: 'amber',
    skills: [
      { name: 'MySQL', level: 'Intermediate', highlight: 'Relational schemas, SQL queries, foreign keys, normalization' },
      { name: 'Git & GitHub', level: 'Proficient', highlight: 'Branching strategies, merge conflict resolution, CI/CD basics' },
      { name: 'HTML5 & CSS3', level: 'Proficient', highlight: 'Semantic layout, responsive design, CSS Grid & Flexbox' },
      { name: 'Figma', level: 'Working Knowledge', highlight: 'UI wireframing, component design systems, prototyping' },
    ],
  },
  {
    id: 'engineering-practices',
    name: 'Working Style & Competencies',
    description: 'Core problem-solving instincts, team delivery, and adaptability.',
    neonColor: 'pink',
    skills: [
      { name: 'Analytical Problem Solving', level: 'Core Strength', highlight: 'Algorithmic decomposition, edge-case analysis' },
      { name: 'Team Collaboration', level: 'Core Strength', highlight: 'Clear technical communication, agile hackathon team player' },
      { name: 'Time & Sprint Management', level: 'Core Strength', highlight: 'Iterative delivery, meeting milestones ahead of deadlines' },
      { name: 'Rapid Adaptability', level: 'Core Strength', highlight: 'Fast ramp-up on emerging cloud SDKs and frameworks' },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'lpu',
    period: '2025 — PRESENT',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    status: 'Currently Enrolled (Undergraduate)',
    highlight: 'Specializing toward Cloud Infrastructure, Distributed Systems & Backend Engineering',
    details: [
      'Comprehensive coursework covering Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, and Database Management.',
      'Active participant in university coding hackathons, leading project ideation and backend architecture.',
      'Selected into the prestigious Google Student Ambassador (GSA) 2026 cohort for campus tech leadership.',
    ],
  },
  {
    id: 'rose-mary',
    period: '2023 — 2025',
    degree: 'Higher Secondary Education (Class XI — XII)',
    institution: 'Rose Mary Convent School',
    location: 'Bathinda, Punjab, India',
    status: 'Completed',
    details: [
      'Strong scientific & mathematical foundation in Physics, Chemistry, and Advanced Mathematics.',
      'Developed initial passion for algorithmic logic, computational thinking, and software craftsmanship.',
    ],
  },
  {
    id: 'aps',
    period: '2022 — 2023',
    degree: 'Secondary School Examination (Class X)',
    institution: 'Army Public School',
    location: 'Panchkula, Haryana, India',
    status: 'Completed',
    details: [
      'Cultivated disciplined habits, team sports involvement, and scientific curiosity in high-tempo school environment.',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'gsa-2026',
    title: "Google Student Ambassador (GSA '26)",
    subtitle: 'Selected as Campus Ambassador to advocate developer tools and Google Cloud technologies.',
    organization: 'Google Developer Student Programs',
    date: 'Cohort 2026',
    badge: 'HONOR',
    badgeColor: 'lime',
  },
  {
    id: 'hackathon-top10',
    title: 'Top 10 Finalist (College Hackathon)',
    subtitle: 'Competed among 50+ inter-college engineering teams in rapid prototype development.',
    organization: 'University Innovation League',
    date: '2025 — 2026',
    badge: 'TOP 10',
    badgeColor: 'amber',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-cloud',
    title: 'Introduction to Cloud Computing',
    issuer: 'Infosys Springboard',
    date: 'March 2026',
    verifyUrl: 'https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate',
    skillsCovered: ['Cloud Service Models (IaaS, PaaS, SaaS)', 'Public/Private Cloud Architecture', 'Virtualization & Hypervisors', 'Security & Scalability'],
    badgeColor: 'cyan',
  },
  {
    id: 'cert-python',
    title: 'Introduction to Python',
    issuer: 'Springboard',
    date: 'February 2026',
    verifyUrl: 'https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate',
    skillsCovered: ['Python Data Structures', 'Algorithmic Control Flow', 'Functions & Modular Design', 'File I/O & Exception Handling'],
    badgeColor: 'lime',
  },
];

export const TRAINING: TrainingItem[] = [
  {
    id: 'codsoft-intern',
    role: 'Web Development & Software Engineering Intern',
    company: 'CodSoft (Virtual)',
    type: 'Internship / Training',
    period: 'June 2026 — July 2026',
    bullets: [
      'Built interactive, responsive front-end web components using HTML5, CSS3, and JavaScript to enhance user experience.',
      'Collaborated on bug fixing, code optimization, and cross-browser responsiveness testing.',
      'Utilized Git and GitHub for version control, code reviews, and structured task management.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
  },
];

export const CLOUD_NODES: CloudNode[] = [
  {
    id: 'client',
    title: 'Client Request',
    role: 'Ingress Source',
    description: 'Web & Mobile clients dispatching REST/JSON requests over TLS 1.3.',
    status: 'online',
    latency: '0.8ms',
    icon: 'Smartphone',
  },
  {
    id: 'gateway',
    title: 'API Gateway',
    role: 'Load Balancing & Auth',
    description: 'Reverse proxy performing SSL termination, JWT verification, and rate limiting.',
    status: 'online',
    latency: '3.2ms',
    icon: 'ShieldCheck',
  },
  {
    id: 'microservice',
    title: 'Backend Services',
    role: 'Core Business Logic',
    description: 'Stateless application servers processing queries, game engine states & scoring.',
    status: 'online',
    latency: '12.4ms',
    icon: 'Cpu',
  },
  {
    id: 'cache',
    title: 'Distributed Cache',
    role: 'In-Memory Acceleration',
    description: 'Sub-millisecond key-value caching layer preventing database stampedes.',
    status: 'online',
    latency: '1.1ms',
    icon: 'Zap',
  },
  {
    id: 'database',
    title: 'MySQL Relational DB',
    role: 'Durable Storage',
    description: 'ACID-compliant relational persistence with indexed queries and transaction rollback.',
    status: 'online',
    latency: '8.7ms',
    icon: 'Database',
  },
  {
    id: 'monitoring',
    title: 'Cloud Telemetry',
    role: 'Metrics & Logging',
    description: 'Continuous health telemetry, latency tracking, and error threshold alerting.',
    status: 'online',
    latency: 'Real-time',
    icon: 'Activity',
  },
];
