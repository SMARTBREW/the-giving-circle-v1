import type { Metadata } from "next";
import { Suspense } from "react";
import PhotoCtaBand from "@/components/photo-cta-band";
import LiveCausesGrid from "./_sections/live-causes-grid";
import { CAUSES_CTA, SITE } from "@/constants";

export const metadata: Metadata = {
  title: "Find Causes That Matter | Support Verified NGOs in India",
  description:
    "Find verified NGOs and meaningful causes across India, from education and animal welfare to women’s health. Choose a cause and make an impact today.",
  alternates: { canonical: `${SITE.url}/causes/` },
};

export default function CausesPage() {
  return (
    <>
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
