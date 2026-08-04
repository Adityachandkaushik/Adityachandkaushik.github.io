"use client";

import { motion } from "framer-motion";
import { Home, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void bg-circuit px-6 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 gradient-border panel-glass rounded-2xl p-10 shadow-glow sm:p-14"
      >
        <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/30 bg-signal/10 text-signal">
          <Terminal className="h-6 w-6" />
        </span>

        <p className="font-mono text-sm text-ink-muted">
          <span className="text-signal">$</span> curl -I https://adityakaushik.dev/this-route
        </p>
        <p className="mt-1 font-mono text-sm text-rose">HTTP/1.1 404 Not Found</p>

        <h1 className="mt-6 font-display text-6xl font-bold text-ink text-glow sm:text-7xl">
          404
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          This route doesn&apos;t exist in production — same rule I apply to every
          Nginx location block. Let&apos;s get you back to a known-good state.
        </p>

        <a href="/" className="mt-8 inline-flex">
          <Button variant="primary">
            <Home className="h-4 w-4" /> Back to home
          </Button>
        </a>
      </motion.div>
    </main>
  );
}
