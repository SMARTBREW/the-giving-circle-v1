import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import FaqsAccordion from "@/components/faqs-accordion";

export default function FaqsSection() {
  return (
    <section
      id="faqs"
      className="w-full bg-[var(--Alternate-color,#F7FBFB)]"
    >
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-10 sm:px-8 sm:pt-12 sm:pb-20 md:px-10 md:pt-14 md:pb-24 lg:px-12 lg:pt-16 min-[90rem]:h-[75.6875rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[7.5rem]">
        <SectionIntro
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="Find answers about donations, NGO verification, volunteering, and tracking your impact."
          subtitleClassName="text-[var(--Body-text,#000000B2)]"
        />
        <div className="mt-10 w-full sm:mt-10 lg:mt-12">
          <FaqsAccordion />
        </div>
      </FadeInSection>
    </section>
  );
}
