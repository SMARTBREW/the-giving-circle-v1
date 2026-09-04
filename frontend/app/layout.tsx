import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/header";
import MobileStickyCta from "@/components/mobile-sticky-cta";
import Footer from "@/components/footer";
import { InterFont, InstrumentSerif, SITE } from "@/constants";
import { config } from "@/lib/config";
import "./globals.css";

const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === "staging";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
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
      className={`${InterFont.variable} ${InstrumentSerif.variable}`}
    >
      <body className={`${InterFont.className} pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0`}>
        <ThemeProvider>
          <Header />
          <main className="relative z-0 overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
        <MobileStickyCta />
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
