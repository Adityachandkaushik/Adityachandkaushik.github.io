"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import {
  brilliantBihar,
  brilliantBiharPipeline,
  productionChallenges,
  profile,
} from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { VerticalPipeline } from "@/components/pipeline-diagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function FeaturedProject() {
  return (
    <section
      id="brilliant-bihar"
      className="relative border-t border-line bg-void bg-circuit px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-signal/5 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — Featured Production Project"
          title="The Brilliant Bihar"
          description={brilliantBihar.overview}
        />

        <div className="mb-10 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-amber">
            <Star className="h-3 w-3 fill-amber" /> Featured
          </span>
          <div className="flex items-center gap-1 text-amber">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber" />
            ))}
          </div>
          <Badge variant="signal">Production • MetConnect Infotech</Badge>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="sm">
              <ExternalLink className="h-3.5 w-3.5" /> View on GitHub
            </Button>
          </a>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* animated deployment pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="gradient-border panel-glass rounded-2xl p-6"
          >
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-dim">
              deployment pipeline
            </h3>
            <VerticalPipeline stages={brilliantBiharPipeline} />
          </motion.div>

          {/* tabbed deep dive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Tabs defaultValue="infra">
              <TabsList>
                <TabsTrigger value="infra">infra</TabsTrigger>
                <TabsTrigger value="deploy">deploy</TabsTrigger>
                <TabsTrigger value="monitoring">monitoring</TabsTrigger>
                <TabsTrigger value="challenges">challenges</TabsTrigger>
                <TabsTrigger value="results">results</TabsTrigger>
              </TabsList>

              <TabsContent value="infra">
                <p className="mb-4 text-sm text-ink-muted">Infrastructure used in production:</p>
                <div className="flex flex-wrap gap-2">
                  {brilliantBihar.infrastructure.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="deploy">
                <ul className="space-y-3">
                  {brilliantBihar.deploymentHighlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="monitoring">
                <ul className="space-y-3">
                  {brilliantBihar.monitoring.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="challenges">
                <div className="flex flex-wrap gap-2">
                  {productionChallenges.map((c) => (
                    <a key={c.id} href="#challenges">
                      <Badge variant="rose" className="cursor-pointer hover:bg-rose/20">
                        {c.title}
                      </Badge>
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs text-ink-dim">
                  Full problem / root cause / solution / impact breakdown lives in the
                  Production Challenges Solved section above.
                </p>
              </TabsContent>

              <TabsContent value="results">
                <ul className="space-y-3">
                  {brilliantBihar.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
