"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useEffect, useState } from "react";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className={`sticky top-0 z-10 w-full bg-[#FFFFFF] border-b border-[#BDBDBD] ${SEGOE_UI_CLASS}`}>
      <nav
        className="relative mx-auto h-[6.25rem] w-full max-w-[90rem]"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="absolute top-[1.25rem] left-[6.25rem] block h-[3.75rem] w-[14.625rem]"
        >
          <Image
            src="/images/Frame 2071857645.png"
            alt="The Giving Circle"
            width={234}
            height={60}
            className="h-[3.75rem] w-[14.625rem] object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex absolute top-[2.375rem] left-[27.25rem] h-[1.5rem] w-max flex-row flex-nowrap items-center gap-[1.5rem]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={NAV_ITEM_CLASS}>
              {link.label}
            </Link>
          ))}
          <div className="relative group h-[1.5rem]">
            <button
              type="button"
              className={`${NAV_ITEM_CLASS} inline-flex items-center gap-2`}
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
                <path
                  d="M2 4L6 8L10 4"
                  stroke="#000000"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <div
              id={involvedId}
              className="hidden group-hover:flex group-focus-within:flex absolute top-full left-0 z-20 h-[12rem] w-[16.5625rem] flex-col gap-8 rounded-[0.5rem] border border-[#BDBDBD] bg-[#FFFFFF] pt-[1.375rem] pr-4 pb-[1.375rem] pl-4"
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

        <CtaButton
          href="/#champion"
          className="absolute top-[1.375rem] left-[67.0625rem] hidden h-[3.5rem] w-[16.625rem] md:flex"
          labelClassName="w-[14.25rem] font-[600]"
        >
          Become a Cause Champion
        </CtaButton>

        <button
          type="button"
          className="absolute right-[2.5rem] top-1/2 block -translate-y-1/2 md:hidden text-[#000000]"
          aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isDrawerOpen}
          aria-controls={drawerId}
          onClick={toggleDrawer}
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            {isDrawerOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        id={drawerId}
        role="navigation"
        aria-label="Main navigation"
        className={`block md:hidden px-[4.5rem] pb-8 ${isDrawerOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={NAV_ITEM_CLASS}
              onClick={() => setIsDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {GET_INVOLVED_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={NAV_ITEM_CLASS}
              onClick={() => setIsDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <CtaButton
            href="/#champion"
            className="h-[3.5rem] w-[16.625rem]"
            labelClassName="w-[14.25rem] font-[600]"
            onClick={() => setIsDrawerOpen(false)}
          >
            Become a Cause Champion
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
