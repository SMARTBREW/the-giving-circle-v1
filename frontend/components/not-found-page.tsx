"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SEGOE_UI_CLASS } from "@/constants";

interface CauseButtonProps {
  title: string;
  href: string;
  delay: number;
}

function CauseButton({ title, href, delay }: CauseButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`${SEGOE_UI_CLASS} group relative inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-[var(--Circle-Green,#02938c)] transition-colors duration-200 hover:text-[var(--Giving-Teal,#0ba5bb)]`}
      >
        <span className="relative z-10">{title}</span>
        <motion.span
          className="text-[var(--Giving-Teal,#0ba5bb)]"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          ›
        </motion.span>
        <motion.div
          className="absolute inset-0 rounded-lg bg-[var(--Green-Tint,#e8f5f3)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          layoutId="button-bg"
        />
      </Link>
    </motion.div>
  );
}

function SleepingCat() {
  return (
    <motion.div
      className="relative mx-4 h-20 w-20"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-[var(--Teal-Tint,#e8f7f8)]"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="48"
          height="36"
          viewBox="0 0 48 36"
          className="text-[var(--Body-Grey,#4a5558)]"
          aria-hidden="true"
        >
          <ellipse cx="24" cy="26" rx="16" ry="8" fill="currentColor" opacity="0.8" />
          <circle cx="24" cy="16" r="10" fill="currentColor" opacity="0.8" />
          <path d="M16 8 L14 2 L20 6 Z" fill="currentColor" opacity="0.8" />
          <path d="M28 6 L32 8 L34 2 Z" fill="currentColor" opacity="0.8" />
          <path
            d="M20 14 Q20 16 20 14"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M28 14 Q28 16 28 14"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="24" cy="18" r="1.5" fill="currentColor" opacity="0.7" />
          <path
            d="M24 20 Q21 22 19 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M24 20 Q27 22 29 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="16"
            x2="19"
            y2="17"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="14"
            y1="18"
            x2="19"
            y2="18"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="34"
            y1="16"
            x2="29"
            y2="17"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="34"
            y1="18"
            x2="29"
            y2="18"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <path
            d="M40 26 Q42 20 38 18 Q36 20 38 22"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -top-2 -right-2 text-sm font-bold text-[var(--Body-Grey,#4a5558)]"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: [0, 1, 0], y: [5, -5, -10] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        z
      </motion.div>
      <motion.div
        className="absolute -top-4 right-0 text-xs font-bold text-[var(--Body-Grey,#4a5558)]"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: [0, 1, 0], y: [5, -5, -10] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        z
      </motion.div>
      <motion.div
        className="absolute top-[-1.5rem] right-2 text-xs font-bold text-[var(--Body-Grey,#4a5558)]"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: [0, 1, 0], y: [5, -5, -10] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      >
        z
      </motion.div>
    </motion.div>
  );
}

const CAUSE_LINKS = [
  { title: "Medical Cause", href: "/causes/wings-of-hope" },
  { title: "Education Cause", href: "/causes/pehli-class" },
  { title: "Cancer Funding", href: "/causes" },
  { title: "Social Impact Plan", href: "/become-a-cause-champion" },
] as const;

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--Off-White,#f7f9f9)] to-[var(--Green-Tint,#e8f5f3)] px-4 sm:min-h-[calc(100dvh-6.25rem)] md:min-h-[calc(100dvh-6.75rem)] lg:min-h-[calc(100dvh-7rem)] min-[90rem]:min-h-[calc(100dvh-8.75rem)]">
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          className="mb-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.span
            className="select-none text-9xl font-bold text-[#b7e0dc] md:text-[12rem]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            4
          </motion.span>

          <SleepingCat />

          <motion.span
            className="select-none text-9xl font-bold text-[#b7e0dc] md:text-[12rem]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            4
          </motion.span>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className={`${SEGOE_UI_CLASS} mb-2 text-lg text-[var(--Body-Grey,#4a5558)] md:text-xl`}
            whileHover={{ scale: 1.02 }}
          >
            This page does not exist.
          </motion.p>
          <motion.h1
            className="mb-4 font-['Georgia'] text-2xl font-bold text-[var(--Dark-Charcoal,#1c2426)] md:text-3xl"
            whileHover={{ scale: 1.02 }}
          >
            But your heart is in the right place!
          </motion.h1>
          <motion.p
            className={`${SEGOE_UI_CLASS} mx-auto max-w-md text-sm text-[var(--Body-Grey,#4a5558)] md:text-base`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Tap below to find out how your social giving can transform
            someone&apos;s life through our community support platform.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {CAUSE_LINKS.map((item, index) => (
            <CauseButton
              key={item.title}
              title={item.title}
              href={item.href}
              delay={1.4 + index * 0.2}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute top-20 left-20 h-2 w-2 rounded-full bg-[var(--Giving-Teal,#0ba5bb)] opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-32 h-1 w-1 rounded-full bg-[var(--Circle-Green,#02938c)] opacity-20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-16 h-2 w-2 rounded-full bg-[var(--Teal-Tint,#e8f7f8)] opacity-25"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.1, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
}
