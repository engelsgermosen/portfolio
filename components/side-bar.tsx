"use client";

import {
  X,
  Briefcase,
  Building2,
  Code,
  Mail,
  Award,
  ExternalLink,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "./language-provider";

interface SideBarProps {
  handleChange: () => void;
}

const SideBar = ({ handleChange }: SideBarProps) => {
  const { t } = useTranslation();

  const menuItems = [
    { href: "/#experience", label: t.nav.experience, icon: Building2 },
    { href: "/#projects", label: t.nav.projects, icon: Briefcase },
    { href: "/#skills", label: t.nav.skills, icon: Code },
    { href: "/#certifications", label: t.nav.certifications, icon: Award },
    { href: "/#about", label: t.nav.about, icon: User },
    { href: "/#contact", label: t.nav.contact, icon: Mail },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex min-h-screen w-full flex-col bg-[var(--bg)]"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-[var(--violet-soft)] blur-3xl"></div>
        <div className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-border px-8 py-6">
        <Link
          href="/"
          onClick={handleChange}
          className="flex items-center gap-[11px]"
        >
          <span
            className="grid size-[30px] place-items-center rounded-lg font-mono text-[0.82rem] font-semibold text-white shadow-[0_4px_14px_-4px_var(--accent-glow)]"
            style={{
              background: "linear-gradient(140deg, var(--primary), #c2410c)",
            }}
          >
            &lt;/&gt;
          </span>
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-foreground">
            Engels<span className="text-primary">DEV</span>
          </span>
        </Link>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleChange}
          aria-label={t.sidebar.closeMenu}
          className="size-10 rounded-[10px] border border-border bg-card text-foreground transition-all hover:border-primary"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col justify-center px-8">
        <nav className="space-y-2 py-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + index * 0.07,
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
            >
              <Link
                href={item.href}
                onClick={handleChange}
                className="group flex items-center gap-3 rounded-xl p-3 text-lg font-medium text-muted-foreground transition-all hover:bg-card hover:text-foreground"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-[var(--accent-soft)] text-primary transition-all group-hover:border-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="mt-8"
        >
          <Link
            href="/#contact"
            onClick={handleChange}
            className="group flex items-center justify-center gap-2 rounded-xl bg-primary p-4 text-center font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_var(--accent-glow)]"
          >
            {t.sidebar.getInTouch}
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative border-t border-border px-8 py-6 text-center text-sm text-muted-foreground"
      >
        <p>
          © {new Date().getFullYear()} EngelsDEV • {t.sidebar.rights}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
