import type { Metadata } from "next";
import NotFoundPage from "@/components/not-found-page";

export const metadata: Metadata = {
  title: "Page not found | The Giving Circle",
  description:
    "This URL is not on The Giving Circle. Explore verified NGOs and live causes to donate with confidence.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Page not found | The Giving Circle",
    description:
      "Head back to verified causes and NGO listings on The Giving Circle.",
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
