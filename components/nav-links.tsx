"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "./language-provider";

export const NavLinks = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        href="/#projects"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        {t.nav.projects}
      </Link>
      <Link
        href="/#skills"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        {t.nav.skills}
      </Link>
      <Link
        href="/#certifications"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        {t.nav.certifications}
      </Link>
      <Link
        href="/#about"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        {t.nav.about}
      </Link>
    </>
  );
};

export default NavLinks;
