"use client";

import { useState } from "react";
import FadeInSection from "@/components/fade-in-section";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import StoryCard from "@/components/story-card";
import { STORY_ARTICLES, STORIES_ARTICLES_INTRO } from "@/constants";

export default function StoriesArticles() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <PageSection
      id="stories"
      tone="gray"
      fade={false}
      innerClassName="flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20 min-[90rem]:gap-24"
    >
      <FadeInSection>
        <SectionIntro
          eyebrow={STORIES_ARTICLES_INTRO.eyebrow}
          title={STORIES_ARTICLES_INTRO.title}
          subtitle={STORIES_ARTICLES_INTRO.subtitle}
        />
      </FadeInSection>

      {STORY_ARTICLES.map((story, index) => (
        <FadeInSection key={story.id}>
          <StoryCard
            story={story}
            imageFirst={index % 2 === 0}
            expanded={openId === story.id}
            onToggle={() =>
              setOpenId((current) => (current === story.id ? null : story.id))
            }
          />
          {index < STORY_ARTICLES.length - 1 ? (
            <span
              aria-hidden="true"
              className="mt-10 block h-px w-full bg-[#00000014] sm:mt-14 md:mt-16 lg:mt-20 min-[90rem]:mt-24"
            />
          ) : null}
        </FadeInSection>
      ))}
    </PageSection>
  );
}
