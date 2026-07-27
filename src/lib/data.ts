/**
 * Central content source for the portfolio.
 * Edit values here to update the site — components read from this module.
 */
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Flag,
  GitBranch,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Users,
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
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Data Analyst",
    "Computer Science Student",
    "STEM Educator",
  ],
  tagline:
    "Computer Science student at Georgia State University with a passion for software engineering, cybersecurity, and data analytics — building impactful, full-stack digital solutions.",
  location: "Snellville, GA · Open to opportunities",
  email: "ngebru5@student.gsu.edu",
  resumeUrl: "/resume.pdf",
  // Portrait shown in the hero frame. Drop the file at public/portrait.jpg
  // (or change this path). Set to null to fall back to the monogram frame.
  photo: "/portrait.jpg" as string | null,
  socials: {
    github: "https://github.com/Goose-101",
    linkedin: "https://www.linkedin.com/in/niguss-gebru-a81b1b26a",
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
  { id: "contact", label: "Contact" },
] as const;

/* ----------------------------------------------------------------- */
/*  Hero highlight stats                                              */
/* ----------------------------------------------------------------- */
export const heroStats = [
  { value: "10+", label: "Certifications" },
  { value: "90+", label: "Students taught" },
  { value: "1st", label: "Robotics competition" },
  { value: "3", label: "Languages spoken" },
];

/* ----------------------------------------------------------------- */
/*  About                                                             */
/* ----------------------------------------------------------------- */
export const about = {
  paragraphs: [
    "My fascination with technology started early — taking things apart, writing my first lines of code, and building projects to solve real problems. That curiosity quickly turned into a mission.",
    "Before college I was already teaching. As an ICT instructor in Addis Ababa and a STEM coordinator in Georgia, I led classes for dozens of students, built a competition-winning robotic arm, and shipped tools like an automated registration system.",
    "Today I'm pursuing a B.A. in Computer Science at Georgia State University — focused on software engineering, cybersecurity, and data analytics, and channeling everything I've learned into building impactful, human-centered software.",
  ],
  facts: [
    { icon: GraduationCap, label: "B.A. Computer Science · Georgia State University" },
    { icon: Code2, label: "Full-stack web development" },
    { icon: ShieldCheck, label: "Cybersecurity & data analytics" },
    { icon: Users, label: "STEM educator & team leader" },
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
    role: "STEM Program Coordinator",
    org: "Brookwood High School — Snellville, GA",
    period: "2024 — 2025",
    summary:
      "Coordinated STEM programming and led student workshops while building tools to streamline operations.",
    points: [
      "Developed an automated registration system that reduced manual input time by 40%.",
      "Facilitated weekly STEM workshops for 50+ students, promoting innovation and collaborative design.",
      "Represented Brookwood at the Gwinnett Hackathon — 5th place among all Gwinnett County Public Schools.",
      "Served as team leader for the TSA (Technology Student Association) club.",
    ],
    tags: ["Leadership", "STEM", "Automation", "Hackathon"],
  },
  {
    role: "ICT Instructor",
    org: "New English Private School — Addis Ababa, Ethiopia",
    period: "2023 — 2024",
    summary:
      "Taught computing and web development while building hardware and web projects alongside students.",
    points: [
      "Directed ICT classes for 40+ students, improving programming literacy and engagement by 30%.",
      "Created Python and web-development lessons and led project-based, team-oriented learning.",
      "Designed and built a functional robotic arm with Arduino and servo motors — 1st place in district competitions.",
      "Built the front-end for the New English Private School website.",
    ],
    tags: ["Teaching", "Python", "Arduino", "Front-End"],
  },
  {
    role: "Tutor & Remote Dispatcher",
    org: "Independent · AMN Trucking",
    period: "2024 — 2025",
    summary:
      "Balanced technical tutoring with real-world operations and communication work.",
    points: [
      "Tutored high-school students in mathematics and physics for nearly two years.",
      "Served as a remote dispatcher for AMN Trucking, coordinating between drivers and clients.",
      "Sharpened problem-solving, communication, and time-management under real deadlines.",
    ],
    tags: ["Tutoring", "Mathematics", "Operations", "Communication"],
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
    title: "Robotic Assistive Arm",
    category: "Robotics",
    description:
      "A functional robotic arm built with Arduino and servo motors — awarded 1st place in district competitions.",
    tech: ["Arduino", "C++", "Servo Motors", "Electronics"],
    gradient: "from-indigo-500 via-blue-500 to-teal-400",
    icon: Cpu,
    links: { github: "#", caseStudy: "#" },
    featured: true,
  },
  {
    title: "Automated Registration System",
    category: "Automation",
    description:
      "A registration system that cut manual data-entry time by 40% for a high-school STEM program.",
    tech: ["Python", "Flask", "SQL"],
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    icon: Database,
    links: { github: "#", caseStudy: "#" },
  },
  {
    title: "New English School Website",
    category: "Web Development",
    description:
      "Front-end for a private school's website — responsive, accessible, and student-friendly.",
    tech: ["JavaScript", "HTML/CSS", "Bootstrap"],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    icon: Code2,
    links: { demo: "#", caseStudy: "#" },
  },
  {
    title: "IBM Quantum Computing Project",
    category: "Quantum · Applied",
    description:
      "Hands-on quantum computing through IBM's Qubit by Qubit program, exploring quantum algorithms and qubit-level computation.",
    tech: ["Python", "Qiskit", "Quantum"],
    gradient: "from-violet-500 via-blue-500 to-cyan-400",
    icon: Brain,
    links: { caseStudy: "#" },
  },
  {
    title: "Developer Portfolio",
    category: "Web · This Site",
    description:
      "A premium, animated Next.js portfolio focused on motion, accessibility, and performance.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    icon: Rocket,
    links: { github: "https://github.com/Goose-101", demo: "#" },
    featured: true,
  },
  {
    title: "Responsive Web Design Projects",
    category: "Front-End",
    description:
      "A collection of responsive UI builds completed through freeCodeCamp's 300+ hour certification.",
    tech: ["HTML/CSS", "JavaScript", "Responsive"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    icon: Flag,
    links: { github: "#" },
  },
];

/* ----------------------------------------------------------------- */
/*  Research & exploration                                            */
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
    title: "Quantum Computing — Qubit by Qubit",
    type: "Ongoing",
    venue: "IBM · The Coding School",
    year: "2024",
    description:
      "Studied quantum algorithms and qubit-level computation through IBM's Qubit by Qubit program, completing a hands-on quantum computing project.",
    tags: ["Quantum Computing", "Python", "Qiskit"],
  },
  {
    title: "CORE Summer Research Experience",
    type: "Presentation",
    venue: "Summer Research Program",
    year: "2025",
    description:
      "Engaged in a structured summer research experience centered on literature review and analytical writing in computer science.",
    tags: ["Research", "Literature Review", "Analysis"],
  },
  {
    title: "Data Management & Cybersecurity Foundations",
    type: "Ongoing",
    venue: "UNICEF · Cybrary",
    year: "2024 — 2025",
    description:
      "Applied learning in data handling, management, and cybersecurity fundamentals through certified coursework and projects.",
    tags: ["Data Management", "Cybersecurity", "Analytics"],
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
    skills: ["Python", "Java", "JavaScript", "C++", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks",
    icon: GitBranch,
    skills: ["React", "Node.js", "Flask", "Bootstrap"],
  },
  {
    title: "Platforms & Tools",
    icon: Cloud,
    skills: ["GitHub", "Google Cloud", "Firebase", "VS Code", "Figma", "Replit"],
  },
  {
    title: "Hardware & Embedded",
    icon: Cpu,
    skills: ["Arduino", "Servo Motors", "Electronics"],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Data Visualization", "SQL", "Data Structures", "Algorithms"],
  },
  {
    title: "Core Strengths",
    icon: Brain,
    skills: ["Problem Solving", "Debugging", "Technical Writing", "Leadership"],
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
    value: "Goose-101",
    href: person.socials.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Niguss Gebru",
    href: person.socials.linkedin,
    icon: Linkedin,
  },
];
