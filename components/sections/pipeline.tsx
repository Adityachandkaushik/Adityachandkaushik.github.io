"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { cicdPipelineStages } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const stateColor: Record<string, string> = {
  source: "border-ink-dim/40 text-ink-muted bg-panel",
  trigger: "border-signal/40 text-signal bg-signal/10",
  build: "border-amber/40 text-amber bg-amber/10",
  scan: "border-rose/40 text-rose bg-rose/10",
  ship: "border-signal/40 text-signal bg-signal/10",
  watch: "border-ink-dim/40 text-ink-muted bg-panel",
};

export function Pipeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!dotRef.current || !trackRef.current) return;
    const width = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(dotRef.current, {
      x: trackRef.current.scrollWidth - 24,
      duration: cicdPipelineStages.length * 1.1,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = this.progress();
        setActive(Math.min(
          cicdPipelineStages.length - 1,
          Math.floor(progress * cicdPipelineStages.length)
        ));
      },
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="pipeline" className="relative border-t border-line bg-void px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 — CI/CD"
          title="Interactive pipeline"
          description="A reference CI/CD flow — the same shape as the Jenkins + GitHub pipeline built for The Brilliant Bihar, extended with scan and self-healing stages."
        />

        <div className="gradient-border panel-glass overflow-x-auto rounded-2xl p-8">
          <div ref={trackRef} className="relative min-w-[1000px]">
            <div className="absolute left-0 right-6 top-9 h-px bg-line" />
            <div
              ref={dotRef}
              className="absolute top-[30px] h-3 w-3 -translate-y-1/2 rounded-full bg-signal shadow-glow-sm"
            />
            <div className="grid grid-cols-10 gap-4">
              {cicdPipelineStages.map((stage, i) => (
                <div key={stage.id} className="flex flex-col items-center gap-4">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full border-2 bg-void font-mono text-[10px] transition-all duration-300",
                      i === active
                        ? "scale-125 border-signal text-signal shadow-glow-sm"
                        : "border-line-bright text-ink-dim"
                    )}
                  >
                    {i + 1}
                  </div>
                  <motion.div
                    animate={{
                      borderColor: i === active ? "rgba(94,234,212,0.6)" : "rgba(35,41,56,1)",
                    }}
                    className={cn(
                      "w-full rounded-xl border px-3 py-4 text-center transition-colors",
                      stateColor[stage.state]
                    )}
                  >
                    <p className="font-mono text-[11px] font-medium leading-tight">
                      {stage.label}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
