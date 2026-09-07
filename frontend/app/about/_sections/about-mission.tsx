import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { ABOUT_MISSION, ABOUT_VISION, SEGOE_UI_CLASS } from "@/constants";

export default function AboutMission() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col gap-10 px-4 pt-6 pb-6 sm:gap-12 sm:px-8 sm:pt-12 sm:pb-12 md:flex-row md:items-start md:gap-10 md:px-10 md:pt-14 md:pb-14 lg:gap-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:gap-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <div className="flex min-w-0 flex-1 flex-col">
          <SectionIntro
            align="left"
            eyebrow={ABOUT_MISSION.eyebrow}
            title={ABOUT_MISSION.title}
          />
          <p
            className={`${SEGOE_UI_CLASS} mt-4 text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1rem] sm:leading-7 lg:mt-6 lg:text-[1.125rem] lg:leading-8`}
          >
            {ABOUT_MISSION.body}
          </p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <SectionIntro
            align="left"
            eyebrow={ABOUT_VISION.eyebrow}
            title={ABOUT_VISION.title}
          />
          <p
            className={`${SEGOE_UI_CLASS} mt-4 text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1rem] sm:leading-7 lg:mt-6 lg:text-[1.125rem] lg:leading-8`}
          >
            {ABOUT_VISION.body}
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
