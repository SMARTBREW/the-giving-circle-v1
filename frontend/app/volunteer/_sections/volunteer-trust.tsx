import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { VOLUNTEER_TRUST, SEGOE_UI_CLASS } from "@/constants";

export default function VolunteerTrust() {
  const { eyebrow, title, subtitle, features } = VOLUNTEER_TRUST;

  return (
    <section className="w-full overflow-hidden bg-gray-100">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 md:px-10 md:pt-16 md:pb-16 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[4rem]">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          titleClassName="text-[#1D2D23] min-[90rem]:h-16 min-[90rem]:whitespace-nowrap"
          subtitleClassName="max-w-[35rem] text-[var(--Paragraph,#5F6D64)] min-[90rem]:max-w-[35rem]"
        />

        <ul className="mt-10 grid w-full max-w-[77.5rem] grid-cols-1 gap-10 sm:mt-12 sm:gap-12 md:grid-cols-3 md:gap-8 lg:mt-14 min-[90rem]:mt-16 min-[90rem]:gap-10">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex w-full flex-col items-center px-4 text-center sm:px-6"
            >
              <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden">
                <Image
                  src={feature.iconSrc}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </span>

              <h3
                className={`${SEGOE_UI_CLASS} mt-5 text-[1.25rem] font-[700] leading-7 tracking-normal text-[var(--Main-headings,#000000)] sm:mt-6 sm:text-[1.375rem] min-[90rem]:mt-6 min-[90rem]:text-[1.5rem] min-[90rem]:leading-7`}
              >
                {feature.title}
              </h3>

              <p
                className={`${SEGOE_UI_CLASS} mt-3 max-w-[21.4375rem] text-[0.9375rem] font-[400] leading-6 tracking-normal text-[#52525B] sm:mt-4 sm:text-[1rem] sm:leading-[1.625rem]`}
              >
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
