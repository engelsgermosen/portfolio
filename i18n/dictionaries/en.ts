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
  },
  hero: {
    greeting: "Hi, I'm",
    description:
      "Full-stack developer focused on .NET and React. I build scalable backends with clean architecture and modern frontends centered on user experience.",
    viewProjects: "See my projects",
    viewCv: "View CV",
    downloadCv: "Download CV",
  },
  projects: {
    title: "Projects",
    subtitle: "Take a look at some of my recent work",
    viewProject: "View project",
  },
  skills: {
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
    title: "Certifications",
    subtitle:
      "Continuous learning and certifications that back up my software development knowledge",
    viewCertificate: "View certificate",
    viewDiploma: "View full diploma",
    showMore: "Show more certifications",
    showLess: "Show fewer certifications",
    total: "Total certifications:",
  },
  about: {
    intro:
      "Full-stack developer focused on turning ideas into maintainable, fast web products. I care about clean architecture, DX, and making every detail of the interface feel smooth and accessible.",
    howWorkTitle: "How I work",
    howWork1:
      "Designing clear, scalable APIs with .NET/C# or Node.js/JavaScript.",
    howWork2: "Accessible, performant interfaces with React/Next.js.",
    howWork3: "Basic testing, version control, CI/CD and useful documentation.",
    educationTitle: "Education",
    education1: "Software Development — ITLA (2023–2025).",
    education2:
      "Complemented with courses on REST APIs, SQL/NoSQL databases and cloud deployment.",
    nowTitle: "Right now",
    nowText:
      "Going deeper into real-time apps with WebSockets, performance optimization in Next.js (SSR/ISR) and clean architecture patterns.",
  },
  contact: {
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
  },
  sidebar: {
    getInTouch: "Get in touch",
    rights: "All rights reserved",
    closeMenu: "Close menu",
  },
  footer: {
    rights: "All rights reserved.",
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
