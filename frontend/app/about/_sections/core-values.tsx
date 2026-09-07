import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import CoreValueCard from "@/components/core-value-card";
import { ABOUT_CORE_VALUES, ABOUT_CORE_VALUES_INTRO } from "@/constants";

export default function CoreValues() {
  return (
    <section className="w-full bg-[var(--Alternate-color,#F7FBFB)]">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow={ABOUT_CORE_VALUES_INTRO.eyebrow}
          title={ABOUT_CORE_VALUES_INTRO.title}
          subtitle={ABOUT_CORE_VALUES_INTRO.subtitle}
        />

        <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:gap-5 min-[90rem]:mt-10 min-[90rem]:grid-cols-4 min-[90rem]:gap-6">
          {ABOUT_CORE_VALUES.map((value) => (
            <CoreValueCard
              key={value.title}
              title={value.title}
              body={value.body}
              icon={value.icon}
            />
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
