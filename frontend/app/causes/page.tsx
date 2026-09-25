import type { Metadata } from "next";
import { Suspense } from "react";
import PhotoCtaBand from "@/components/photo-cta-band";
import CausesHero from "./_sections/causes-hero";
import LiveCausesGrid from "./_sections/live-causes-grid";
import { CAUSES_CTA } from "@/constants";

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
          <section className="w-full bg-gray-100 px-4 py-16 text-center text-[var(--Subheading,#4a5558)]">
            Loading causes…
          </section>
        }
      >
        <LiveCausesGrid />
      </Suspense>
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
