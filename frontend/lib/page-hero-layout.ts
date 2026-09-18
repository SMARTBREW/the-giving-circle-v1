/** Bleed under the fixed floating header — keep in sync with app-shell HEADER_OFFSET. */
export const PAGE_HERO_BLEED =
  "-mt-[5.5rem] pt-[5.5rem] sm:-mt-[6.25rem] sm:pt-[6.25rem] md:-mt-[6.75rem] md:pt-[6.75rem] lg:-mt-[7rem] lg:pt-[7rem] min-[90rem]:-mt-[8.75rem] min-[90rem]:pt-[8.75rem]";

/** 1440 Figma column height, capped so short 1080p laptops don’t clip. */
export const PAGE_HERO_COL_H =
  "min-[90rem]:h-[min(38.5rem,calc(100dvh-12rem))]";
