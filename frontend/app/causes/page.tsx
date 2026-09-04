import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { CAUSES_PAGE } from "@/constants";
import LiveCausesGrid from "./_sections/live-causes-grid";

export default function CausesPage() {
  return (
    <section className="mx-auto w-full max-w-[90rem] bg-[var(--Alternate-color,#F7FBFB)]">
      <FadeInSection className="flex flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-12 sm:pb-16 md:px-10 md:pt-14 md:pb-20 lg:px-12 lg:pt-16 lg:pb-24 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[7.5rem]">
        <SectionIntro
          eyebrow={CAUSES_PAGE.eyebrow}
          title={CAUSES_PAGE.title}
          subtitle={CAUSES_PAGE.subtitle}
        />
        <LiveCausesGrid />
      </FadeInSection>
    </section>
  );
}
