import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import CoreValueCard from "@/components/core-value-card";
import { ABOUT_CORE_VALUES, ABOUT_CORE_VALUES_INTRO } from "@/constants";

export default function CoreValues() {
  return (
    <PageSection tone="gray">
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
    </PageSection>
  );
}
