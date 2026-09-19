import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import SectionIntro from "@/components/section-intro";
import VolunteerCard from "@/components/volunteer-card";
import { VOLUNTEERS } from "@/constants";

type VolunteerPerson = {
  name: string;
  role: string;
  src: string;
  alt: string;
  objectPosition?: string;
};

export default function VolunteerBand({
  id,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  href,
  people = VOLUNTEERS,
  className = "",
  ctaClassName = "h-12 w-full max-w-[17.25rem] rounded-full bg-[#FFFFFF] px-6 py-3 sm:h-14 sm:px-8 min-[90rem]:h-[4rem] min-[90rem]:w-[17.25rem] min-[90rem]:px-10 min-[90rem]:py-5",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  people?: readonly VolunteerPerson[];
  className?: string;
  ctaClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full bg-gray-100 ${className}`}
    >
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-5 min-[56.25rem]:grid-cols-4 min-[56.25rem]:gap-3 lg:mt-12 lg:gap-4 min-[90rem]:mt-12 min-[90rem]:flex min-[90rem]:flex-row min-[90rem]:flex-nowrap min-[90rem]:justify-center min-[90rem]:gap-[1.125rem]">
          {people.map((person) => (
            <VolunteerCard
              key={person.src}
              name={person.name}
              role={person.role}
              src={person.src}
              alt={person.alt}
              objectPosition={person.objectPosition}
            />
          ))}
        </ul>
        <div className="mt-10 sm:mt-10 lg:mt-12">
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className={ctaClassName}
            labelClassName="gap-2 font-[600]"
          >
            {ctaLabel}
            <CtaArrow />
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
