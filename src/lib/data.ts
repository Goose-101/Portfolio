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
  Gamepad2,
  GitBranch,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  Users,
  Wrench,
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
    "Founder",
    "Undergraduate Researcher",
    "AI Developer",
    "CS Honors Student",
  ],
  tagline:
    "Computer Science Honors student at Georgia State University and founder of Fresh Land — building production full-stack platforms, applied research, and AI-powered tools that solve real problems.",
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
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/* ----------------------------------------------------------------- */
/*  Hero highlight stats                                              */
/* ----------------------------------------------------------------- */
export const heroStats = [
  { value: "4.0", label: "GPA · Honors College" },
  { value: "150+", label: "Fresh Land daily users" },
  { value: "1st", label: "Robotics competition" },
  { value: "135+", label: "Research participants" },
];

/* ----------------------------------------------------------------- */
/*  About                                                             */
/* ----------------------------------------------------------------- */
export const about = {
  paragraphs: [
    "My fascination with technology started early, with my first lines of code and the first things I built to solve real problems. That curiosity became a mission I've never let go of.",
    "In Addis Ababa I taught ICT and led students to build a 6-DOF robotic assistive arm and an IoT attendance system. I've kept shipping ever since. Most recently that's Fresh Land, a production platform I founded to help immigrants navigate a new home, now serving 150+ people a day.",
    "Today I'm an Honors College student at Georgia State University Perimeter College with a 4.0 GPA, an undergraduate researcher building adaptive-testing systems, and a student leader. I channel it all into impactful, human-centered software.",
  ],
  facts: [
    { icon: GraduationCap, label: "Computer Science · GSU Honors College (4.0 GPA)" },
    { icon: Rocket, label: "Founder of Fresh Land (freshland.cc)" },
    { icon: Brain, label: "Undergraduate researcher — adaptive testing & AI" },
    { icon: Users, label: "Speaker of the Senate · student leader" },
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
    role: "Undergraduate Researcher — C.O.R.E.",
    org: "Georgia State University Perimeter College · Dr. Andrew Kim",
    period: "May 2026 — Present",
    summary:
      "Building a web-based Computerized Adaptive Testing (CAT) platform for the Center for Outreach, Research and Engagement.",
    points: [
      "Developed a full-stack CAT platform with a novel three-question block algorithm that adjusts difficulty in real time.",
      "Designed the experience around psychological-comfort principles to reduce test anxiety during assessment.",
      "Validated a five-tier difficulty system with a 135+ student survey, applying Item Response Theory (Rasch model).",
    ],
    tags: ["Research", "Adaptive Testing", "PHP/MySQL", "IRT"],
  },
  {
    role: "Speaker of the Senate — SGA",
    org: "Georgia State University Perimeter College",
    period: "Jul 2026 — Present",
    summary:
      "Highest-ranking legislative officer of the Campus Senate, presiding over proceedings and legislation.",
    points: [
      "Preside over all Campus Senate proceedings and legislation.",
      "Champion student representation and drive policy changes that impact Perimeter College.",
    ],
    tags: ["Leadership", "Governance", "Public Speaking"],
  },
  {
    role: "Student Assistant Lead — Student Life",
    org: "Student Engagement Center · Georgia State University Perimeter College",
    period: "Jul 2026 — Present",
    summary:
      "Leading recruitment, volunteer training, and campus-wide programming out of the Student Engagement Center.",
    points: [
      "Spearhead recruitment and onboarding for Student Life and PAC, designing comprehensive training that builds high-performing volunteer teams.",
      "Architect campus-wide events end to end, from concept and creative design through marketing and day-of execution.",
      "Drive student participation through strategic outreach, fostering a more vibrant and inclusive campus community.",
      "Offered the lead role after two consecutive semesters volunteering across Student Engagement, the department housing both PAC and Student Life.",
    ],
    tags: ["Leadership", "Event Programming", "Marketing"],
  },
  {
    role: "Supplemental Instructor",
    org: "Georgia State University Perimeter College",
    period: "May 2026 — Aug 2026",
    summary:
      "Designed and delivered academic support for Precalculus (MATH 1113) alongside faculty.",
    points: [
      "Built weekly academic support plans that drove a 73% rise in top-grade attainment.",
      "Delivered 160+ hours of instruction through office hours, assignment support, and exam reviews.",
    ],
    tags: ["Teaching", "Mathematics", "Mentorship"],
  },
  {
    role: "STEM Program Coordinator — TSA (Technology Student Association)",
    org: "Brookwood High School — Snellville, GA",
    period: "Aug 2024 — May 2025",
    summary:
      "Coordinated the Technology Student Association program and competition teams.",
    points: [
      "Facilitated weekly STEM workshops for 25+ teams, promoting innovation and collaborative design.",
      "Led a cross-functional team at GSMST for Gwinnett Hackathon IV, building a Unity educational game.",
      "Oversaw C# scripting, asset creation, and version control across the team.",
    ],
    tags: ["STEM", "Leadership", "Unity", "C#"],
  },
  {
    role: "ICT Instructor Assistant",
    org: "New English Private School — Addis Ababa, Ethiopia",
    period: "Dec 2023 — May 2024",
    summary:
      "Taught computing to 40+ students and led hands-on, project-based learning.",
    points: [
      "Directed ICT classes for 40+ students, improving programming literacy and engagement by 30%.",
      "Delivered Python and web-development curricula with an emphasis on real-world problem solving.",
      "Led project-based sessions building teamwork and technical confidence.",
    ],
    tags: ["Teaching", "Python", "Web Dev"],
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
  // Optional cover image (path in /public). Shown instead of the icon.
  image?: string;
  // Optional pair/set of covers (paths in /public), laid out side by side and
  // fully contained so nothing gets cropped. Takes precedence over `image`.
  images?: string[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Fresh Land",
    category: "Founder · Web Platform",
    description:
      "A production immigrant-onboarding platform: a 762+ verified Georgia resource directory, a community forum, and a guided newcomer pathway — serving 150+ daily users, with a multilingual AI assistant powered by Anthropic & Gemini.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Anthropic", "Gemini"],
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    icon: Rocket,
    image: "/freshland.png",
    links: { demo: "https://freshland.cc", caseStudy: "#" },
    featured: true,
  },
  {
    title: "Robotic Assistive Arm",
    category: "Robotics · Embedded",
    description:
      "A 6-DOF robotic feeding assistant built with a Raspberry Pi and Arduino ESP32 (C++) for real-time servo coordination, improving mealtime independence and winning 1st place at the Addis Ababa district competition. I led a 3-member team through design and build, integrating a custom gripper, joint mechanisms, and embedded motion sequencing with safety I/O so the arm could assist users with limited mobility.",
    tech: ["Raspberry Pi", "ESP32", "C++", "Servo Control"],
    gradient: "from-indigo-500 via-blue-500 to-teal-400",
    icon: Cpu,
    image: "/Robotic_Arm.jpg",
    links: { caseStudy: "#" },
    featured: true,
  },
  {
    title: "IoT Attendance System",
    category: "IoT · Full-Stack",
    description:
      "In many Ethiopian schools attendance is still recorded by hand — slow and easy to get wrong. I co-engineered an IoT system using Arduino (C++), RFID, and MySQL/Firebase to automate it end to end, cutting input time by 91% and sharply improving accuracy. I presented it to the school's administration, faculty, committee, staff, and parents, making the case for how technology can modernize the way education runs, not just at my school but across Ethiopia's schools.",
    tech: ["C++", "Arduino", "RFID", "MySQL", "Firebase"],
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    icon: Database,
    images: ["/iot-attendance.png", "/Presentation_Photo.png"],
    links: { caseStudy: "#" },
    featured: true,
  },
  {
    title: "NEPS School Website",
    category: "Front-End",
    description:
      "The full front-end of a school's official website, built in a 4-person team with interactive menus, sliders, and animations — serving 500+ users with Node.js and Firebase APIs.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Node.js"],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    icon: Code2,
    image: "/neps.png",
    links: { demo: "https://www.nepschools.com/home.html", caseStudy: "#" },
  },
  {
    title: "Hackathon Educational Game",
    category: "Game · Unity",
    description:
      "A Unity-based educational game built for Gwinnett Hackathon IV, leading C# scripting, asset creation, and version control across a cross-functional team.",
    tech: ["Unity", "C#", "Game Design"],
    gradient: "from-violet-500 via-blue-500 to-cyan-400",
    icon: Gamepad2,
    links: { caseStudy: "#" },
  },
  {
    title: "Developer Portfolio",
    category: "Web · This Site",
    description:
      "This portfolio — a premium, animated Next.js site focused on motion, accessibility, and performance.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    icon: Flag,
    links: { github: "https://github.com/Goose-101" },
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
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "PHP", "Go", "SQL", "R"],
  },
  {
    title: "Frameworks",
    icon: GitBranch,
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI", "Flask", "React Native"],
  },
  {
    title: "AI & Data",
    icon: Brain,
    skills: ["Pandas", "scikit-learn", "OpenCV", "Matplotlib", "Google ADK", "Qiskit"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Firebase", "Supabase", "SQLite", "Drizzle"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Google Cloud", "Cloudflare", "REST API", "Git"],
  },
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    skills: ["Arduino", "Raspberry Pi", "ESP32", "RFID", "Servo Control"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Figma", "Jupyter", "Unity", "Linux", "Swagger/OpenAPI"],
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