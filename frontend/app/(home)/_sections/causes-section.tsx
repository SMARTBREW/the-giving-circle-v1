import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import SectionIntro from "@/components/section-intro";
import CauseCard from "@/components/cause-card";
import { CAUSE_CARDS } from "@/constants";

export default function CausesSection() {
  return (
    <section
      id="causes"
      className="w-full bg-[var(--Alternate-color,#F7FBFB)]"
    >
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-14 min-[90rem]:h-[51.25rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[4rem]">
        <SectionIntro
          eyebrow="Our Causes"
          title="Causes That Need You"
          subtitle="Find a cause you care about and see where your support can make a difference."
        />
        <ul className="mt-6 flex w-full flex-col gap-4 sm:mt-8 sm:gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-5 lg:mt-10 min-[90rem]:mt-8 min-[90rem]:flex-nowrap min-[90rem]:gap-6">
          {CAUSE_CARDS.map((cause) => (
            <CauseCard
              key={cause.label}
              label={cause.label}
              src={cause.src}
              alt={cause.alt}
            />
          ))}
        </ul>
        <div className="mt-10 flex justify-center lg:mt-10 min-[90rem]:mt-12">
          <CtaButton
            href="/causes"
            variant="outline"
            hoverFill
            className="h-12 gap-2 bg-[#FFFFFF] px-8 py-3 sm:h-14 min-[90rem]:h-[4rem] min-[90rem]:px-10 min-[90rem]:py-5"
            labelClassName="font-[600]"
          >
            View All Causes
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
