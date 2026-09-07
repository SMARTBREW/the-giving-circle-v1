import PhotoPageHero from "@/components/photo-page-hero";
import { ABOUT_WHY_WE_GATHER } from "@/constants";

export default function WhyWeGather() {
  return (
    <PhotoPageHero
      src={ABOUT_WHY_WE_GATHER.src}
      alt={ABOUT_WHY_WE_GATHER.alt}
      eyebrow={ABOUT_WHY_WE_GATHER.eyebrow}
      title={ABOUT_WHY_WE_GATHER.title}
      subtitle={ABOUT_WHY_WE_GATHER.subtitle}
      priority
    />
  );
}
