"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  type Value as PhoneValue,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  CHAMPION_APPLY,
  SEGOE_UI_CLASS,
  isChampionApplyPresetReason,
  type ChampionApplyCauseId,
  type ChampionApplyReasonId,
} from "@/constants";
import { submitCauseChampion } from "@/lib/api";
import { logger } from "@/lib/logger";

type FormStep = 1 | 2 | 3 | 4;

const optionButtonClass = (isSelected: boolean) =>
  `flex h-16 w-full items-center gap-4 rounded-2xl border-2 px-4 text-left outline-none transition-[border-color,background-color,box-shadow] sm:h-[4.25rem] sm:gap-5 sm:px-5 min-[90rem]:h-[4.75rem] min-[90rem]:gap-5 min-[90rem]:px-5 focus-visible:border-[var(--Main-CTA-button,#00A3BE)] focus-visible:shadow-[0_0_0_1px_var(--Main-CTA-button,#00A3BE)] ${
    isSelected
      ? "border-[var(--Main-CTA-button,#00A3BE)] bg-[var(--brand-selected,#EAF7F3)]"
      : "border-[#E4E7EC] bg-[#FFFFFF] hover:border-[#B8C0CC]"
  }`;

const primaryBtnClass = `${SEGOE_UI_CLASS} inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--Main-CTA-button,#00A3BE)] text-[1rem] leading-none font-[700] text-[#FFFFFF] transition-opacity disabled:cursor-not-allowed disabled:opacity-40 sm:h-[3.75rem] sm:w-[11.25rem] sm:rounded-lg sm:text-[1.125rem]`;

const outlineBtnClass = `${SEGOE_UI_CLASS} inline-flex h-12 w-full items-center justify-center rounded-xl border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] text-[1rem] leading-none font-[700] text-[var(--Main-CTA-button,#00A3BE)] sm:h-[3.75rem] sm:w-[11.25rem] sm:rounded-lg sm:border-2 sm:text-[1.125rem]`;

const fieldClass = `${SEGOE_UI_CLASS} champion-apply-field h-14 w-full rounded border border-[#BDBDBD] bg-[#F8F8F8] px-4 text-[1rem] text-[#212121] outline-none placeholder:text-[#98A2B3] focus:border-[#BDBDBD] focus:outline-none focus:ring-0 sm:h-16`;

const fieldLabelClass = `${SEGOE_UI_CLASS} text-[1.125rem] leading-none font-[400] text-[#212121] sm:text-[1.25rem]`;

const footerBarClass =
  "mt-auto flex w-full shrink-0 flex-col-reverse gap-3 border-t border-[#E4E7EC] px-5 pt-5 pb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-4 sm:px-0";

function StepCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OptionRadio({ selected }: { selected: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
        selected
          ? "border-[var(--Main-CTA-button,#00A3BE)]"
          : "border-[#D0D5DD]"
      }`}
    >
      {selected ? (
        <span className="h-3 w-3 rounded-full bg-[var(--Main-CTA-button,#00A3BE)]" />
      ) : null}
    </span>
  );
}

function OtherDetailField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative w-full rounded-2xl border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] px-4 pt-5 pb-4 sm:px-5 min-[90rem]:min-h-[4.75rem] min-[90rem]:px-5 min-[90rem]:pt-5 min-[90rem]:pb-4">
      <span
        className={`${SEGOE_UI_CLASS} absolute -top-2.5 left-4 bg-[#FFFFFF] px-1.5 text-[0.8125rem] leading-none font-[600] text-[var(--Main-CTA-button,#00A3BE)] sm:left-5 sm:text-[0.875rem]`}
      >
        {label}
      </span>
      <input
        type="text"
        maxLength={100}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus
        className={`${SEGOE_UI_CLASS} w-full border-0 bg-transparent text-[1.125rem] leading-7 font-[400] text-[#212121] outline-none placeholder:text-[#98A2B3] sm:text-[1.25rem] sm:leading-8 min-[90rem]:text-[1.375rem]`}
      />
    </div>
  );
}

export default function ChampionApplyForm() {
  const { title, subtitle, steps, step1, step2, step3, thanks } = CHAMPION_APPLY;
  const searchParams = useSearchParams();
  const reasonParam = searchParams.get("reason");
  const presetReason = isChampionApplyPresetReason(reasonParam)
    ? reasonParam
    : null;
  const skipReasonStep = presetReason !== null;
  const totalSteps = skipReasonStep ? 2 : 3;

  const visibleSteps = skipReasonStep
    ? [
        { ...steps[0], number: 1 },
        { ...steps[2], number: 2 },
      ]
    : steps;

  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [selectedCauseId, setSelectedCauseId] =
    useState<ChampionApplyCauseId | null>(null);
  const [selectedReasonId, setSelectedReasonId] =
    useState<ChampionApplyReasonId | null>(presetReason);
  const [otherCauseDetail, setOtherCauseDetail] = useState("");
  const [otherReasonDetail, setOtherReasonDetail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState<PhoneValue>();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(step3.cities[0] as string);
  const [agreed, setAgreed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const progressStep = (() => {
    if (currentStep === 4) return totalSteps;
    if (skipReasonStep) return currentStep === 1 ? 1 : 2;
    return currentStep;
  })();

  const progressLabel = (() => {
    if (skipReasonStep) {
      return currentStep === 1 ? "Step 1 of 2" : "Step 2 of 2";
    }
    return currentStep === 1
      ? step1.progressLabel
      : currentStep === 2
        ? step2.progressLabel
        : step3.progressLabel;
  })();

  const canGoStep1 =
    selectedCauseId !== null &&
    (selectedCauseId !== "other" || otherCauseDetail.trim().length > 0);

  const canGoStep2 =
    selectedReasonId !== null &&
    (selectedReasonId !== "other-occasion" ||
      otherReasonDetail.trim().length > 0);

  const canSubmit =
    fullName.trim().length > 1 &&
    Boolean(mobile && isValidPhoneNumber(mobile)) &&
    email.includes("@") &&
    city.length > 0 &&
    agreed;

  const goAfterCause = () => setCurrentStep(skipReasonStep ? 3 : 2);
  const goBackFromDetails = () => setCurrentStep(skipReasonStep ? 1 : 2);

  const sidebarFormStep = (displayNumber: number): FormStep => {
    if (!skipReasonStep) return displayNumber as FormStep;
    return displayNumber === 1 ? 1 : 3;
  };

  const handleSubmit = async () => {
    if (!canSubmit || !selectedCauseId || !selectedReasonId || !mobile) return;

    setSubmitError(null);
    setIsSubmitting(true);
    try {
      await submitCauseChampion({
        fullName: fullName.trim(),
        email: email.trim(),
        mobile,
        city,
        selectedCauseId,
        selectedReasonId,
        ...(selectedCauseId === "other"
          ? { otherCauseDetail: otherCauseDetail.trim() }
          : {}),
        ...(selectedReasonId === "other-occasion"
          ? { otherReasonDetail: otherReasonDetail.trim() }
          : {}),
        agreed: true,
      });
      setCurrentStep(4);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setSubmitError(message);
      logger.error("Cause champion apply failed", { message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${thanks.inviteUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="flex min-h-dvh w-full flex-col bg-[#FFFFFF] max-lg:overflow-y-auto lg:h-dvh lg:min-h-0 lg:overflow-hidden">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col max-lg:min-h-dvh lg:h-full lg:overflow-hidden lg:flex-row">
        <aside className="flex w-full shrink-0 flex-col border-b border-[#E8E8E8] bg-[#F2FBF9] px-5 pt-5 pb-6 sm:px-8 sm:pt-6 md:px-10 lg:h-full lg:w-[26.25rem] lg:overflow-hidden lg:border-b-0 lg:border-r lg:border-[#E8E8E8] lg:px-8 lg:pt-8 lg:pb-8 min-[90rem]:w-[30.125rem] min-[90rem]:px-16 min-[90rem]:pt-10 min-[90rem]:pb-10">
          <Link href="/" className="inline-flex w-fit shrink-0 items-center">
            <Image
              src="/images/Frame 2071857645.png"
              alt="The Giving Circle"
              width={220}
              height={48}
              className="h-9 w-auto sm:h-10 min-[90rem]:h-12"
              priority
            />
          </Link>

          <h1 className="mt-5 shrink-0 font-['Georgia'] text-[1.625rem] leading-8 font-[700] tracking-normal text-[#1D2D23] sm:mt-6 sm:text-[1.875rem] sm:leading-9 min-[90rem]:mt-8 min-[90rem]:w-[15.8125rem] min-[90rem]:text-[2.125rem] min-[90rem]:leading-[2.75rem]">
            {title}
          </h1>
          <p
            className={`${SEGOE_UI_CLASS} mt-2.5 max-w-[22rem] shrink-0 text-[0.875rem] leading-6 font-[400] text-[var(--Paragraph,#5F6D64)] sm:mt-3 sm:text-[0.9375rem] sm:leading-7 min-[90rem]:w-[19.25rem] min-[90rem]:text-[0.9375rem] min-[90rem]:leading-7`}
          >
            {subtitle}
          </p>

          <ol className="mt-6 flex flex-col sm:mt-8 min-[90rem]:mt-10">
            {visibleSteps.map((step, index) => {
              const formStep = sidebarFormStep(step.number);
              const isActive = currentStep !== 4 && currentStep === formStep;
              const isComplete =
                currentStep === 4 ||
                (skipReasonStep
                  ? formStep === 1 && currentStep >= 3
                  : step.number < currentStep);
              const isLast = index === visibleSteps.length - 1;
              const titleActive = isActive || isComplete;

              return (
                <li key={step.title} className="flex gap-3.5">
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.9375rem] leading-none font-[700] ${
                        isActive || isComplete
                          ? "bg-[var(--Main-CTA-button,#00A3BE)] text-[#FFFFFF]"
                          : "border border-[#D0D5DD] bg-[#FFFFFF] text-[#98A2B3]"
                      } ${SEGOE_UI_CLASS}`}
                    >
                      {isComplete ? <StepCheckIcon /> : step.number}
                    </span>
                    {isLast ? null : (
                      <span
                        aria-hidden
                        className="my-1 min-h-[1.75rem] w-0 flex-1 border-l-2 border-dotted border-[#D0D5DD]"
                      />
                    )}
                  </div>
                  <div className={isLast ? "pb-0" : "pb-4 min-[90rem]:pb-5"}>
                    <p
                      className={`${SEGOE_UI_CLASS} text-[1rem] leading-7 min-[90rem]:text-[1.125rem] min-[90rem]:leading-8 ${
                        titleActive
                          ? "font-[700] text-[var(--Main-CTA-button,#00A3BE)]"
                          : "font-[600] text-[#00000080]"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-0.5 max-w-[15.75rem] text-[0.8125rem] leading-5 font-[400] text-[var(--Paragraph,#5F6D64)] sm:text-[0.875rem] sm:leading-6 min-[90rem]:text-[0.9375rem] min-[90rem]:leading-6`}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </aside>

        <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
          {currentStep === 4 ? (
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center bg-[#FFFFFF] px-5 py-10 sm:px-8 md:px-10 lg:px-12 min-[90rem]:px-[6.25rem]">
              <div className="flex w-full max-w-[36rem] flex-col items-center sm:max-w-[45rem] min-[90rem]:w-[51rem] min-[90rem]:max-w-[51rem]">
                <span
                  className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-[var(--Brand-Green-Teal,#00A98F)] min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(0,169,143,0.18) 0%, rgba(0,169,143,0.07) 60%, rgba(0,169,143,0.03) 100%)",
                  }}
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden
                    className="h-9 w-9 min-[90rem]:h-11 min-[90rem]:w-11"
                  >
                    <path
                      d="M10 25.5 18.5 34 38 13"
                      stroke="#00A98F"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <h2
                  className={`${SEGOE_UI_CLASS} mt-6 text-center text-[2.5rem] leading-none font-[700] text-[#212121] sm:text-[3rem] min-[90rem]:mt-6 min-[90rem]:h-16 min-[90rem]:text-[3rem] min-[90rem]:whitespace-nowrap`}
                >
                  {thanks.title}
                </h2>

                <p
                  className={`${SEGOE_UI_CLASS} mt-6 px-2 text-center text-[1.25rem] leading-snug font-[700] tracking-[0.5px] text-[var(--Main-CTA-button,#00A3BE)] sm:text-[1.5rem] sm:leading-none min-[90rem]:h-8 min-[90rem]:px-0 min-[90rem]:text-[1.5rem] min-[90rem]:whitespace-nowrap`}
                >
                  {thanks.eyebrow}
                </p>

                <p
                  className={`${SEGOE_UI_CLASS} mt-4 max-w-[32.375rem] text-center text-[1.0625rem] leading-8 font-[400] text-[#212121] sm:text-[1.125rem] sm:leading-9 min-[90rem]:h-[4.5rem] min-[90rem]:w-[32.375rem] min-[90rem]:text-[1.125rem] min-[90rem]:leading-9`}
                >
                  {thanks.body}
                </p>

                <div className="mt-7 w-full border-t border-[#BDBDBD] pt-8 text-left min-[90rem]:mt-7 min-[90rem]:w-[51rem] min-[90rem]:pt-[2.8125rem]">
                  <p
                    className={`${SEGOE_UI_CLASS} text-[1.25rem] leading-none font-[600] text-[#000000] sm:text-[1.5rem] min-[90rem]:h-8 min-[90rem]:text-[1.5rem] min-[90rem]:whitespace-nowrap`}
                  >
                    {thanks.inviteLabel}
                  </p>
                  <p
                    className={`${SEGOE_UI_CLASS} mt-3 text-[0.9375rem] leading-none font-[400] text-[#212121] sm:whitespace-nowrap sm:text-[1.125rem] min-[90rem]:mt-[0.8125rem] min-[90rem]:h-6 min-[90rem]:w-[45.125rem] min-[90rem]:text-[1.125rem]`}
                  >
                    {thanks.inviteHint}
                  </p>

                  <div className="mt-6 flex h-14 w-full overflow-hidden rounded-2xl border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] sm:h-16 min-[90rem]:mt-8 min-[90rem]:h-[4.5rem] min-[90rem]:w-[50.4375rem] min-[90rem]:rounded-[1rem]">
                    <input
                      readOnly
                      value={thanks.inviteUrl}
                      className={`${SEGOE_UI_CLASS} min-w-0 flex-1 bg-transparent px-4 text-[0.9375rem] text-[#212121] outline-none sm:px-5 sm:text-[1rem]`}
                    />
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`${SEGOE_UI_CLASS} inline-flex h-full shrink-0 items-center gap-2.5 bg-[var(--Main-CTA-button,#00A3BE)] px-5 text-[0.9375rem] font-[700] text-[#FFFFFF] sm:px-6 sm:text-[1rem]`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        className="h-6 w-6"
                      >
                        <rect
                          x="8"
                          y="8"
                          width="12"
                          height="12"
                          rx="2"
                          stroke="#FFFFFF"
                          strokeWidth="1.75"
                        />
                        <path
                          d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
                          stroke="#FFFFFF"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                      {copied ? "Copied" : thanks.copyLabel}
                    </button>
                  </div>

                  <div className="mt-8 border-t border-[#BDBDBD] min-[90rem]:mt-10 min-[90rem]:w-[51rem]" />
                </div>

                <Link
                  href={thanks.homeHref}
                  className={`${SEGOE_UI_CLASS} mt-8 inline-flex items-center gap-2 text-[1rem] font-[600] text-[var(--Main-CTA-button,#00A3BE)] min-[90rem]:mt-10`}
                >
                  {thanks.homeLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex min-h-0 flex-1 flex-col px-5 pt-5 sm:px-8 sm:pt-6 md:px-10 lg:px-12 lg:pt-8 min-[90rem]:px-0 min-[90rem]:pt-10 min-[90rem]:pr-16 min-[90rem]:pl-[3.875rem]">
              <div className="flex min-h-0 w-full max-w-[55.8125rem] flex-1 flex-col">
                <div className="shrink-0">
                  <p
                    className={`${SEGOE_UI_CLASS} text-[1rem] leading-8 font-[700] text-[var(--Brand-Green-Teal,#00A98F)] min-[90rem]:text-[1.125rem]`}
                  >
                    {progressLabel}
                  </p>
                  <div
                    className="mt-2.5 h-3.5 w-full overflow-hidden rounded-2xl bg-[#EDE8E3] min-[90rem]:h-4"
                    role="progressbar"
                    aria-valuenow={progressStep}
                    aria-valuemin={1}
                    aria-valuemax={totalSteps}
                    aria-label={progressLabel}
                  >
                    <div
                      className="h-full rounded-2xl bg-[var(--Brand-Green-Teal,#00A98F)] transition-[width] duration-300 ease-out"
                      style={{ width: `${(progressStep / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                {currentStep === 1 ? (
                  <>
                    <div className="min-h-0 flex-1 overflow-y-auto pb-5 lg:pb-0">
                      <h2
                        className={`${SEGOE_UI_CLASS} mt-6 text-[1.625rem] leading-8 font-[700] tracking-normal text-[#212121] sm:mt-7 sm:text-[2rem] sm:leading-tight md:text-[2.25rem] lg:text-[2.375rem] min-[90rem]:mt-8 min-[90rem]:text-[2.5rem] min-[90rem]:leading-[1.15]`}
                      >
                        {step1.questionLine1}
                        <br />
                        {step1.questionLine2}
                      </h2>

                      <ul className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:gap-3 min-[90rem]:mt-8 min-[90rem]:gap-3">
                        {step1.causes.map((cause) => {
                          const isSelected = selectedCauseId === cause.id;
                          const isOtherSelected =
                            cause.id === "other" && isSelected;

                          if (isOtherSelected) {
                            return (
                              <li key={cause.id}>
                                <OtherDetailField
                                  label={cause.label}
                                  value={otherCauseDetail}
                                  onChange={setOtherCauseDetail}
                                  placeholder={step1.otherPlaceholder}
                                />
                              </li>
                            );
                          }

                          return (
                            <li key={cause.id}>
                              <button
                                type="button"
                                onClick={() => setSelectedCauseId(cause.id)}
                                aria-pressed={isSelected}
                                className={optionButtonClass(isSelected)}
                              >
                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden sm:h-10 sm:w-10 min-[90rem]:h-11 min-[90rem]:w-11">
                                  <Image
                                    src={cause.iconSrc}
                                    alt=""
                                    width={44}
                                    height={44}
                                    unoptimized
                                    className="h-full w-full object-contain"
                                  />
                                </span>
                                <span
                                  className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1.125rem] leading-7 font-[600] text-[#060710] sm:text-[1.25rem] sm:leading-8 min-[90rem]:text-[1.375rem]`}
                                >
                                  {cause.label}
                                </span>
                                <OptionRadio selected={isSelected} />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className={footerBarClass}>
                      <button
                        type="button"
                        disabled={!canGoStep1}
                        onClick={goAfterCause}
                        className={primaryBtnClass}
                      >
                        {step1.nextLabel}
                      </button>
                    </div>
                  </>
                ) : null}

                {currentStep === 2 && !skipReasonStep ? (
                  <>
                    <div className="min-h-0 flex-1 overflow-y-auto pb-5 lg:pb-0">
                      <h2
                        className={`${SEGOE_UI_CLASS} mt-6 text-[1.625rem] leading-8 font-[700] tracking-normal text-[#212121] sm:mt-7 sm:text-[2rem] sm:leading-tight md:text-[2.25rem] lg:text-[2.375rem] min-[90rem]:mt-8 min-[90rem]:text-[2.5rem] min-[90rem]:leading-[1.15]`}
                      >
                        {step2.question}
                      </h2>

                      <ul className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:gap-3 min-[90rem]:mt-8 min-[90rem]:gap-3">
                        {step2.reasons.map((reason) => {
                          const isSelected = selectedReasonId === reason.id;
                          const isOtherSelected =
                            reason.id === "other-occasion" && isSelected;

                          if (isOtherSelected) {
                            return (
                              <li key={reason.id}>
                                <OtherDetailField
                                  label={reason.label}
                                  value={otherReasonDetail}
                                  onChange={setOtherReasonDetail}
                                  placeholder={step2.otherPlaceholder}
                                />
                              </li>
                            );
                          }

                          return (
                            <li key={reason.id}>
                              <button
                                type="button"
                                onClick={() => setSelectedReasonId(reason.id)}
                                aria-pressed={isSelected}
                                className={optionButtonClass(isSelected)}
                              >
                                {/* Fixed-width icon column so all labels align regardless of icon size */}
                                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14 min-[90rem]:h-16 min-[90rem]:w-16">
                                  <Image
                                    src={reason.iconSrc}
                                    alt=""
                                    width={64}
                                    height={64}
                                    unoptimized
                                    className={`object-contain ${
                                      reason.iconSrc.includes("/images/moments/")
                                        ? "h-full w-full"
                                        : "h-9 w-9 sm:h-10 sm:w-10 min-[90rem]:h-11 min-[90rem]:w-11"
                                    }`}
                                  />
                                </span>
                                <span
                                  className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1.125rem] leading-7 font-[600] text-[#060710] sm:text-[1.25rem] sm:leading-8 min-[90rem]:text-[1.375rem]`}
                                >
                                  {reason.label}
                                </span>
                                <OptionRadio selected={isSelected} />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className={footerBarClass}>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className={outlineBtnClass}
                      >
                        {step2.previousLabel}
                      </button>
                      <button
                        type="button"
                        disabled={!canGoStep2}
                        onClick={() => setCurrentStep(3)}
                        className={primaryBtnClass}
                      >
                        {step2.nextLabel}
                      </button>
                    </div>
                  </>
                ) : null}

                {currentStep === 3 ? (
                  <>
                    <div className="min-h-0 flex-1 overflow-y-auto pb-5 lg:pb-0">
                      <h2
                        className={`${SEGOE_UI_CLASS} mt-6 text-[1.75rem] leading-none font-[700] tracking-normal text-[#212121] sm:mt-7 sm:text-[2.25rem] min-[90rem]:mt-8 min-[90rem]:text-[3rem]`}
                      >
                        {step3.title}
                      </h2>
                      <p
                        className={`${SEGOE_UI_CLASS} mt-3 max-w-[27.75rem] text-[1rem] leading-7 font-[400] text-[var(--Paragraph,#5F6D64)] sm:text-[1.125rem] sm:leading-8`}
                      >
                        {step3.subtitle}
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 min-[90rem]:gap-x-8">
                        <label className="block sm:col-span-1">
                          <span className={fieldLabelClass}>
                            {step3.fields.fullName.label}
                            <span className="font-[900] text-[#212121]">*</span>
                          </span>
                          <input
                            type="text"
                            maxLength={100}
                            autoComplete="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder={step3.fields.fullName.placeholder}
                            className={`${fieldClass} mt-2`}
                          />
                        </label>

                        <div className="block sm:col-span-1">
                          <span className={fieldLabelClass}>
                            {step3.fields.mobile.label}
                            <span className="font-[900] text-[#212121]">*</span>
                          </span>
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            countryCallingCodeEditable={false}
                            value={mobile}
                            onChange={setMobile}
                            placeholder={step3.fields.mobile.placeholder}
                            className={`${SEGOE_UI_CLASS} champion-phone-input`}
                          />
                        </div>

                        <label className="block sm:col-span-1">
                          <span className={fieldLabelClass}>
                            {step3.fields.email.label}
                            <span className="font-[900] text-[#212121]">*</span>
                          </span>
                          <input
                            type="email"
                            maxLength={100}
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={step3.fields.email.placeholder}
                            className={`${fieldClass} mt-2`}
                          />
                        </label>

                        <label className="block sm:col-span-1">
                          <span className={fieldLabelClass}>
                            {step3.fields.city.label}
                            <span className="font-[900] text-[#212121]">*</span>
                          </span>
                          <span className="relative mt-2 block">
                            <select
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className={`${fieldClass} appearance-none pr-11`}
                            >
                              {step3.cities.map((cityOption) => (
                                <option key={cityOption} value={cityOption}>
                                  {cityOption}
                                </option>
                              ))}
                            </select>
                            <span
                              aria-hidden
                              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#667085]"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M4 6.5 8 10.5 12 6.5"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </span>
                        </label>
                      </div>

                      <label className="mt-6 flex cursor-pointer items-start gap-3 sm:mt-8">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="mt-0.5 h-5 w-5 shrink-0 rounded border-[#D0D5DD] accent-[var(--Main-CTA-button,#00A3BE)]"
                        />
                        <span
                          className={`${SEGOE_UI_CLASS} text-[1rem] leading-6 font-[400] text-[#00000080]`}
                        >
                          {step3.agreeLabel}
                        </span>
                      </label>
                    </div>

                    <div className={footerBarClass}>
                      <button
                        type="button"
                        onClick={goBackFromDetails}
                        className={outlineBtnClass}
                        disabled={isSubmitting}
                      >
                        {step3.previousLabel}
                      </button>
                      <button
                        type="button"
                        disabled={!canSubmit || isSubmitting}
                        onClick={() => void handleSubmit()}
                        className={primaryBtnClass}
                      >
                        {isSubmitting ? "Submitting…" : step3.submitLabel}
                      </button>
                    </div>
                    {submitError ? (
                      <p
                        role="alert"
                        className={`${SEGOE_UI_CLASS} px-5 pb-5 text-[0.9375rem] leading-6 text-[#B42318] sm:px-0`}
                      >
                        {submitError}
                      </p>
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
