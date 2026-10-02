import type { Metadata } from "next";
import FaqsSection from "@/app/(home)/_sections/faqs-section";
import { NGOS_CITY_FARIDABAD, SITE } from "@/constants";
import {
  NgosCityCategories,
  NgosCityFeatured,
  NgosCityHero,
  NgosCityHowTo,
  NgosCityLeading,
  NgosCityNearby,
  NgosCityWhyDonate,
} from "../_sections/ngos-city";

const page = NGOS_CITY_FARIDABAD;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE.url}/ngos/${page.slug}/` },
};

export default function BestNgoInFaridabadPage() {
  return (
    <>
      <NgosCityHero data={page} />
      <NgosCityLeading data={page} />
      <NgosCityFeatured data={page} />
      <NgosCityWhyDonate data={page} />
      <NgosCityCategories data={page} />
      <NgosCityHowTo data={page} />
      <NgosCityNearby data={page} />
      <FaqsSection
        id="faridabad-ngos-faqs"
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle={`Common questions about verifying NGOs and giving in ${page.city}.`}
        items={page.faqs}
        className="bg-gray-100"
      />
    </>
  );
}
