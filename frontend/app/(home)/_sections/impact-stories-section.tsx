import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import SectionIntro from "@/components/section-intro";
import ImpactStoryCard from "@/components/impact-story-card";
import { IMPACT_STORIES } from "@/constants";

export default function ImpactStoriesSection() {
  return (
    <section id="stories" className="w-full bg-[#FFFFFF]">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:h-[74.25rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow="Impact in action"
          title="Real Stories. Lasting Impact."
          subtitle="Discover how Cause Champions and verified NGOs are turning collective support into meaningful outcomes."
        />
        <ul className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:grid sm:grid-cols-2 sm:grid-rows-[auto_auto] sm:items-stretch sm:gap-4 md:gap-5 lg:mt-12 min-[90rem]:h-[42.75rem] min-[90rem]:grid-cols-[39.625rem_36.25rem] min-[90rem]:grid-rows-[20.625rem_20.625rem] min-[90rem]:gap-6">
          {IMPACT_STORIES.map((story) => (
            <ImpactStoryCard
              key={story.title}
              featured={story.featured}
              tag={story.tag}
              tagClassName={story.tagClassName}
              overlayClassName={story.overlayClassName}
              title={story.title}
              src={story.src}
              alt={story.alt}
              objectPosition={story.objectPosition}
              href={story.href}
            />
          ))}
        </ul>
        <div className="mt-10 sm:mt-10 lg:mt-12">
          <CtaButton
            href="/stories"
            variant="outline"
            hoverFill
            className="h-12 w-full max-w-[18.75rem] rounded-full bg-[#FFFFFF] px-6 py-3 sm:h-14 sm:px-8 min-[90rem]:h-[4rem] min-[90rem]:w-[18.75rem] min-[90rem]:px-10 min-[90rem]:py-5"
            labelClassName="font-[600]"
          >
            View All Impact Stories
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
