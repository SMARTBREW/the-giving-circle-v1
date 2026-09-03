import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { ABOUT_WHY_WE_GATHER, SEGOE_UI_CLASS } from "@/constants";

export default function WhyWeGather() {
  return (
    <section className="mx-auto w-full max-w-[90rem] bg-[var(--Alternate-color,#F7FBFB)]">
      <FadeInSection className="flex flex-col items-center px-[2rem] pt-[5rem] pb-[7.5rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow={ABOUT_WHY_WE_GATHER.eyebrow}
          title={ABOUT_WHY_WE_GATHER.title}
          subtitle={ABOUT_WHY_WE_GATHER.subtitle}
        />
        <p
          className={`${SEGOE_UI_CLASS} mt-8 max-w-[40.5rem] text-center text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Subheading,#45564B)]`}
        >
          {ABOUT_WHY_WE_GATHER.body}
        </p>
      </FadeInSection>
    </section>
  );
}
