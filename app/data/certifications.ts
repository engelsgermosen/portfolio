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
    title: "Programación Orientada a Objetos con C#",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-c-sharp-poo.pdf",
    imageUrl: "/certifications/diploma-c-sharp-poo.pdf",
    skills: ["C#", "POO", "Programación"],
  },
  {
    id: 3,
    title: "Clean Code con C#",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-clean-code-csharp.pdf",
    imageUrl: "/certifications/diploma-clean-code-csharp.pdf",
    skills: ["C#", "Clean Code", "Buenas Prácticas"],
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
  // APIs y Bases de Datos
  {
    id: 7,
    title: "Fundamentos de APIs",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-api.pdf",
    imageUrl: "/certifications/diploma-api.pdf",
    skills: ["API", "REST", "HTTP"],
  },
  {
    id: 8,
    title: "Fundamentos de Bases de Datos con SQL",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-db-sql.pdf",
    imageUrl: "/certifications/diploma-db-sql.pdf",
    skills: ["SQL", "Bases de Datos", "Consultas"],
  },
  // JavaScript
  {
    id: 9,
    title: "Fundamentos de JavaScript",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-javascript.pdf",
    imageUrl: "/certifications/diploma-javascript.pdf",
    skills: ["JavaScript", "Programación", "Web"],
  },
  {
    id: 10,
    title: "Manipulación del DOM",
    issuer: "Platzi",
    date: "Noviembre 2024",
    credentialUrl: "/certifications/diploma-document-object-model.pdf",
    imageUrl: "/certifications/diploma-document-object-model.pdf",
    skills: ["JavaScript", "DOM", "Web"],
  },
];
