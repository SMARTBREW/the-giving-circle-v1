import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import SectionIntro from "@/components/section-intro";
import ImpactStoryCard from "@/components/impact-story-card";
import { IMPACT_STORIES } from "@/constants";

export default function ImpactStoriesSection() {
  return (
    <section
      id="stories"
      className="mx-auto w-full max-w-[90rem] bg-[#FFFFFF] md:h-[74.25rem]"
    >
      <FadeInSection className="flex h-full flex-col items-center px-[2rem] pt-[5rem] pb-[5rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow="Impact Stories"
          eyebrowClassName="w-[9rem]"
          title="Real Stories. Lasting Impact."
          titleClassName="h-[4rem] w-[44.5rem]"
          subtitle="Discover how Cause Champions and verified NGOs are turning collective support into meaningful outcomes."
          subtitleClassName="h-[4rem] w-[35rem]"
        />
        <ul className="mt-12 grid w-full grid-cols-1 gap-6 md:h-[42.75rem] md:grid-cols-[39.625rem_36.25rem] md:grid-rows-[20.625rem_20.625rem]">
          {IMPACT_STORIES.map((story) => (
            <ImpactStoryCard
              key={story.title}
              featured={story.featured}
              tag={story.tag}
              tagClassName={story.tagClassName}
              tagLabelClassName={story.tagLabelClassName}
              overlayClassName={story.overlayClassName}
              title={story.title}
              src={story.src}
              alt={story.alt}
              href={story.href}
            />
          ))}
        </ul>
        <div className="mt-12">
          <CtaButton
            href="/#stories"
            variant="outline"
            hoverFill
            className="h-[4rem] w-[18.75rem] rounded-[100px] bg-[#FFFFFF] px-10 py-5"
            labelClassName="gap-2 font-[600] tracking-normal"
          >
            <span className="inline-flex h-6 w-[11.75rem] items-center justify-center leading-none">
              View All Impact Stories
            </span>
            <span className="leading-none" aria-hidden="true">
              →
            </span>
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
