"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS } from "@/constants";

const cardMotion = {
  rest: { y: 0 },
  hover: { y: -12 },
};

const ringMotion = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

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
  const [hoverMotion, setHoverMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const sync = () => setHoverMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover={hoverMotion ? "hover" : undefined}
      className="group/moment relative h-full w-full"
    >
      <motion.article
        variants={hoverMotion ? cardMotion : undefined}
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 24,
          mass: 0.85,
        }}
        className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] px-5 pt-5 pb-5 shadow-[0px_4px_20px_0px_#0000000F] sm:px-6 sm:pt-6 sm:pb-6 md:px-8 md:pt-8 md:pb-8 lg:px-4 lg:pt-6 lg:pb-6 lg:transition-colors lg:duration-300 lg:group-hover/moment:border-[var(--Main-CTA-button,#00A3BE)] min-[90rem]:h-[24.8125rem] min-[90rem]:px-8 min-[90rem]:pt-[0.888125rem] min-[90rem]:pb-0"
      >
        {hoverMotion ? (
          <motion.span
            aria-hidden
            variants={ringMotion}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[1rem] border-2 border-[var(--Main-CTA-button,#00A3BE)]"
          />
        ) : null}
        <span className="relative z-10 h-20 w-20 shrink-0 bg-[#FFFFFF] sm:h-24 sm:w-24 lg:h-28 lg:w-28 min-[90rem]:h-[7.044rem] min-[90rem]:w-[7.044rem]">
          <Image
            src={iconSrc}
            alt=""
            width={113}
            height={113}
            className="h-full w-full object-contain"
          />
        </span>
        <h3
          className={`${SEGOE_UI_CLASS} relative z-10 mt-3 text-center text-[1.375rem] leading-none font-[700] tracking-normal text-[#000000] sm:mt-4 sm:text-[1.5rem] lg:mt-4 lg:text-[1.625rem] min-[90rem]:text-[1.75rem]`}
        >
          {title}
        </h3>
        <p
          className={`${SEGOE_UI_CLASS} relative z-10 mt-3 w-full text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#45564B)] sm:mt-4 sm:text-[1rem] sm:leading-7 lg:mt-4 lg:text-[1.0625rem] lg:leading-7 min-[90rem]:mt-5 min-[90rem]:h-[6rem] min-[90rem]:max-w-[20.75rem] min-[90rem]:text-[1.125rem] min-[90rem]:leading-[2rem]`}
        >
          {body}
        </p>
        <div className="relative z-10 mt-5 w-full min-w-0 sm:mt-6 lg:mt-auto lg:pt-4 min-[90rem]:mb-8 min-[90rem]:mt-auto min-[90rem]:w-[20.75rem] min-[90rem]:pt-0">
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className="h-12 w-full min-w-0 gap-2 bg-[#FFFFFF] px-3 py-3 text-[0.875rem] sm:h-14 sm:px-4 sm:text-[0.9375rem] lg:h-12 lg:px-3 min-[90rem]:h-[4rem] min-[90rem]:gap-2.5 min-[90rem]:px-6 min-[90rem]:py-5 min-[90rem]:text-[1.125rem]"
            labelClassName="font-[600] !whitespace-normal"
          >
            {ctaLabel}
            <CtaArrow className="min-[90rem]:h-5 min-[90rem]:w-5" />
          </CtaButton>
        </div>
      </motion.article>
    </motion.div>
  );
}
