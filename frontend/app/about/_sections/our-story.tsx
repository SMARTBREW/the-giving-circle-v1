import SplitMediaSection from "@/components/split-media-section";
import { ABOUT_OUR_STORY } from "@/constants";

export default function OurStory() {
  return (
    <SplitMediaSection
      eyebrow={ABOUT_OUR_STORY.eyebrow}
      title={ABOUT_OUR_STORY.title}
      subtitle={ABOUT_OUR_STORY.subtitle}
      paragraphs={ABOUT_OUR_STORY.paragraphs}
      src={ABOUT_OUR_STORY.src}
      alt={ABOUT_OUR_STORY.alt}
    />
  );
}
