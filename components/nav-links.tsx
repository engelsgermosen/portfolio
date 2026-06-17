"use client";
import Link from "next/link";
import { useTranslation } from "./language-provider";

export const NavLinks = () => {
  const { t } = useTranslation();

  const links = [
    { href: "/#experience", label: t.nav.experience },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#certifications", label: t.nav.certifications },
    { href: "/#about", label: t.nav.about },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[0.92rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
