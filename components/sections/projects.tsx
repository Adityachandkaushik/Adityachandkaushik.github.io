"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/tilt-card";
import { cn } from "@/lib/utils";

export function Projects() {
  const rest = projects.filter((p) => !p.featured);
  const allTags = useMemo(
    () => Array.from(new Set(rest.flatMap((p) => p.stack))).sort(),
    [rest]
  );
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? rest : rest.filter((p) => p.stack.includes(filter));

  return (
    <section id="projects" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Other builds"
          description="Smaller, self-directed projects that apply the same production toolkit — Docker, Jenkins, Linux, Nginx, PM2."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {["All", ...allTags].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors",
                filter === tag
                  ? "border-signal/50 bg-signal/15 text-signal"
                  : "border-line-bright bg-panel/50 text-ink-muted hover:border-signal/40 hover:text-signal"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              >
                <a href={p.githubHref} target="_blank" rel="noreferrer" className="group block h-full">
                  <TiltCard>
                    <Card className="relative flex h-full flex-col">
                      <CardHeader>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="eyebrow">{p.kind}</span>
                          <ArrowUpRight className="h-4 w-4 text-ink-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                        </div>
                        <CardTitle>{p.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col justify-between">
                        <CardDescription>{p.description}</CardDescription>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-12 text-center font-mono text-sm text-ink-dim">
            No projects match &ldquo;{filter}&rdquo;.
          </p>
        )}
      </div>
    </section>
  );
}
