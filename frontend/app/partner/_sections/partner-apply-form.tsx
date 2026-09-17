"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  PARTNER_APPLY,
  SEGOE_UI_CLASS,
  type PartnerApplyFocusId,
} from "@/constants";
import { submitNgoPartner } from "@/lib/api";
import { logger } from "@/lib/logger";

type FormStep = 1 | 2 | 3;

const optionButtonClass = (isSelected: boolean) =>
  `flex h-12 w-full items-center gap-3 rounded-xl border-2 px-3.5 text-left outline-none transition-[border-color,background-color,box-shadow] lg:h-[3.5rem] lg:gap-4 lg:rounded-2xl lg:px-4 min-[90rem]:h-[4.75rem] min-[90rem]:gap-5 min-[90rem]:px-5 focus-visible:border-[var(--Main-CTA-button,#00A3BE)] focus-visible:shadow-[0_0_0_1px_var(--Main-CTA-button,#00A3BE)] ${
    isSelected
      ? "border-[var(--Main-CTA-button,#00A3BE)] bg-[var(--brand-selected,#EAF7F3)]"
      : "border-[#E4E7EC] bg-[#FFFFFF] hover:border-[#B8C0CC]"
  }`;

const primaryBtnClass = `${SEGOE_UI_CLASS} inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--Main-CTA-button,#00A3BE)] px-5 text-[1rem] leading-none font-[700] text-[#FFFFFF] transition-opacity disabled:cursor-not-allowed disabled:opacity-40 md:h-11 md:w-auto md:min-w-[9.75rem] md:rounded-lg lg:h-12 lg:min-w-[10.5rem] min-[90rem]:h-[3.75rem] min-[90rem]:min-w-[11.25rem] min-[90rem]:text-[1.125rem]`;

const outlineBtnClass = `${SEGOE_UI_CLASS} inline-flex h-11 w-full items-center justify-center rounded-xl border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] text-[1rem] leading-none font-[700] text-[var(--Main-CTA-button,#00A3BE)] md:h-11 md:w-[9.75rem] md:rounded-lg md:border-2 lg:h-12 lg:w-[10.5rem] min-[90rem]:h-[3.75rem] min-[90rem]:w-[11.25rem] min-[90rem]:text-[1.125rem]`;

const fieldClass = `${SEGOE_UI_CLASS} champion-apply-field h-12 w-full rounded border border-[#BDBDBD] bg-[#F8F8F8] px-4 text-[1rem] text-[#212121] outline-none placeholder:text-[#98A2B3] focus:border-[#BDBDBD] focus:outline-none focus:ring-0 md:h-12 lg:h-14 min-[90rem]:h-16`;

const fieldLabelClass = `${SEGOE_UI_CLASS} text-[1rem] leading-none font-[400] text-[#212121] md:text-[1.0625rem] lg:text-[1.125rem] min-[90rem]:text-[1.25rem]`;

const footerBarClass =
  "mt-auto flex w-full shrink-0 flex-row flex-wrap items-center justify-end gap-3 border-t border-[#E4E7EC] bg-[#FFFFFF] pt-2.5 pb-2.5 md:gap-4 md:pt-3 md:pb-3 lg:pt-4 lg:pb-4 min-[90rem]:pt-5 min-[90rem]:pb-5";

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
      className={`relative w-full border border-[var(--Main-CTA-button,#00A3BE)] bg-[#FFFFFF] ${
        compact
          ? "rounded-xl px-3.5 pt-4 pb-3"
          : "rounded-2xl px-4 pt-5 pb-4 sm:px-5 min-[90rem]:min-h-[4.75rem] min-[90rem]:px-5 min-[90rem]:pt-5 min-[90rem]:pb-4"
      }`}
    >
      <span
        className={`${SEGOE_UI_CLASS} absolute -top-2.5 left-3.5 bg-[#FFFFFF] px-1.5 text-[0.75rem] leading-none font-[600] text-[var(--Main-CTA-button,#00A3BE)] sm:left-5 sm:text-[0.875rem]`}
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
        className={`${SEGOE_UI_CLASS} w-full border-0 bg-transparent font-[400] text-[#212121] outline-none placeholder:text-[#98A2B3] ${
          compact
            ? "text-[1rem] leading-6"
            : "text-[1.125rem] leading-7 sm:text-[1.25rem] sm:leading-8 min-[90rem]:text-[1.375rem]"
        }`}
      />
    </div>
  );
}

export default function PartnerApplyForm() {
  const { title, mobileTitle, subtitle, steps, step1, step2, thanks } =
    PARTNER_APPLY;
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [selectedFocusId, setSelectedFocusId] =
    useState<PartnerApplyFocusId | null>(null);
  const [otherFocusDetail, setOtherFocusDetail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [country, setCountry] = useState(step2.countries[0] as string);
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<PhoneValue>();
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const progressStep = currentStep === 3 ? 2 : currentStep;
  const progressLabel =
    currentStep === 1 ? step1.progressLabel : step2.progressLabel;
  const mobileActiveStep = currentStep === 3 ? 2 : currentStep;

  const canGoStep1 =
    selectedFocusId !== null &&
    (selectedFocusId !== "other" || otherFocusDetail.trim().length > 0);

  const canSubmit =
    organizationName.trim().length > 1 &&
    country.length > 0 &&
    contactPerson.trim().length > 1 &&
    Boolean(phone && isValidPhoneNumber(phone)) &&
    email.includes("@") &&
    agreed;

  const handleSubmit = async () => {
    if (!canSubmit || !selectedFocusId || !phone) return;

    setSubmitError(null);
    setIsSubmitting(true);
    try {
      await submitNgoPartner({
        organizationName: organizationName.trim(),
        country,
        contactPerson: contactPerson.trim(),
        email: email.trim(),
        phone,
        selectedFocusId,
        ...(selectedFocusId === "other"
          ? { otherFocusDetail: otherFocusDetail.trim() }
          : {}),
        agreed: true,
      });
      setCurrentStep(3);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setSubmitError(message);
      logger.error("NGO partner apply failed", { message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const focusList = (
    <ul className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
      {step1.focuses.map((focus) => {
        const isSelected = selectedFocusId === focus.id;
        if (focus.id === "other" && isSelected) {
          return (
            <li key={focus.id}>
              <OtherDetailField
                label={focus.label}
                value={otherFocusDetail}
                onChange={setOtherFocusDetail}
                placeholder={step1.otherPlaceholder}
                compact
              />
            </li>
          );
        }
        return (
          <li key={focus.id}>
            <ApplyOptionCard
              selected={isSelected}
              label={focus.label}
              iconSrc={focus.iconSrc}
              onClick={() => setSelectedFocusId(focus.id)}
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
        autoComplete="organization"
        value={organizationName}
        onChange={(e) => setOrganizationName(e.target.value)}
        placeholder={`${step2.fields.organizationName.label}*`}
        className={`${applyMobileFieldClass} apply-field-mobile`}
      />
      <span className="relative block">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`${applyMobileFieldClass} apply-field-mobile appearance-none pr-11`}
        >
          {step2.countries.map((countryOption) => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#667085]"
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
      <input
        type="text"
        maxLength={100}
        autoComplete="name"
        value={contactPerson}
        onChange={(e) => setContactPerson(e.target.value)}
        placeholder={`${step2.fields.contactPerson.label}*`}
        className={`${applyMobileFieldClass} apply-field-mobile`}
      />
      <PhoneInput
        international
        defaultCountry="IN"
        countryCallingCodeEditable={false}
        value={phone}
        onChange={setPhone}
        placeholder={`${step2.fields.phone.label}*`}
        className={`${SEGOE_UI_CLASS} champion-phone-input champion-phone-input-mobile`}
      />
      <input
        type="email"
        maxLength={100}
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={`${step2.fields.email.label}*`}
        className={`${applyMobileFieldClass} apply-field-mobile`}
      />
      <label className="mt-1 flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#D0D5DD] accent-[var(--Main-CTA-button,#00A3BE)]"
        />
        <span
          className={`${SEGOE_UI_CLASS} text-[0.8125rem] leading-5 font-[400] text-[#667085] sm:text-[0.875rem] sm:leading-5`}
        >
          {step2.agreeLabel}
        </span>
      </label>
      {submitError ? (
        <p
          role="alert"
          className={`${SEGOE_UI_CLASS} text-[0.875rem] leading-5 text-[#B42318]`}
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
          onClick={() => setCurrentStep(2)}
          className={applyMobilePrimaryBtnClass}
        >
          {step1.nextLabel}
        </button>
      </div>
    ) : (
      <div className={applyMobileFooterClass}>
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className={applyMobileOutlineBtnClass}
          disabled={isSubmitting}
        >
          {step2.previousLabel}
        </button>
        <button
          type="button"
          disabled={!canSubmit || isSubmitting}
          onClick={() => void handleSubmit()}
          className={applyMobilePrimaryBtnClass}
        >
          {isSubmitting ? "Submitting…" : step2.submitLabel}
        </button>
      </div>
    );

  return (
    <>
      {/* Phone only — Figma mobile chrome */}
      <div className="fixed inset-0 z-10 flex min-h-0 min-w-0 flex-col overflow-hidden bg-[#FFFFFF] md:hidden">
        {currentStep === 3 ? (
          <ApplyMobileThanks
            title={thanks.title}
            eyebrow={thanks.eyebrow}
            body={thanks.body}
            homeLabel={thanks.homeLabel}
            homeHref={thanks.homeHref}
          />
        ) : (
          <ApplyFormMobileChrome
            title={mobileTitle}
            backHref="/"
            steps={steps}
            activeStep={mobileActiveStep}
            footer={mobileFooter}
          >
            {currentStep === 1 ? (
              <>
                <h2
                  className={`${SEGOE_UI_CLASS} text-[1.375rem] leading-7 font-[700] tracking-normal text-[#212121] sm:text-[1.5rem] sm:leading-8`}
                >
                  {step1.questionLine1} {step1.questionLine2}
                </h2>
                {focusList}
              </>
            ) : null}

            {currentStep === 2 ? (
              <>
                <h2
                  className={`${SEGOE_UI_CLASS} text-[1.375rem] leading-7 font-[700] tracking-normal text-[#212121] sm:text-[1.5rem] sm:leading-8`}
                >
                  {step2.title}
                </h2>
                <div className="mt-5 sm:mt-6">{mobileDetails}</div>
              </>
            ) : null}
          </ApplyFormMobileChrome>
        )}
      </div>

      {/* Desktop — full viewport so sidebar fill + border reach the bottom */}
      <section className="fixed inset-0 z-10 hidden min-h-0 min-w-0 overflow-hidden bg-[#FFFFFF] md:flex">
        <aside className="flex h-full w-[min(17.5rem,28%)] min-w-0 shrink-0 flex-col overflow-x-hidden overflow-y-auto border-r border-[#E8E8E8] bg-[#F2FBF9] px-4 pt-5 pb-5 sm:px-5 lg:w-[min(20rem,26%)] lg:px-6 lg:pt-7 lg:pb-7 min-[90rem]:w-[30.125rem] min-[90rem]:px-16 min-[90rem]:pt-10 min-[90rem]:pb-10">
            <Link href="/" className="inline-flex w-fit shrink-0 items-center">
              <Image
                src="/images/Frame 2071857645.png"
                alt="The Giving Circle"
                width={220}
                height={48}
                className="h-8 w-auto lg:h-9 min-[90rem]:h-12"
                priority
              />
            </Link>

            <h1 className="mt-4 shrink-0 font-['Georgia'] text-[1.375rem] leading-7 font-[700] tracking-normal text-[#1D2D23] lg:mt-5 lg:text-[1.625rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:w-[15.8125rem] min-[90rem]:text-[2.125rem] min-[90rem]:leading-[2.75rem]">
              {title}
            </h1>
            <p
              className={`${SEGOE_UI_CLASS} mt-2 max-w-[22rem] shrink-0 text-[0.8125rem] leading-5 font-[400] text-[var(--Paragraph,#5F6D64)] lg:mt-2.5 lg:text-[0.875rem] lg:leading-6 min-[90rem]:mt-3 min-[90rem]:w-[19.25rem] min-[90rem]:text-[0.9375rem] min-[90rem]:leading-7`}
            >
              {subtitle}
            </p>

            <ol className="mt-5 flex flex-col lg:mt-6 min-[90rem]:mt-10">
              {steps.map((step, index) => {
                const isActive = currentStep !== 3 && step.number === currentStep;
                const isComplete = currentStep === 3 || step.number < currentStep;
                const isLast = index === steps.length - 1;
                const titleActive = isActive || isComplete;

                return (
                  <li key={step.number} className="flex min-w-0 gap-3">
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
                    <div
                      className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-4 min-[90rem]:pb-5"}`}
                    >
                      <p
                        className={`${SEGOE_UI_CLASS} flex h-8 items-center text-[0.9375rem] leading-none lg:text-[1rem] min-[90rem]:text-[1.125rem] ${
                          titleActive
                            ? "font-[700] text-[var(--Main-CTA-button,#00A3BE)]"
                            : "font-[600] text-[#00000080]"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`${SEGOE_UI_CLASS} mt-0.5 w-full text-[0.8125rem] leading-5 font-[400] text-[var(--Paragraph,#5F6D64)] lg:text-[0.875rem] lg:leading-6 min-[90rem]:text-[0.9375rem]`}
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
            {currentStep === 3 ? (
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto bg-[#FFFFFF] px-12 py-10 min-[90rem]:px-[6.25rem]">
                <div className="flex w-full max-w-[45rem] flex-col items-center min-[90rem]:w-[51rem] min-[90rem]:max-w-[51rem]">
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
                    className={`${SEGOE_UI_CLASS} mt-6 text-center text-[3rem] leading-none font-[700] text-[#212121]`}
                  >
                    {thanks.title}
                  </h2>
                  <p
                    className={`${SEGOE_UI_CLASS} mt-6 text-center text-[1.5rem] leading-none font-[700] tracking-[0.5px] text-[var(--Main-CTA-button,#00A3BE)]`}
                  >
                    {thanks.eyebrow}
                  </p>
                  <p
                    className={`${SEGOE_UI_CLASS} mt-4 max-w-[32.375rem] text-center text-[1.125rem] leading-9 font-[400] text-[#212121]`}
                  >
                    {thanks.body}
                  </p>
                  <Link
                    href={thanks.homeHref}
                    className={`${SEGOE_UI_CLASS} mt-10 inline-flex items-center gap-2 text-[1rem] font-[600] text-[var(--Main-CTA-button,#00A3BE)]`}
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
                      className={`${SEGOE_UI_CLASS} text-[0.875rem] leading-5 font-[700] text-[var(--Brand-Green-Teal,#00A98F)] lg:text-[0.9375rem] lg:leading-6 min-[90rem]:text-[1.125rem] min-[90rem]:leading-8`}
                    >
                      {progressLabel}
                    </p>
                    <div
                      className="mt-1.5 h-2.5 w-full overflow-hidden rounded-2xl bg-[#EDE8E3] lg:mt-2 lg:h-3 min-[90rem]:mt-2.5 min-[90rem]:h-4"
                      role="progressbar"
                      aria-valuenow={progressStep}
                      aria-valuemin={1}
                      aria-valuemax={2}
                      aria-label={progressLabel}
                    >
                      <div
                        className="h-full rounded-2xl bg-[var(--Brand-Green-Teal,#00A98F)] transition-[width] duration-300 ease-out"
                        style={{ width: `${(progressStep / 2) * 100}%` }}
                      />
                    </div>
                  </div>

                  {currentStep === 1 ? (
                    <>
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-3">
                        <h2
                          className={`${SEGOE_UI_CLASS} mt-4 text-[1.5rem] leading-7 font-[700] tracking-normal text-[#212121] lg:mt-5 lg:text-[1.75rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:text-[2.5rem] min-[90rem]:leading-[1.15]`}
                        >
                          {step1.questionLine1}
                          <br />
                          {step1.questionLine2}
                        </h2>
                        <ul className="mt-4 flex flex-col gap-2 lg:mt-5 lg:gap-2.5 min-[90rem]:mt-8 min-[90rem]:gap-3">
                          {step1.focuses.map((focus) => {
                            const isSelected = selectedFocusId === focus.id;
                            if (focus.id === "other" && isSelected) {
                              return (
                                <li key={focus.id}>
                                  <OtherDetailField
                                    label={focus.label}
                                    value={otherFocusDetail}
                                    onChange={setOtherFocusDetail}
                                    placeholder={step1.otherPlaceholder}
                                  />
                                </li>
                              );
                            }
                            return (
                              <li key={focus.id}>
                                <button
                                  type="button"
                                  onClick={() => setSelectedFocusId(focus.id)}
                                  aria-pressed={isSelected}
                                  className={optionButtonClass(isSelected)}
                                >
                                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden lg:h-9 lg:w-9 min-[90rem]:h-11 min-[90rem]:w-11">
                                    <Image
                                      src={focus.iconSrc}
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
                                    {focus.label}
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
                          onClick={() => setCurrentStep(2)}
                          className={primaryBtnClass}
                        >
                          {step1.nextLabel}
                        </button>
                      </div>
                    </>
                  ) : null}

                  {currentStep === 2 ? (
                    <>
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-4">
                        <h2
                          className={`${SEGOE_UI_CLASS} mt-5 text-[1.75rem] leading-8 font-[700] tracking-normal text-[#212121] lg:mt-6 lg:text-[2rem] lg:leading-9 min-[90rem]:mt-8 min-[90rem]:text-[3rem] min-[90rem]:leading-none`}
                        >
                          {step2.title}
                        </h2>
                        <p
                          className={`${SEGOE_UI_CLASS} mt-2.5 max-w-[32rem] text-[1rem] leading-7 font-[400] text-[var(--Paragraph,#5F6D64)] lg:mt-3 lg:text-[1.0625rem] lg:leading-8 min-[90rem]:text-[1.125rem]`}
                        >
                          {step2.subtitle}
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 lg:mt-6 lg:gap-x-6 lg:gap-y-6 min-[90rem]:mt-8 min-[90rem]:gap-x-8">
                          <label className="col-span-2 block">
                            <span className={fieldLabelClass}>
                              {step2.fields.organizationName.label}
                              <span className="font-[900] text-[#212121]">
                                *
                              </span>
                            </span>
                            <input
                              type="text"
                              maxLength={100}
                              autoComplete="organization"
                              value={organizationName}
                              onChange={(e) =>
                                setOrganizationName(e.target.value)
                              }
                              placeholder={
                                step2.fields.organizationName.placeholder
                              }
                              className={`${fieldClass} mt-2`}
                            />
                          </label>
                          <label className="block">
                            <span className={fieldLabelClass}>
                              {step2.fields.country.label}
                              <span className="font-[900] text-[#212121]">
                                *
                              </span>
                            </span>
                            <span className="relative mt-2 block">
                              <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className={`${fieldClass} appearance-none pr-11`}
                              >
                                {step2.countries.map((countryOption) => (
                                  <option
                                    key={countryOption}
                                    value={countryOption}
                                  >
                                    {countryOption}
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
                          <label className="block">
                            <span className={fieldLabelClass}>
                              {step2.fields.contactPerson.label}
                              <span className="font-[900] text-[#212121]">
                                *
                              </span>
                            </span>
                            <input
                              type="text"
                              maxLength={100}
                              autoComplete="name"
                              value={contactPerson}
                              onChange={(e) =>
                                setContactPerson(e.target.value)
                              }
                              placeholder={
                                step2.fields.contactPerson.placeholder
                              }
                              className={`${fieldClass} mt-2`}
                            />
                          </label>
                          <div className="block">
                            <span className={fieldLabelClass}>
                              {step2.fields.phone.label}
                              <span className="font-[900] text-[#212121]">
                                *
                              </span>
                            </span>
                            <PhoneInput
                              international
                              defaultCountry="IN"
                              countryCallingCodeEditable={false}
                              value={phone}
                              onChange={setPhone}
                              placeholder={step2.fields.phone.placeholder}
                              className={`${SEGOE_UI_CLASS} champion-phone-input`}
                            />
                          </div>
                          <label className="block">
                            <span className={fieldLabelClass}>
                              {step2.fields.email.label}
                              <span className="font-[900] text-[#212121]">
                                *
                              </span>
                            </span>
                            <input
                              type="email"
                              maxLength={100}
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={step2.fields.email.placeholder}
                              className={`${fieldClass} mt-2`}
                            />
                          </label>
                        </div>
                        <label className="mt-5 flex cursor-pointer items-start gap-3 lg:mt-6 min-[90rem]:mt-8">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-0.5 h-5 w-5 shrink-0 rounded border-[#D0D5DD] accent-[var(--Main-CTA-button,#00A3BE)]"
                          />
                          <span
                            className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 font-[400] text-[#00000080] lg:text-[1rem]`}
                          >
                            {step2.agreeLabel}
                          </span>
                        </label>
                      </div>
                      <div className={footerBarClass}>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className={outlineBtnClass}
                          disabled={isSubmitting}
                        >
                          {step2.previousLabel}
                        </button>
                        <button
                          type="button"
                          disabled={!canSubmit || isSubmitting}
                          onClick={() => void handleSubmit()}
                          className={primaryBtnClass}
                        >
                          {isSubmitting ? "Submitting…" : step2.submitLabel}
                        </button>
                      </div>
                      {submitError ? (
                        <p
                          role="alert"
                          className={`${SEGOE_UI_CLASS} shrink-0 pb-3 text-[0.9375rem] leading-6 text-[#B42318]`}
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
