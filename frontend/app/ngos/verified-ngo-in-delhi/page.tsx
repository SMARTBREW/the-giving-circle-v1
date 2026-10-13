import type { Metadata } from "next";
import { NGOS_CITY_DELHI, SITE } from "@/constants";
import NgosCityPageContent from "../_sections/ngos-city-page";

const page = {
  ...NGOS_CITY_DELHI,
  slug: "verified-ngo-in-delhi",
  metaTitle: "Verified NGO in Delhi | Trusted Charities | The Giving Circle",
  metaDescription:
    "Connect with verified NGOs in Delhi checked by The Giving Circle. Donate with confidence to trusted charity organisations making a real impact.",
  hero: {
    ...NGOS_CITY_DELHI.hero,
    title: "Verified NGO in Delhi",
  },
};

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/ngos/${page.slug}/` },
};

export default function VerifiedNgoInDelhiPage() {
  return <NgosCityPageContent page={page} faqSectionId="delhi-ngos-faqs" />;
}
