import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import { ABOUT_MISSION, ABOUT_VISION, SEGOE_UI_CLASS } from "@/constants";

export default function AboutMission() {
  return (
    <PageSection
      tone="white"
      innerClassName="flex flex-col gap-10 sm:gap-12 md:flex-row md:items-stretch md:gap-0 lg:gap-0"
    >
      <div className="flex min-w-0 flex-1 flex-col md:pr-10 lg:pr-14 min-[90rem]:pr-16">
        <SectionIntro
          align="center-to-left"
          eyebrow={ABOUT_MISSION.eyebrow}
          title={ABOUT_MISSION.title}
        />
        <p
          className={`${SEGOE_UI_CLASS} mt-4 text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1rem] sm:leading-7 md:text-left lg:mt-6 lg:text-[1.125rem] lg:leading-8`}
        >
          {ABOUT_MISSION.body}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="hidden w-px shrink-0 self-stretch bg-[#00000014] md:block"
      />

      <div className="flex min-w-0 flex-1 flex-col md:pl-10 lg:pl-14 min-[90rem]:pl-16">
        <SectionIntro
          align="center-to-left"
          eyebrow={ABOUT_VISION.eyebrow}
          title={ABOUT_VISION.title}
        />
        <p
          className={`${SEGOE_UI_CLASS} mt-4 text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-5 sm:text-[1rem] sm:leading-7 md:text-left lg:mt-6 lg:text-[1.125rem] lg:leading-8`}
        >
          {ABOUT_VISION.body}
        </p>
      </div>
    </PageSection>
  );
}
