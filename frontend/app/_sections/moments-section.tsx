import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import MomentCard from "@/components/moment-card";
import { MOMENT_CARDS } from "@/constants";

export default function MomentsSection() {
  return (
    <section
      id="moments"
      className="mx-auto w-full max-w-[90rem] bg-[#FFFFFF] md:h-[50.9375rem]"
    >
      <FadeInSection className="flex h-full flex-col items-center px-[2rem] pt-[5rem] pb-[5rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow="Meaningful Moments"
          eyebrowClassName="w-[13.375rem]"
          title="Celebrate. Remember. Give."
          titleClassName="h-[4rem] w-[43.375rem]"
          subtitle="The flowers fade. Start a fundraiser instead, and let the people who love you give where your heart already is."
          subtitleClassName="h-[4rem] w-[35rem]"
        />
        <ul className="relative mt-8 flex w-full flex-col items-center gap-6 pt-4 md:flex-row md:gap-[1.625rem]">
          {MOMENT_CARDS.map((moment) => (
            <li key={moment.title} className="relative z-0 hover:z-10">
              <MomentCard
                iconSrc={moment.iconSrc}
                title={moment.title}
                titleClassName={moment.titleClassName}
                body={moment.body}
                ctaLabel={moment.ctaLabel}
                href={moment.href}
              />
            </li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
