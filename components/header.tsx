"use client";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import SideBar from "./side-bar";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3">
      {active && <SideBar />}
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-xl flex items-center">
          <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-transparent bg-clip-text animate-[gradient_8s_ease-in-out_infinite]">
            Engels<strong className="font-extrabold">DEV</strong>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-3 items-center">
          <ToggleTheme />
          <Button asChild size="sm" className="rounded-full">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <div className="flex md:hidden">
            <Button
              className="bg-transparent"
              onClick={() => {
                setActive(!active);
              }}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
