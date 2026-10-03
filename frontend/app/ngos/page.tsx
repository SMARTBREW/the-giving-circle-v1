import type { Metadata } from "next";
import FaqsSection from "@/app/(home)/_sections/faqs-section";
import {
  NGOS_FAQS,
  SITE,
} from "@/constants";
import NgosHero from "./_sections/ngos-hero";
import {
  NgosBrowseCauses,
  NgosBrowseCities,
  NgosGuides,
  NgosTrust,
} from "./_sections/ngos-browse";

export const metadata: Metadata = {
  title: "NGO Directory India | The Giving Circle",
  description:
    "Find verified, transparent NGOs by city or cause. Background-checked partners with FCRA, 80G, and audited financials - so your donation creates trackable impact.",
  alternates: { canonical: `${SITE.url}/ngos/` },
};

export default function NgosDirectoryPage() {
  return (
    <>
      <NgosHero />
      <NgosBrowseCauses />
      <NgosBrowseCities />
      <NgosGuides />
      <NgosTrust />
      <FaqsSection
        id="ngos-faqs"
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Answers about verifying NGOs, 80G tax benefits, CSR giving, and how Giving Circles work."
        items={NGOS_FAQS}
        className="bg-gray-100"
      />
    </>
  );
}
