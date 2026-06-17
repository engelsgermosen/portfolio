"use client";
import { useTranslation } from "./language-provider";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

type CategoryKey = "stack" | "frontend" | "backend" | "tools";

interface ISkill {
  name: string;
  // Kept for reference; not rendered in the pill design.
  level: number;
}

interface ICategory {
  key: CategoryKey;
  skills: ISkill[];
}

const categories: ICategory[] = [
  {
    key: "stack",
    skills: [
      { name: "C# & .NET", level: 5 },
      { name: "React.js (Front)", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "SQL Server", level: 5 },
      { name: "Flutter & Dart", level: 4 },
    ],
  },
  {
    key: "frontend",
    skills: [
      { name: "HTML5 & CSS3", level: 5 },
      { name: "JavaScript & TypeScript", level: 5 },
      { name: "React.js", level: 4 },
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Flutter & Dart", level: 4 },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "C# & .NET", level: 5 },
      { name: "SQL Server & PostgreSQL", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "RESTful APIs", level: 5 },
      { name: "Entity Framework Core", level: 4 },
      { name: "JWT Auth", level: 4 },
      { name: "gRPC", level: 3 },
      { name: "SignalR", level: 3 },
      { name: "RabbitMQ", level: 3 },
      { name: "Redis", level: 3 },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git & GitHub", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Visual Studio", level: 5 },
      { name: "Vercel", level: 4 },
      { name: "Azure", level: 4 },
      { name: "Azure DevOps", level: 3 },
      { name: "Supabase", level: 4 },
      { name: "Postman", level: 4 },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="mx-auto max-w-[1160px] px-6 py-[clamp(56px,9vw,108px)]"
    >
      <SectionHeading
        number="03"
        eyebrow={t.skills.eyebrow}
        title={t.skills.tagline}
      />

      <Reveal className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {categories.map((category) => (
          <div
            key={category.key}
            className="rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary"
          >
            <div className="mb-4 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-primary">
              {t.skills.categories[category.key]}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-[9px] border border-border bg-[var(--surface-2)] px-[13px] py-[7px] text-[0.86rem] text-foreground"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Skills;
