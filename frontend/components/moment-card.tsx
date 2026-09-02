"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CtaButton from "@/components/cta-button";
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
  titleClassName = "",
  body,
  ctaLabel,
  href,
}: {
  iconSrc: string;
  title: string;
  titleClassName?: string;
  body: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="group/moment relative"
    >
      <motion.article
        variants={cardMotion}
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 24,
          mass: 0.85,
        }}
        className="relative h-[24.8125rem] w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] shadow-[0px_4px_20px_0px_#0000000F] transition-colors duration-300 group-hover/moment:border-[var(--Main-CTA-button,#00A3BE)] md:w-[24.75rem]"
      >
        <motion.span
          aria-hidden
          variants={ringMotion}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 z-20 rounded-[1rem] border-2 border-[var(--Main-CTA-button,#00A3BE)]"
        />
        <span className="absolute top-[0.888125rem] left-[8.653125rem] z-10 h-[7.044rem] w-[7.044rem] bg-[#FFFFFF]">
          <Image
            src={iconSrc}
            alt=""
            width={113}
            height={113}
            className="h-[7.044rem] w-[7.044rem] object-contain"
          />
        </span>
        <h3
          className={`${SEGOE_UI_CLASS} absolute top-[8rem] left-1/2 h-[2.3125rem] -translate-x-1/2 text-center text-[1.75rem] leading-none font-[700] tracking-normal text-[#000000] ${titleClassName}`}
        >
          {title}
        </h3>
        <p
          className={`${SEGOE_UI_CLASS} absolute top-[10.8125rem] left-[2rem] h-[6rem] w-[20.75rem] text-center text-[1.125rem] leading-[2rem] font-[400] tracking-normal text-[var(--Subheading,#45564B)]`}
        >
          {body}
        </p>
        <div className="absolute top-[18.8125rem] left-[2rem]">
          <CtaButton
            href={href}
            variant="outline"
            hoverFill
            className="h-[4rem] w-[20.75rem] gap-2 bg-[#FFFFFF] px-6 py-5"
            labelClassName="!text-[1.02rem] gap-2 font-[600] tracking-normal"
          >
            <span className="inline-flex h-6 items-center justify-center leading-none">
              {ctaLabel}
            </span>
            <span className="leading-none" aria-hidden="true">
              →
            </span>
          </CtaButton>
        </div>
      </motion.article>
    </motion.div>
  );
}
