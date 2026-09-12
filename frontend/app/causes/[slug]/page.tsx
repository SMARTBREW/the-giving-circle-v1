import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import CampaignCard from "@/components/campaign-card";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import PhotoCtaBand from "@/components/photo-cta-band";
import FaqsAccordion from "@/components/faqs-accordion";
import CauseDetailHero from "../_sections/cause-detail-hero";
import CauseDetailAbout from "../_sections/cause-detail-about";
import CauseDetailSections from "../_sections/cause-detail-sections";
import {
  CAUSES_CTA,
  LIVE_CAUSES,
  getCauseDetailContent,
  getLiveCause,
  toCampaignCard,
} from "@/constants";

export function generateStaticParams() {
  return LIVE_CAUSES.map((cause) => ({ slug: cause.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cause = getLiveCause(slug);
  if (!cause) {
    return { title: "Cause | The Giving Circle" };
  }

  return {
    title: `${cause.title} | The Giving Circle`,
    description: cause.summary,
  };
}

export default async function CauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = getLiveCause(slug);
  if (!cause) notFound();

  const detail = getCauseDetailContent(cause.id);

  const related = LIVE_CAUSES.filter((item) => item.id !== cause.id)
    .filter((item) => item.category === cause.category)
    .concat(
      LIVE_CAUSES.filter(
        (item) => item.id !== cause.id && item.category !== cause.category,
      ),
    )
    .slice(0, 3)
    .map(toCampaignCard);

  return (
    <>
      <CauseDetailHero cause={cause} />
      <CauseDetailAbout cause={cause} />
      {detail ? <CauseDetailSections cause={cause} detail={detail} /> : null}

      {cause.faqs.length > 0 ? (
        <PageSection tone="gray">
          <SectionIntro
            eyebrow="Questions About This Cause"
            title="Frequently Asked Questions"
            subtitle="Clarity on where gifts go, how the programme works, and how your circle can champion it."
          />
          <div className="mt-8 w-full sm:mt-10 lg:mt-12">
            <FaqsAccordion items={cause.faqs} />
          </div>
        </PageSection>
      ) : null}

      {related.length > 0 ? (
        <PageSection tone="white">
          <SectionIntro
            eyebrow="More Live Causes"
            title="Keep Exploring"
            subtitle="Other verified campaigns your circle can champion next."
          />
          <ul className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:mt-12 min-[90rem]:grid-cols-3 min-[90rem]:gap-6">
            {related.map((card) => (
              <li key={card.id} className="min-w-0">
                <CampaignCard card={card} />
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center sm:mt-10">
            <CtaButton
              href="/causes"
              variant="outline"
              hoverFill
              className="h-12 gap-2 bg-[#FFFFFF] px-8 py-3 sm:h-14"
              labelClassName="font-[700]"
            >
              View All Live Causes
              <CtaArrow />
            </CtaButton>
          </div>
        </PageSection>
      ) : null}

      <PhotoCtaBand
        src={CAUSES_CTA.src}
        alt={CAUSES_CTA.alt}
        title={CAUSES_CTA.title}
        subtitle={CAUSES_CTA.subtitle}
        ctaLabel={CAUSES_CTA.ctaLabel}
        href={CAUSES_CTA.href}
      />
    </>
  );
}
