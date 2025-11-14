"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

type LinkItem = { name: string; href: string };

export function Navbar({
  links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ],
}: {
  links?: LinkItem[];
}) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed w-full bg-gray-50 z-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Lakia
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-gray-100" onClick={toggleTheme} />
          ) : (
            <Moon className="w-6 h-6 text-gray-900" onClick={toggleTheme} />
          )}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="relative w-10 h-7 flex items-center justify-center md:hidden"
          >
            <span
              className={
                "block absolute h-px w-8 bg-current transition-transform duration-300 " +
                (open ? "rotate-45 translate-y-0" : "-translate-y-2")
              }
              style={{ transformOrigin: "center" }}
            />
            <span
              className={
                "block absolute h-px w-8 bg-current transition-transform duration-300 " +
                (open ? "-rotate-45 translate-y-0" : "translate-y-2")
              }
              style={{ transformOrigin: "center" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={
          "fixed inset-x-4 top-16 rounded-xl bg-white/95 dark:bg-gray-900 backdrop-blur-sm shadow-lg md:hidden transition-transform duration-300 " +
          (open
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none")
        }
        style={{ transformOrigin: "" }}
      >
        <nav className="flex flex-col gap-4 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-blue-700"
            >
              {l.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-block w-full text-center py-2 px-4 rounded-md font-semibold shadow-sm bg-blue-700 text-white"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
