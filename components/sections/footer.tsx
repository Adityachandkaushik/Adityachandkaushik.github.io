import { Mail, Terminal } from "lucide-react";
import { profile } from "@/lib/resume-data";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-void px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-ink-muted">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal/30 bg-signal/10 text-signal">
            <Terminal className="h-4 w-4" />
          </span>
          {profile.name} — {profile.role}
        </div>

        <div className="flex items-center gap-5 text-ink-dim">
          <a href={profile.emailHref} aria-label="Email" className="transition-colors hover:text-signal">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-signal">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-signal">
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-dim">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
