"use client";

import { useState } from "react";
import FadeInSection from "@/components/fade-in-section";
import { STORY_ARTICLES } from "@/constants";
import StoryCard from "@/components/story-card";

export default function StoriesArticles() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-10 px-4 pt-6 pb-6 sm:gap-14 sm:px-8 sm:pt-12 sm:pb-12 md:gap-16 md:px-10 md:pt-14 md:pb-14 lg:gap-20 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:gap-24 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
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
      </div>
    </section>
  );
}
