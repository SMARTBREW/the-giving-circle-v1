import type { Metadata } from "next";
import MomentsSection from "@/app/(home)/_sections/moments-section";
import PartnersSection from "@/app/(home)/_sections/partners-section";
import FaqsSection from "@/app/(home)/_sections/faqs-section";
import { VOLUNTEER_FAQS } from "@/constants";
import VolunteerHero from "./_sections/volunteer-hero";
import VolunteerHowItWorks from "./_sections/volunteer-how-it-works";
import VolunteerTrust from "./_sections/volunteer-trust";
import VolunteerMeet from "./_sections/volunteer-meet";
import VolunteerCta from "./_sections/volunteer-cta";

export const metadata: Metadata = {
  title: "Volunteer With Us | The Giving Circle",
  description:
    "Give your time and skills to verified causes across India. Volunteer with NGO partners on education, women’s health, animal welfare, and disaster relief.",
};

export default function VolunteerPage() {
  const { eyebrow, title, subtitle, items } = VOLUNTEER_FAQS;

  return (
    <>
      <VolunteerHero />
      <VolunteerHowItWorks />
      <VolunteerTrust />
      <MomentsSection className="bg-[#FFFFFF]" />
      <VolunteerMeet />
      <PartnersSection />
      <FaqsSection
        id="volunteer-faqs"
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        items={items}
        className="bg-gray-100"
      />
      <VolunteerCta />
    </>
  );
}
