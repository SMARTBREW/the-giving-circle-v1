"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { getCauseCardAccent } from "./cause-card-accents";

const cardMotion = {
  rest: { y: 0 },
  hover: { y: -10 },
};

const ringMotion = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

export default function CauseMotionCard({
  children,
  className = "",
  accentIndex = 0,
  showBar = true,
}: {
  children: ReactNode;
  className?: string;
  accentIndex?: number;
  showBar?: boolean;
}) {
  const [hoverMotion, setHoverMotion] = useState(false);
  const accent = getCauseCardAccent(accentIndex);

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
      className="group/cause-card relative h-full w-full"
    >
      <motion.div
        variants={cardMotion}
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 24,
          mass: 0.85,
        }}
        className={`relative flex h-full w-full flex-col overflow-hidden rounded-[1rem] border border-[#BDBDBD] bg-[#FFFFFF] shadow-[0px_4px_20px_0px_#0000000F] transition-[border-color] duration-300 ${className}`}
      >
        {showBar ? (
          <span
            aria-hidden
            className={`absolute top-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/cause-card:scale-x-100 ${accent.bar}`}
          />
        ) : null}

        {hoverMotion ? (
          <motion.span
            aria-hidden
            variants={ringMotion}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`pointer-events-none absolute inset-0 z-20 rounded-[1rem] border-2 ${accent.ring}`}
          />
        ) : null}

        {children}
      </motion.div>
    </motion.div>
  );
}
