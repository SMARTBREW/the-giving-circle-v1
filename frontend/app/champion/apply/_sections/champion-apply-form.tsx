"use client";

import CldImage from "@/components/cld-image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  type Value as PhoneValue,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  ApplyFormMobileChrome,
  ApplyMobileThanks,
  ApplyOptionCard,
  applyMobileFieldClass,
  applyMobileFooterClass,
  applyMobileOutlineBtnClass,
  applyMobilePrimaryBtnClass,
} from "@/components/apply-form";
import {
  CHAMPION_APPLY,
  SEGOE_UI_CLASS,
  isChampionApplyPresetReason,
  type ChampionApplyCauseId,
  type ChampionApplyReasonId,
} from "@/constants";
import {
  submitCauseChampion,
  trackChampionReferralOpen,
} from "@/lib/api";
import {
  clearRememberedChampionReferral,
  getOrCreateVisitorKey,
  getRememberedChampionReferral,
  rememberChampionReferral,
} from "@/lib/champion-referral";
import { logger } from "@/lib/logger";

type FormStep = 1 | 2 | 3 | 4;

const optionButtonClass = (isSelected: boolean) =>
  `flex h-12 w-full items-center gap-3 rounded-xl border-2 px-3.5 text-left outline-none transition-[border-color,background-color,box-shadow] lg:h-[3.5rem] lg:gap-4 lg:rounded-2xl lg:px-4 min-[90rem]:h-[4.75rem] min-[90rem]:gap-5 min-[90rem]:px-5 focus-visible:border-[var(--Main-CTA-button,#02938c)] focus-visible:shadow-[0_0_0_1px_var(--Main-CTA-button,#02938c)] ${
    isSelected
      ? "border-[var(--Main-CTA-button,#02938c)] bg-[var(--brand-selected,#e8f5f3)]"
      : "border-[#D9E1E2] bg-[#FFFFFF] hover:border-[#4A5558]"
  }`;

const primaryBtnClass = `${SEGOE_UI_CLASS} inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--Main-CTA-button,#02938c)] text-[1rem] leading-none font-[700] text-[#FFFFFF] transition-opacity disabled:cursor-not-allowed disabled:opacity-40 md:h-11 md:w-[9.75rem] md:rounded-lg lg:h-12 lg:w-[10.5rem] min-[90rem]:h-[3.75rem] min-[90rem]:w-[11.25rem] min-[90rem]:text-[1.125rem]`;

const outlineBtnClass = `${SEGOE_UI_CLASS} inline-flex h-11 w-full items-center justify-center rounded-xl border border-[var(--Main-CTA-button,#02938c)] bg-[#FFFFFF] text-[1rem] leading-none font-[700] text-[var(--Main-CTA-button,#02938c)] md:h-11 md:w-[9.75rem] md:rounded-lg md:border-2 lg:h-12 lg:w-[10.5rem] min-[90rem]:h-[3.75rem] min-[90rem]:w-[11.25rem] min-[90rem]:text-[1.125rem]`;

const fieldClass = `${SEGOE_UI_CLASS} champion-apply-field h-12 w-full rounded border border-[#d9e1e2] bg-[#eef2f2] px-4 text-[1rem] text-[#4a5558] outline-none placeholder:text-[#4A5558] focus:border-[#d9e1e2] focus:outline-none focus:ring-0 md:h-12 lg:h-14 min-[90rem]:h-16`;

const fieldLabelClass = `${SEGOE_UI_CLASS} text-[1rem] leading-none font-[400] text-[#4a5558] md:text-[1.0625rem] lg:text-[1.125rem] min-[90rem]:text-[1.25rem]`;

const footerBarClass =
  "mt-auto flex w-full shrink-0 flex-row flex-wrap items-center justify-end gap-3 border-t border-[#D9E1E2] bg-[#FFFFFF] pt-2.5 pb-2.5 md:gap-4 md:pt-3 md:pb-3 lg:pt-4 lg:pb-4 min-[90rem]:pt-5 min-[90rem]:pb-5";

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
          ? "border-[var(--Main-CTA-button,#02938c)]"
          : "border-[#d9e1e2]"
      }`}
    >
      {selected ? (
        <span className="h-3 w-3 rounded-full bg-[var(--Main-CTA-button,#02938c)]" />
      ) : null}
    </span>
  );
}

function OtherDetailField({
  label,
  value,
  onChange,
  placeholder,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative w-full border border-[var(--Main-CTA-button,#02938c)] bg-[#FFFFFF] ${
        compact
          ? "rounded-xl px-3.5 pt-4 pb-3"
          : "rounded-2xl px-4 pt-5 pb-4 sm:px-5 min-[90rem]:min-h-[4.75rem] min-[90rem]:px-5 min-[90rem]:pt-5 min-[90rem]:pb-4"
      }`}
    >
      <span
        className={`${SEGOE_UI_CLASS} absolute -top-2.5 left-3.5 bg-[#FFFFFF] px-1.5 text-[0.75rem] leading-none font-[600] text-[var(--Main-CTA-button,#02938c)] sm:left-5 sm:text-[0.875rem]`}
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
        className={`${SEGOE_UI_CLASS} w-full border-0 bg-transparent font-[400] text-[#4a5558] outline-none placeholder:text-[#4A5558] ${
          compact
            ? "text-[1rem] leading-6"
            : "text-[1.125rem] leading-7 sm:text-[1.25rem] sm:leading-8 min-[90rem]:text-[1.375rem]"
        }`}
      />
    </div>
  );
}

export default function ChampionApplyForm() {
  const {
    title,
    mobileTitle,
    subtitle,
    steps,
    step1,
    step2,
    step3,
    thanks,
  } = CHAMPION_APPLY;
  const searchParams = useSearchParams();
  const reasonParam = searchParams.get("reason");
  const referralParam = searchParams.get("ref");
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
  const [inviteDisplayUrl, setInviteDisplayUrl] = useState("");
  const [inviteShareUrl, setInviteShareUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!referralParam) return;
    rememberChampionReferral(referralParam);
    const visitorKey = getOrCreateVisitorKey();
    const code = referralParam.trim().toUpperCase();
    if (!visitorKey || !/^TGC[A-F0-9]{8}$/.test(code)) return;
    void trackChampionReferralOpen({ inviteCode: code, visitorKey }).catch(
      () => {
        // Soft-fail: never block the apply form for tracking errors
      },
    );
  }, [referralParam]);

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

  const mobileActiveStep = (() => {
    if (skipReasonStep) return currentStep === 1 ? 1 : 2;
    return currentStep as 1 | 2 | 3;
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
      const referredByInviteCode = getRememberedChampionReferral() ?? undefined;
      const visitorKey = getOrCreateVisitorKey() || undefined;
      const result = await submitCauseChampion({
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
        ...(referredByInviteCode ? { referredByInviteCode } : {}),
        ...(visitorKey ? { visitorKey } : {}),
      });
      const shareUrl = result.inviteUrl ?? "";
      const displayUrl =
        result.inviteDisplayUrl ??
        shareUrl.replace(/^https?:\/\//, "");
      setInviteShareUrl(shareUrl);
      setInviteDisplayUrl(displayUrl);
      clearRememberedChampionReferral();
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
    if (!inviteShareUrl) return;
    try {
      await navigator.clipboard.writeText(inviteShareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const causeList = (
    <ul className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
      {step1.causes.map((cause) => {
        const isSelected = selectedCauseId === cause.id;
        if (cause.id === "other" && isSelected) {
          return (
            <li key={cause.id}>
              <OtherDetailField
                label={cause.label}
                value={otherCauseDetail}
                onChange={setOtherCauseDetail}
                placeholder={step1.otherPlaceholder}
                compact
              />
            </li>
          );
        }
        return (
          <li key={cause.id}>
            <ApplyOptionCard
              selected={isSelected}
              label={cause.label}
              iconSrc={cause.iconSrc}
              onClick={() => setSelectedCauseId(cause.id)}
            />
          </li>
        );
      })}
    </ul>
  );

  const reasonList = (
    <ul className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
      {step2.reasons.map((reason) => {
        const isSelected = selectedReasonId === reason.id;
        if (reason.id === "other-occasion" && isSelected) {
          return (
            <li key={reason.id}>
              <OtherDetailField
                label={reason.label}
                value={otherReasonDetail}
                onChange={setOtherReasonDetail}
                placeholder={step2.otherPlaceholder}
                compact
              />
            </li>
          );
        }
        return (
          <li key={reason.id}>
            <ApplyOptionCard
              selected={isSelected}
              label={reason.label}
              iconSrc={reason.iconSrc}
              onClick={() => setSelectedReasonId(reason.id)}
            />
          </li>
        );
      })}
    </ul>
  );

  const mobileDetails = (
    <div className="flex flex-col gap-3 sm:gap-3.5">
      <input
        type="text"
        maxLength={100}
        autoComplete="name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder={`${step3.fields.fullName.label}*`}
        className={`${applyMobileFieldClass} apply-field-mobile`}
      />
      <PhoneInput
        international
        defaultCountry="IN"
        countryCallingCodeEditable={false}
        value={mobile}
        onChange={setMobile}
        placeholder={`${step3.fields.mobile.label}*`}
        className={`${SEGOE_UI_CLASS} champion-phone-input champion-phone-input-mobile`}
      />
      <input
        type="email"
        maxLength={100}
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={`${step3.fields.email.label}*`}
        className={`${applyMobileFieldClass} apply-field-mobile`}
      />
      <span className="relative block">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={`${applyMobileFieldClass} apply-field-mobile appearance-none pr-11`}
        >
          {step3.cities.map((cityOption) => (
            <option key={cityOption} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#4A5558]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
      <label className="mt-1 flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#d9e1e2] accent-[var(--Main-CTA-button,#02938c)]"
        />
        <span
          className={`${SEGOE_UI_CLASS} text-[0.8125rem] leading-5 font-[400] text-[#4A5558] sm:text-[0.875rem] sm:leading-5`}
        >
          {step3.agreeLabel}
        </span>
      </label>
      {submitError ? (
        <p
          role="alert"
          className={`${SEGOE_UI_CLASS} text-[0.875rem] leading-5 text-[#E62B4F]`}
        >
          {submitError}
        </p>
      ) : null}
    </div>
  );

  const mobileFooter =
    currentStep === 1 ? (
      <div className={applyMobileFooterClass}>
        <button
          type="button"
          disabled={!canGoStep1}
          onClick={goAfterCause}
          className={applyMobilePrimaryBtnClass}
        >
          {step1.nextLabel}
        </button>
      </div>
    ) : currentStep === 2 && !skipReasonStep ? (
      <div className={applyMobileFooterClass}>
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className={applyMobileOutlineBtnClass}
        >
          {step2.previousLabel}
        </button>
        <button
          type="button"
          disabled={!canGoStep2}
          onClick={() => setCurrentStep(3)}
          className={applyMobilePrimaryBtnClass}
        >
          {step2.nextLabel}
        </button>
      </div>
    ) : (
      <div className={applyMobileFooterClass}>
        <button
          type="button"
          onClick={goBackFromDetails}
          className={applyMobileOutlineBtnClass}
          disabled={isSubmitting}
        >
          {step3.previousLabel}
        </button>
        <button
          type="button"
          disabled={!canSubmit || isSubmitting}
          onClick={() => void handleSubmit()}
          className={applyMobilePrimaryBtnClass}
        >
          {isSubmitting ? "Submitting…" : step3.submitLabel}
        </button>
      </div>
    );

  return (
    <>
      {/* Phone only — Figma mobile chrome */}
      <div className="fixed inset-0 z-10 flex min-h-0 min-w-0 flex-col overflow-hidden bg-[#FFFFFF] md:hidden">
        {currentStep === 4 ? (
          <ApplyMobileThanks
            title={thanks.title}
            eyebrow={thanks.eyebrow}
            body={thanks.body}
            homeLabel={thanks.homeLabel}
            homeHref={thanks.homeHref}
            inviteLabel={thanks.inviteLabel}
            inviteHint={thanks.inviteHint}
            inviteUrl={inviteDisplayUrl}
            copyLabel={thanks.copyLabel}
            copied={copied}
            onCopy={() => void handleCopy()}
          />
        ) : (
          <ApplyFormMobileChrome
            title={mobileTitle}
            backHref="/"
            steps={visibleSteps}
            activeStep={mobileActiveStep}
            footer={mobileFooter}
          >
            {currentStep === 1 ? (
              <>
                <h2
                  className={`${SEGOE_UI_CLASS} text-[1.375rem] leading-7 font-[700] tracking-normal text-[#4a5558] sm:text-[1.5rem] sm:leading-8`}
                >
                  {step1.question}
                </h2>
                {causeList}
              </>
            ) : null}

            {currentStep === 2 && !skipReasonStep ? (
              <>
                <h2
                  className={`${SEGOE_UI_CLASS} text-[1.375rem] leading-7 font-[700] tracking-normal text-[#4a5558] sm:text-[1.5rem] sm:leading-8`}
                >
                  {step2.question}
                </h2>
                {reasonList}
              </>
            ) : null}

            {currentStep === 3 ? (
              <>
                <h2
                  className={`${SEGOE_UI_CLASS} text-[1.375rem] leading-7 font-[700] tracking-normal text-[#4a5558] sm:text-[1.5rem] sm:leading-8`}
                >
                  {step3.title}
                </h2>
                <div className="mt-5 sm:mt-6">{mobileDetails}</div>
              </>
            ) : null}
          </ApplyFormMobileChrome>
        )}
      </div>

      {/* Desktop — full viewport so sidebar fill + border reach the bottom */}
      <section className="fixed inset-0 z-10 hidden min-h-0 min-w-0 overflow-hidden bg-[#FFFFFF] md:flex">
        <aside className="flex h-full w-[min(16rem,26%)] min-w-0 shrink-0 flex-col overflow-x-hidden overflow-y-auto border-r border-[#D9E1E2] bg-[#E8F7F8] px-3.5 pt-4 pb-4 sm:px-4 lg:w-[min(18.5rem,24%)] lg:px-5 lg:pt-5 lg:pb-5 min-[90rem]:w-[30.125rem] min-[90rem]:px-16 min-[90rem]:pt-10 min-[90rem]:pb-10">
            <Link href="/" className="inline-flex max-w-full shrink-0 items-center">
              <CldImage
                src="/images/Frame 2071857645.png"
                alt="The Giving Circle"
                width={220}
                height={48}
                className="h-7 w-auto max-w-full lg:h-8 min-[90rem]:h-12"
                priority
              />
            </Link>

            <h1 className="mt-3 w-full min-w-0 shrink-0 font-['Georgia'] text-[1.25rem] leading-7 font-[700] tracking-normal text-[#1C2426] lg:mt-4 lg:text-[1.375rem] lg:leading-7 min-[90rem]:mt-8 min-[90rem]:w-[15.8125rem] min-[90rem]:text-[2.125rem] min-[90rem]:leading-[2.75rem]">
              {title}
            </h1>
            <p
              className={`${SEGOE_UI_CLASS} mt-1.5 w-full min-w-0 max-w-full shrink-0 text-[0.75rem] leading-5 font-[400] text-[var(--Paragraph,#4a5558)] lg:mt-2 lg:text-[0.8125rem] lg:leading-5 min-[90rem]:mt-3 min-[90rem]:w-[19.25rem] min-[90rem]:text-[0.9375rem] min-[90rem]:leading-7`}
            >
              {subtitle}
            </p>

            <ol className="mt-4 flex min-w-0 flex-col lg:mt-5 min-[90rem]:mt-10">
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
                  <li key={step.title} className="flex min-w-0 gap-2.5">
                    <div className="flex w-7 shrink-0 flex-col items-center min-[90rem]:w-8">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[0.8125rem] leading-none font-[700] min-[90rem]:h-8 min-[90rem]:w-8 min-[90rem]:text-[0.9375rem] ${
                          isActive || isComplete
                            ? "bg-[var(--Main-CTA-button,#02938c)] text-[#FFFFFF]"
                            : "border border-[#d9e1e2] bg-[#FFFFFF] text-[#4A5558]"
                        } ${SEGOE_UI_CLASS}`}
                      >
                        {isComplete ? <StepCheckIcon /> : step.number}
                      </span>
                      {isLast ? null : (
                        <span
                          aria-hidden
                          className="my-1 min-h-[1.25rem] w-0 flex-1 border-l-2 border-dotted border-[#d9e1e2] min-[90rem]:min-h-[1.75rem]"
                        />
                      )}
                    </div>
                    <div
                      className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-3 min-[90rem]:pb-5"}`}
                    >
                      <p
                        className={`${SEGOE_UI_CLASS} flex h-7 items-center text-[0.875rem] leading-none lg:text-[0.9375rem] min-[90rem]:h-8 min-[90rem]:text-[1.125rem] ${
                          titleActive
                            ? "font-[700] text-[var(--Main-CTA-button,#02938c)]"
                            : "font-[600] text-[#00000080]"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`${SEGOE_UI_CLASS} mt-0.5 w-full text-[0.75rem] leading-5 font-[400] text-[var(--Paragraph,#4a5558)] lg:text-[0.8125rem] min-[90rem]:text-[0.9375rem] min-[90rem]:leading-6`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </aside>

          <div className="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden">
            {currentStep === 4 ? (
              <div className="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden bg-[#FFFFFF]">
                <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center overflow-x-hidden overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-6 min-[90rem]:px-[6.25rem] min-[90rem]:py-10">
                  <div className="flex w-full min-w-0 max-w-[36rem] flex-1 flex-col items-center justify-center lg:max-w-[40rem] min-[90rem]:max-w-[51rem]">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--Brand-Green-Teal,#02938c)] sm:h-14 sm:w-14 min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]"
                      style={{
                        background:
                          "radial-gradient(circle at 40% 35%, rgba(2,147,140,0.18) 0%, rgba(2,147,140,0.07) 60%, rgba(2,147,140,0.03) 100%)",
                      }}
                    >
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-hidden
                        className="h-6 w-6 sm:h-7 sm:w-7 min-[90rem]:h-11 min-[90rem]:w-11"
                      >
                        <path
                          d="M10 25.5 18.5 34 38 13"
                          stroke="#02938c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <h2
                      className={`${SEGOE_UI_CLASS} mt-3 max-w-full text-center text-[1.75rem] leading-none font-[700] text-[#4a5558] sm:mt-4 sm:text-[2rem] min-[90rem]:mt-6 min-[90rem]:h-16 min-[90rem]:text-[3rem]`}
                    >
                      {thanks.title}
                    </h2>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-2.5 max-w-full text-center text-[1rem] leading-snug font-[700] tracking-[0.5px] text-[var(--Main-CTA-button,#02938c)] sm:mt-3 sm:text-[1.125rem] min-[90rem]:mt-6 min-[90rem]:h-8 min-[90rem]:text-[1.5rem] min-[90rem]:leading-none`}
                    >
                      {thanks.eyebrow}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-2.5 max-w-[32.375rem] text-center text-[0.875rem] leading-6 font-[400] text-[#4a5558] sm:mt-3 sm:text-[0.9375rem] sm:leading-6 min-[90rem]:mt-4 min-[90rem]:text-[1.125rem] min-[90rem]:leading-9`}
                    >
                      {thanks.body}
                    </p>

                    <div className="mt-4 w-full min-w-0 border-t border-[#d9e1e2] pt-4 text-left sm:mt-5 sm:pt-5 min-[90rem]:mt-7 min-[90rem]:pt-[2.8125rem]">
                      <p
                        className={`${SEGOE_UI_CLASS} text-[1.0625rem] leading-none font-[600] text-[var(--Dark-Charcoal,#1c2426)] sm:text-[1.125rem] min-[90rem]:text-[1.5rem]`}
                      >
                        {thanks.inviteLabel}
                      </p>
                      <p
                        className={`${SEGOE_UI_CLASS} mt-2 max-w-full text-[0.875rem] leading-5 font-[400] text-[#4a5558] sm:mt-2.5 sm:text-[0.9375rem] sm:leading-6 min-[90rem]:mt-3 min-[90rem]:text-[1.125rem] min-[90rem]:leading-none`}
                      >
                        {thanks.inviteHint}
                      </p>
                      <div className="mt-3 flex h-11 w-full min-w-0 overflow-hidden rounded-xl border border-[var(--Main-CTA-button,#02938c)] bg-[#FFFFFF] sm:mt-4 sm:h-12 sm:rounded-2xl min-[90rem]:mt-8 min-[90rem]:h-[4.5rem] min-[90rem]:rounded-[1rem]">
                        <input
                          readOnly
                          value={inviteDisplayUrl}
                          className={`${SEGOE_UI_CLASS} w-0 min-w-0 flex-1 truncate bg-transparent px-3 text-[0.8125rem] text-[#4a5558] outline-none sm:px-4 sm:text-[0.9375rem] min-[90rem]:px-5 min-[90rem]:text-[1rem]`}
                        />
                        <button
                          type="button"
                          onClick={() => void handleCopy()}
                          className={`${SEGOE_UI_CLASS} inline-flex h-full shrink-0 items-center gap-1.5 bg-[var(--Main-CTA-button,#02938c)] px-3 text-[0.8125rem] font-[700] text-[#FFFFFF] sm:gap-2 sm:px-5 sm:text-[0.9375rem] min-[90rem]:gap-2.5 min-[90rem]:px-6 min-[90rem]:text-[1rem]`}
                        >
                          {copied ? "Copied" : thanks.copyLabel}
                        </button>
                      </div>
                      <div className="mt-4 border-t border-[#d9e1e2] sm:mt-5 min-[90rem]:mt-10" />
                    </div>
                  </div>
                </div>

                <div className="flex w-full shrink-0 justify-center bg-[#FFFFFF] px-5 pt-1 pb-4 sm:px-6 sm:pb-5 lg:px-8 min-[90rem]:px-[6.25rem] min-[90rem]:pt-2 min-[90rem]:pb-12">
                  <Link
                    href={thanks.homeHref}
                    className={`${SEGOE_UI_CLASS} inline-flex items-center gap-2 text-[0.9375rem] font-[600] text-[var(--Main-CTA-button,#02938c)] min-[90rem]:text-[1rem]`}
                  >
                    {thanks.homeLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-6 pt-4 lg:px-8 lg:pt-5 min-[90rem]:px-0 min-[90rem]:pt-10 min-[90rem]:pr-16 min-[90rem]:pl-[3.875rem]">
                <div className="flex min-h-0 w-full max-w-[55.8125rem] flex-1 flex-col overflow-hidden">
                  <div className="shrink-0">
                    <p
                      className={`${SEGOE_UI_CLASS} text-[0.875rem] leading-5 font-[700] text-[var(--Brand-Green-Teal,#02938c)] lg:text-[0.9375rem] lg:leading-6 min-[90rem]:text-[1.125rem] min-[90rem]:leading-8`}
                    >
                      {progressLabel}
                    </p>
                    <div
                      className="mt-1.5 h-2.5 w-full overflow-hidden rounded-2xl bg-[#EEF2F2] lg:mt-2 lg:h-3 min-[90rem]:mt-2.5 min-[90rem]:h-4"
                      role="progressbar"
                      aria-valuenow={progressStep}
                      aria-valuemin={1}
                      aria-valuemax={totalSteps}
                      aria-label={progressLabel}
                    >
                      <div
                        className="h-full rounded-2xl bg-[var(--Brand-Green-Teal,#02938c)] transition-[width] duration-300 ease-out"
                        style={{
                          width: `${(progressStep / totalSteps) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {currentStep === 1 ? (
                    <>
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-3">
                        <h2
                          className={`${SEGOE_UI_CLASS} mt-4 text-[1.5rem] leading-7 font-[700] tracking-normal text-[#4a5558] lg:mt-5 lg:text-[1.75rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:text-[2.5rem] min-[90rem]:leading-[1.15]`}
                        >
                          {step1.questionLine1}
                          <br />
                          {step1.questionLine2}
                        </h2>
                        <ul className="mt-4 flex flex-col gap-2 lg:mt-5 lg:gap-2.5 min-[90rem]:mt-8 min-[90rem]:gap-3">
                          {step1.causes.map((cause) => {
                            const isSelected = selectedCauseId === cause.id;
                            if (cause.id === "other" && isSelected) {
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
                                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden lg:h-9 lg:w-9 min-[90rem]:h-11 min-[90rem]:w-11">
                                    <CldImage
                                      src={cause.iconSrc}
                                      alt=""
                                      width={44}
                                      height={44}
                                      unoptimized
                                      className="h-full w-full object-contain"
                                    />
                                  </span>
                                  <span
                                    className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1rem] leading-none font-[600] text-[#060710] lg:text-[1.0625rem] min-[90rem]:text-[1.375rem]`}
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
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-3">
                        <h2
                          className={`${SEGOE_UI_CLASS} mt-4 text-[1.5rem] leading-7 font-[700] tracking-normal text-[#4a5558] lg:mt-5 lg:text-[1.75rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:text-[2.5rem] min-[90rem]:leading-[1.15]`}
                        >
                          {step2.question}
                        </h2>
                        <ul className="mt-4 flex flex-col gap-2 lg:mt-5 lg:gap-2.5 min-[90rem]:mt-8 min-[90rem]:gap-3">
                          {step2.reasons.map((reason) => {
                            const isSelected = selectedReasonId === reason.id;
                            if (
                              reason.id === "other-occasion" &&
                              isSelected
                            ) {
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
                                  onClick={() =>
                                    setSelectedReasonId(reason.id)
                                  }
                                  aria-pressed={isSelected}
                                  className={optionButtonClass(isSelected)}
                                >
                                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden lg:h-9 lg:w-9 min-[90rem]:h-11 min-[90rem]:w-11">
                                    <CldImage
                                      src={reason.iconSrc}
                                      alt=""
                                      width={44}
                                      height={44}
                                      unoptimized
                                      className="h-full w-full object-contain"
                                    />
                                  </span>
                                  <span
                                    className={`${SEGOE_UI_CLASS} min-w-0 flex-1 text-[1rem] leading-none font-[600] text-[#060710] lg:text-[1.0625rem] min-[90rem]:text-[1.375rem]`}
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
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-4">
                        <h2
                          className={`${SEGOE_UI_CLASS} mt-5 text-[1.75rem] leading-8 font-[700] tracking-normal text-[#4a5558] lg:mt-6 lg:text-[2rem] lg:leading-9 min-[90rem]:mt-8 min-[90rem]:text-[3rem] min-[90rem]:leading-none`}
                        >
                          {step3.title}
                        </h2>
                        <p
                          className={`${SEGOE_UI_CLASS} mt-2.5 max-w-[27.75rem] text-[1rem] leading-7 font-[400] text-[var(--Paragraph,#4a5558)] lg:mt-3 lg:text-[1.0625rem] lg:leading-8 min-[90rem]:text-[1.125rem]`}
                        >
                          {step3.subtitle}
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 lg:mt-6 lg:gap-x-6 lg:gap-y-6 min-[90rem]:mt-8 min-[90rem]:gap-x-8">
                          <label className="block">
                            <span className={fieldLabelClass}>
                              {step3.fields.fullName.label}
                              <span className="font-[900] text-[#4a5558]">
                                *
                              </span>
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
                          <div className="block">
                            <span className={fieldLabelClass}>
                              {step3.fields.mobile.label}
                              <span className="font-[900] text-[#4a5558]">
                                *
                              </span>
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
                          <label className="block">
                            <span className={fieldLabelClass}>
                              {step3.fields.email.label}
                              <span className="font-[900] text-[#4a5558]">
                                *
                              </span>
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
                          <label className="block">
                            <span className={fieldLabelClass}>
                              {step3.fields.city.label}
                              <span className="font-[900] text-[#4a5558]">
                                *
                              </span>
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
                                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#4A5558]"
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
                        <label className="mt-5 flex cursor-pointer items-start gap-3 lg:mt-6 min-[90rem]:mt-8">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-0.5 h-5 w-5 shrink-0 rounded border-[#d9e1e2] accent-[var(--Main-CTA-button,#02938c)]"
                          />
                          <span
                            className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] text-[#00000080] lg:text-[1rem]`}
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
                          className={`${SEGOE_UI_CLASS} pb-5 text-[0.9375rem] leading-6 text-[#E62B4F]`}
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
      </section>
    </>
  );
}
