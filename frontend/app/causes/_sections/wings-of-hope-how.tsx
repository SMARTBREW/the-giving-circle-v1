import CldImage from "@/components/cld-image";
import PageSection from "@/components/page-section";
import { SEGOE_UI_CLASS, WINGS_OF_HOPE_HOW, WINGS_SECTION } from "@/constants";

function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[repeating-linear-gradient(-45deg,#e8f4f8,#e8f4f8_8px,#eef2f2_8px,#eef2f2_16px)]">
      <span
        className={`${SEGOE_UI_CLASS} absolute inset-0 flex items-center justify-center px-3 text-center text-[0.75rem] font-[600] leading-5 text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem]`}
      >
        {label}
      </span>
    </div>
  );
}

export default function WingsOfHopeHow() {
  const { eyebrow, title, body, cards } = WINGS_OF_HOPE_HOW;

  return (
    <PageSection tone="white" innerClassName={WINGS_SECTION.pad}>
      <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.eyebrow}`}>{eyebrow}</p>
      <h2 className={WINGS_SECTION.title}>{title}</h2>
      <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.body}`}>{body}</p>

      <ul className="mt-6 grid w-full grid-cols-1 gap-4 sm:mt-8 sm:gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
        {cards.map((card) => (
          <li
            key={card.title}
            className="flex min-h-0 flex-col overflow-hidden rounded-[0.875rem] border border-[#d9e1e2] bg-[#FFFFFF] shadow-[0px_4px_20px_0px_#0000000F] sm:rounded-[1rem]"
          >
            {card.src ? (
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <CldImage
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 28rem"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <PhotoSlot label={card.photoLabel} />
            )}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3
                className={`${SEGOE_UI_CLASS} text-[1.0625rem] font-[700] leading-6 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1.125rem] sm:leading-7`}
              >
                {card.title}
              </h3>
              <p
                className={`${SEGOE_UI_CLASS} mt-1.5 text-[0.875rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-2 sm:text-[0.9375rem] sm:leading-6`}
              >
                {card.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
