import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { ABOUT_WHY_WE_GATHER, SEGOE_UI_CLASS } from "@/constants";

export default function WhyWeGather() {
  return (
    <section className="mx-auto w-full max-w-[90rem] bg-[var(--Alternate-color,#F7FBFB)]">
      <FadeInSection className="flex flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-12 sm:pb-16 md:px-10 md:pt-14 md:pb-20 lg:px-12 lg:pt-16 lg:pb-24 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[7.5rem]">
        <SectionIntro
          eyebrow={ABOUT_WHY_WE_GATHER.eyebrow}
          title={ABOUT_WHY_WE_GATHER.title}
          subtitle={ABOUT_WHY_WE_GATHER.subtitle}
        />
        <p
          className={`${SEGOE_UI_CLASS} mt-6 w-full max-w-[40.5rem] text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-7 sm:text-[1rem] sm:leading-7 md:mt-8 md:text-[1.0625rem] md:leading-8 lg:text-[1.125rem] lg:leading-[2rem]`}
        >
          {ABOUT_WHY_WE_GATHER.body}
        </p>
      </FadeInSection>
    </section>
  );
}
