import type { Metadata } from "next";
import { NGOS_CITY_GURUGRAM, SITE } from "@/constants";
import NgosCityPageContent from "../_sections/ngos-city-page";

const page = {
  ...NGOS_CITY_GURUGRAM,
  slug: "top-ngo-in-gurugram",
  metaTitle: "Top NGO in Gurugram | Verified NGOs | The Giving Circle",
  metaDescription:
    "Find top NGOs in Gurugram (Gurgaon) verified by The Giving Circle. Support trusted charity organisations for education, animal welfare, and community programmes.",
  hero: {
    ...NGOS_CITY_GURUGRAM.hero,
    title: "Top NGO in Gurugram",
  },
};

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/ngos/${page.slug}/` },
};

export default function TopNgoInGurugramPage() {
  return (
    <NgosCityPageContent page={page} faqSectionId="gurugram-ngos-faqs" />
  );
}
