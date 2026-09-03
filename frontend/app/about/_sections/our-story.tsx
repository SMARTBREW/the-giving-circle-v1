import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { ABOUT_OUR_STORY, SEGOE_UI_CLASS } from "@/constants";

export default function OurStory() {
  return (
    <section className="mx-auto w-full max-w-[90rem] bg-[#FFFFFF]">
      <FadeInSection className="flex flex-col items-center px-[2rem] pt-[5rem] pb-[7.5rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow={ABOUT_OUR_STORY.eyebrow}
          title={ABOUT_OUR_STORY.title}
          subtitle={ABOUT_OUR_STORY.subtitle}
        />
        <p
          className={`${SEGOE_UI_CLASS} mt-8 max-w-[40.5rem] text-center text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Subheading,#45564B)]`}
        >
          {ABOUT_OUR_STORY.body}
        </p>
      </FadeInSection>
    </section>
  );
}
