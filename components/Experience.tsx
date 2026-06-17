"use client";

import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from "./language-provider";
import type { Locale } from "@/i18n/dictionaries";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

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

const Experience = () => {
  const { t, locale } = useTranslation();

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1160px] px-6 py-[clamp(56px,9vw,108px)]"
    >
      <SectionHeading
        number="01"
        eyebrow={t.experience.eyebrow}
        title={t.experience.tagline}
      />

      <div className="relative flex flex-col gap-[30px] border-l border-border pl-[34px]">
        {experience.map((exp, index) => (
          <Reveal key={exp.id} delay={index * 0.1} className="relative">
            {/* Timeline dot */}
            <span
              className="absolute -left-[42px] top-1.5 size-[15px] rounded-full bg-primary"
              style={{
                boxShadow:
                  "0 0 0 4px var(--bg), 0 0 0 5px var(--border), 0 0 18px var(--accent-glow)",
              }}
            />
            <div className="rounded-2xl border border-border bg-card p-[26px_28px] transition-all duration-200 hover:translate-x-[3px] hover:border-primary">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-[10px]">
                <h3 className="font-display text-[1.28rem] font-semibold text-foreground">
                  {exp.role[locale]}
                </h3>
                <span className="font-mono text-[0.8rem] text-primary">
                  {exp.period}
                </span>
              </div>

              <div className="mb-1 font-medium text-muted-foreground">
                {exp.company}
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-faint)]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets[locale].map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[0.98rem] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tecnologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-[var(--surface-2)] px-[11px] py-1.5 font-mono text-[0.76rem] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
