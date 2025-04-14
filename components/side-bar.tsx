"use client";

import { X, Home, Briefcase, Code, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface SideBarProps {
  handleChange: () => void;
}

const SideBar = ({ handleChange }: SideBarProps) => {
  const menuItems = [
    { href: "/#about", label: "About", icon: Home },
    { href: "/#projects", label: "Projects", icon: Briefcase },
    { href: "/#skills", label: "Skills", icon: Code },
    { href: "/#contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black min-h-screen min-w-full "
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-8 py-6">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] text-transparent bg-clip-text text-2xl font-medium animate-[gradient_8s_ease-in-out_infinite]"
        >
          Engels<strong className="font-extrabold">DEV</strong>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={handleChange}
            aria-label="Close menu"
            className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-110"
          >
            <X className="h-5 w-5" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity hover:opacity-100"></span>
          </Button>
        </motion.div>
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
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
            >
              <Link
                href={item.href}
                onClick={handleChange}
                className="group flex items-center gap-3 rounded-xl p-3 text-lg font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-white backdrop-blur-sm transition-all group-hover:from-cyan-500/30 group-hover:to-purple-500/30">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="mt-8"
        >
          <a
            href="/#contact"
            onClick={handleChange}
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 p-4 text-center font-medium text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/30"
          >
            Get in touch
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative border-t border-white/10 px-8 py-6 text-center text-sm text-white/50"
      >
        <p>© {new Date().getFullYear()} EngelsDEV • All rights reserved</p>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
