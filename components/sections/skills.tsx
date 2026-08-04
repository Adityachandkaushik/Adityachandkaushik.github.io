"use client";

import { motion } from "framer-motion";
import { Cloud, Boxes, GitMerge, Server, Activity, Code2, Wrench } from "lucide-react";
import { skills } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/tilt-card";

// Re-groups the exact same resume-verified skills (lib/resume-data.ts) into the
// category set requested for the redesign. No new skills are introduced —
// this is purely a presentation-layer regrouping of existing data.
const categories: { name: string; icon: typeof Cloud; items: string[] }[] = [
  { name: "Cloud", icon: Cloud, items: skills.Cloud },
  { name: "Containers", icon: Boxes, items: ["Docker"] },
  { name: "CI/CD", icon: GitMerge, items: ["Jenkins"] },
  { name: "Infrastructure", icon: Server, items: ["Nginx", "PM2", "Linux (Ubuntu)"] },
  { name: "Monitoring", icon: Activity, items: ["CloudWatch Alarms", "SNS"] },
  { name: "Programming", icon: Code2, items: ["Shell Scripting"] },
  { name: "DevOps", icon: Wrench, items: ["Jira"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 — Skills"
          title="Technical toolkit"
          description="Exactly as listed on the resume, grouped by domain."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon, items }, i) => (
            <motion.div
              key={name}
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
                  <h3 className="mb-4 font-display text-sm font-semibold text-ink">
                    {name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="signal">{item}</Badge>
                    ))}
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
