import Link from "next/link";
import React from "react";

export const NavLinks = () => {
  return (
    <>
      <Link
        href="/#about"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        About
      </Link>
      <Link
        href="/#projects"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Projects
      </Link>
      <Link
        href="/#skills"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Skills
      </Link>
      <Link
        href="/#contact"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
