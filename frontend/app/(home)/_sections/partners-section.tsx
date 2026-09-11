import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import PartnersLogoCarousel from "@/components/partners-logo-carousel";

export default function PartnersSection({
  className = "bg-[#FFFFFF]",
}: {
  className?: string;
}) {
  return (
    <section id="partner" className={`w-full ${className}`}>
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-6 pt-6 pb-6 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:pt-14 md:pb-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:min-h-[30.3125rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <SectionIntro
          eyebrow="Partners & Campaigns"
          title="Trusted NGOs & Programs"
          subtitle="Partnering with trusted NGOs and organisations to create lasting social impact."
        />
        <div className="mt-10 w-full sm:mt-10 lg:mt-12">
          <PartnersLogoCarousel />
        </div>
      </FadeInSection>
    </section>
  );
}
