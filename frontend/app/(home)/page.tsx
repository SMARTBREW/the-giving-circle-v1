import { SITE } from "@/constants";
import Hero from "./_sections/hero";
import ChampionSection from "./_sections/champion-section";
import CausesSection from "./_sections/causes-section";
import MomentsSection from "./_sections/moments-section";
import ReachSection from "./_sections/reach-section";
import HowItWorksSection from "./_sections/how-it-works-section";
import ImpactStoriesSection from "./_sections/impact-stories-section";
import VolunteerSection from "./_sections/volunteer-section";
import PartnersSection from "./_sections/partners-section";
import FaqsSection from "./_sections/faqs-section";
import SupportCauseSection from "./_sections/support-cause-section";

/** Homepage only - Metadata API drops the trailing slash on the site root. */
const HOME_CANONICAL = `${SITE.url}/`;

export default function HomePage() {
  return (
    <>
      <link rel="canonical" href={HOME_CANONICAL} />
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
