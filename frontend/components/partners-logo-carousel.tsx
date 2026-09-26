"use client";

import CldImage from "@/components/cld-image";
import { PARTNER_LOGOS } from "@/constants";

/**
 * One sequence, duplicated once. Animates by -50% for a seamless loop.
 * Same gap between every pair — including last → first at the loop seam.
 */
const TRACK_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export default function PartnersLogoCarousel() {
  return (
    <div
      className="group relative mx-auto w-full overflow-hidden bg-[#FFFFFF] py-4 sm:py-6"
      aria-roledescription="marquee"
      aria-label="Partner NGOs and campaigns"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FFFFFF] to-transparent sm:w-20 md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FFFFFF] to-transparent sm:w-20 md:w-28" />

      <ul className="flex w-max animate-marquee items-center gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        {TRACK_LOGOS.map((logo, index) => (
          <li
            key={`${index}-${logo.src}`}
            className="flex h-16 shrink-0 items-center justify-center sm:h-20 md:h-24 lg:h-28"
            aria-hidden={index >= PARTNER_LOGOS.length ? true : undefined}
          >
            <CldImage
              src={logo.src}
              alt={index >= PARTNER_LOGOS.length ? "" : logo.alt}
              width={220}
              height={112}
              sizes="14rem"
              loading="lazy"
              className="h-full w-auto max-w-[9rem] object-contain sm:max-w-[11rem] md:max-w-[13rem] lg:max-w-[15rem]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
