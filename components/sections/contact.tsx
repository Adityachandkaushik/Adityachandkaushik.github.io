"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, MapPin } from "lucide-react";
import { profile } from "@/lib/resume-data";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: profile.emailHref,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    icon: MapPin,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `${profile.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative border-t border-line bg-void bg-circuit px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's ship something"
          description="Open to DevOps roles, infrastructure work, and production reliability projects."
          align="center"
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactMethods.map((m, i) => {
              const cardBody = (
                <Card className="flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-signal/30 bg-signal/10 text-signal">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
                      {m.label}
                    </p>
                    <p className="truncate text-sm text-ink">{m.value}</p>
                  </div>
                </Card>
              );

              if (!m.href) {
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    {cardBody}
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  {cardBody}
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs text-ink-dim">name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-lg border border-line-bright bg-panel px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs text-ink-dim">email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-lg border border-line-bright bg-panel px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs text-ink-dim">message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full resize-none rounded-lg border border-line-bright bg-panel px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal"
                    placeholder="What are you building?"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  {sent ? "Opening mail client…" : "Send message"}
                </Button>
                <p className="text-xs text-ink-dim">
                  Opens your email client with this message pre-filled to {profile.email}.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
