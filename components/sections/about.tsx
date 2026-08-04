"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { profile, education, productionChallenges, projects, cicdPipelineStages } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
  { value: 50, suffix: "%", label: "Faster Deployments" },
  { value: productionChallenges.length, suffix: "", label: "Production Issues Solved" },
  { value: projects.length, suffix: "", label: "Projects Shipped" },
  { value: cicdPipelineStages.length, suffix: "", label: "CI/CD Pipeline Stages" },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 — About"
          title="Production systems, kept boring on purpose"
          description="A short profile of how I work — and what I focus on when I'm on call."
        />

        <div className="mb-12 grid grid-cols-2 gap-6 rounded-2xl border border-line bg-panel/40 p-6 sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8">
              <p className="text-[15px] leading-relaxed text-ink-muted">
                {profile.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                <span className="flex items-center gap-2 font-mono text-xs text-ink-dim">
                  <MapPin className="h-3.5 w-3.5 text-signal" /> {profile.location}
                </span>
                <span className="text-ink-dim">/</span>
                <span className="flex items-center gap-2 font-mono text-xs text-ink-dim">
                  <GraduationCap className="h-3.5 w-3.5 text-signal" />
                  {education.school} ({education.period})
                </span>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full p-8">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-ink-dim">
                core.focus()
              </h3>
              <ul className="space-y-3">
                {profile.focusAreas.map((area, i) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-ink">
                    <span className="font-mono text-xs text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-line" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
