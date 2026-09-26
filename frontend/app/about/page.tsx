import type { Metadata } from "next";
import PhotoPageHero from "@/components/photo-page-hero";
import ReachBand from "@/components/reach-band";
import VolunteerBand from "@/components/volunteer-band";
import PhotoCtaBand from "@/components/photo-cta-band";
import PartnersSection from "@/app/(home)/_sections/partners-section";
import FaqsSection from "@/app/(home)/_sections/faqs-section";
import OurStory from "./_sections/our-story";
import CoreValues from "./_sections/core-values";
import AboutMission from "./_sections/about-mission";
import {
  ABOUT_FAQS,
  ABOUT_NUMBERS,
  ABOUT_TEAM,
  ABOUT_VISION_CTA,
  ABOUT_WHY_WE_GATHER,
  REACH_STATS,
} from "@/constants";

export const metadata: Metadata = {
  title: "About Us | The Giving Circle",
  description:
    "India's leading community giving platform, bridging Cause Champions with verified NGOs for transparent, measurable social impact since 2022.",
};

export default function AboutPage() {
  const { eyebrow, title, subtitle, items } = ABOUT_FAQS;

  return (
    <>
      <PhotoPageHero
        src={ABOUT_WHY_WE_GATHER.src}
        alt={ABOUT_WHY_WE_GATHER.alt}
        eyebrow={ABOUT_WHY_WE_GATHER.eyebrow}
        title={ABOUT_WHY_WE_GATHER.title}
        subtitle={ABOUT_WHY_WE_GATHER.subtitle}
        ctaLabel={ABOUT_WHY_WE_GATHER.ctaLabel}
        ctaHref={ABOUT_WHY_WE_GATHER.ctaHref}
        priority
      />
      <OurStory />
      <CoreValues />
      <ReachBand
        eyebrow={ABOUT_NUMBERS.eyebrow}
        title={ABOUT_NUMBERS.title}
        stats={REACH_STATS}
        tone="dark"
      />
      <VolunteerBand
        eyebrow={ABOUT_TEAM.eyebrow}
        title={ABOUT_TEAM.title}
        subtitle={ABOUT_TEAM.subtitle}
        ctaLabel={ABOUT_TEAM.ctaLabel}
        href={ABOUT_TEAM.href}
        className="bg-[#FFFFFF]"
      />
      <AboutMission />
      <PartnersSection className="bg-[#FFFFFF]" />
      <FaqsSection
        id="about-faqs"
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        items={items}
        className="bg-gray-100"
      />
      <PhotoCtaBand
        src={ABOUT_VISION_CTA.src}
        mobileSrc={ABOUT_VISION_CTA.mobileSrc}
        alt={ABOUT_VISION_CTA.alt}
        title={ABOUT_VISION_CTA.title}
        subtitle={ABOUT_VISION_CTA.subtitle}
        ctaLabel={ABOUT_VISION_CTA.ctaLabel}
        href={ABOUT_VISION_CTA.href}
        objectPosition="object-center"
        mobileObjectPosition="object-[50%_62%]"
      />
    </>
  );
}
