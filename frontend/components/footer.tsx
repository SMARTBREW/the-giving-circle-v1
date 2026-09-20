import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_BLURB,
  FOOTER_BLURB_CLASS,
  FOOTER_CONTACT,
  FOOTER_HEADING_CLASS,
  FOOTER_LEGAL_LINKS,
  FOOTER_LINK_CLASS,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
  GET_INVOLVED_LINKS,
} from "@/constants";

function SocialIcon({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    >
      <circle cx="20" cy="20" r="19.5" fill="#FFFFFF" stroke="#D9E1E2" />
      {label === "Facebook" ? (
        <path
          fill="#1c2426"
          d="M22.4 20.9h2.9l.45-3.2h-3.35v-1.72c0-.93.26-1.56 1.58-1.56h1.88V11.1A21.8 21.8 0 0 0 21.93 10.95c-2.58 0-4.35 1.57-4.35 4.47v2.2H14.7v3.2h2.88V29h3.62v-8.1Z"
        />
      ) : null}
      {label === "LinkedIn" ? (
        <path
          fill="#1c2426"
          d="M15.2 16.2H12v11.6h3.2V16.2ZM13.58 10.6c-1.02 0-1.85.83-1.85 1.86s.83 1.85 1.85 1.85 1.86-.82 1.86-1.85c0-1.03-.83-1.86-1.86-1.86ZM28.2 21.55c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.86 1.1-3.36 1.86v-1.17h-3.14c.04.71 0 11.7 0 11.7h3.14v-6.52c0-.35.02-.69.13-.94.28-.69.94-1.4 2.05-1.4 1.45 0 2.03 1.1 2.03 2.72v6.14H28.2v-6.35Z"
        />
      ) : null}
      {label === "YouTube" ? (
        <>
          <path
            fill="#1c2426"
            d="M28.9 16.06c.26 1.02.38 3.16.38 3.16s0 2.14-.38 3.16a2.44 2.44 0 0 1-1.72 1.72c-1.52.4-6.8.4-6.8.4s-5.28 0-6.8-.4a2.44 2.44 0 0 1-1.72-1.72C11.6 21.36 11.48 19.22 11.48 19.22s.12-2.14.38-3.16a2.44 2.44 0 0 1 1.72-1.72c1.52-.4 6.8-.4 6.8-.4s5.28 0 6.8.4a2.44 2.44 0 0 1 1.72 1.72Z"
          />
          <path fill="#FFFFFF" d="M17.9 16.4v5.64l4.88-2.82L17.9 16.4Z" />
        </>
      ) : null}
      {label === "Instagram" ? (
        <>
          <rect
            x="11.6"
            y="11.6"
            width="16.8"
            height="16.8"
            rx="4.7"
            fill="none"
            stroke="#1c2426"
            strokeWidth="1.7"
          />
          <circle
            cx="20"
            cy="20"
            r="4.05"
            fill="none"
            stroke="#1c2426"
            strokeWidth="1.7"
          />
          <circle cx="25.35" cy="14.7" r="1.2" fill="#1c2426" />
        </>
      ) : null}
    </svg>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03Z"
          stroke="#1c2426"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1c2426" strokeWidth="1.5" />
        <path d="m4 7 8 6 8-6" stroke="#1c2426" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
        stroke="#1c2426"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="#1c2426" strokeWidth="1.5" />
    </svg>
  );
}

function FooterLinkList({
  heading,
  links,
}: {
  heading: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="min-w-0">
      <p className={FOOTER_HEADING_CLASS}>{heading}</p>
      <ul className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={FOOTER_LINK_CLASS}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full min-w-0 bg-[#FFFFFF] pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0 [@media(hover:hover)_and_(pointer:fine)]:pb-0"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-[90rem] flex-col px-6 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8 md:px-10 md:pt-12 md:pb-10 lg:px-12 lg:pt-12 lg:pb-10 min-[90rem]:min-h-[29.75rem] min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-0">
        {/* Brand left; link columns share the remaining width (not flush-right). */}
        <div className="flex w-full min-w-0 flex-col gap-8 sm:gap-9 lg:flex-row lg:items-start lg:gap-12 min-[90rem]:gap-16">
          <div className="flex w-full min-w-0 max-w-[22rem] shrink-0 flex-col sm:max-w-[24rem] min-[90rem]:max-w-[18.4375rem]">
            <Link
              href="/"
              className="block h-10 w-full max-w-[11.5rem] sm:h-11 sm:max-w-[13rem] md:h-12 md:max-w-[14.5rem] min-[90rem]:h-[4.25rem] min-[90rem]:max-w-[18rem]"
            >
              <Image
                src="/images/gc-logo-final.png"
                alt="The Giving Circle"
                width={1893}
                height={439}
                className="h-full w-full object-contain object-left"
              />
            </Link>
            <p className={`${FOOTER_BLURB_CLASS} mt-3 sm:mt-3.5 min-[90rem]:mt-4`}>
              {FOOTER_BLURB}
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-3 sm:mt-4 sm:gap-3.5 lg:mt-5">
              {FOOTER_SOCIAL_LINKS.map((item) => (
                <li key={item.label} className="shrink-0">
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className="block h-10 w-10"
                  >
                    <SocialIcon label={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-8 min-[90rem]:gap-x-10">
            <FooterLinkList heading="Get Involved" links={GET_INVOLVED_LINKS} />
            <FooterLinkList heading="Quick Links" links={FOOTER_QUICK_LINKS} />

            <div className="min-w-0">
              <p className={FOOTER_HEADING_CLASS}>Contact</p>
              <ul className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
                {FOOTER_CONTACT.map((item) => (
                  <li key={item.label} className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 shrink-0">
                      <ContactIcon type={item.type} />
                    </span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`${FOOTER_LINK_CLASS} min-w-0 break-words`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={`${FOOTER_LINK_CLASS} min-w-0 break-words`}>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#D9E1E2] pt-5 sm:mt-12 sm:gap-5 sm:pt-6 lg:mt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:pt-7 min-[90rem]:mt-auto min-[90rem]:gap-8 min-[90rem]:pt-8 min-[90rem]:pb-8">
          <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 lg:order-2 lg:gap-x-8">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={FOOTER_LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className={`${FOOTER_LINK_CLASS} min-w-0 lg:order-1`}>
            © 2026 The Giving Circle Community Platform. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
