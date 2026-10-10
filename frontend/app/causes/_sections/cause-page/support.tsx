"use client";

import { useState } from "react";
import {
  Droplet,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import PageSection from "@/components/page-section";
import type {
  CausePageSupportContent,
  CausePageSupportIcon,
} from "@/constants/cause-page";
import { CAUSE_SECTION, SEGOE_UI_CLASS } from "@/constants";

function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function BenefitIcon({ icon }: { icon: CausePageSupportIcon }) {
  const className = "h-5 w-5 shrink-0 text-[var(--Circle-Green,#02938c)] sm:h-6 sm:w-6";
  if (icon === "pads") return <Droplet className={className} strokeWidth={1.75} aria-hidden />;
  if (icon === "care")
    return <MessageCircle className={className} strokeWidth={1.75} aria-hidden />;
  if (icon === "sprout")
    return <Sprout className={className} strokeWidth={1.75} aria-hidden />;
  if (icon === "shield")
    return <ShieldCheck className={className} strokeWidth={1.75} aria-hidden />;
  return <GraduationCap className={className} strokeWidth={1.75} aria-hidden />;
}

export default function CausePageSupport({
  content,
}: {
  content: CausePageSupportContent;
}) {
  const { eyebrow, impactSuffix, amounts, donateHref, benefits, footer } =
    content;
  const [selected, setSelected] = useState<number | "other">(0);
  const [customAmount, setCustomAmount] = useState("");

  const parsedCustom = Number.parseInt(customAmount.replace(/\D/g, ""), 10);
  const customValid = Number.isFinite(parsedCustom) && parsedCustom > 0;
  const activeAmount =
    selected === "other"
      ? customValid
        ? parsedCustom
        : 0
      : amounts[selected].amount;

  const amountLabel =
    selected === "other" && !customValid
      ? "Your amount"
      : formatInr(activeAmount);

  const donateDisabled = selected === "other" && !customValid;

  return (
    <PageSection
      id="support"
      tone="white"
      className="scroll-mt-28"
      innerClassName={CAUSE_SECTION.pad}
    >
      <div className="w-full rounded-[1.25rem] border border-[#d9e1e2] bg-[#FFFFFF] p-5 shadow-[0px_4px_20px_0px_#0000000F] sm:rounded-[1.5rem] sm:p-6 md:p-8 lg:p-10">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="min-w-0 flex flex-col">
            <p className={`${SEGOE_UI_CLASS} ${CAUSE_SECTION.eyebrow}`}>
              {eyebrow}
            </p>

            <p className={`${SEGOE_UI_CLASS} mt-3 text-[2.5rem] font-[700] leading-none tracking-normal text-[var(--Circle-Green,#02938c)] sm:mt-4 sm:text-[3rem] lg:text-[3.5rem]`}>
              {amountLabel}
            </p>

            <p
              className={`${SEGOE_UI_CLASS} mt-2.5 text-[0.9375rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-3 sm:text-[1rem] sm:leading-7`}
            >
              {impactSuffix}
            </p>

            <div
              role="radiogroup"
              aria-label="Choose a support amount"
              className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-4 sm:gap-3"
            >
              {amounts.map((option, index) => {
                const isActive = selected === index;
                return (
                  <button
                    key={option.amount}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setSelected(index)}
                    className={`flex flex-col items-start rounded-[0.75rem] border px-3 py-3 text-left transition-colors sm:rounded-[0.875rem] sm:px-3.5 sm:py-3.5 ${
                      isActive
                        ? "border-[var(--Circle-Green,#02938c)] bg-[rgba(2,147,140,0.08)]"
                        : "border-[#d9e1e2] bg-[#FFFFFF] hover:border-[var(--Circle-Green,#02938c)]"
                    }`}
                  >
                    <span
                      className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] leading-5 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1rem]`}
                    >
                      {formatInr(option.amount)}
                    </span>
                    <span
                      className={`${SEGOE_UI_CLASS} mt-1 text-[0.75rem] font-[400] leading-4 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem]`}
                    >
                      {option.label}
                    </span>
                  </button>
                );
              })}
              <button
                type="button"
                role="radio"
                aria-checked={selected === "other"}
                onClick={() => setSelected("other")}
                className={`flex flex-col items-start rounded-[0.75rem] border px-3 py-3 text-left transition-colors sm:rounded-[0.875rem] sm:px-3.5 sm:py-3.5 ${
                  selected === "other"
                    ? "border-[var(--Circle-Green,#02938c)] bg-[rgba(2,147,140,0.08)]"
                    : "border-[#d9e1e2] bg-[#FFFFFF] hover:border-[var(--Circle-Green,#02938c)]"
                }`}
              >
                <span
                  className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] leading-5 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1rem]`}
                >
                  Other
                </span>
                <span
                  className={`${SEGOE_UI_CLASS} mt-1 text-[0.75rem] font-[400] leading-4 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem]`}
                >
                  Enter amount
                </span>
              </button>
            </div>

            {selected === "other" ? (
              <label
                className={`${SEGOE_UI_CLASS} mt-3 flex h-12 items-center gap-2 rounded-full border border-[#d9e1e2] bg-[#FFFFFF] px-4 sm:mt-4 sm:h-14 sm:px-5 ${
                  selected === "other" && customAmount && !customValid
                    ? "border-[var(--Giving-Red,#e62b4f)]"
                    : ""
                }`}
              >
                <span className="shrink-0 text-[1rem] font-[600] text-[var(--Subheading,#4a5558)] sm:text-[1.0625rem]">
                  ₹
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(event) =>
                    setCustomAmount(event.target.value.replace(/[^\d]/g, ""))
                  }
                  className="min-w-0 flex-1 bg-transparent text-[1rem] font-[600] leading-none text-[var(--Main-headings,#1c2426)] outline-none placeholder:font-[400] placeholder:text-[var(--Subheading,#4a5558)] sm:text-[1.0625rem]"
                />
              </label>
            ) : null}

            <a
              href={donateHref}
              aria-disabled={donateDisabled}
              {...(donateHref.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`${SEGOE_UI_CLASS} mt-5 inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-[0.9375rem] font-[700] leading-none tracking-normal text-[#FFFFFF] transition-opacity sm:mt-6 sm:h-14 sm:text-[1rem] ${
                donateDisabled
                  ? "pointer-events-none bg-[#d9e1e2] text-[var(--Subheading,#4a5558)]"
                  : "bg-[var(--Circle-Green,#02938c)] hover:opacity-90"
              }`}
              onClick={(event) => {
                if (donateDisabled) event.preventDefault();
              }}
            >
              {donateDisabled ? "Enter an amount to donate" : "Donate"}
            </a>
          </div>

          <div className="flex min-w-0 flex-col justify-between gap-6">
            <ul className="flex flex-col gap-5 sm:gap-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-3 sm:gap-3.5">
                  <BenefitIcon icon={benefit.icon} />
                  <div className="min-w-0">
                    <p
                      className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] leading-5 tracking-normal text-[var(--Main-headings,#1c2426)] sm:text-[1rem] sm:leading-6`}
                    >
                      {benefit.title}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-1 text-[0.8125rem] font-[400] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.875rem] sm:leading-6`}
                    >
                      {benefit.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p
              className={`${SEGOE_UI_CLASS} text-[0.75rem] font-[400] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.8125rem] sm:leading-5`}
            >
              {footer}
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
