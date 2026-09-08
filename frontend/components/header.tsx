"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import CtaButton from "@/components/cta-button";
import {
  GET_INVOLVED_ITEM_CLASS,
  GET_INVOLVED_LINKS,
  NAV_ITEM_CLASS,
  NAV_LINKS,
  SEGOE_UI_CLASS,
} from "@/constants";

export default function Header() {
  const drawerId = useId();
  const involvedId = useId();
  const drawerInvolvedId = useId();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerInvolvedOpen, setIsDrawerInvolvedOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsDrawerInvolvedOpen(false);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isDrawerOpen]);

  const mobileDrawer =
    hasMounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${
          isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isDrawerOpen}
      >
        <button
          type="button"
          tabIndex={isDrawerOpen ? 0 : -1}
          aria-label="Close navigation menu"
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ease-out ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        />

        <div
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className={`absolute inset-y-0 right-0 flex w-[min(22.5rem,85%)] flex-col bg-[#FFFFFF] shadow-[-0.5rem_0_1.5rem_rgba(0,0,0,0.14)] transition-transform duration-300 ease-out will-change-transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-5 pt-5 pb-4">
            <Link
              href="/"
              className="block h-9 w-[9.75rem] shrink-0"
              tabIndex={isDrawerOpen ? 0 : -1}
              onClick={closeDrawer}
            >
              <Image
                src="/images/Frame 2071857645.png"
                alt="The Giving Circle"
                width={234}
                height={60}
                className="h-full w-full object-contain object-left"
              />
            </Link>
            <button
              type="button"
              tabIndex={isDrawerOpen ? 0 : -1}
              className="flex h-10 w-10 items-center justify-center text-[#000000]"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <svg
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-10">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-[#E0E0E0]">
                  <Link
                    href={link.href}
                    tabIndex={isDrawerOpen ? 0 : -1}
                    className={`${SEGOE_UI_CLASS} flex min-h-[3.5rem] items-center text-[1.125rem] leading-none font-[400] text-[#000000]`}
                    onClick={closeDrawer}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-b border-[#E0E0E0]">
                <button
                  type="button"
                  tabIndex={isDrawerOpen ? 0 : -1}
                  className={`${SEGOE_UI_CLASS} flex min-h-[3.5rem] w-full items-center justify-between gap-3 text-left text-[1.125rem] leading-none font-[400] text-[#000000]`}
                  aria-expanded={isDrawerInvolvedOpen}
                  aria-controls={drawerInvolvedId}
                  onClick={() => setIsDrawerInvolvedOpen((open) => !open)}
                >
                  Get Involved
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`shrink-0 transition-transform duration-200 ${
                      isDrawerInvolvedOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="#000000"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <div
                  id={drawerInvolvedId}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isDrawerInvolvedOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-4 pb-4 pl-5">
                    {GET_INVOLVED_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          tabIndex={isDrawerOpen ? 0 : -1}
                          className={`${SEGOE_UI_CLASS} block text-[1rem] leading-6 font-[400] text-[#212121]`}
                          onClick={closeDrawer}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <CtaButton
                href="/champion"
                className="h-12 w-full !rounded-[0.5rem] px-4"
                labelClassName="font-[600]"
                onClick={closeDrawer}
              >
                Become a Cause Champion
              </CtaButton>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full min-w-0 border-b border-[#BDBDBD] bg-[#FFFFFF] ${SEGOE_UI_CLASS}`}
      >
        <nav
          className="relative mx-auto flex h-16 w-full min-w-0 max-w-[90rem] items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 md:h-20 md:gap-4 md:px-8 lg:h-[5.5rem] lg:gap-3 lg:px-6 min-[90rem]:h-[6.25rem] min-[90rem]:gap-6 min-[90rem]:px-[6.25rem]"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="block h-10 w-[10.5rem] shrink-0 sm:h-11 sm:w-[12rem] md:h-12 md:w-[12.5rem] lg:h-11 lg:w-[11.25rem] min-[90rem]:h-[3.75rem] min-[90rem]:w-[14.625rem]"
          >
            <Image
              src="/images/Frame 2071857645.png"
              alt="The Giving Circle"
              width={234}
              height={60}
              className="h-full w-full object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-2.5 lg:flex lg:h-6 min-[90rem]:gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={NAV_ITEM_CLASS}>
                {link.label}
              </Link>
            ))}
            <div className="group relative h-6">
              <button
                type="button"
                className={`${NAV_ITEM_CLASS} inline-flex items-center gap-1`}
                aria-expanded={false}
                aria-haspopup="true"
                aria-controls={involvedId}
              >
                Get Involved
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2 4L6 8L10 4" stroke="#000000" strokeWidth="1.5" />
                </svg>
              </button>
              <div
                id={involvedId}
                className="absolute top-full right-0 z-20 hidden w-[16.5625rem] flex-col gap-8 rounded-[0.5rem] border border-[#BDBDBD] bg-[#FFFFFF] pt-[1.375rem] pr-4 pb-[1.375rem] pl-4 group-hover:flex group-focus-within:flex lg:right-auto lg:left-0"
              >
                {GET_INVOLVED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={GET_INVOLVED_ITEM_CLASS}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden shrink-0 lg:block">
            <CtaButton
              href="/champion"
              className="h-10 px-3.5 lg:h-11 lg:px-4 min-[90rem]:h-[3.5rem] min-[90rem]:px-6"
              labelClassName="font-[600]"
            >
              Become a Cause Champion
            </CtaButton>
          </div>

          <button
            type="button"
            className="text-[var(--Main-CTA-button,#00A3BE)] lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
            aria-controls={drawerId}
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>
      {mobileDrawer}
    </>
  );
}
