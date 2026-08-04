"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { profile } from "@/lib/resume-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#brilliant-bihar", label: "brilliant-bihar" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#pipeline", label: "pipeline" },
  { href: "#principles", label: "principles" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal/40 bg-signal/10 text-signal">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">
            aditya<span className="text-signal">@</span>devops
            <span className="animate-blink text-signal">_</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-xs text-ink-muted lg:flex" role="list">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                aria-current={active === l.href ? "page" : undefined}
                className={`relative py-1 transition-colors hover:text-signal ${
                  active === l.href ? "text-signal" : ""
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-signal"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon"><GithubIcon className="h-4 w-4" /></Button>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon"><LinkedinIcon className="h-4 w-4" /></Button>
          </a>
          <a href="#contact">
            <Button variant="primary" size="sm">Contact</Button>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm text-ink-muted" role="list">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.href ? "page" : undefined}
                    className={`block py-2 transition-colors hover:text-signal ${
                      active === l.href ? "text-signal" : ""
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-3">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Button variant="ghost" size="icon"><GithubIcon className="h-4 w-4" /></Button>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Button variant="ghost" size="icon"><LinkedinIcon className="h-4 w-4" /></Button>
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="ml-auto">
                  <Button variant="primary" size="sm">Contact</Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
