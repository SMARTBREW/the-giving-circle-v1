"use client";

import { motion } from "framer-motion";
import CtaButton from "@/components/cta-button";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS } from "@/constants";

export default function CauseFundingCard({
  raised,
  goal,
  percent,
  supporters,
  daysLeft,
}: {
  raised: string;
  goal: string;
  percent: number;
  supporters: string;
  daysLeft: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1rem] border border-[#d9e1e2] bg-[#FFFFFF] p-5 sm:rounded-[1.25rem] sm:p-6 min-[90rem]:p-8"
    >
      <div>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[var(--Main-CTA-button,#02938c)]/10 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[var(--Brand-Green-Teal,#02938c)]/10 blur-2xl"
        />

        <p
          className={`${SEGOE_UI_CLASS} relative text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[var(--Eyebrow-label,#02938c)]`}
        >
          Champion This Cause
        </p>

        <div className="relative mt-4 flex items-end justify-between gap-3 min-[90rem]:mt-5">
          <div>
            <p
              className={`${SEGOE_UI_CLASS} text-[1.75rem] font-[700] leading-none text-[var(--Main-headings,#1c2426)] sm:text-[2rem]`}
            >
              {raised}
            </p>
            <p
              className={`${SEGOE_UI_CLASS} mt-2 text-[0.875rem] font-[400] text-[var(--Paragraph,#4a5558)]`}
            >
              raised of {goal}
            </p>
          </div>
          <p
            className={`${SEGOE_UI_CLASS} text-[1.25rem] font-[700] text-[var(--Main-CTA-button,#02938c)] sm:text-[1.375rem]`}
          >
            {percent}%
          </p>
        </div>

        <div
          className="relative mt-3.5 h-2.5 w-full overflow-hidden rounded-2xl bg-[#EEF2F2] min-[90rem]:mt-4"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${percent}% funded`}
        >
          <motion.div
            className="h-full rounded-2xl bg-[var(--Main-CTA-button,#02938c)]"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          />
        </div>

        <dl className="relative mt-4 grid grid-cols-2 gap-3 border-t border-[#D9E1E2] pt-4 min-[90rem]:mt-5 min-[90rem]:pt-5">
          <div>
            <dt
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] text-[var(--Paragraph,#4a5558)]`}
            >
              Supporters
            </dt>
            <dd
              className={`${SEGOE_UI_CLASS} mt-1 text-[0.9375rem] font-[700] text-[var(--Main-headings,#1c2426)]`}
            >
              {supporters}
            </dd>
          </div>
          <div>
            <dt
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] text-[var(--Paragraph,#4a5558)]`}
            >
              Time left
            </dt>
            <dd
              className={`${SEGOE_UI_CLASS} mt-1 text-[0.9375rem] font-[700] text-[var(--Main-headings,#1c2426)]`}
            >
              {daysLeft}
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative mt-5 flex flex-col gap-2.5 sm:gap-3 min-[90rem]:mt-6">
        <CtaButton
          href="/champion/apply"
          className="h-12 w-full gap-2 px-6 sm:h-14"
          labelClassName="font-[700]"
        >
          Champion This Cause
          <CtaArrow />
        </CtaButton>
        <CtaButton
          href="/causes"
          variant="outline"
          className="h-12 w-full bg-[#FFFFFF] px-6 sm:h-14"
          labelClassName="font-[700]"
        >
          Browse Other Causes
        </CtaButton>

        <p
          className={`${SEGOE_UI_CLASS} relative mt-2 text-center text-[0.8125rem] font-[400] text-[var(--Paragraph,#4a5558)] min-[90rem]:mt-3`}
        >
          Contributions go directly to the verified NGO partner.
        </p>
      </div>
    </motion.div>
  );
}
