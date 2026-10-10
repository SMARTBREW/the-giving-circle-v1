import type { Metadata } from "next";
import MomentsSection from "@/app/(home)/_sections/moments-section";
import PartnersSection from "@/app/(home)/_sections/partners-section";
import FaqsSection from "@/app/(home)/_sections/faqs-section";
import { CHAMPION_FAQS, SITE } from "@/constants";
import ChampionHero from "./_sections/champion-hero";
import ChampionHowItWorks from "./_sections/champion-how-it-works";
import ChampionCampaigns from "./_sections/champion-campaigns";
import ChampionTrust from "./_sections/champion-trust";
import ChampionVoices from "./_sections/champion-voices";
import ChampionMeet from "./_sections/champion-meet";
import ChampionCta from "./_sections/champion-cta";

export const metadata: Metadata = {
  title: "Become a Cause Champion & Make an Impact | The Giving Circle",
  description:
    "Become a Cause Champion with The Giving Circle. Choose a verified cause, rally your circle and raise support for an NGO. Start your giving journey today.",
  alternates: { canonical: `${SITE.url}/become-a-cause-champion/` },
};

export default function ChampionPage() {
  const { eyebrow, title, subtitle, items } = CHAMPION_FAQS;

  return (
    <>
      <ChampionHero />
      <ChampionHowItWorks />
      <ChampionCampaigns />
      <ChampionTrust />
      <MomentsSection className="bg-gray-100" />
      <ChampionVoices />
      <ChampionMeet />
      <PartnersSection />
      <FaqsSection
        id="champion-faqs"
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        items={items}
      />
      <ChampionCta />
    </>
  );
}
