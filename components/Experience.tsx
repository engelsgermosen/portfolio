"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "./language-provider";
import type { Locale } from "@/i18n/dictionaries";

interface ExperienceItem {
  id: number;
  company: string;
  role: Record<Locale, string>;
  period: string;
  location: string;
  bullets: Record<Locale, string[]>;
  tecnologies: string[];
}

const experience: ExperienceItem[] = [
  {
    id: 0,
    company: "Dirección General de Impuestos Internos (DGII)",
    role: {
      es: "Desarrollador de Software — Pasante",
      en: "Software Developer Intern",
    },
    period: "Oct 2025 – Feb 2026",
    location: "Santo Domingo, DR",
    bullets: {
      es: [
        "Desarrollé herramientas de escritorio en .NET para automatizar la validación de facturas, reduciendo carga manual y mejorando la eficiencia operativa.",
        "Automaticé flujos de validación repetitivos, minimizando intervención humana y tiempos de procesamiento.",
        "Colaboré con equipos técnicos para integrar sistemas internos y mejorar la confiabilidad del servicio.",
        "Apliqué estrategias de debugging y testing para garantizar estabilidad y rendimiento del sistema.",
      ],
      en: [
        "Developed .NET-based desktop tools to automate invoice validation processes, reducing manual workload and improving operational efficiency.",
        "Automated repetitive service validation workflows, minimizing human intervention and reducing processing time.",
        "Collaborated with technical teams to integrate internal systems and improve service reliability.",
        "Applied debugging and testing strategies to ensure system stability and performance.",
      ],
    },
    tecnologies: [".NET", "C#", "SQL Server", "Azure DevOps"],
  },
  {
    id: 1,
    company: "Self-Employed",
    role: { es: "Desarrollador Freelance", en: "Freelance Software Developer" },
    period: "Oct 2025 – Present",
    location: "Remote",
    bullets: {
      es: [
        "Desarrollé una app móvil de finanzas personales para un cliente privado usando Flutter y Supabase, permitiendo seguimiento en tiempo real de activos, pasivos y patrimonio neto.",
        "Diseñé y gestioné el esquema completo de base de datos en Supabase, incluyendo tablas, relaciones y row-level security.",
        "Implementé un sistema de gestión de beneficiarios para distribuir activos entre receptores designados.",
        "Lideré el ciclo completo de desarrollo: requerimientos, despliegue y pruebas.",
      ],
      en: [
        "Developed a personal finance mobile application for a private client using Flutter and Supabase, enabling real-time tracking of assets, liabilities and net worth.",
        "Designed and managed the full database schema in Supabase, including tables, relationships, and row-level security.",
        "Implemented beneficiary management system to distribute assets among designated recipients.",
        "Owned the complete development lifecycle, from requirements gathering to deployment and testing.",
      ],
    },
    tecnologies: ["Flutter", "Supabase", "Dart"],
  },
];

const sectionTitle: Record<Locale, string> = {
  es: "Experiencia",
  en: "Experience",
};
const sectionSubtitle: Record<Locale, string> = {
  es: "Mi trayectoria profesional construyendo software",
  en: "My professional journey building software",
};

const Experience = () => {
  const { locale } = useTranslation();

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        {/* Section header (mirrors the other sections: icon badge + title + muted subtitle) */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {sectionTitle[locale]}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {sectionSubtitle[locale]}
          </p>
        </div>

        {/* Vertical timeline: the left border is the line, the orange dots mark each entry */}
        <ol className="relative mx-auto mt-16 max-w-3xl space-y-10 border-l border-border pl-8 md:pl-10">
          {experience.map((exp, index) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Timeline dot (orange accent). ring-background masks the line behind it */}
              <span className="absolute -left-[2.5rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background md:-left-[3rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground"></span>
              </span>

              <div className="rounded-xl border border-border bg-card/80 text-card-foreground p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="mt-0.5 font-medium text-primary">
                  {exp.role[locale]}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.bullets[locale].map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tecnologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
