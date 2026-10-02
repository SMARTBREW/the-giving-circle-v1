import type { Metadata } from "next";
import { NGOS_CITY_DELHI, SITE } from "@/constants";
import NgosCityPageContent from "../_sections/ngos-city-page";

const page = NGOS_CITY_DELHI;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/ngos/${page.slug}/` },
};

export default function BestNgoInDelhiPage() {
  return <NgosCityPageContent page={page} faqSectionId="delhi-ngos-faqs" />;
}
