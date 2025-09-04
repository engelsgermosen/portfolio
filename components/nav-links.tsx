import Link from "next/link";
import React from "react";

export const NavLinks = () => {
  return (
    <>
      <Link
        href="/#projects"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Proyectos
      </Link>
      <Link
        href="/#skills"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Habilidades
      </Link>
      <Link
        href="/#about"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Sobre mí
      </Link>
      <Link
        href="/#contact"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Contacto
      </Link>
    </>
  );
};

export default NavLinks;
