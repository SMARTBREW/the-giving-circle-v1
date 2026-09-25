import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import AppShell from "@/components/app-shell";
import { InterFont, PoppinsFont, SITE } from "@/constants";
import { config } from "@/lib/config";
import "./globals.css";

const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === "staging";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/png", sizes: "48x48" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico?v=2",
  },
  ...(isStaging
    ? {
        robots: {
          index: false,
          follow: false,
          nocache: true,
          noarchive: true,
          nosnippet: true,
          noimageindex: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            nosnippet: true,
            noarchive: true,
            "max-video-preview": -1,
            "max-image-preview": "none",
            "max-snippet": -1,
          },
        },
      }
    : {}),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${InterFont.variable} ${PoppinsFont.variable}`}
    >
      <body className={InterFont.className}>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
        {config.features.enableAnalytics && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
