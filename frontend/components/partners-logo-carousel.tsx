"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { PARTNER_LOGO_SETS } from "@/constants";

const INTERVAL_MS = 2000;

type PartnerLogo = (typeof PARTNER_LOGO_SETS)[number][number];

const PLAYLIST: PartnerLogo[] = PARTNER_LOGO_SETS.flat();
const UNIQUE_COUNT = new Set(PLAYLIST.map((logo) => logo.src)).size;

function mixedRounds(size: number) {
  const roundCount = Math.max(2, Math.ceil(UNIQUE_COUNT / size));
  return Array.from({ length: roundCount }, (_, round) =>
    Array.from(
      { length: size },
      (__, slot) => PLAYLIST[(round * size + slot) % PLAYLIST.length],
    ),
  );
}

export default function PartnersLogoCarousel() {
  const [index, setIndex] = useState(0);
  const [perRound, setPerRound] = useState(2);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sync = () => {
      if (window.matchMedia("(min-width: 1440px)").matches) {
        setPerRound(5);
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        setPerRound(4);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setPerRound(3);
      } else {
        setPerRound(2);
      }
    };

    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const rounds = useMemo(() => mixedRounds(perRound), [perRound]);

  useEffect(() => {
    setIndex(0);
  }, [perRound]);

  useEffect(() => {
    if (prefersReducedMotion || rounds.length === 0) return undefined;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % rounds.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion, rounds.length]);

  return (
    <div
      className="relative mx-auto h-36 w-full overflow-hidden bg-[#FFFFFF] sm:h-40 md:h-44 lg:h-48"
      aria-roledescription="carousel"
      aria-label="Partner NGOs and campaigns"
    >
      {rounds.map((logos, roundIndex) => {
        const isActive = roundIndex === index;

        return (
          <ul
            key={`${perRound}-${roundIndex}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 flex items-stretch justify-between gap-3 transition-opacity duration-700 ease-in-out motion-reduce:duration-0 sm:gap-4 md:gap-5 lg:gap-6 ${
              isActive ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            {logos.map((logo, slot) => (
              <li
                key={`${roundIndex}-${slot}-${logo.src}`}
                className="flex min-w-0 flex-1 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={isActive ? logo.alt : ""}
                  width={400}
                  height={200}
                  loading="eager"
                  className="h-full w-full object-contain"
                />
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
