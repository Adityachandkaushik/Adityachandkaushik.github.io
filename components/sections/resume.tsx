"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { profile, education } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="08 — Resume"
          title="Take it with you"
          description="The full resume — experience, education, and technical skills — as a downloadable PDF."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="gradient-border panel-glass mx-auto flex max-w-xl flex-col items-center gap-6 rounded-2xl p-10 text-center shadow-glow"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-signal/30 bg-signal/10 text-signal">
            <FileText className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{profile.name}</h3>
            <p className="font-mono text-sm text-signal">{profile.role}</p>
            <p className="mt-2 text-sm text-ink-muted">
              {education.degree} · {education.school}
            </p>
          </div>
          <a href={profile.resumeFile} download className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
