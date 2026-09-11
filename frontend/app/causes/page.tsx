import type { Metadata } from "next";
import { Suspense } from "react";
import ReachBand from "@/components/reach-band";
import PhotoCtaBand from "@/components/photo-cta-band";
import CausesHero from "./_sections/causes-hero";
import LiveCausesGrid from "./_sections/live-causes-grid";
import {
  CAUSES_CTA,
  CAUSES_REACH,
  REACH_STATS,
} from "@/constants";

export const metadata: Metadata = {
  title: "Live Causes | The Giving Circle",
  description:
    "Explore verified causes across education, women’s health, animal welfare, and disaster relief. Champion a campaign and give directly to NGO partners.",
};

export default function CausesPage() {
  return (
    <>
      <CausesHero />
      <Suspense
        fallback={
          <section className="w-full bg-gray-100 px-4 py-16 text-center text-[var(--Subheading,#45564B)]">
            Loading causes…
          </section>
        }
      >
        <LiveCausesGrid />
      </Suspense>
      <ReachBand
        eyebrow={CAUSES_REACH.eyebrow}
        title={CAUSES_REACH.title}
        subtitle={CAUSES_REACH.subtitle}
        stats={REACH_STATS}
        tone="white"
      />
      <PhotoCtaBand
        src={CAUSES_CTA.src}
        alt={CAUSES_CTA.alt}
        title={CAUSES_CTA.title}
        subtitle={CAUSES_CTA.subtitle}
        ctaLabel={CAUSES_CTA.ctaLabel}
        href={CAUSES_CTA.href}
      />
    </>
  );
}
