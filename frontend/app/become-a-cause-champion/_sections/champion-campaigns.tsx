import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import CampaignCard from "@/components/campaign-card";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import {
  CHAMPION_CAMPAIGNS,
  getFeaturedCauses,
  toCampaignCard,
} from "@/constants";

export default function ChampionCampaigns() {
  const { eyebrow, title, subtitle, ctaLabel, href } = CHAMPION_CAMPAIGNS;
  const cards = getFeaturedCauses().map(toCampaignCard);

  return (
    <section id="causes" className="w-full bg-gray-100">
      <FadeInSection className="mx-auto flex h-full w-full max-w-[90rem] flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 md:px-10 md:pt-16 md:pb-16 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[4rem]">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          titleClassName="min-[90rem]:h-16 min-[90rem]:whitespace-nowrap"
          subtitleClassName="min-[90rem]:h-8 min-[90rem]:whitespace-nowrap"
        />

        <ul className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 min-[56.25rem]:mt-12 min-[56.25rem]:grid-cols-3 min-[56.25rem]:gap-5 lg:gap-6 min-[90rem]:mt-[3.5625rem] min-[90rem]:gap-6">
          {cards.map((card) => (
            <li key={card.id} className="min-w-0 min-[90rem]:w-auto">
              <CampaignCard card={card} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center sm:mt-10 min-[90rem]:mt-12">
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className="h-12 gap-2 bg-[#FFFFFF] px-8 py-3 sm:h-14 min-[90rem]:h-16 min-[90rem]:px-10"
            labelClassName="font-[700]"
          >
            {ctaLabel}
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
