"use client";
import { Github, Mail, Download, ArrowRight, Linkedin, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "./language-provider";
import TypedRoles from "./typed-roles";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header
      id="top"
      className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-[clamp(40px,6vw,72px)] px-6 py-[clamp(48px,9vw,104px)] md:grid-cols-2"
    >
      {/* Left column */}
      <div>
        <div
          className="animate-fade-up mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-border bg-card px-[13px] py-1.5 font-mono text-[0.74rem] tracking-wide text-muted-foreground"
        >
          <span className="size-[7px] rounded-full bg-primary animate-pulse-dot" />
          {t.hero.badge}
        </div>

        <h1
          className="animate-fade-up mb-[22px] font-display text-[clamp(2.7rem,8.5vw,5.4rem)] font-bold leading-[0.94] tracking-[-0.03em] text-foreground"
          style={{ animationDelay: "0.06s" }}
        >
          ENGELS
          <br />
          GERMOSEN
        </h1>

        <div
          className="animate-fade-up mb-[26px] min-h-[1.6em] font-mono text-[clamp(1rem,2.6vw,1.3rem)] text-muted-foreground"
          style={{ animationDelay: "0.12s" }}
        >
          <span className="text-primary">&gt;_</span> <TypedRoles roles={t.hero.roles} />
        </div>

        <p
          className="animate-fade-up mb-[34px] max-w-[476px] text-[1.06rem] leading-[1.72] text-muted-foreground"
          style={{ animationDelay: "0.18s" }}
        >
          {t.hero.description}
        </p>

        <div
          className="animate-fade-up mb-[34px] flex flex-wrap gap-3"
          style={{ animationDelay: "0.24s" }}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-[22px] py-[13px] text-[0.96rem] font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_var(--accent-glow)]"
          >
            {t.hero.viewProjects}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/cv/EngelsGermosenCv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-[22px] py-[13px] text-[0.96rem] font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary"
          >
            <Eye className="h-4 w-4" />
            {t.hero.viewCv}
          </Link>
          <Link
            href="/cv/EngelsGermosenCv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl px-[22px] py-[13px] text-[0.96rem] font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            {t.hero.downloadCv}
          </Link>
        </div>

        <div
          className="animate-fade-up flex gap-[11px]"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            {
              href: "https://github.com/engelsgermosen",
              label: "GitHub",
              icon: Github,
            },
            {
              href: "https://www.linkedin.com/in/engels-germosen-4a08b5354/",
              label: "LinkedIn",
              icon: Linkedin,
            },
            {
              href: "mailto:mrengels2648@gmail.com",
              label: "Email",
              icon: Mail,
            },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid size-[42px] place-items-center rounded-[11px] border border-border bg-card text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Right column — profile */}
      <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="relative aspect-square mx-auto w-full max-w-[280px] md:max-w-[360px]">
          {/* Glow */}
          <div
            className="absolute inset-[-14%] rounded-full opacity-75 blur-[30px] animate-float-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, var(--accent-glow), transparent 68%)",
            }}
          />
          {/* Spinning conic ring */}
          <div
            className="absolute inset-0 rounded-full animate-spin-ring"
            style={{
              background:
                "conic-gradient(from 140deg, var(--primary), var(--violet), var(--primary))",
            }}
          />
          {/* Photo (static, sits on top of the ring leaving a 3px edge) */}
          <div className="absolute inset-[3px] overflow-hidden rounded-full bg-[var(--surface)] ring-1 ring-border">
            <Image
              src="/yo.jpg"
              alt="Engels Germosen"
              fill
              quality={100}
              priority
              sizes="360px"
              className="object-cover"
            />
          </div>
          {/* Location pill */}
          <div className="absolute bottom-[6%] left-1/2 inline-flex -translate-x-1/2 items-center gap-[7px] whitespace-nowrap rounded-full border border-border bg-[var(--bg-2)] px-[14px] py-[7px] font-mono text-[0.74rem] text-muted-foreground shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
            📍 {t.hero.location}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
