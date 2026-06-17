"use client";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import ToggleLanguage from "./toggle-language";
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
    <header
      className="sticky top-0 z-[60] w-full border-b border-border backdrop-blur-md"
      style={{ background: "var(--nav-bg)" }}
    >
      {active && <SideBar handleChange={handleChange} />}
      <div className="mx-auto flex h-[66px] max-w-[1160px] items-center justify-between gap-5 px-6">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-[11px]">
          <span
            className="grid size-[30px] place-items-center rounded-lg font-mono text-[0.82rem] font-semibold text-white shadow-[0_4px_14px_-4px_var(--accent-glow)]"
            style={{ background: "linear-gradient(140deg, var(--primary), #c2410c)" }}
          >
            &lt;/&gt;
          </span>
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-foreground">
            Engels<span className="text-primary">DEV</span>
          </span>
        </Link>

        <div className="flex items-center gap-[30px]">
          <nav className="hidden items-center gap-[26px] lg:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-3">
            <ToggleLanguage />
            <ToggleTheme />
            <Link
              href="#contact"
              className="hidden items-center rounded-[10px] bg-primary px-4 py-[9px] text-[0.88rem] font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_22px_-8px_var(--accent-glow)] sm:inline-flex"
            >
              {t.header.getInTouch}
            </Link>
            <button
              onClick={handleChange}
              aria-label="Menu"
              className="grid size-[38px] place-items-center rounded-[10px] border border-border bg-card text-foreground transition-colors hover:border-primary lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
