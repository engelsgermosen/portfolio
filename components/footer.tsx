"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "./language-provider";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="grid size-[26px] place-items-center rounded-[7px] font-mono text-[0.72rem] font-semibold text-white"
            style={{
              background: "linear-gradient(140deg, var(--primary), #c2410c)",
            }}
          >
            &lt;/&gt;
          </span>
          <span className="font-display font-bold text-foreground">
            Engels<span className="text-primary">DEV</span>
          </span>
        </Link>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/engelsgermosen"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/engels-germosen-4a08b5354/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:mrengels2648@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="font-mono text-[0.8rem] text-[var(--text-faint)]">
          © {new Date().getFullYear()} Engels Germosen · {t.footer.tagline}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
