"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  ShieldCheck,
  HeartPulse,
  Route,
  BellRing,
  RefreshCw,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { TiltCard } from "@/components/tilt-card";

// Every line here maps to something real in the pipeline / production-challenge
// data in lib/resume-data.ts — this is a text-only "how I operate" summary,
// not a live GitHub widget.
const principles = [
  {
    icon: Workflow,
    title: "Automate the boring stuff",
    body: "Jenkins pipelines and shell scripts own the build → test → deploy path end to end, so a release is a merge, not a manual checklist.",
  },
  {
    icon: ShieldCheck,
    title: "Scan before you ship",
    body: "SonarQube and Trivy run inside the pipeline on every build — static analysis and container vulnerability scans are a gate, not an afterthought.",
  },
  {
    icon: HeartPulse,
    title: "Design for self-healing",
    body: "Auto Scaling Groups paired with CloudWatch Alarms replace unhealthy EC2 instances automatically, before an on-call page is even needed.",
  },
  {
    icon: Route,
    title: "Route with intention",
    body: "Nginx location blocks and try_files rules are kept in lockstep with the app's real routes — the fix for one production 404 that taught this the hard way.",
  },
  {
    icon: BellRing,
    title: "Watch everything",
    body: "CloudWatch metrics and SNS notifications turn silent failures into an actionable alert, well before a user files a ticket.",
  },
  {
    icon: RefreshCw,
    title: "Keep processes alive",
    body: "PM2 supervises Node services in production so a crashed process restarts itself instead of taking the app down.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="07 — Principles"
          title="How I operate in production"
          description="Not a live feed — just the habits behind every deploy, drawn straight from the pipeline and incidents above."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <TiltCard>
                <Card className="h-full p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-signal/30 bg-signal/10 text-signal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 font-display text-sm font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
