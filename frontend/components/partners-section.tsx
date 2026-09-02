import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import PartnersLogoCarousel from "@/components/partners-logo-carousel";

export default function PartnersSection() {
  return (
    <section
      id="partner"
      className="mx-auto w-full max-w-[90rem] bg-[#FFFFFF] md:h-[30.3125rem]"
    >
      <FadeInSection className="flex h-full flex-col items-center px-[2rem] pt-[5rem] pb-[5rem] md:px-[6.25rem]">
        <SectionIntro
          eyebrow="Partners & Campaigns"
          eyebrowClassName="w-[13.875rem]"
          title="Trusted NGOs & Programs"
          titleClassName="h-[4rem] w-[41rem]"
          subtitle="Working with trusted NGOs and initiatives to create meaningful change across communities."
          subtitleClassName="h-[4rem] w-[30.125rem]"
        />
        <div className="mt-12 w-full">
          <PartnersLogoCarousel />
        </div>
      </FadeInSection>
    </section>
  );
}
