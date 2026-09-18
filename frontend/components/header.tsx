"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import CtaButton from "@/components/cta-button";
import {
  GET_INVOLVED_ITEM_CLASS,
  GET_INVOLVED_LINKS,
  NAV_LINKS,
  SEGOE_UI_CLASS,
} from "@/constants";

const NAV_LINK_CLASS = `${SEGOE_UI_CLASS} whitespace-nowrap px-1.5 py-2 text-[0.6875rem] font-[600] text-[#4a5558] transition-colors hover:text-[var(--Dark-Charcoal,#1c2426)] lg:px-2 lg:text-[0.8125rem] min-[90rem]:px-3 min-[90rem]:text-[0.9375rem]`;

const NAV_CTA_CLASS =
  "h-9 !rounded-lg !bg-[#e62b4f] px-3 !text-[0.6875rem] sm:h-9 sm:px-3.5 sm:!text-[0.75rem] lg:h-10 lg:px-4 lg:!text-[0.8125rem] min-[90rem]:h-12 min-[90rem]:px-5 min-[90rem]:!text-[0.9375rem]";

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Header() {
  const involvedId = useId();
  const mobileInvolvedId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInvolvedOpen, setIsInvolvedOpen] = useState(false);
  const [isMobileInvolvedOpen, setIsMobileInvolvedOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsInvolvedOpen(false);
        setIsMobileInvolvedOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-involved-menu]")) {
        setIsInvolvedOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMobile = () => {
    setIsOpen(false);
    setIsMobileInvolvedOpen(false);
  };

  return (
    <>
      <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 z-50 transition-[top] duration-500 ${
        scrolled ? "top-0 sm:top-2.5 md:top-3" : "top-0 sm:top-3.5 md:top-4"
      }`}
    >
      <div className="mx-auto w-full max-w-[86rem] px-0 sm:px-5 md:px-7 lg:px-10 min-[90rem]:px-12">
        <div
          className={`border-b border-[#d9e1e2] bg-[#FFFFFF] px-4 py-2.5 transition-shadow duration-500 sm:rounded-xl sm:border sm:border-[#d9e1e2] sm:px-6 sm:py-3 sm:shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:rounded-2xl md:px-7 md:py-3.5 lg:px-7 lg:py-3.5 min-[90rem]:px-8 min-[90rem]:py-4 ${
            scrolled ? "sm:shadow-[0_16px_48px_rgba(0,0,0,0.14)]" : ""
          }`}
        >
          <nav
            className="flex items-center justify-between gap-3 min-[56.25rem]:gap-4 lg:gap-5 min-[90rem]:gap-6"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="block h-10 w-[10.5rem] shrink-0 sm:h-11 sm:w-[11.75rem] md:h-11 md:w-[12rem] min-[56.25rem]:h-10 min-[56.25rem]:w-[10.75rem] lg:h-11 lg:w-[12.5rem] min-[90rem]:h-[3.75rem] min-[90rem]:w-[16.5rem]"
              onClick={closeMobile}
            >
              <Image
                src="/images/gc-logo-final.png"
                alt="The Giving Circle"
                width={1893}
                height={439}
                className="h-full w-full object-contain object-left"
                priority
              />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 min-[56.25rem]:flex lg:gap-1.5 min-[90rem]:gap-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={NAV_LINK_CLASS}>
                  {link.label}
                </Link>
              ))}

              <div className="relative" data-involved-menu>
                <button
                  type="button"
                  className={`${NAV_LINK_CLASS} inline-flex items-center gap-1`}
                  aria-expanded={isInvolvedOpen}
                  aria-haspopup="true"
                  aria-controls={involvedId}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsInvolvedOpen((open) => !open);
                  }}
                >
                  Get Involved
                  <ChevronIcon open={isInvolvedOpen} />
                </button>
                {isInvolvedOpen ? (
                  <div
                    id={involvedId}
                    className="absolute top-full right-0 z-50 mt-2 flex w-[16.5625rem] flex-col gap-6 rounded-xl border border-[#d9e1e2] bg-[#FFFFFF] py-4 pr-4 pl-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)] min-[56.25rem]:right-auto min-[56.25rem]:left-0"
                  >
                    {GET_INVOLVED_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={GET_INVOLVED_ITEM_CLASS}
                        onClick={() => setIsInvolvedOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="hidden shrink-0 min-[56.25rem]:block">
              <CtaButton
                href="/champion/apply"
                className={NAV_CTA_CLASS}
                labelClassName="!text-[length:inherit] font-[600]"
              >
                Become a Cause Champion
              </CtaButton>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#4a5558] transition-colors hover:bg-[#eef2f2] sm:h-11 sm:w-11 min-[56.25rem]:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              <MenuIcon open={isOpen} />
            </button>
          </nav>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out min-[56.25rem]:hidden ${
              isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 border-t border-[#D9E1E2] pt-3 pb-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${SEGOE_UI_CLASS} rounded-lg px-3 py-2.5 text-[0.9375rem] font-[600] text-[#4a5558]`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                className={`${SEGOE_UI_CLASS} flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[0.9375rem] font-[600] text-[#4a5558]`}
                aria-expanded={isMobileInvolvedOpen}
                aria-controls={mobileInvolvedId}
                onClick={() => setIsMobileInvolvedOpen((open) => !open)}
              >
                Get Involved
                <ChevronIcon open={isMobileInvolvedOpen} />
              </button>
              <div
                id={mobileInvolvedId}
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                  isMobileInvolvedOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="flex flex-col gap-1 pb-2 pl-4">
                  {GET_INVOLVED_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`${SEGOE_UI_CLASS} block rounded-lg px-3 py-2 text-[0.875rem] font-[400] text-[#4a5558]`}
                        onClick={closeMobile}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 px-1">
                <CtaButton
                  href="/champion/apply"
                  className={`${NAV_CTA_CLASS} h-11 w-full sm:h-11`}
                  labelClassName="!text-[length:inherit] font-[600]"
                  onClick={closeMobile}
                >
                  Become a Cause Champion
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
    </>
  );
}
