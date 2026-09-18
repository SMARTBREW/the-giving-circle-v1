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
      whileHover={hoverMotion ? "hover" : undefined}
      className="group/moment relative h-full w-full"
    >
      <motion.article
        variants={cardMotion}
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 24,
          mass: 0.85,
        }}
        className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] px-5 pt-8 pb-7 shadow-[0px_4px_20px_0px_#0000000F] transition-colors duration-300 group-hover/moment:border-[var(--Main-CTA-button,#02938c)] sm:px-6 sm:pt-9 sm:pb-8 md:px-8 md:pt-10 md:pb-10 min-[56.25rem]:px-5 min-[56.25rem]:pt-8 min-[56.25rem]:pb-7 lg:px-6 lg:pt-9 lg:pb-8 min-[90rem]:h-[27.5rem] min-[90rem]:px-6 min-[90rem]:pt-8 min-[90rem]:pb-8"
      >
        {hoverMotion ? (
          <motion.span
            aria-hidden
            variants={ringMotion}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-none absolute -inset-[1px] z-20 rounded-[1rem] border border-[var(--Main-CTA-button,#02938c)]"
          />
        ) : null}
        <span className="relative z-10 mx-auto flex h-24 w-24 shrink-0 items-center justify-center overflow-visible sm:h-28 sm:w-28 min-[56.25rem]:h-24 min-[56.25rem]:w-24 lg:h-[6.5rem] lg:w-[6.5rem] min-[90rem]:h-[8rem] min-[90rem]:w-[8rem]">
          <Image
            src={iconSrc}
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-contain object-center"
          />
        </span>
        <h3
          className={`${SEGOE_UI_CLASS} relative z-10 mt-4 text-center text-[1.375rem] leading-none font-[700] tracking-normal text-[var(--Dark-Charcoal,#1c2426)] sm:mt-5 sm:text-[1.5rem] min-[56.25rem]:mt-4 min-[56.25rem]:text-[1.25rem] lg:mt-4 lg:text-[1.375rem] min-[90rem]:mt-5 min-[90rem]:text-[1.75rem]`}
        >
          {title}
        </h3>
        <p
          className={`${SEGOE_UI_CLASS} relative z-10 mt-4 w-full text-center text-[0.9375rem] leading-6 font-[400] tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-5 sm:text-[1rem] sm:leading-7 min-[56.25rem]:mt-4 min-[56.25rem]:flex-1 min-[56.25rem]:text-[0.875rem] min-[56.25rem]:leading-5 lg:mt-4 lg:text-[0.9375rem] lg:leading-6 min-[90rem]:mt-5 min-[90rem]:h-[6rem] min-[90rem]:max-w-[20.75rem] min-[90rem]:flex-none min-[90rem]:text-[1.125rem] min-[90rem]:leading-[2rem]`}
        >
          {body}
        </p>
        <div className="relative z-10 mt-6 w-full min-w-0 sm:mt-7 min-[56.25rem]:mt-auto min-[56.25rem]:pt-5 lg:pt-5 min-[90rem]:mt-auto min-[90rem]:pt-6">
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className="h-12 w-full max-w-full bg-[#FFFFFF] px-3 py-3 text-[0.75rem] sm:h-14 sm:px-4 sm:text-[0.8125rem] min-[56.25rem]:h-11 min-[56.25rem]:px-2 min-[56.25rem]:text-[0.6875rem] lg:h-12 lg:px-2.5 lg:text-[0.75rem] min-[90rem]:h-[4rem] min-[90rem]:px-6 min-[90rem]:py-5 min-[90rem]:text-[1rem]"
            labelClassName="max-w-full"
          >
            {ctaLabel}
            <CtaArrow className="shrink-0" />
          </CtaButton>
        </div>
      </motion.article>
    </motion.div>
  );
}
