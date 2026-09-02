import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import SectionIntro from "@/components/section-intro";
import VolunteerCard from "@/components/volunteer-card";
import { VOLUNTEERS } from "@/constants";

export default function VolunteerSection() {
  return (
    <section
      id="volunteer"
      className="mx-auto w-full max-w-[90rem] bg-[var(--Alternate-color,#F7FBFB)] md:h-[55.0625rem]"
    >
      <FadeInSection className="flex h-full flex-col items-center px-[2rem] pt-[5rem] pb-[4.375rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow="Volunteer for Change"
          eyebrowClassName="w-[13.875rem]"
          title="Make a Difference With Us"
          titleClassName="h-[4rem] w-[41.375rem]"
          subtitle="Contribute your time, skills, and energy to verified causes creating meaningful change across communities."
          subtitleClassName="h-[4rem] w-[30.125rem]"
        />
        <ul className="mt-12 flex w-full flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
          {VOLUNTEERS.map((volunteer) => (
            <VolunteerCard
              key={volunteer.name}
              name={volunteer.name}
              nameClassName={volunteer.nameClassName}
              role={volunteer.role}
              roleClassName={volunteer.roleClassName}
              src={volunteer.src}
              alt={volunteer.alt}
            />
          ))}
        </ul>
        <div className="mt-12">
          <CtaButton
            href="/#contact"
            variant="outline"
            hoverFill
            className="h-[4rem] w-[17.25rem] rounded-[100px] bg-[#FFFFFF] px-10 py-5"
            labelClassName="gap-2 font-[600] tracking-normal"
          >
            <span className="inline-flex h-6 w-[10.25rem] items-center justify-center leading-none">
              Become a Volunteer
            </span>
            <span className="leading-none" aria-hidden="true">
              →
            </span>
          </CtaButton>
        </div>
      </FadeInSection>
    </section>
  );
}
