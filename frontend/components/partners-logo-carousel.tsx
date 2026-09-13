"use client";

import Image from "next/image";
import { PARTNER_LOGO_SETS } from "@/constants";

// The 2 frames of partner logos as defined in constants
const FRAME_1 = PARTNER_LOGO_SETS[0];
const FRAME_2 = PARTNER_LOGO_SETS[1];
const ALL_LOGOS = [...FRAME_1, ...FRAME_2];
// Repeat for ultra-wide display continuity
const TRACK_LOGOS = [...ALL_LOGOS, ...ALL_LOGOS];

export default function PartnersLogoCarousel() {
  return (
    <div
      className="group relative mx-auto flex w-full items-center overflow-hidden bg-[#FFFFFF] py-4 sm:py-6"
      aria-roledescription="marquee"
      aria-label="Partner NGOs and campaigns"
    >
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FFFFFF] to-transparent sm:w-20 md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FFFFFF] to-transparent sm:w-20 md:w-28" />

      <div className="flex w-max">
        {/* Track 1 */}
        <ul className="flex shrink-0 animate-marquee items-center justify-around gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16 lg:gap-20 lg:pr-20">
          {TRACK_LOGOS.map((logo, index) => (
            <li
              key={`track-1-${index}-${logo.src}`}
              className="flex h-14 w-32 shrink-0 items-center justify-center sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-56"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={280}
                height={100}
                loading="eager"
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            </li>
          ))}
        </ul>

        {/* Track 2 (Duplicate for seamless continuous loop) */}
        <ul
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center justify-around gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16 lg:gap-20 lg:pr-20"
        >
          {TRACK_LOGOS.map((logo, index) => (
            <li
              key={`track-2-${index}-${logo.src}`}
              className="flex h-14 w-32 shrink-0 items-center justify-center sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-56"
            >
              <Image
                src={logo.src}
                alt=""
                width={280}
                height={100}
                loading="eager"
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
