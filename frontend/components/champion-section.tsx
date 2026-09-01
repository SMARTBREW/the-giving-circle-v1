import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import CtaButton from "@/components/cta-button";
import { CHAMPION_PHOTO, CHAMPION_STEPS, SEGOE_UI_CLASS } from "@/constants";

export default function ChampionSection() {
  return (
    <section
      id="champion"
      className="mx-auto h-[65rem] w-full max-w-[90rem] bg-[#FFFFFF]"
    >
      <FadeInSection className="relative h-full w-full">
        <div className="flex flex-col pl-[6.25rem] pt-[5rem]">
          <p
            className={`${SEGOE_UI_CLASS} h-[1.5rem] w-[16rem] text-[1rem] leading-[1.5rem] font-[700] tracking-[0.08em] text-[var(--Eyebrow-label,#00A98F)] uppercase whitespace-nowrap`}
          >
            Become a Cause Champion
          </p>
          <h2 className="mt-4 h-[8rem] w-[33.4375rem] font-['Georgia'] text-[3rem] leading-[4rem] font-[700] tracking-normal text-[var(--Main-headings,#000000)]">
            Lead Your Circle.
            <br />
            Create Real Impact.
          </h2>
          <p
            className={`${SEGOE_UI_CLASS} mt-4 h-[4rem] w-[36rem] text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Subheading,#45564B)]`}
          >
            Start a Giving Circle, rally your network around a verified cause,
            and track the change you help create.
          </p>
          <ul className="mt-8 flex flex-col gap-6">
            {CHAMPION_STEPS.map((step) => (
              <li key={step.title} className="flex flex-row items-start gap-4">
                <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[1rem] border border-[#00A98F40] bg-[#FFFFFF]">
                  <Image
                    src={step.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </span>
                <span className="flex flex-col gap-2">
                  <span
                    className={`${SEGOE_UI_CLASS} block h-[2rem] w-[30.5rem] text-[1.5rem] leading-[2rem] font-[500] tracking-normal text-[var(--Neutral-Black,#000000)]`}
                  >
                    {step.title}
                  </span>
                  <span
                    className={`${SEGOE_UI_CLASS} block h-[2rem] w-[28.25rem] text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Paragraph,#5F6D64)]`}
                  >
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaButton
              href="/#contact"
              variant="outline"
              className="group h-[4rem] w-[20rem] gap-2 bg-[#FFFFFF] px-10 py-5 transition-colors duration-300 ease-out hover:bg-[var(--Main-CTA-button,#00A3BE)]"
              labelClassName="h-6 w-[13rem] font-[600] tracking-normal transition-colors duration-300 ease-out group-hover:text-[#FFFFFF]"
            >
              Start Your Giving Journey →
            </CtaButton>
          </div>
        </div>
        <div className="absolute top-[5rem] left-[46.68rem] h-[50rem] w-[37.0625rem] overflow-hidden rounded-[1rem] border border-[#BDBDBD]">
          <Image
            src={CHAMPION_PHOTO}
            alt="Women in our circle gathered together"
            fill
            sizes="37.0625rem"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-[#00000040]" />
          <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFFFF]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M7 5L15 10L7 15V5Z" fill="#00A3BE" />
            </svg>
          </span>
        </div>
      </FadeInSection>
    </section>
  );
}
