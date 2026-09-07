import type { Metadata } from "next";
import WhyWeGather from "./_sections/why-we-gather";
import OurStory from "./_sections/our-story";
import CoreValues from "./_sections/core-values";
import AboutNumbers from "./_sections/about-numbers";
import AboutTeam from "./_sections/about-team";
import AboutMission from "./_sections/about-mission";
import AboutVisionCta from "./_sections/about-vision-cta";

export const metadata: Metadata = {
  title: "About Us | The Giving Circle",
  description:
    "India's leading community giving platform, bridging Cause Champions with verified NGOs for transparent, measurable social impact since 2022.",
};

export default function AboutPage() {
  return (
    <>
      <WhyWeGather />
      <OurStory />
      <CoreValues />
      <AboutNumbers />
      <AboutTeam />
      <AboutMission />
      <AboutVisionCta />
    </>
  );
}
