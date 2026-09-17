"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileStickyCta from "@/components/mobile-sticky-cta";

/** Matches floating inset header card + top offset */
const HEADER_OFFSET =
  "pt-[5.5rem] sm:pt-[6.25rem] md:pt-[6.75rem] lg:pt-[7rem] min-[90rem]:pt-[7.25rem]";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isFormShell =
    pathname.startsWith("/champion/apply") || pathname.startsWith("/partner");

  useEffect(() => {
    if (!isFormShell) return;
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      htmlHeight: html.style.height,
      bodyHeight: body.style.height,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    html.style.height = "100%";
    body.style.height = "100%";
    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      html.style.overflowX = "";
      body.style.overflowX = "";
      html.style.height = prev.htmlHeight;
      body.style.height = prev.bodyHeight;
    };
  }, [isFormShell]);

  return (
    <>
      {isFormShell ? null : <Header />}
      <main
        className={`relative z-0 ${
          isFormShell
            ? "fixed inset-0 flex min-h-0 min-w-0 flex-col overflow-hidden"
            : `overflow-x-hidden bg-[#F5F5F5] ${HEADER_OFFSET} pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0 [@media(hover:hover)_and_(pointer:fine)]:pb-0`
        }`}
      >
        {children}
      </main>
      {isFormShell ? null : (
        <>
          <Footer />
          <MobileStickyCta />
        </>
      )}
    </>
  );
}
