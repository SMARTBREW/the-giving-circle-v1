import type { Metadata } from "next";
import { NGOS_CITY_GURUGRAM, SITE } from "@/constants";
import NgosCityPageContent from "../_sections/ngos-city-page";

const page = NGOS_CITY_GURUGRAM;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/ngos/${page.slug}/` },
};

export default function BestNgoInGurugramPage() {
  return (
    <NgosCityPageContent page={page} faqSectionId="gurugram-ngos-faqs" />
  );
}
