import type { Metadata } from "next";
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
      <LiveCausesGrid />
      <PhotoCtaBand
        src={CAUSES_CTA.src}
        mobileSrc={CAUSES_CTA.mobileSrc}
        alt={CAUSES_CTA.alt}
        title={CAUSES_CTA.title}
        subtitle={CAUSES_CTA.subtitle}
        ctaLabel={CAUSES_CTA.ctaLabel}
        href={CAUSES_CTA.href}
      />
    </>
  );
}
