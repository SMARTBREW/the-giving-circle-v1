"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PARTNER_LOGO_SETS } from "@/constants";

const INTERVAL_MS = 5600;

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

  const logos = PARTNER_LOGO_SETS[index];

  return (
    <div
      className="relative h-[5.8125rem] w-full overflow-hidden md:w-[77.5rem]"
      aria-roledescription="carousel"
      aria-label="Partner NGOs and campaigns"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.ul
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-between bg-[#FFFFFF] pt-[3px]"
        >
          {logos.map((logo) => (
            <li
              key={`${index}-${logo.alt}`}
              className="flex h-[5.5rem] min-w-0 flex-1 items-center justify-center overflow-hidden"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={283}
                height={88}
                className={`h-[5.5rem] w-auto max-w-none object-contain ${logo.imageClassName}`}
              />
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
