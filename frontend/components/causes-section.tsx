import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import SectionIntro from "@/components/section-intro";
import CauseCard from "@/components/cause-card";
import { CAUSE_CARDS } from "@/constants";

export default function CausesSection() {
  return (
    <section
      id="causes"
      className="mx-auto w-full max-w-[90rem] bg-[var(--Alternate-color,#F7FBFB)] md:h-[51.25rem]"
    >
      <FadeInSection className="flex h-full flex-col items-center px-[2rem] pt-[5rem] pb-[4rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow="Our Causes"
          eyebrowClassName="w-[6.875rem]"
          title="Causes That Need You"
          titleClassName="h-[4rem] w-[34.25rem]"
          subtitle="Find a cause you care about and see where your support can make a difference."
          subtitleClassName="h-[2rem] w-[39.5rem] whitespace-nowrap"
        />
        <ul className="mt-8 flex w-full flex-col items-center gap-6 md:flex-row md:gap-[1.5rem]">
          {CAUSE_CARDS.map((cause) => (
            <CauseCard
              key={cause.label}
              label={cause.label}
              src={cause.src}
              alt={cause.alt}
            />
          ))}
        </ul>
        <div className="mt-8">
          <CtaButton
            href="/#causes"
            variant="outline"
            hoverFill
            className="h-[4rem] w-[15rem] gap-2 bg-[#FFFFFF] px-10 py-5"
            labelClassName="gap-2 font-[600] tracking-normal"
          >
            <span className="inline-flex h-6 w-[8rem] items-center justify-center leading-none">
              View All Causes
            </span>
            <span className="leading-none" aria-hidden="true">
              →
            </span>
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
