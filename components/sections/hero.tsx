"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile, skillIconKeys } from "@/lib/resume-data";
import { brandIcons, GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import { Button } from "@/components/ui/button";

const bootLines = [
  "$ ssh aditya@production",
  "authenticating with deploy key ... ok",
  "$ whoami",
  "aditya-kaushik — devops engineer",
  "$ systemctl status pipeline",
  "● jenkins-cicd.service — active (running)",
  "$ echo $CURRENT_ROLE",
  "DevOps Engineer @ MetConnect Infotech",
];

function useTypewriter(lines: string[], speed = 34, pause = 1500) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const current = lines[lineIndex % lines.length];

    function tick() {
      if (i <= current.length) {
        setText(current.slice(0, i));
        i++;
        timeout = setTimeout(tick, speed);
      } else {
        timeout = setTimeout(() => {
          setLineIndex((idx) => (idx + 1) % lines.length);
        }, pause);
      }
    }
    tick();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex]);

  return text;
}

const floatPositions = [
  { top: "8%", left: "6%" },
  { top: "18%", left: "88%" },
  { top: "68%", left: "4%" },
  { top: "78%", left: "90%" },
  { top: "4%", left: "48%" },
  { top: "40%", left: "94%" },
  { top: "88%", left: "42%" },
  { top: "42%", left: "2%" },
];

export function Hero() {
  const typed = useTypewriter(profile.taglines);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!floatRef.current) return;
    const items = floatRef.current.querySelectorAll("[data-float-icon]");
    items.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? 18 : -18,
        x: i % 3 === 0 ? 10 : -10,
        duration: 4 + (i % 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void bg-circuit pb-24 pt-32"
    >
      {/* ambient glow + animated gradient blobs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-signal/10 blur-[140px]" />
      <div className="gradient-blob pointer-events-none -right-40 bottom-0 h-[400px] w-[400px] animate-blob-move bg-amber/10" />
      <div className="gradient-blob pointer-events-none -left-32 top-1/3 h-[320px] w-[320px] animate-blob-move bg-signal/10 [animation-delay:-6s]" />

      {/* floating tool badges */}
      <div ref={floatRef} className="absolute inset-0 z-0 hidden lg:block">
        {skillIconKeys.map((key, i) => {
          const Icon = brandIcons[key];
          const pos = floatPositions[i % floatPositions.length];
          if (!Icon) return null;
          return (
            <div
              key={key}
              data-float-icon
              style={{ top: pos.top, left: pos.left }}
              className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-line-bright bg-panel/60 text-ink-muted shadow-glow-sm backdrop-blur-md"
            >
              <Icon className="h-6 w-6" />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-bright bg-panel/60 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal status-dot" />
            </span>
            <span className="font-mono text-xs text-ink-muted">
              production status: <span className="text-signal">operational</span>
            </span>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-2xl font-medium text-signal text-glow sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-5 font-mono text-sm text-ink-muted sm:text-base">
            AWS <span className="text-signal">•</span> Docker{" "}
            <span className="text-signal">•</span> Jenkins{" "}
            <span className="text-signal">•</span> Linux{" "}
            <span className="text-signal">•</span> Nginx
          </p>

          <div className="mt-8 h-6 font-mono text-sm text-ink-muted">
            <span className="text-signal">&gt;_</span> {typed}
            <span className="animate-blink text-signal">|</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={profile.resumeFile} download>
              <Button variant="primary">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Button variant="outline">
                <GithubIcon className="h-4 w-4" /> GitHub
              </Button>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Button variant="outline">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost">
                <Mail className="h-4 w-4" /> Contact
              </Button>
            </a>
          </div>
        </motion.div>

        {/* terminal boot panel */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border panel-glass overflow-hidden rounded-2xl shadow-glow"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose/70" />
            <span className="h-3 w-3 rounded-full bg-amber/70" />
            <span className="h-3 w-3 rounded-full bg-signal/70" />
            <span className="ml-2 font-mono text-xs text-ink-dim">deploy@production — bash</span>
          </div>
          <div className="min-h-[280px] space-y-2 p-5 font-mono text-[13px] leading-relaxed">
            {bootLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.25 }}
                className={
                  line.startsWith("$")
                    ? "text-ink-muted"
                    : line.startsWith("●")
                    ? "text-signal"
                    : "text-ink"
                }
              >
                {line}
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + bootLines.length * 0.25 + 0.3 }}
              className="text-signal"
            >
              ✔ deployment healthy — 0 errors
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
