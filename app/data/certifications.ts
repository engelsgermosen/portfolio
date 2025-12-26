export interface ICertification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl: string;
  imageUrl: string;
  skills?: string[];
}

export const certifications: ICertification[] = [
  // C# y .NET
  {
    id: 1,
    title: "Fundamentos de .NET",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-fundamentos-net.pdf",
    imageUrl: "/certifications/diploma-fundamentos-net.pdf",
    skills: [".NET", "C#", "Framework"],
  },
  {
    id: 2,
    title: "Programacion Orientada a Objetos con C#",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-c-sharp-poo.pdf",
    imageUrl: "/certifications/diploma-c-sharp-poo.pdf",
    skills: ["C#", "POO", "Programacion"],
  },
  {
    id: 3,
    title: "Clean Code con C#",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-clean-code-csharp.pdf",
    imageUrl: "/certifications/diploma-clean-code-csharp.pdf",
    skills: ["C#", "Clean Code", "Buenas Practicas"],
  },
  {
    id: 4,
    title: "Principios SOLID con C# y .NET",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-solid-csharp-net.pdf",
    imageUrl: "/certifications/diploma-solid-csharp-net.pdf",
    skills: ["C#", ".NET", "SOLID", "Arquitectura"],
  },
  {
    id: 5,
    title: "LINQ con C# y .NET",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-linq.pdf",
    imageUrl: "/certifications/diploma-linq.pdf",
    skills: ["C#", ".NET", "LINQ", "Consultas"],
  },
  {
    id: 6,
    title: "APIs con .NET",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-apis-net.pdf",
    imageUrl: "/certifications/diploma-apis-net.pdf",
    skills: [".NET", "C#", "Web API", "ASP.NET"],
  },
  // Arquitectura Backend
  {
    id: 7,
    title: "Arquitectura Backend",
    issuer: "Platzi",
    date: "Diciembre 2025",
    credentialUrl: "/certifications/arquitectura-backend.pdf",
    imageUrl: "/certifications/arquitectura-backend.pdf",
    skills: ["Arquitectura", "Backend", "Patrones"],
  },
  // APIs y Bases de Datos
  {
    id: 8,
    title: "Fundamentos de APIs",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-api.pdf",
    imageUrl: "/certifications/diploma-api.pdf",
    skills: ["API", "REST", "HTTP"],
  },
  {
    id: 9,
    title: "Fundamentos de Bases de Datos con SQL",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-db-sql.pdf",
    imageUrl: "/certifications/diploma-db-sql.pdf",
    skills: ["SQL", "Bases de Datos", "Consultas"],
  },
  // JavaScript y Node.js
  {
    id: 10,
    title: "Fundamentos de JavaScript",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-javascript.pdf",
    imageUrl: "/certifications/diploma-javascript.pdf",
    skills: ["JavaScript", "Programacion", "Web"],
  },
  {
    id: 11,
    title: "Manipulacion del DOM",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-document-object-model.pdf",
    imageUrl: "/certifications/diploma-document-object-model.pdf",
    skills: ["JavaScript", "DOM", "Web"],
  },
  {
    id: 12,
    title: "Backend con Express.js",
    issuer: "Platzi",
    date: "Diciembre 2025",
    credentialUrl: "/certifications/backend-expressjs.pdf",
    imageUrl: "/certifications/backend-expressjs.pdf",
    skills: ["Express.js", "Node.js", "APIs"],
  },
  // Herramientas y DevOps
  {
    id: 13,
    title: "Git y GitHub",
    issuer: "Platzi",
    date: "Diciembre 2025",
    credentialUrl: "/certifications/git-github.pdf",
    imageUrl: "/certifications/git-github.pdf",
    skills: ["Git", "GitHub", "Control de Versiones"],
  },
  {
    id: 14,
    title: "Introduccion a DevOps",
    issuer: "Platzi",
    date: "Diciembre 2025",
    credentialUrl: "/certifications/introduccion-devops.pdf",
    imageUrl: "/certifications/introduccion-devops.pdf",
    skills: ["DevOps", "CI/CD", "Automatizacion"],
  },
  // Redes y Fundamentos
  {
    id: 15,
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    date: "Octubre 2025",
    credentialUrl:
      "/certifications/IT_Essentials_certificate_20231387-itla-edu-do_cab6cf07-0ce9-4c12-a705-fed359c6216e.pdf",
    imageUrl:
      "/certifications/IT_Essentials_certificate_20231387-itla-edu-do_cab6cf07-0ce9-4c12-a705-fed359c6216e.pdf",
    skills: ["Hardware", "Soporte", "Redes"],
  },
  {
    id: 16,
    title: "Programming Essentials in C++ (CPA)",
    issuer: "Cisco Networking Academy",
    date: "Octubre 2025",
    credentialUrl:
      "/certifications/Partner-_CPA_-_Programming_Essentials_in_C--_certificate_20231387-itla-edu-do_02971c61-175a-4fd2-944b-eb3cf3d7b6ea.pdf",
    imageUrl:
      "/certifications/Partner-_CPA_-_Programming_Essentials_in_C--_certificate_20231387-itla-edu-do_02971c61-175a-4fd2-944b-eb3cf3d7b6ea.pdf",
    skills: ["C++", "Programacion", "Fundamentos"],
  },
  {
    id: 17,
    title: "Fundamentos de Scrum",
    issuer: "soyLider.net",
    date: "Octubre 2025",
    credentialUrl:
      "/certifications/Certificate for ENGELS RUBEN GERMOSEN MARTE for _Bienvenid@s a las preguntas..._.pdf",
    imageUrl:
      "/certifications/Certificate for ENGELS RUBEN GERMOSEN MARTE for _Bienvenid@s a las preguntas..._.pdf",
    skills: ["Scrum", "Metodologias agiles"],
  },
];
