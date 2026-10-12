export interface ProfileData {
  name: string;
  roles: string[];
  bio: string;
  cvUrl: string;
  cvFilename: string;
  avatarUrl: string;
  socialLinks: {
    github: string;
    instagram: string;
    email: string;
  };
}

export interface AboutData {
  profile: {
    name: string;
    status: string;
    major: string;
    location: string;
    tagline: string;
  };
  education: Array<{
    institution: string;
    period: string;
    major: string;
  }>;
  focusAreas: string[];
  workExperience: Array<{
    company: string;
    period: string;
    role: string;
  }>;
}

export interface SkillItem {
  name: string;
  role: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ContactData {
  email: string;
  githubUsername: string;
  githubUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  responseTime: string;
  availability: string;
}

export const profileData: ProfileData = {
  name: "Rifki Fauzi",
  roles: [
    "Web Developer",
    "Information Systems Student",
    "Cloud Computing Enthusiast",
    "UI / UX Designer",
  ],
  bio: "I design and build complete web products — from database schema and backend logic through to the interface people actually touch.",
  cvUrl: "/cv/CV-Rifki-Fauzi.pdf",
  cvFilename: "CV-Rifki-Fauzi.pdf",
  avatarUrl: "/profile.png",
  socialLinks: {
    github: "https://github.com/Rifki-reys",
    instagram: "https://www.instagram.com/rfkifauzi_?stkn=MWhjenRmbW8zemZhNw==",
    email: "mailto:rifkifauzi325@gmail.com",
  },
};

export const aboutData: AboutData = {
  profile: {
    name: "Rifki Fauzi",
    status: "Open to internships & freelance work",
    major: "Information Systems",
    location: "Bogor, Indonesia",
    tagline:
      "I work end to end — requirement analysis, database design, backend services, and the interface that wraps around them.",
  },
  education: [
    {
      institution: "Kesatuan Institute of Business and Informatics (IBIK)",
      period: "2024 — Present",
      major: "Information Systems",
    },
    {
      institution: "SMK Pembangunan",
      period: "2020 — 2023",
      major: "Multimedia",
    },
  ],
  focusAreas: [
    "Web Development",
    "Cloud Computing",
    "Database",
    "UI / UX",
  ],
  workExperience: [
    {
      company: "ASTON HOTEL",
      period: "2025 — 2026",
      role: "Banquet Service",
    },
    {
      company: "PT IDOLA CAHAYA SEMESTA",
      period: "2023 — 2024",
      role: "Sales Associate",
    },
  ],
};

export const skillsData: SkillItem[] = [
  {
    name: "JavaScript",
    role: "Language",
    description:
      "Client-side logic, DOM behaviour and async API integration.",
    iconName: "Code",
  },
  {
    name: "PHP",
    role: "Language",
    description:
      "Server-side application logic, request handling and backend APIs.",
    iconName: "Server",
  },
  {
    name: "CodeIgniter 4",
    role: "Framework",
    description:
      "MVC architecture for fast, secure web application development.",
    iconName: "Fire",
  },
  {
    name: "MySQL",
    role: "Database",
    description:
      "Relational modelling, normalisation and optimised queries.",
    iconName: "Database",
  },
  {
    name: "HTML & CSS",
    role: "Frontend",
    description:
      "Semantic, accessible markup and responsive visual design.",
    iconName: "Stack",
  },
  {
    name: "Docker",
    role: "DevOps",
    description:
      "Containers that make environments reproducible across the team.",
    iconName: "Stack",
  },
  {
    name: "AWS",
    role: "Cloud",
    description:
      "Scalable hosting, server management and infrastructure setup.",
    iconName: "Cloud",
  },
  {
    name: "UI / UX",
    role: "Design",
    description:
      "Wireframes, prototypes and interfaces built for real users.",
    iconName: "Compass",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "Web Application Development",
    summary:
      "Complete web products built on a maintainable CodeIgniter 4 or PHP codebase — structured, documented, and ready to hand over.",
    deliverables: [
      "MVC application architecture",
      "Authentication & role management",
      "RESTful endpoints",
      "Code documentation",
    ],
  },
  {
    id: "02",
    title: "Database & Systems Design",
    summary:
      "Entity-relationship modelling turned into normalised schemas that stay fast as the data grows.",
    deliverables: [
      "ERD & schema design",
      "Query optimisation",
      "Migration strategy",
      "Reporting views",
    ],
  },
  {
    id: "03",
    title: "Interface & Experience Design",
    summary:
      "Wireframes and high-fidelity prototypes in Figma, validated against real user flows before a line of code is written.",
    deliverables: [
      "Wireframe & user flow",
      "Design system",
      "Responsive prototypes",
      "Accessibility pass",
    ],
  },
  {
    id: "04",
    title: "Deployment & Infrastructure",
    summary:
      "Containerised builds on AWS so releases are repeatable, observable, and boring to operate.",
    deliverables: [
      "Docker & Compose setup",
      "CI/CD pipeline",
      "AWS provisioning",
      "Monitoring & backups",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Penyewaan Lapangan",
    category: "Web Application",
    year: "2025",
    description:
      "A sports facility rental platform covering availability checks, booking flows and reservation management for multiple venues.",
    image: "/projects/project-web-flnx.png",
    stack: ["CodeIgniter 4", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/Rifki-reys",
  },
  {
    title: "Sistem Absensi Karyawan",
    category: "Internal Tool",
    year: "2025",
    description:
      "An employee attendance system with an HRD dashboard, leave and permission workflows, configurable work hours and reporting.",
    image: "/projects/1789615809_2d3c10450156a6cb08db.png",
    stack: ["PHP", "MySQL", "Docker"],
    githubUrl: "https://github.com/Rifki-reys/Sistem-Absensi-",
  },
  {
    title: "Kopi Caramel",
    category: "Landing Page",
    year: "2024",
    description:
      "A cinematic promotional site for Ice Caramel Coffee, built around a full-bleed video background and a motion-led identity.",
    image: "/projects/1789615298_75989e2c08084741aa94.png",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Rifki-reys/kopi-caramel",
    demoUrl: "https://nava-karamel.vercel.app/",
  },
  {
    title: "IG Unfollower Checker",
    category: "Utility",
    year: "2024",
    description:
      "A focused front-end tool that surfaces the accounts you follow who never followed back — shipped as a static GitHub Page.",
    image: "/projects/ig-unfollower-checker-preview.png",
    stack: ["JavaScript", "CSS"],
    githubUrl: "https://github.com/Rifki-reys/ig-unfollower-checker",
    demoUrl: "https://rifki-reys.github.io/ig-unfollower-checker",
  },
];

export const contactData: ContactData = {
  email: "rifkifauzi325@gmail.com",
  githubUsername: "github.com/Rifki-reys",
  githubUrl: "https://github.com/Rifki-reys",
  instagramHandle: "@rfkifauzi_",
  instagramUrl: "https://www.instagram.com/rfkifauzi_",
  responseTime: "Usually replies within 24 hours",
  availability: "Available for freelance & internship work",
};

/** Rotating strip under the hero. */
export const marqueeItems = [
  "Web Application Development",
  "Database Design",
  "UI / UX Design",
  "Cloud Infrastructure",
  "CodeIgniter 4",
  "MySQL",
  "Docker",
  "AWS",
];