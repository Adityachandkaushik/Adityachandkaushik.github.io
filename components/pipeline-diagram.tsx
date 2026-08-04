"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function VerticalPipeline({
  stages,
}: {
  stages: { id: string; label: string; detail?: string }[];
}) {
  const stepHeight = 84;
  const height = stages.length * stepHeight;

  return (
    <div className="relative flex gap-6">
      <div className="relative w-6 shrink-0" style={{ height }}>
        <svg
          width="24"
          height={height}
          viewBox={`0 0 24 ${height}`}
          className="absolute inset-0"
        >
          <line
            x1="12"
            y1="0"
            x2="12"
            y2={height}
            stroke="#232938"
            strokeWidth="2"
          />
          <motion.line
            x1="12"
            y1="0"
            x2="12"
            y2={height}
            stroke="#5EEAD4"
            strokeWidth="2"
            strokeDasharray="6 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          {stages.map((s, i) => (
            <circle
              key={s.id}
              cx="12"
              cy={i * stepHeight + stepHeight / 2}
              r="6"
              className="fill-panel"
              stroke="#5EEAD4"
              strokeWidth="2"
            />
          ))}
        </svg>
        <motion.div
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal shadow-glow-sm"
          animate={{ top: [0, height - 10] }}
          transition={{ duration: stages.length * 0.9, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="flex-1 space-y-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{ height: stepHeight }}
            className={cn(
              "flex flex-col justify-center rounded-xl border border-line bg-panel/50 px-4 transition-colors hover:border-signal/40"
            )}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-ink-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm font-semibold text-ink">
                {s.label}
              </span>
            </div>
            {s.detail && (
              <p className="mt-0.5 pl-6 text-xs text-ink-muted">{s.detail}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
