"use client";

import type { ReactNode } from "react";
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

  return (
    <>
      {isFormShell ? null : <Header />}
      <main
        className={`relative z-0 ${
          isFormShell
            ? "max-lg:min-h-dvh lg:h-dvh lg:overflow-hidden"
            : `overflow-x-hidden ${HEADER_OFFSET} pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0`
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
