import type { Metadata } from "next";
import StoriesHero from "./_sections/stories-hero";
import StoriesArticles from "./_sections/stories-articles";
import StoriesReach from "./_sections/stories-reach";
import StoriesCta from "./_sections/stories-cta";

export const metadata: Metadata = {
  title: "Impact Stories | The Giving Circle",
  description:
    "Real stories of Cause Champions and verified NGOs turning collective giving into lasting impact across India.",
};

export default function StoriesPage() {
  return (
    <>
      <StoriesHero />
      <StoriesArticles />
      <StoriesReach />
      <StoriesCta />
    </>
  );
}
