"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { PARTNER_LOGO_SETS } from "@/constants";

const INTERVAL_MS = 2000;

export default function PartnersLogoCarousel() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PARTNER_LOGO_SETS.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative h-[5.8125rem] w-full overflow-hidden bg-[#FFFFFF] md:w-[77.5rem]"
      aria-roledescription="carousel"
      aria-label="Partner NGOs and campaigns"
    >
      {PARTNER_LOGO_SETS.map((logos, setIndex) => {
        const isActive = setIndex === index;

        return (
          <ul
            key={setIndex}
            aria-hidden={!isActive}
            className={`absolute inset-0 flex items-center justify-between pt-[3px] transition-opacity duration-700 ease-in-out motion-reduce:duration-0 ${
              isActive ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            {logos.map((logo) => (
              <li
                key={logo.alt}
                className="flex h-[5.5rem] min-w-0 flex-1 items-center justify-center overflow-hidden"
              >
                <Image
                  src={logo.src}
                  alt={isActive ? logo.alt : ""}
                  width={283}
                  height={88}
                  loading="eager"
                  className={`h-[5.5rem] w-auto max-w-none object-contain ${logo.imageClassName}`}
                />
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
