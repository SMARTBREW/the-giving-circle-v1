import FaqsSection from "@/app/(home)/_sections/faqs-section";
import type { NgosCityPage } from "@/constants";
import {
  NgosCityCategories,
  NgosCityFeatured,
  NgosCityHero,
  NgosCityHowTo,
  NgosCityLeading,
  NgosCityNearby,
  NgosCityWhyDonate,
} from "./ngos-city";

export default function NgosCityPageContent({
  page,
  faqSectionId,
}: {
  page: NgosCityPage;
  faqSectionId: string;
}) {
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
        id={faqSectionId}
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle={`Common questions about verifying NGOs and giving in ${page.city}.`}
        items={page.faqs}
        className="bg-gray-100"
      />
    </>
  );
}
