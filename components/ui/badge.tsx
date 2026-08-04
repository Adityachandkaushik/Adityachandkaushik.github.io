import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-mono tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-line-bright bg-panel-raised text-ink-muted",
        signal: "border-signal/40 bg-signal/10 text-signal",
        amber: "border-amber/40 bg-amber/10 text-amber",
        rose: "border-rose/40 bg-rose/10 text-rose",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
