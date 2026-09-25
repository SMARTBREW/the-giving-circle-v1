"use client";

import CldImage from "@/components/cld-image";
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
  applyMobileFieldClass,
  applyMobileFooterClass,
  applyMobilePrimaryBtnClass,
} from "@/components/apply-form";
import { CONTACT_APPLY, SEGOE_UI_CLASS } from "@/constants";
import { submitContact } from "@/lib/api";
import { logger } from "@/lib/logger";

const primaryBtnClass = `${SEGOE_UI_CLASS} inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--Main-CTA-button,#02938c)] px-5 text-[1rem] leading-none font-[700] text-[#FFFFFF] transition-opacity disabled:cursor-not-allowed disabled:opacity-40 md:h-11 md:w-auto md:min-w-[9.75rem] md:rounded-lg lg:h-12 lg:min-w-[10.5rem] min-[90rem]:h-[3.75rem] min-[90rem]:min-w-[11.25rem] min-[90rem]:text-[1.125rem]`;

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

export default function ContactApplyForm() {
  const { title, mobileTitle, subtitle, steps, form, thanks } = CONTACT_APPLY;
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<PhoneValue>();
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const phoneOk = !phone || isValidPhoneNumber(phone);
  const canSubmit =
    name.trim().length > 1 &&
    emailOk &&
    phoneOk &&
    message.trim().length >= 10 &&
    agreed &&
    !isSubmitting;

  async function onSubmit() {
    if (!canSubmit) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitContact({
        name: name.trim(),
        email: email.trim(),
        phone: phone || undefined,
        message: message.trim(),
        agree: true,
      });
      setDone(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      logger.error("Contact form failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  const fields = (
    <div className="flex flex-col gap-4 sm:gap-5 min-[90rem]:gap-6">
      <div>
        <label htmlFor="contact-name" className={fieldLabelClass}>
          {form.nameLabel} *
        </label>
        <input
          id="contact-name"
          type="text"
          maxLength={50}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={form.namePlaceholder}
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={fieldLabelClass}>
          {form.emailLabel} *
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={form.emailPlaceholder}
          className={`${fieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className={fieldLabelClass}>
          {form.phoneLabel}
        </label>
        <PhoneInput
          id="contact-phone"
          international
          defaultCountry="IN"
          value={phone}
          onChange={setPhone}
          placeholder={form.phonePlaceholder}
          className={`${SEGOE_UI_CLASS} PhoneInput champion-apply-field mt-2 h-12 w-full rounded border border-[#d9e1e2] bg-[#eef2f2] px-3 text-[1rem] text-[#4a5558] md:h-12 lg:h-14 min-[90rem]:h-16`}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={fieldLabelClass}>
          {form.messageLabel} * ({message.length}/5000)
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={form.messagePlaceholder}
          className={`${SEGOE_UI_CLASS} champion-apply-field mt-2 w-full resize-y rounded border border-[#d9e1e2] bg-[#eef2f2] px-4 py-3 text-[1rem] text-[#4a5558] outline-none placeholder:text-[#4A5558] focus:border-[#d9e1e2] focus:outline-none focus:ring-0 min-h-[8rem]`}
        />
      </div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--Main-CTA-button,#02938c)]"
        />
        <span className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 text-[#4a5558]`}>
          {form.agreeLabel}
        </span>
      </label>
      {submitError ? (
        <p className={`${SEGOE_UI_CLASS} text-[0.9375rem] text-[#e62b4f]`}>
          {submitError}
        </p>
      ) : null}
    </div>
  );

  const mobileFields = (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="m-contact-name" className={fieldLabelClass}>
          {form.nameLabel} *
        </label>
        <input
          id="m-contact-name"
          type="text"
          maxLength={50}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={form.namePlaceholder}
          className={`${applyMobileFieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="m-contact-email" className={fieldLabelClass}>
          {form.emailLabel} *
        </label>
        <input
          id="m-contact-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={form.emailPlaceholder}
          className={`${applyMobileFieldClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="m-contact-phone" className={fieldLabelClass}>
          {form.phoneLabel}
        </label>
        <PhoneInput
          id="m-contact-phone"
          international
          defaultCountry="IN"
          value={phone}
          onChange={setPhone}
          placeholder={form.phonePlaceholder}
          className={`${SEGOE_UI_CLASS} PhoneInput champion-apply-field mt-2 h-12 w-full rounded-xl border border-[#d9e1e2] bg-[#FFFFFF] px-3 text-[1rem] text-[#4a5558] sm:h-14`}
        />
      </div>
      <div>
        <label htmlFor="m-contact-message" className={fieldLabelClass}>
          {form.messageLabel} * ({message.length}/5000)
        </label>
        <textarea
          id="m-contact-message"
          rows={5}
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={form.messagePlaceholder}
          className={`${SEGOE_UI_CLASS} champion-apply-field mt-2 min-h-[8rem] w-full resize-y rounded-xl border border-[#d9e1e2] bg-[#FFFFFF] px-4 py-3 text-[1rem] text-[#4a5558] outline-none placeholder:text-[#4A5558]`}
        />
      </div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--Main-CTA-button,#02938c)]"
        />
        <span className={`${SEGOE_UI_CLASS} text-[0.9375rem] leading-6 text-[#4a5558]`}>
          {form.agreeLabel}
        </span>
      </label>
      {submitError ? (
        <p className={`${SEGOE_UI_CLASS} text-[0.9375rem] text-[#e62b4f]`}>
          {submitError}
        </p>
      ) : null}
    </div>
  );

  return (
    <>
      {/* Mobile */}
      <div className="flex h-full min-h-0 w-full flex-col overflow-hidden md:hidden">
        {done ? (
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
            activeStep={1}
            footer={
              <div className={applyMobileFooterClass}>
                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={() => void onSubmit()}
                  className={applyMobilePrimaryBtnClass}
                >
                  {isSubmitting ? form.submittingLabel : form.submitLabel}
                </button>
              </div>
            }
          >
            <h2
              className={`${SEGOE_UI_CLASS} text-[1.375rem] leading-7 font-[700] tracking-normal text-[#4a5558] sm:text-[1.5rem] sm:leading-8`}
            >
              {form.title}
            </h2>
            <div className="mt-5 sm:mt-6">{mobileFields}</div>
          </ApplyFormMobileChrome>
        )}
      </div>

      {/* Desktop */}
      <section className="fixed inset-0 z-10 hidden min-h-0 min-w-0 overflow-hidden bg-[#FFFFFF] md:flex">
        <aside className="flex h-full w-[min(17.5rem,28%)] min-w-0 shrink-0 flex-col overflow-x-hidden overflow-y-auto border-r border-[#D9E1E2] bg-[#E8F7F8] px-4 pt-5 pb-5 sm:px-5 lg:w-[min(20rem,26%)] lg:px-6 lg:pt-7 lg:pb-7 min-[90rem]:w-[30.125rem] min-[90rem]:px-16 min-[90rem]:pt-10 min-[90rem]:pb-10">
          <Link href="/" className="inline-flex w-fit shrink-0 items-center">
            <CldImage
              src="/images/Frame 2071857645.png"
              alt="The Giving Circle"
              width={220}
              height={48}
              className="h-8 w-auto lg:h-9 min-[90rem]:h-12"
              priority
            />
          </Link>

          <h1 className="mt-4 shrink-0 font-['Georgia'] text-[1.375rem] leading-7 font-[700] tracking-normal text-[#1C2426] lg:mt-5 lg:text-[1.625rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:w-[15.8125rem] min-[90rem]:text-[2.125rem] min-[90rem]:leading-[2.75rem]">
            {title}
          </h1>
          <p
            className={`${SEGOE_UI_CLASS} mt-2 max-w-[22rem] shrink-0 text-[0.8125rem] leading-5 font-[400] text-[var(--Paragraph,#4a5558)] lg:mt-2.5 lg:text-[0.875rem] lg:leading-6 min-[90rem]:mt-3 min-[90rem]:w-[19.25rem] min-[90rem]:text-[0.9375rem] min-[90rem]:leading-7`}
          >
            {subtitle}
          </p>

          <ol className="mt-5 flex flex-col lg:mt-6 min-[90rem]:mt-10">
            {steps.map((step, index) => {
              const isComplete = done;
              const isActive = !done;
              const isLast = index === steps.length - 1;
              const titleActive = isActive || isComplete;

              return (
                <li key={step.number} className="flex min-w-0 gap-3">
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.9375rem] leading-none font-[700] ${
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
                        className="my-1 min-h-[1.75rem] w-0 flex-1 border-l-2 border-dotted border-[#d9e1e2]"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 pb-0">
                    <p
                      className={`${SEGOE_UI_CLASS} flex h-8 items-center text-[0.9375rem] leading-none lg:text-[1rem] min-[90rem]:text-[1.125rem] ${
                        titleActive
                          ? "font-[700] text-[var(--Main-CTA-button,#02938c)]"
                          : "font-[600] text-[#00000080]"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`${SEGOE_UI_CLASS} mt-0.5 w-full text-[0.8125rem] leading-5 font-[400] text-[var(--Paragraph,#4a5558)] lg:text-[0.875rem] lg:leading-6 min-[90rem]:text-[0.9375rem]`}
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
          {done ? (
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto bg-[#FFFFFF] px-12 py-10 min-[90rem]:px-[6.25rem]">
              <div className="flex w-full max-w-[45rem] flex-col items-center min-[90rem]:w-[51rem] min-[90rem]:max-w-[51rem]">
                <span
                  className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-[var(--Brand-Green-Teal,#02938c)] min-[90rem]:h-[6.25rem] min-[90rem]:w-[6.25rem]"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(2,147,140,0.18) 0%, rgba(2,147,140,0.07) 60%, rgba(2,147,140,0.03) 100%)",
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
                      stroke="#02938c"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2
                  className={`${SEGOE_UI_CLASS} mt-6 text-center text-[3rem] leading-none font-[700] text-[#4a5558]`}
                >
                  {thanks.title}
                </h2>
                <p
                  className={`${SEGOE_UI_CLASS} mt-6 text-center text-[1.5rem] leading-none font-[700] tracking-[0.5px] text-[var(--Main-CTA-button,#02938c)]`}
                >
                  {thanks.eyebrow}
                </p>
                <p
                  className={`${SEGOE_UI_CLASS} mt-4 max-w-[32.375rem] text-center text-[1.125rem] leading-9 font-[400] text-[#4a5558]`}
                >
                  {thanks.body}
                </p>
                <Link
                  href={thanks.homeHref}
                  className={`${SEGOE_UI_CLASS} mt-10 inline-flex items-center gap-2 text-[1rem] font-[600] text-[var(--Main-CTA-button,#02938c)]`}
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
                    {form.progressLabel}
                  </p>
                  <div
                    className="mt-1.5 h-2.5 w-full overflow-hidden rounded-2xl bg-[#EEF2F2] lg:mt-2 lg:h-3 min-[90rem]:mt-2.5 min-[90rem]:h-4"
                    role="progressbar"
                    aria-valuenow={1}
                    aria-valuemin={1}
                    aria-valuemax={1}
                    aria-label={form.progressLabel}
                  >
                    <div className="h-full w-full rounded-2xl bg-[var(--Brand-Green-Teal,#02938c)]" />
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-3">
                  <h2
                    className={`${SEGOE_UI_CLASS} mt-4 text-[1.5rem] leading-7 font-[700] tracking-normal text-[#4a5558] lg:mt-5 lg:text-[1.75rem] lg:leading-8 min-[90rem]:mt-8 min-[90rem]:text-[2.5rem] min-[90rem]:leading-[1.15]`}
                  >
                    {form.title}
                  </h2>
                  <div className="mt-4 lg:mt-5 min-[90rem]:mt-8">{fields}</div>
                </div>

                <div className={footerBarClass}>
                  <button
                    type="button"
                    disabled={!canSubmit}
                    onClick={() => void onSubmit()}
                    className={primaryBtnClass}
                  >
                    {isSubmitting ? form.submittingLabel : form.submitLabel}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
