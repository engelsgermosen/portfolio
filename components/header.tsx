"use client";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import ToggleLanguage from "./toggle-language";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import SideBar from "./side-bar";
import { useState } from "react";
import NavLinks from "./nav-links";
import { useTranslation } from "./language-provider";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleChange = () => {
    setActive(!active);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3">
      {active && <SideBar handleChange={handleChange} />}
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-xl flex items-center">
          <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-transparent bg-clip-text animate-[gradient_8s_ease-in-out_infinite]">
            Engels<strong className="font-extrabold">DEV</strong>
          </span>
        </Link>
        <nav className="hidden lg:flex gap-8">
          <NavLinks />
        </nav>
        <div className="flex gap-3 items-center">
          <ToggleLanguage />
          <ToggleTheme />
          <Button asChild size="sm" className="rounded-full hidden sm:flex">
            <Link href="#contact">{t.header.contact}</Link>
          </Button>
          <div className="flex lg:hidden">
            <Button
              className="bg-transparent border-2 rounded-xl"
              onClick={handleChange}
            >
              <Menu className="bg-slate-950" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
