import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-void">
      <span className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl border border-signal/40 bg-signal/10 text-signal shadow-glow-sm">
        <Terminal className="h-6 w-6" />
      </span>
      <div className="flex items-center gap-1 font-mono text-xs text-ink-dim">
        <span>booting portfolio</span>
        <span className="flex gap-0.5">
          <span className="h-1 w-1 animate-bounce rounded-full bg-signal [animation-delay:-0.3s]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-signal [animation-delay:-0.15s]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-signal" />
        </span>
      </div>
    </div>
  );
}
