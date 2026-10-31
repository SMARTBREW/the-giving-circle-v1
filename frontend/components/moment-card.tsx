import CldImage from "@/components/cld-image";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS } from "@/constants";

const articleClass =
  "tgc-card relative flex h-full w-full flex-col items-center overflow-hidden px-5 pt-8 pb-7 transition-colors duration-300 group-hover/moment:border-circle sm:px-6 sm:pt-9 sm:pb-8 md:px-8 md:pt-10 md:pb-10 min-[70rem]:px-5 min-[70rem]:pt-9 min-[70rem]:pb-8 min-[90rem]:h-[27.5rem] min-[90rem]:px-6 min-[90rem]:pt-8 min-[90rem]:pb-8";

const iconClass =
  "relative z-10 mx-auto flex h-24 w-24 shrink-0 items-center justify-center overflow-visible sm:h-28 sm:w-28 min-[70rem]:h-[6.5rem] min-[70rem]:w-[6.5rem] min-[90rem]:h-[8rem] min-[90rem]:w-[8rem]";

const titleClass = `${SEGOE_UI_CLASS} relative z-10 mt-4 text-center text-[1.375rem] leading-none font-bold tracking-normal text-heading sm:mt-5 sm:text-[1.5rem] min-[70rem]:mt-4 min-[70rem]:text-[1.375rem] min-[90rem]:mt-5 min-[90rem]:text-[1.75rem]`;

const bodyClass = `${SEGOE_UI_CLASS} relative z-10 mt-4 w-full whitespace-pre-line text-center text-[0.9375rem] leading-6 font-normal tracking-normal text-subhead sm:mt-5 sm:text-[1rem] sm:leading-7 min-[70rem]:mt-4 min-[70rem]:flex-1 min-[70rem]:text-[0.9375rem] min-[70rem]:leading-6 min-[90rem]:mt-5 min-[90rem]:h-[6rem] min-[90rem]:max-w-[20.75rem] min-[90rem]:flex-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-[2rem]`;

const ctaWrapClass =
  "relative z-10 mt-6 w-full min-w-0 sm:mt-7 min-[70rem]:mt-auto min-[70rem]:pt-5 min-[90rem]:mt-auto min-[90rem]:pt-6";

const ctaClass =
  "h-12 w-full max-w-full shrink-0 bg-white px-2.5 py-3 text-[0.8125rem] sm:h-14 sm:px-4 sm:text-[1rem] min-[70rem]:h-14 min-[70rem]:px-3 min-[70rem]:text-[1rem] min-[90rem]:h-[4rem] min-[90rem]:px-6 min-[90rem]:py-5 min-[90rem]:text-[1.125rem]";

export default function MomentCard({
  iconSrc,
  title,
  body,
  ctaLabel,
  href,
}: {
  iconSrc: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div className="group/moment relative h-full w-full">
      <article
        className={`${articleClass} transition-transform duration-300 ease-out lg:group-hover/moment:-translate-y-3`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px z-20 rounded-[1rem] border border-circle opacity-0 transition-opacity duration-300 lg:group-hover/moment:opacity-100"
        />
        <span className={iconClass}>
          <CldImage
            src={iconSrc}
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-contain object-center"
          />
        </span>
        <h3 className={titleClass}>{title}</h3>
        <p className={bodyClass}>{body}</p>
        <div className={ctaWrapClass}>
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className={ctaClass}
            labelClassName="max-w-full shrink-0 !whitespace-nowrap"
          >
            {ctaLabel}
            <CtaArrow className="shrink-0" />
          </CtaButton>
        </div>
      </article>
    </div>
  );
}
