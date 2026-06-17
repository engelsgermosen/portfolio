"use client";
import { ArrowRight, Github, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Projects } from "@/app/data/projects";
import { useTranslation } from "./language-provider";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

const TechPill = ({ label, small }: { label: string; small?: boolean }) => (
  <span
    className={`rounded-lg border border-border bg-[var(--surface-2)] font-mono text-muted-foreground ${
      small ? "px-[10px] py-[5px] text-[0.72rem]" : "px-[11px] py-1.5 text-[0.76rem]"
    }`}
  >
    {label}
  </span>
);

const Project = () => {
  const { t, locale } = useTranslation();
  const [featured, ...rest] = Projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1160px] px-6 py-[clamp(56px,9vw,108px)]"
    >
      <SectionHeading
        number="02"
        eyebrow={t.projects.eyebrow}
        title={t.projects.tagline}
      />

      {/* Featured project */}
      {featured && (
        <Reveal className="mb-6">
          <div className="grid overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-200 hover:border-primary hover:shadow-[0_24px_60px_-28px_var(--accent-glow)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            <div className="relative min-h-[280px] border-b border-border md:border-b-0 md:border-r">
              <Image
                src={featured.images[0] || "/placeholder.svg"}
                alt={featured.title[locale]}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 580px"
                className="object-cover"
              />
              <span className="absolute left-[18px] top-[18px] inline-flex items-center gap-[7px] rounded-full bg-primary px-[13px] py-1.5 font-mono text-[0.72rem] font-semibold text-primary-foreground">
                <Star className="h-3 w-3 fill-current" /> {t.projects.featured}
              </span>
            </div>
            <div className="p-[clamp(28px,4vw,42px)]">
              <h3 className="mb-4 font-display text-[1.7rem] font-bold leading-tight tracking-tight text-foreground">
                {featured.title[locale]}
              </h3>
              <p className="mb-[22px] leading-[1.7] text-muted-foreground">
                {featured.description[locale]}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {featured.tecnologies.map((tech) => (
                  <TechPill key={tech} label={tech} />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href={`/project/${featured.id}`}
                  className="group inline-flex items-center gap-2 font-mono text-[0.86rem] font-medium text-foreground transition-colors hover:text-primary"
                >
                  {t.projects.viewProject}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {featured.github && (
                  <Link
                    href={featured.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[0.86rem] font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    {t.projects.viewGithub}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* Grid of remaining projects */}
      <Reveal className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
        {rest.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="group flex flex-col overflow-hidden rounded-[18px] border border-border bg-card transition-all duration-200 hover:-translate-y-[5px] hover:border-primary hover:shadow-[0_22px_50px_-26px_var(--accent-glow)]"
          >
            <div className="relative h-[158px] border-b border-border">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title[locale]}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2.5 font-display text-[1.22rem] font-semibold text-foreground">
                {project.title[locale]}
              </h3>
              <p className="mb-[18px] flex-1 text-[0.94rem] leading-[1.62] text-muted-foreground line-clamp-4">
                {project.description[locale]}
              </p>
              <div className="mb-[18px] flex flex-wrap gap-[7px]">
                {project.tecnologies.slice(0, 5).map((tech) => (
                  <TechPill key={tech} label={tech} small />
                ))}
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[0.82rem] text-muted-foreground transition-colors group-hover:text-primary">
                {t.projects.viewProject}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </Reveal>
    </section>
  );
};

export default Project;
