import PhotoPageHero from "@/components/photo-page-hero";
import { BLOG_HERO } from "@/constants";

export default function BlogHero() {
  return (
    <PhotoPageHero
      src={BLOG_HERO.src}
      alt={BLOG_HERO.alt}
      eyebrow={BLOG_HERO.eyebrow}
      title={BLOG_HERO.title}
      subtitle={BLOG_HERO.subtitle}
      priority
      objectPosition="object-[50%_40%]"
    />
  );
}
