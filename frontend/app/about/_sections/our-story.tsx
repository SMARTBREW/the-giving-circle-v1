import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import SectionIntro from "@/components/section-intro";
import { ABOUT_OUR_STORY, CHAMPION_PHOTO, SEGOE_UI_CLASS } from "@/constants";

export default function OurStory() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <FadeInSection className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 pt-6 pb-6 sm:gap-10 sm:px-8 sm:pt-12 sm:pb-12 md:flex-row md:items-center md:gap-10 md:px-10 md:pt-14 md:pb-14 lg:gap-14 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:gap-20 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        <div className="flex flex-col md:flex-1">
          <SectionIntro
            align="left"
            eyebrow={ABOUT_OUR_STORY.eyebrow}
            title={ABOUT_OUR_STORY.title}
            subtitle={ABOUT_OUR_STORY.subtitle}
          />
          <div className="mt-5 flex flex-col gap-4 sm:mt-6 lg:mt-7">
            {ABOUT_OUR_STORY.paragraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:text-[1rem] sm:leading-7 lg:text-[1.125rem] lg:leading-8`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] md:w-[42%] md:self-stretch md:aspect-auto lg:w-[44%]">
          <Image
            src={CHAMPION_PHOTO}
            alt="Women in our circle gathered together"
            fill
            sizes="(max-width: 767px) 100vw, 44vw"
            className="object-cover"
          />
        </div>
      </FadeInSection>
    </section>
  );
}
