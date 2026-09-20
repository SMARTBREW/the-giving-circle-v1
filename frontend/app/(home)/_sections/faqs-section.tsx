import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import FaqsAccordion from "@/components/faqs-accordion";
import FaqJsonLd from "@/components/faq-json-ld";
import { FAQ_ITEMS, type FaqEntry } from "@/constants/faqs";

export default function FaqsSection({
  id = "faqs",
  eyebrow = "Frequently Asked Questions",
  title = "Everything You Need to Know",
  subtitle = "Find answers about donations, NGO verification, volunteering, and tracking your impact.",
  items = FAQ_ITEMS,
  className = "bg-gray-100",
  jsonLd = true,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: readonly FaqEntry[];
  className?: string;
  jsonLd?: boolean;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      {jsonLd ? <FaqJsonLd items={items} /> : null}
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-10 pb-16 sm:px-8 sm:pt-12 sm:pb-20 md:px-10 md:pt-14 md:pb-24 lg:px-12 lg:pt-16 lg:pb-20 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          titleAs="h3"
          subtitleClassName="text-[var(--Body-text,#4a5558b2)]"
        />
        <div className="mt-10 w-full sm:mt-10 lg:mt-12">
          <FaqsAccordion items={items} />
        </div>
      </FadeInSection>
    </section>
  );
}
