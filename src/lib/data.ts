import {
  Code2,
  Brain,
  GitBranch,
  Cpu,
  Bot,
  Eye,
  Layers,
  Github,
  Linkedin,
  Mail,
  Award,
  Users,
  Trophy,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
  gradient: string;
  iconColor: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: "ai" | "web" | "software";
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl: string;
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shanusingh-ai",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shanusinghai",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:shanusingh.iiitv@gmail.com",
    icon: Mail,
  },
];

// ─── Personal Info ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Shanu Singh",
  firstName: "Shanu",
  lastName: "Singh",
  role: "MCA Student at IIIT Vadodara",
  headline: "Aspiring AI Engineer | Python Developer | AI & ML Enthusiast",
  typewriterRoles: [
    "AI Engineer",
    "Python Developer",
    "ML Enthusiast",
    "Problem Solver",
    "Computer Vision Explorer",
  ],
  shortBio:
    "I am an MCA student at IIIT Vadodara passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Software Development. I enjoy solving real-world problems through technology and continuously learning emerging technologies.",
  aboutParagraphs: [
    "I am an MCA student at IIIT Vadodara with a strong interest in Artificial Intelligence, Machine Learning, Computer Vision, and Software Development. I enjoy solving real-world problems through technology and continuously learning new concepts that help me grow as a developer and future AI Engineer.",
    "My technical skills include Python, C Programming, JavaScript, HTML, CSS, Git, GitHub, Data Structures & Algorithms, Machine Learning, and Computer Vision. I enjoy building practical projects, exploring emerging technologies, and applying my knowledge to create efficient and meaningful solutions.",
    "Beyond academics, I actively participate in technical communities, skill development programs, and project-based learning. I am passionate about improving my problem-solving abilities, contributing to open-source projects, and gaining hands-on experience through real-world applications.",
    "My goal is to build intelligent systems that solve meaningful problems and contribute to innovative technology-driven organizations while continuously learning, growing, and making a positive impact through technology.",
  ],
  highlights: [
    { label: "Focus Area", value: "AI & Machine Learning" },
    { label: "Primary Language", value: "Python" },
    { label: "Academic Institution", value: "IIIT Vadodara" },
    { label: "Career Objective", value: "AI Engineering" },
  ],
  resumeUrl: "/resume/Shanu_Singh_Resume.pdf",
  email: "shanusingh.iiitv@gmail.com",
  phone: "+91 6307271677",
};

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Languages I build with",
    icon: Code2,
    gradient: "from-indigo-500 to-purple-500",
    iconColor: "text-indigo-400",
    skills: [
      { name: "Python", level: 90 },
      { name: "C Programming", level: 75 },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems I develop",
    icon: Brain,
    gradient: "from-cyan-500 to-blue-500",
    iconColor: "text-cyan-400",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Computer Vision", level: 75 },
      { name: "Deep Learning Basics", level: 65 },
    ],
  },
  {
    title: "Developer Tools",
    description: "Tools that power my workflow",
    icon: GitBranch,
    gradient: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-400",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    title: "Core CS",
    description: "Foundations that guide my thinking",
    icon: Cpu,
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-400",
    skills: [
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 78 },
      { name: "Problem Solving", level: 85 },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "chat-application-simulation",
    title: "Chat Application Simulation (OOPs)",
    description:
      "A console-based Chat Application Simulation developed in C++ using Object-Oriented Programming (OOP) concepts. This project demonstrates user interaction, message exchange, exception handling, inheritance, function overloading, constructor overloading and friend functions.",
    longDescription:
      "Developed a console-based Chat Application Simulation in C++ using Object-Oriented Programming principles. The project implements inheritance, polymorphism, function overloading, constructor overloading, friend functions, and exception handling to simulate real-world chat interactions while strengthening software design and problem-solving skills.",
    techStack: [
      "C++",
      "OOP",
      "Inheritance",
      "Polymorphism",
      "Exception Handling",
      "Overloading",
    ],
    githubUrl:
      "https://github.com/shanusingh-ai/OOPs-Chat-Application-Simulation",
    featured: true,
    category: "software",
    image: "/images/projects/ChatApp_Project (OOPs).png",
  },

  {
    id: "movie-ticket-booking-system",
    title: "Online Movie Ticket Booking System (DBMS)",
    description:
      "Built a full-stack Movie Ticket Booking System using Flask, MySQL, Bootstrap and JavaScript featuring authentication, admin management, seat booking and responsive design.",
    longDescription:
      "Designed and developed a full-stack Movie Ticket Booking System with secure user authentication, seat reservation, booking management, and admin controls. The application uses Flask for backend development, MySQL for database management, and Bootstrap with JavaScript for a responsive user interface.",
    techStack: [
      "Flask",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],
    githubUrl:
      "https://github.com/shanusingh-ai/DBMS-Online-Movie-Ticket-Booking-System",
    featured: true,
    category: "web",
    image: "/images/projects/Home Page.png",
  },

  {
    id: "railway-reservation-system",
    title: "Railway Reservation System (C Programming)",
    description:
      "A console-based Railway Reservation System developed in C Programming Language. This project allows users to book train tickets, search reservations, cancel bookings and manage passenger records using file handling.",
    longDescription:
      "Built a Railway Reservation System in C Programming that enables ticket booking, reservation search, cancellation, and passenger record management. The project leverages file handling, data structures, memory management, and CRUD operations to efficiently manage reservation data through a console-based interface.",
    techStack: [
      "C Programming",
      "File Handling",
      "Data Structures",
      "Memory Management",
      "CRUD Operations",
    ],
    githubUrl:
      "https://github.com/shanusingh-ai/C-Railway-Reservation-System",
    featured: true,
    category: "software",
    image: "/images/projects/Railway Reservation_Project (C Programming).png",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Masters In Computer Application (MCA)",
    institution: "Indian Institute of Information Technology Vadodara",
    location: "Vadodara, Gujarat, India",
    period: "2024 – 2026",
    status: "Currently Pursuing",
    description:
      "Focusing on Artificial Intelligence, Machine Learning, and advanced Software Engineering. Actively involved in research projects and technical communities.",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Computer Vision",
      "Software Engineering",
      "Database Management",
    ],
  },
];

// ─── Certifications ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "Python for Data Science",
    organization: "IBM – Coursera",
    date: "Oct 2025",
    credentialUrl: "https://coursera.org/verify/python-ds",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Machine Learning Specialization",
    organization: "Stanford – DeepLearning.AI",
    date: "Sep 2025",
    credentialUrl: "https://coursera.org/verify/ml-spec",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Introduction to Deep Learning",
    organization: "NPTEL – IIT",
    date: "Dec 2025",
    credentialUrl: "https://nptel.ac.in/verify/deep-learning",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Git and GitHub Essentials",
    organization: "Microsoft – LinkedIn Learning",
    date: "Nov 2025",
    credentialUrl: "https://linkedin.com/learning/verify/git",
    color: "from-emerald-500 to-green-500",
  },
];

// ─── Achievements ────────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    title: "200+ Problems Solved",
    description:
      "Solved over 200 coding problems on competitive programming platforms including LeetCode, HackerRank, and Codeforces, strengthening algorithmic thinking and problem-solving skills.",
    icon: Trophy,
    category: "Coding",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Google Student Ambassador",
    description:
      "Selected as a Student Ambassador at IIIT Vadodara, representing the institution in tech events and mentoring junior students in programming and AI fundamentals.",
    icon: Users,
    category: "Leadership",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Smart India Hackathon",
    description:
      "Led a team of 4 developers in the Smart India Hackathon, building an AI-powered solution for a real-world problem statement under a 36-hour deadline.",
    icon: Award,
    category: "Hackathon",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Research Contributor",
    description:
      "Contributed to a research project on Computer Vision applications for automated quality inspection, gaining hands-on experience in applied AI research methodologies.",
    icon: Lightbulb,
    category: "Research",
    color: "from-emerald-500 to-teal-500",
  },
];

// ─── Project Categories ─────────────────────────────────────────────────────

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "AI & ML", value: "ai" },
  { label: "Web Dev", value: "web" },
  { label: "Software", value: "software" },
];
