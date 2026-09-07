import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import SectionIntro from "@/components/section-intro";
import VolunteerCard from "@/components/volunteer-card";
import { VOLUNTEERS } from "@/constants";

export default function VolunteerBand({
  id,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  href,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <section
      id={id}
      className="w-full bg-[var(--Alternate-color,#F7FBFB)]"
    >
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:h-[55.0625rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[4.375rem]">
        <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-6 lg:mt-12 min-[90rem]:flex min-[90rem]:flex-row min-[90rem]:flex-nowrap min-[90rem]:justify-center min-[90rem]:gap-[1.125rem]">
          {VOLUNTEERS.map((volunteer) => (
            <VolunteerCard
              key={volunteer.name}
              name={volunteer.name}
              role={volunteer.role}
              src={volunteer.src}
              alt={volunteer.alt}
            />
          ))}
        </ul>
        <div className="mt-10 sm:mt-10 lg:mt-12">
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className="h-12 w-full max-w-[17.25rem] rounded-[100px] bg-[#FFFFFF] px-6 py-3 sm:h-14 sm:px-8 min-[90rem]:h-[4rem] min-[90rem]:w-[17.25rem] min-[90rem]:px-10 min-[90rem]:py-5"
            labelClassName="font-[600]"
          >
            {ctaLabel}
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
