import Hero from "@/components/hero";
import ChampionSection from "@/components/champion-section";
import CausesSection from "@/components/causes-section";
import MomentsSection from "@/components/moments-section";
import ReachSection from "@/components/reach-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ImpactStoriesSection from "@/components/impact-stories-section";
import VolunteerSection from "@/components/volunteer-section";
import PartnersSection from "@/components/partners-section";
import FaqsSection from "@/components/faqs-section";
import SupportCauseSection from "@/components/support-cause-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChampionSection />
      <CausesSection />
      <MomentsSection />
      <ReachSection />
      <HowItWorksSection />
      <ImpactStoriesSection />
      <VolunteerSection />
      <PartnersSection />
      <FaqsSection />
      <SupportCauseSection />
    </>
  );
}
