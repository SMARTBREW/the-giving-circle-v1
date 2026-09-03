import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import FaqsAccordion from "@/components/faqs-accordion";

export default function FaqsSection() {
  return (
    <section
      id="faqs"
      className="w-full bg-[var(--Alternate-color,#F7FBFB)]"
    >
      <FadeInSection className="mx-auto flex h-full w-full max-w-[90rem] flex-col items-center px-[2rem] pt-[5rem] pb-[7.5rem] md:h-[75.6875rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow="Frequently Asked Questions"
          eyebrowClassName="w-[17.5rem]"
          title="Everything You Need to Know"
          titleClassName="h-[4rem] w-[46.1875rem]"
          subtitle="Find answers about donations, NGO verification, volunteering, and tracking your impact."
          subtitleClassName="h-[4rem] w-[30.125rem] !text-[var(--Body-text,#000000B2)]"
        />
        <div className="mt-12 w-full">
          <FaqsAccordion />
        </div>
      </FadeInSection>
    </section>
  );
}
