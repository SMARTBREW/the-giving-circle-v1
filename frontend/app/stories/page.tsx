import type { Metadata } from "next";
import PhotoPageHero from "@/components/photo-page-hero";
import ReachBand from "@/components/reach-band";
import PhotoCtaBand from "@/components/photo-cta-band";
import MomentsSection from "@/app/(home)/_sections/moments-section";
import StoriesArticles from "./_sections/stories-articles";
import {
  REACH_STATS,
  STORIES_CTA,
  STORIES_HERO,
  STORIES_REACH,
} from "@/constants";

export const metadata: Metadata = {
  title: "Impact Stories | The Giving Circle",
  description:
    "Real stories of Cause Champions and verified NGOs turning collective giving into lasting impact across India.",
};

export default function StoriesPage() {
  return (
    <>
      <PhotoPageHero
        src={STORIES_HERO.src}
        alt={STORIES_HERO.alt}
        eyebrow={STORIES_HERO.eyebrow}
        title={STORIES_HERO.title}
        subtitle={STORIES_HERO.subtitle}
        ctaLabel={STORIES_HERO.ctaLabel}
        ctaHref={STORIES_HERO.ctaHref}
        priority
        objectPosition="object-[50%_10%] sm:object-[50%_14%]"
      />
      <StoriesArticles />
      <MomentsSection />
      <ReachBand
        eyebrow={STORIES_REACH.eyebrow}
        title={STORIES_REACH.title}
        subtitle={STORIES_REACH.subtitle}
        stats={REACH_STATS}
      />
      <PhotoCtaBand
        src={STORIES_CTA.src}
        mobileSrc={STORIES_CTA.mobileSrc}
        alt={STORIES_CTA.alt}
        title={STORIES_CTA.title}
        subtitle={STORIES_CTA.subtitle}
        ctaLabel={STORIES_CTA.ctaLabel}
        href={STORIES_CTA.href}
        objectPosition={STORIES_CTA.objectPosition}
        mobileObjectPosition={STORIES_CTA.mobileObjectPosition}
      />
    </>
  );
}
