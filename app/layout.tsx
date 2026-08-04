import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/resume-data";
import { ThemeProvider, themeInitScript } from "@/lib/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://adityakaushik.dev"),
  title: {
    default: "Aditya Kaushik — DevOps Engineer",
    template: "%s · Aditya Kaushik",
  },
  description: profile.summary,
  keywords: [
    "Aditya Kaushik",
    "DevOps Engineer",
    "AWS",
    "Docker",
    "Jenkins",
    "Linux",
    "Nginx",
    "CI/CD",
    "PM2",
    "Production Deployment",
    "Site Reliability",
    "Cloud Infrastructure",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  applicationName: "Aditya Kaushik — DevOps Portfolio",
  openGraph: {
    title: "Aditya Kaushik — DevOps Engineer",
    description: profile.summary,
    url: "https://adityakaushik.dev",
    siteName: "Aditya Kaushik — DevOps Engineer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kaushik — DevOps Engineer",
    description: profile.summary,
    creator: "@adityakaushik",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090b10" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Runs before hydration so the correct theme paints immediately (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased font-body" suppressHydrationWarning>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-void focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
