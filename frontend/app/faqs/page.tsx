import type { Metadata } from "next";
import FaqsSection from "@/app/(home)/_sections/faqs-section";
import { ALL_FAQS, FAQS_PAGE, SITE } from "@/constants";

export const metadata: Metadata = {
  title: "FAQs | The Giving Circle",
  description:
    "Answers about Cause Champions, starting a fundraiser, donations, 80G tax receipts, volunteering, and how The Giving Circle verifies NGO partners in India.",
  alternates: { canonical: `${SITE.url}/faqs` },
};

export default function FaqsPage() {
  const { eyebrow, title, subtitle } = FAQS_PAGE;

  return (
    <FaqsSection
      id="faqs"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      items={ALL_FAQS}
      className="bg-[#FFFFFF]"
      jsonLd
    />
  );
}
