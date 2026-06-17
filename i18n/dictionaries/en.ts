import type { Dictionary } from "./index";

// Diccionario inglés. Anotado con `Dictionary` para que cualquier clave
// faltante o mal escrita falle en tiempo de compilación.
const en: Dictionary = {
  nav: {
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
    about: "About",
    contact: "Contact",
  },
  header: {
    contact: "Contact me",
    getInTouch: "Get in touch",
  },
  hero: {
    badge: "Available for new projects",
    roles: [
      "Full-Stack Developer",
      ".NET & React Engineer",
      "Clean Architecture",
      "Microservices Builder",
    ],
    greeting: "Hi, I'm",
    description:
      "Full-stack developer focused on .NET and React. I build scalable backends with clean architecture and modern frontends centered on user experience.",
    viewProjects: "See my projects",
    viewCv: "View CV",
    downloadCv: "Download CV",
    location: "Santo Domingo, DR",
  },
  experience: {
    eyebrow: "Experience",
    tagline: "Where I've been building",
  },
  projects: {
    eyebrow: "Projects",
    tagline: "Things I've shipped",
    title: "Projects",
    subtitle: "Take a look at some of my recent work",
    viewProject: "View project",
    viewGithub: "View on GitHub",
    featured: "Featured",
  },
  skills: {
    eyebrow: "Skills",
    tagline: "The stack I work in",
    title: "Skills",
    subtitle:
      "Technologies and tools I use to build modern, efficient web applications. Over 1.5 years developing personal projects.",
    categories: {
      stack: "Main stack",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
    level: "Level",
    of: "of",
  },
  certifications: {
    eyebrow: "Certifications",
    tagline: "Always learning",
    title: "Certifications",
    subtitle:
      "Continuous learning and certifications that back up my software development knowledge",
    completed: "Completed",
    viewCertificate: "View certificate",
    viewDiploma: "View full diploma",
    showMore: "Show more certifications",
    showLess: "Show fewer certifications",
    total: "Total certifications:",
  },
  about: {
    eyebrow: "About me",
    tagline: "Self-taught, building serious systems",
    intro:
      "Full-stack developer from Santo Domingo, DR. I specialize in .NET backends with clean architecture and microservices, and modern frontends with React and Flutter. I care about maintainable code, systems that hold up under load, and every detail working the way it should.",
    howWorkTitle: "How I work",
    howWork1:
      "I design and implement RESTful APIs and backend services with .NET/C#, applying clean architecture, CQRS, and SOLID principles.",
    howWork2:
      "I build modern, responsive interfaces with React, Next.js, and Flutter, focused on user experience.",
    howWork3:
      "I manage relational and non-relational databases (PostgreSQL, SQL Server, Redis, MongoDB), version control with Git, and container-based deployment with Docker.",
    educationTitle: "Education",
    education1: "Software Development Technologist — ITLA (2023–2025).",
    education2:
      "Foundational C# with Microsoft certification (2026). Azure Fundamentals AZ-900 in progress. Courses in backend architecture, APIs, and databases.",
    nowTitle: "Right now",
    nowText:
      "Building Rappix, a delivery platform with microservices on .NET 10, sagas with MassTransit, Stripe payments, and real-time tracking with SignalR. Looking for my first remote role as a developer.",
    info: {
      locationLabel: "location",
      locationValue: "Santo Domingo, DR",
      focusLabel: "focus",
      focusValue: ".NET · React · Flutter",
      levelLabel: "level",
      levelValue: "Junior · self-taught",
      languagesLabel: "languages",
      languagesValue: "Spanish · English B1",
    },
  },
  contact: {
    eyebrow: "Contact",
    tagline: "Let's build something serious",
    title: "Contact me",
    subtitle: "Let's work together on your next project",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your message",
    send: "Send Message",
    success: "Email sent successfully!",
    orWrite: "Or send me a direct message",
  },
  sidebar: {
    getInTouch: "Get in touch",
    rights: "All rights reserved",
    closeMenu: "Close menu",
  },
  footer: {
    rights: "All rights reserved.",
    tagline: "Built with care in Santo Domingo",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
    toggle: "Toggle theme",
  },
  language: {
    label: "Language",
    spanish: "Español",
    english: "English",
  },
  projectDetails: {
    viewCode: "View Code",
    viewLive: "View Live",
    prevImage: "Previous image",
    nextImage: "Next image",
    goToImage: "Go to image",
    projectImage: "Project image",
  },
  metadata: {
    title: "Engels' Portfolio",
    description: "Engels' Portfolio - Web Developer and Programmer",
  },
};

export default en;
