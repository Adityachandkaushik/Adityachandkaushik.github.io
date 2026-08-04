"use client";

import { motion } from "framer-motion";
import {
  Ban,
  FileWarning,
  ShieldAlert,
  Lock,
  Globe2,
  Waypoints,
  Route,
  RotateCcw,
  Radio,
  XCircle,
  GitBranch,
  ImageOff,
} from "lucide-react";
import { experience, productionChallenges } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const challengeIcons: Record<string, typeof Ban> = {
  "404": Ban,
  mime: FileWarning,
  "mixed-content": ShieldAlert,
  ssl: Lock,
  dns: Globe2,
  "reverse-proxy": Waypoints,
  "api-routing": Route,
  pm2: RotateCcw,
  hls: Radio,
  "deploy-failures": XCircle,
  "jenkins-debug": GitBranch,
  "static-assets": ImageOff,
};

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Timeline"
          description="Two roles, one thread: get real applications live, stable, and observable in production."
        />

        <div className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative"
            >
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full sm:-left-[calc(2.5rem+5px)] ${
                  job.current ? "bg-signal shadow-glow-sm" : "bg-ink-dim"
                }`}
              />
              <Card className="p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-signal">{job.company}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-ink-dim">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.split(", ").map((s) => (
                    <Badge key={s} variant="signal">{s}</Badge>
                  ))}
                </div>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Production Challenges Solved */}
        <div id="challenges" className="mt-24">
          <SectionHeading
            eyebrow="Incidents"
            title="Production Challenges Solved"
            description="Real production issues from The Brilliant Bihar deployment — problem, root cause, fix, and impact."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productionChallenges.map((c, i) => {
              const Icon = challengeIcons[c.id] ?? Ban;
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
                >
                  <Card className="h-full p-0">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={c.id} className="border-none">
                        <div className="flex items-start gap-3 p-5 pb-0">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rose/30 bg-rose/10 text-rose">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h4 className="pt-1.5 font-display text-[15px] font-semibold text-ink">
                            {c.title}
                          </h4>
                        </div>
                        <AccordionTrigger className="px-5 font-mono text-[11px] uppercase tracking-widest text-ink-dim hover:no-underline">
                          view breakdown
                        </AccordionTrigger>
                        <AccordionContent className="px-5">
                          <dl className="space-y-3 text-[13px] leading-relaxed">
                            <div>
                              <dt className="font-mono text-[11px] uppercase tracking-wide text-rose">Problem</dt>
                              <dd className="text-ink-muted">{c.problem}</dd>
                            </div>
                            <div>
                              <dt className="font-mono text-[11px] uppercase tracking-wide text-amber">Root Cause</dt>
                              <dd className="text-ink-muted">{c.rootCause}</dd>
                            </div>
                            <div>
                              <dt className="font-mono text-[11px] uppercase tracking-wide text-signal">Solution</dt>
                              <dd className="text-ink-muted">{c.solution}</dd>
                            </div>
                            <div>
                              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink">Impact</dt>
                              <dd className="text-ink-muted">{c.impact}</dd>
                            </div>
                          </dl>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
