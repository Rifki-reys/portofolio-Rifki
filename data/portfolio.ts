export interface ProfileData {
  name: string;
  badge: string;
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
  title: string;
  subtitle: string;
  profile: {
    name: string;
    status: string;
    major: string;
    location: string;
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

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  instagramHandle: string;
  instagramUrl: string;
}

export const profileData: ProfileData = {
  name: "Rifki Fauzi",
  badge: "Hello, I am",
  roles: [
    "Web Developer",
    "Information Systems Student",
    "Cloud Computing Enthusiast",
    "UI / UX Designer"
  ],
  bio: "Information Systems student with a passion for Web Development, Cloud Computing, Databases, and UI/UX Design.",
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
  title: "About Me",
  subtitle: "Getting to know me better",
  profile: {
    name: "Rifki Fauzi",
    status: "Student",
    major: "Information Systems",
    location: "Bogor, Indonesia",
  },
  education: [
    {
      institution: "Kesatuan Institute of Business and Informatics (IBIK)",
      period: "2024 - Present",
      major: "Information Systems",
    },
    {
      institution: "SMK Pembangunan",
      period: "2020 - 2023",
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
      period: "2025 - 2026",
      role: "Banquet Service",
    },
    {
      company: "PT IDOLA CAHAYA SEMESTA",
      period: "2023 - 2024",
      role: "Sales Associate",
    },
  ],
};

export const skillsData: SkillItem[] = [
  {
    name: "HTML",
    role: "Frontend",
    description: "Semantic structure and accessible markup for modern web apps.",
    iconName: "Code",
  },
  {
    name: "CSS",
    role: "Frontend",
    description: "Responsive layouts, visual styling, animations, and modern UI design.",
    iconName: "Stack",
  },
  {
    name: "JavaScript",
    role: "Frontend & Backend",
    description: "Dynamic client-side interactivity, DOM logic, and async API integration.",
    iconName: "Code",
  },
  {
    name: "PHP",
    role: "Backend",
    description: "Server-side application logic, request handling, and backend APIs.",
    iconName: "Server",
  },
  {
    name: "CodeIgniter 4",
    role: "Backend Framework",
    description: "Lightweight MVC architecture for fast and secure web application development.",
    iconName: "Fire",
  },
  {
    name: "MySQL",
    role: "Database",
    description: "Relational database management, data modeling, and optimized SQL queries.",
    iconName: "Database",
  },
  {
    name: "Docker",
    role: "DevOps & Tooling",
    description: "Packages applications into containers for consistent cross-environment deployment.",
    iconName: "Stack",
  },
  {
    name: "AWS",
    role: "Cloud Infrastructure",
    description: "Scalable cloud computing services, server management, and web application hosting.",
    iconName: "Cloud",
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Penyewaan Lapangan",
    description: "A web-based sports facility rental platform for checking availability, booking fields, and managing reservations.",
    image: "/projects/project-web-flnx.png",
    githubUrl: "https://github.com/Rifki-reys",
    demoUrl: "#",
  },
  {
    title: "Kopi Caramel",
    description: "Cinematic promotional landing page for Ice Caramel Coffee featuring a video background and modern visual design.",
    image: "/projects/1789615298_75989e2c08084741aa94.png",
    githubUrl: "https://github.com/Rifki-reys/kopi-caramel",
    demoUrl: "https://nava-karamel.vercel.app/",
  },
  {
    title: "Sistem Absensi Karyawan",
    description: "Web-based employee attendance management system with HRD dashboard, leave and permission management, work hour settings, and reporting.",
    image: "/projects/1789615809_2d3c10450156a6cb08db.png",
    githubUrl: "https://github.com/Rifki-reys/Sistem-Absensi-",
    demoUrl: "#",
  },
  {
    title: "IG Unfollower Checker",
    description: "A simple front-end tool to identify Instagram accounts that don't follow you back. Tagline: spot someone who acts like a celebrity.",
    image: "/projects/1789543759_e78cf978a130899fb6b1.png",
    githubUrl: "https://github.com/Rifki-reys/ig-unfollower-checker",
    demoUrl: "https://rifki-reys.github.io/ig-unfollower-checker",
  },
];

export const contactData: ContactData = {
  title: "Let's Connect",
  subtitle: "Have a project or opportunity in mind? Feel free to reach out.",
  email: "rifkifauzi325@gmail.com",
  githubUsername: "github.com/Rifki-reys",
  githubUrl: "https://github.com/Rifki-reys",
  instagramHandle: "@rfkifauzi_",
  instagramUrl: "https://www.instagram.com/rfkifauzi_",
};
