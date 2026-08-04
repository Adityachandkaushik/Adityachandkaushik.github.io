import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "rgb(var(--c-void) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        "panel-raised": "rgb(var(--c-panel-raised) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        "line-bright": "rgb(var(--c-line-bright) / <alpha-value>)",
        signal: {
          DEFAULT: "rgb(var(--c-signal) / <alpha-value>)",
          dim: "rgb(var(--c-signal-dim) / <alpha-value>)",
          bright: "rgb(var(--c-signal-bright) / <alpha-value>)",
        },
        amber: {
          DEFAULT: "rgb(var(--c-amber) / <alpha-value>)",
          dim: "rgb(var(--c-amber-dim) / <alpha-value>)",
        },
        rose: {
          DEFAULT: "rgb(var(--c-rose) / <alpha-value>)",
          dim: "rgb(var(--c-rose-dim) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          dim: "rgb(var(--c-ink-dim) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgb(var(--c-void) / 0) 0%, rgb(var(--c-void) / 1) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgb(var(--c-signal) / 0.35)",
        "glow-sm": "0 0 20px -6px rgb(var(--c-signal) / 0.4)",
        "glow-amber": "0 0 30px -8px rgb(var(--c-amber) / 0.4)",
      },
      keyframes: {
        "pulse-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "blob-move": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 25px) scale(0.95)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        flicker: "flicker 3.2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "blob-move": "blob-move 14s ease-in-out infinite",
        "spin-slow": "spin-slow 10s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
