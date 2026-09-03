import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { CAUSES_PAGE } from "@/constants";
import LiveCausesGrid from "./_sections/live-causes-grid";

export default function CausesPage() {
  return (
    <section className="mx-auto w-full max-w-[90rem] bg-[var(--Alternate-color,#F7FBFB)]">
      <FadeInSection className="flex flex-col items-center px-[2rem] pt-[5rem] pb-[7.5rem] md:px-[6.25rem]">
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
