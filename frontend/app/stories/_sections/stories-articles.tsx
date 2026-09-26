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
    <>
      <PageSection id="stories" tone="white" fade={false}>
        <FadeInSection>
          <SectionIntro
            eyebrow={STORIES_ARTICLES_INTRO.eyebrow}
            title={STORIES_ARTICLES_INTRO.title}
            subtitle={STORIES_ARTICLES_INTRO.subtitle}
          />
        </FadeInSection>
      </PageSection>

      {STORY_ARTICLES.map((story, index) => (
        <PageSection
          key={story.id}
          tone={index % 2 === 0 ? "gray" : "white"}
          fade={false}
          innerClassName="flex flex-col"
        >
          <FadeInSection>
            <StoryCard
              story={story}
              imageFirst={index % 2 === 0}
              expanded={openId === story.id}
              onToggle={() =>
                setOpenId((current) => (current === story.id ? null : story.id))
              }
            />
          </FadeInSection>
        </PageSection>
      ))}
    </>
  );
}
