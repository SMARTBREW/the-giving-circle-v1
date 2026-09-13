import type { Metadata } from "next";
import PhotoPageHero from "@/components/photo-page-hero";
import ReachBand from "@/components/reach-band";
import PhotoCtaBand from "@/components/photo-cta-band";
import BlogArticles from "./_sections/blog-articles";
import {
  BLOG_CTA,
  BLOG_HERO,
  BLOG_REACH,
  REACH_STATS,
} from "@/constants";

export const metadata: Metadata = {
  title: "Blog | The Giving Circle",
  description:
    "Practical, trust-first giving guides for families, students, and donors across India: 80G, verified NGOs, Young Champions, and collective impact.",
};

export default function BlogPage() {
  return (
    <>
      <PhotoPageHero
        src={BLOG_HERO.src}
        alt={BLOG_HERO.alt}
        eyebrow={BLOG_HERO.eyebrow}
        title={BLOG_HERO.title}
        subtitle={BLOG_HERO.subtitle}
        ctaLabel={BLOG_HERO.ctaLabel}
        ctaHref={BLOG_HERO.ctaHref}
        priority
        objectPosition="object-[50%_50%]"
      />
      <BlogArticles />
      <ReachBand
        eyebrow={BLOG_REACH.eyebrow}
        title={BLOG_REACH.title}
        subtitle={BLOG_REACH.subtitle}
        stats={REACH_STATS}
        tone="white"
      />
      <PhotoCtaBand
        src={BLOG_CTA.src}
        mobileSrc={BLOG_CTA.mobileSrc}
        alt={BLOG_CTA.alt}
        title={BLOG_CTA.title}
        subtitle={BLOG_CTA.subtitle}
        ctaLabel={BLOG_CTA.ctaLabel}
        href={BLOG_CTA.href}
        objectPosition={BLOG_CTA.objectPosition}
        mobileObjectPosition={BLOG_CTA.mobileObjectPosition}
      />
    </>
  );
}
