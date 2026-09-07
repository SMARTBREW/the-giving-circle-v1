import PhotoPageHero from "@/components/photo-page-hero";
import { STORIES_HERO } from "@/constants";

export default function StoriesHero() {
  return (
    <PhotoPageHero
      src={STORIES_HERO.src}
      alt={STORIES_HERO.alt}
      eyebrow={STORIES_HERO.eyebrow}
      title={STORIES_HERO.title}
      subtitle={STORIES_HERO.subtitle}
      priority
      objectPosition="object-[50%_35%]"
    />
  );
}
