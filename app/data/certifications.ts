import type { Localized } from "@/i18n/dictionaries";

export interface ICertification {
  id: number;
  title: Localized;
  issuer: string;
  date: Localized;
  credentialId?: string;
  credentialUrl: string;
  imageUrl: string;
  skills?: Localized[];
}

export const certifications: ICertification[] = [
  // C# y .NET
  {
    id: 0,
    title: { es: "Foundational C# with Microsoft", en: "Foundational C# with Microsoft" },
    issuer: "Microsoft",
    date: { es: "Junio 2026", en: "June 2026" },
    credentialUrl:
      "https://www.freecodecamp.org/certification/engelsgermosen/foundational-c-sharp-with-microsoft",
    imageUrl: "/certifications/foundation-c#-with-microsoft",
    skills: [{ es: "C#", en: "C#" }],
  },
  {
    id: 1,
    title: { es: "Fundamentos de .NET", en: ".NET Fundamentals" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-fundamentos-net.pdf",
    imageUrl: "/certifications/diploma-fundamentos-net.pdf",
    skills: [
      { es: ".NET", en: ".NET" },
      { es: "C#", en: "C#" },
      { es: "Framework", en: "Framework" },
    ],
  },
  {
    id: 2,
    title: {
      es: "Programacion Orientada a Objetos con C#",
      en: "Object-Oriented Programming with C#",
    },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-c-sharp-poo.pdf",
    imageUrl: "/certifications/diploma-c-sharp-poo.pdf",
    skills: [
      { es: "C#", en: "C#" },
      { es: "POO", en: "OOP" },
      { es: "Programacion", en: "Programming" },
    ],
  },
  {
    id: 3,
    title: { es: "Clean Code con C#", en: "Clean Code with C#" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-clean-code-csharp.pdf",
    imageUrl: "/certifications/diploma-clean-code-csharp.pdf",
    skills: [
      { es: "C#", en: "C#" },
      { es: "Clean Code", en: "Clean Code" },
      { es: "Buenas Practicas", en: "Best Practices" },
    ],
  },
  {
    id: 4,
    title: {
      es: "Principios SOLID con C# y .NET",
      en: "SOLID Principles with C# and .NET",
    },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-solid-csharp-net.pdf",
    imageUrl: "/certifications/diploma-solid-csharp-net.pdf",
    skills: [
      { es: "C#", en: "C#" },
      { es: ".NET", en: ".NET" },
      { es: "SOLID", en: "SOLID" },
      { es: "Arquitectura", en: "Architecture" },
    ],
  },
  {
    id: 5,
    title: { es: "LINQ con C# y .NET", en: "LINQ with C# and .NET" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-linq.pdf",
    imageUrl: "/certifications/diploma-linq.pdf",
    skills: [
      { es: "C#", en: "C#" },
      { es: ".NET", en: ".NET" },
      { es: "LINQ", en: "LINQ" },
      { es: "Consultas", en: "Queries" },
    ],
  },
  {
    id: 6,
    title: { es: "APIs con .NET", en: "APIs with .NET" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-apis-net.pdf",
    imageUrl: "/certifications/diploma-apis-net.pdf",
    skills: [
      { es: ".NET", en: ".NET" },
      { es: "C#", en: "C#" },
      { es: "Web API", en: "Web API" },
      { es: "ASP.NET", en: "ASP.NET" },
    ],
  },
  // Arquitectura Backend
  {
    id: 7,
    title: { es: "Arquitectura Backend", en: "Backend Architecture" },
    issuer: "Platzi",
    date: { es: "Diciembre 2025", en: "December 2025" },
    credentialUrl: "/certifications/arquitectura-backend.pdf",
    imageUrl: "/certifications/arquitectura-backend.pdf",
    skills: [
      { es: "Arquitectura", en: "Architecture" },
      { es: "Backend", en: "Backend" },
      { es: "Patrones", en: "Patterns" },
    ],
  },
  // APIs y Bases de Datos
  {
    id: 8,
    title: { es: "Fundamentos de APIs", en: "API Fundamentals" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-api.pdf",
    imageUrl: "/certifications/diploma-api.pdf",
    skills: [
      { es: "API", en: "API" },
      { es: "REST", en: "REST" },
      { es: "HTTP", en: "HTTP" },
    ],
  },
  {
    id: 9,
    title: {
      es: "Fundamentos de Bases de Datos con SQL",
      en: "Database Fundamentals with SQL",
    },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-db-sql.pdf",
    imageUrl: "/certifications/diploma-db-sql.pdf",
    skills: [
      { es: "SQL", en: "SQL" },
      { es: "Bases de Datos", en: "Databases" },
      { es: "Consultas", en: "Queries" },
    ],
  },
  // JavaScript y Node.js
  {
    id: 10,
    title: { es: "Fundamentos de JavaScript", en: "JavaScript Fundamentals" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-javascript.pdf",
    imageUrl: "/certifications/diploma-javascript.pdf",
    skills: [
      { es: "JavaScript", en: "JavaScript" },
      { es: "Programacion", en: "Programming" },
      { es: "Web", en: "Web" },
    ],
  },
  {
    id: 11,
    title: { es: "Manipulacion del DOM", en: "DOM Manipulation" },
    issuer: "Platzi",
    date: { es: "Noviembre 2024", en: "November 2024" },
    credentialUrl: "/certifications/diploma-document-object-model.pdf",
    imageUrl: "/certifications/diploma-document-object-model.pdf",
    skills: [
      { es: "JavaScript", en: "JavaScript" },
      { es: "DOM", en: "DOM" },
      { es: "Web", en: "Web" },
    ],
  },
  {
    id: 12,
    title: { es: "Backend con Express.js", en: "Backend with Express.js" },
    issuer: "Platzi",
    date: { es: "Diciembre 2025", en: "December 2025" },
    credentialUrl: "/certifications/backend-expressjs.pdf",
    imageUrl: "/certifications/backend-expressjs.pdf",
    skills: [
      { es: "Express.js", en: "Express.js" },
      { es: "Node.js", en: "Node.js" },
      { es: "APIs", en: "APIs" },
    ],
  },
  // Herramientas y DevOps
  {
    id: 13,
    title: { es: "Git y GitHub", en: "Git and GitHub" },
    issuer: "Platzi",
    date: { es: "Diciembre 2025", en: "December 2025" },
    credentialUrl: "/certifications/git-github.pdf",
    imageUrl: "/certifications/git-github.pdf",
    skills: [
      { es: "Git", en: "Git" },
      { es: "GitHub", en: "GitHub" },
      { es: "Control de Versiones", en: "Version Control" },
    ],
  },
  {
    id: 14,
    title: { es: "Introduccion a DevOps", en: "Introduction to DevOps" },
    issuer: "Platzi",
    date: { es: "Diciembre 2025", en: "December 2025" },
    credentialUrl: "/certifications/introduccion-devops.pdf",
    imageUrl: "/certifications/introduccion-devops.pdf",
    skills: [
      { es: "DevOps", en: "DevOps" },
      { es: "CI/CD", en: "CI/CD" },
      { es: "Automatizacion", en: "Automation" },
    ],
  },
  // Redes y Fundamentos
  {
    id: 15,
    title: { es: "IT Essentials", en: "IT Essentials" },
    issuer: "Cisco Networking Academy",
    date: { es: "Octubre 2025", en: "October 2025" },
    credentialUrl:
      "/certifications/IT_Essentials_certificate_20231387-itla-edu-do_cab6cf07-0ce9-4c12-a705-fed359c6216e.pdf",
    imageUrl:
      "/certifications/IT_Essentials_certificate_20231387-itla-edu-do_cab6cf07-0ce9-4c12-a705-fed359c6216e.pdf",
    skills: [
      { es: "Hardware", en: "Hardware" },
      { es: "Soporte", en: "Support" },
      { es: "Redes", en: "Networking" },
    ],
  },
  {
    id: 16,
    title: {
      es: "Programming Essentials in C++ (CPA)",
      en: "Programming Essentials in C++ (CPA)",
    },
    issuer: "Cisco Networking Academy",
    date: { es: "Octubre 2025", en: "October 2025" },
    credentialUrl:
      "/certifications/Partner-_CPA_-_Programming_Essentials_in_C--_certificate_20231387-itla-edu-do_02971c61-175a-4fd2-944b-eb3cf3d7b6ea.pdf",
    imageUrl:
      "/certifications/Partner-_CPA_-_Programming_Essentials_in_C--_certificate_20231387-itla-edu-do_02971c61-175a-4fd2-944b-eb3cf3d7b6ea.pdf",
    skills: [
      { es: "C++", en: "C++" },
      { es: "Programacion", en: "Programming" },
      { es: "Fundamentos", en: "Fundamentals" },
    ],
  },
  {
    id: 17,
    title: { es: "Fundamentos de Scrum", en: "Scrum Fundamentals" },
    issuer: "soyLider.net",
    date: { es: "Octubre 2025", en: "October 2025" },
    credentialUrl:
      "/certifications/Certificate for ENGELS RUBEN GERMOSEN MARTE for _Bienvenid@s a las preguntas..._.pdf",
    imageUrl:
      "/certifications/Certificate for ENGELS RUBEN GERMOSEN MARTE for _Bienvenid@s a las preguntas..._.pdf",
    skills: [
      { es: "Scrum", en: "Scrum" },
      { es: "Metodologias agiles", en: "Agile methodologies" },
    ],
  },
];
