/**
 * Central content source for the portfolio.
 * Edit values here to update the site — components read from this module.
 */
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Microscope,
  Rocket,
  ShieldCheck,
  Trophy,
  Users,
  Flag,
  Cpu,
} from "lucide-react";

/* ----------------------------------------------------------------- */
/*  Identity                                                          */
/* ----------------------------------------------------------------- */
export const person = {
  name: "Niguss Gebru",
  firstName: "Niguss",
  // Wordmark shown in the navbar/footer logo and used as the domain.
  wordmark: "nigussgebru.com",
  roles: [
    "Software Engineer",
    "AI Researcher",
    "Full Stack Developer",
    "Founder",
    "Cybersecurity Enthusiast",
    "Student Researcher",
  ],
  tagline:
    "I build intelligent, secure, and human-centered software — from full-stack products to applied AI research.",
  location: "Available worldwide · Open to opportunities",
  email: "solniguss14@gmail.com",
  resumeUrl: "/resume.pdf",
  // Portrait shown in the hero frame. Drop the file at public/portrait.jpg
  // (or change this path). Set to null to fall back to the monogram frame.
  photo: "/portrait.jpg" as string | null,
  socials: {
    github: "https://github.com/niguss",
    linkedin: "https://www.linkedin.com/in/niguss-solomon",
  },
};

/* ----------------------------------------------------------------- */
/*  Navigation                                                        */
/* ----------------------------------------------------------------- */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

/* ----------------------------------------------------------------- */
/*  Hero highlight stats                                              */
/* ----------------------------------------------------------------- */
export const heroStats = [
  { value: "15+", label: "Projects shipped" },
  { value: "5+", label: "Research efforts" },
  { value: "3", label: "Orgs led" },
  { value: "10+", label: "Awards & honors" },
];

/* ----------------------------------------------------------------- */
/*  About                                                             */
/* ----------------------------------------------------------------- */
export const about = {
  paragraphs: [
    "I grew up captivated by how machines turn ideas into action — taking apart devices, writing my first lines of code, and chasing the feeling of building something that actually works.",
    "That curiosity became direction. Studying Computer Science, I moved from tinkering to engineering: shipping full-stack products, exploring artificial intelligence, and leading teams that build together.",
    "Today I split my time between building impactful software and conducting research in machine learning and adaptive systems. I care about the details — clean architecture, thoughtful UX, and security done right — because great software should feel effortless to the people who use it.",
  ],
  facts: [
    { icon: GraduationCap, label: "Computer Science student & researcher" },
    { icon: Rocket, label: "Founder, Perimeter Tech Society" },
    { icon: Brain, label: "Applied AI & adaptive systems" },
    { icon: ShieldCheck, label: "Security-first engineering" },
  ] as { icon: LucideIcon; label: string }[],
};

/* ----------------------------------------------------------------- */
/*  Experience timeline                                               */
/* ----------------------------------------------------------------- */
export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Founder & President",
    org: "Perimeter Tech Society",
    period: "2023 — Present",
    summary:
      "Founded and lead a student technology community focused on building, learning, and shipping real projects.",
    points: [
      "Grew the community from an idea to an active organization of student builders and mentors.",
      "Organized HackPerimeter, workshops, and project sprints spanning web, AI, and hardware.",
      "Established mentorship pipelines connecting members to research and industry opportunities.",
    ],
    tags: ["Leadership", "Community", "Events", "Mentorship"],
  },
  {
    role: "Student Researcher",
    org: "Machine Learning & Adaptive Systems Lab",
    period: "2023 — Present",
    summary:
      "Conduct applied research in adaptive learning systems and practical machine learning.",
    points: [
      "Designed and evaluated an adaptive quiz engine that personalizes difficulty in real time.",
      "Built data pipelines and reproducible experiments for model training and analysis.",
      "Presented findings and prototypes to faculty and peer research groups.",
    ],
    tags: ["Machine Learning", "Research", "Python", "Data"],
  },
  {
    role: "Full Stack Developer",
    org: "Independent & Client Projects",
    period: "2022 — Present",
    summary:
      "Design and ship end-to-end web applications with a focus on performance and UX.",
    points: [
      "Delivered production web apps using React, Next.js, and TypeScript.",
      "Implemented secure authentication, APIs, and cloud deployments.",
      "Owned the full lifecycle from design and architecture to launch and iteration.",
    ],
    tags: ["Next.js", "TypeScript", "APIs", "Cloud"],
  },
  {
    role: "Hardware & Robotics Builder",
    org: "Engineering Projects",
    period: "2021 — 2023",
    summary:
      "Built assistive and sensing hardware bridging software and the physical world.",
    points: [
      "Prototyped a robotic assistive arm combining microcontrollers and control logic.",
      "Developed an Arduino-based soil testing system for real-time agricultural insight.",
      "Integrated sensors, firmware, and dashboards into cohesive products.",
    ],
    tags: ["Arduino", "Robotics", "Embedded", "IoT"],
  },
];

/* ----------------------------------------------------------------- */
/*  Projects                                                          */
/* ----------------------------------------------------------------- */
export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  // Tailwind gradient classes drive each card's generated cover art.
  gradient: string;
  icon: LucideIcon;
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "HackPerimeter",
    category: "Hackathon Platform",
    description:
      "An end-to-end hackathon platform for registration, team formation, judging, and live event dashboards.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    icon: Flag,
    links: { github: "#", demo: "#", caseStudy: "#" },
    featured: true,
  },
  {
    title: "Adaptive Quiz System",
    category: "Applied AI",
    description:
      "A learning engine that adapts question difficulty in real time using a model of each learner's performance.",
    tech: ["Python", "scikit-learn", "FastAPI", "React"],
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    icon: Brain,
    links: { github: "#", demo: "#", caseStudy: "#" },
    featured: true,
  },
  {
    title: "Robotic Assistive Arm",
    category: "Robotics",
    description:
      "A microcontroller-driven assistive arm exploring accessible, low-cost robotics for everyday tasks.",
    tech: ["C++", "Arduino", "Control Systems", "3D Print"],
    gradient: "from-indigo-500 via-blue-500 to-teal-400",
    icon: Cpu,
    links: { github: "#", caseStudy: "#" },
  },
  {
    title: "Arduino Soil Testing",
    category: "IoT / AgriTech",
    description:
      "A sensor system that measures soil conditions and surfaces real-time insights for smarter farming.",
    tech: ["Arduino", "Sensors", "Embedded C", "Dashboard"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    icon: Database,
    links: { github: "#", caseStudy: "#" },
  },
  {
    title: "Perimeter Tech Society",
    category: "Community Platform",
    description:
      "The web presence and member hub for the tech community — events, resources, and project showcases.",
    tech: ["Next.js", "Tailwind", "Vercel", "CMS"],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    icon: Users,
    links: { demo: "#", caseStudy: "#" },
  },
  {
    title: "Applied AI Research Toolkit",
    category: "AI · Ongoing",
    description:
      "A growing toolkit of reproducible experiments and utilities for adaptive systems and ML research.",
    tech: ["Python", "PyTorch", "Jupyter", "MLOps"],
    gradient: "from-violet-500 via-blue-500 to-cyan-400",
    icon: Rocket,
    links: { github: "#" },
  },
];

/* ----------------------------------------------------------------- */
/*  Research                                                          */
/* ----------------------------------------------------------------- */
export interface ResearchItem {
  title: string;
  type: "Publication" | "Presentation" | "Ongoing";
  venue: string;
  year: string;
  description: string;
  tags: string[];
}

export const research: ResearchItem[] = [
  {
    title: "Adaptive Difficulty Modeling for Personalized Learning",
    type: "Ongoing",
    venue: "ML & Adaptive Systems Lab",
    year: "2024 — Present",
    description:
      "Investigating real-time difficulty adaptation to improve learner engagement and knowledge retention.",
    tags: ["Adaptive Systems", "Machine Learning", "EdTech"],
  },
  {
    title: "Applied Machine Learning for Real-World Sensing",
    type: "Presentation",
    venue: "Student Research Symposium",
    year: "2024",
    description:
      "Presented approaches for turning noisy sensor data into reliable, actionable predictions.",
    tags: ["Applied ML", "Sensors", "Data"],
  },
  {
    title: "Toward Accessible Assistive Robotics",
    type: "Publication",
    venue: "Undergraduate Research Journal",
    year: "2023",
    description:
      "A study on designing low-cost assistive robotics with an emphasis on accessibility and reliability.",
    tags: ["Robotics", "Accessibility", "HCI"],
  },
];

/* ----------------------------------------------------------------- */
/*  Skills                                                            */
/* ----------------------------------------------------------------- */
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "Python", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    title: "Frameworks",
    icon: GitBranch,
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Express", "Tailwind"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Vercel", "AWS", "Docker", "Serverless", "Cloudflare"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQLite"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Git", "CI/CD", "GitHub Actions", "Linux", "Nginx"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: ["Web Security", "Auth & OAuth", "Threat Modeling", "OWASP"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "LLMs"],
  },
  {
    title: "Research",
    icon: Microscope,
    skills: ["Experiment Design", "Data Analysis", "Technical Writing"],
  },
];

/* ----------------------------------------------------------------- */
/*  Achievements                                                      */
/* ----------------------------------------------------------------- */
export interface Achievement {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    title: "President's List",
    detail: "Recognized for sustained academic excellence.",
    icon: GraduationCap,
  },
  {
    title: "Leadership",
    detail: "Founded and led Perimeter Tech Society.",
    icon: Users,
  },
  {
    title: "Research Recognition",
    detail: "Presented and published applied AI research.",
    icon: Microscope,
  },
  {
    title: "Hackathon Honors",
    detail: "Built and placed with award-winning projects.",
    icon: Trophy,
  },
  {
    title: "Competitions",
    detail: "Competed in engineering and coding challenges.",
    icon: Award,
  },
  {
    title: "Awards",
    detail: "Honored for innovation and community impact.",
    icon: Flag,
  },
];

/* ----------------------------------------------------------------- */
/*  Contact channels                                                  */
/* ----------------------------------------------------------------- */
export const contactChannels = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@niguss",
    href: person.socials.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Niguss Solomon",
    href: person.socials.linkedin,
    icon: Linkedin,
  },
];
