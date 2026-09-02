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

function SocialIcon({ label }: { label: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="19.5" fill="#FFFFFF" stroke="#E0E0E0" />
      {label === "Facebook" ? (
        <path
          fill="#000000"
          d="M22.4 20.9h2.9l.45-3.2h-3.35v-1.72c0-.93.26-1.56 1.58-1.56h1.88V11.1A21.8 21.8 0 0 0 21.93 10.95c-2.58 0-4.35 1.57-4.35 4.47v2.2H14.7v3.2h2.88V29h3.62v-8.1Z"
        />
      ) : null}
      {label === "LinkedIn" ? (
        <path
          fill="#000000"
          d="M15.2 16.2H12v11.6h3.2V16.2ZM13.58 10.6c-1.02 0-1.85.83-1.85 1.86s.83 1.85 1.85 1.85 1.86-.82 1.86-1.85c0-1.03-.83-1.86-1.86-1.86ZM28.2 21.55c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.86 1.1-3.36 1.86v-1.17h-3.14c.04.71 0 11.7 0 11.7h3.14v-6.52c0-.35.02-.69.13-.94.28-.69.94-1.4 2.05-1.4 1.45 0 2.03 1.1 2.03 2.72v6.14H28.2v-6.35Z"
        />
      ) : null}
      {label === "YouTube" ? (
        <>
          <path
            fill="#000000"
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
            stroke="#000000"
            strokeWidth="1.7"
          />
          <circle
            cx="20"
            cy="20"
            r="4.05"
            fill="none"
            stroke="#000000"
            strokeWidth="1.7"
          />
          <circle cx="25.35" cy="14.7" r="1.2" fill="#000000" />
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
          stroke="#000000"
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
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeWidth="1.5" />
        <path d="m4 7 8 6 8-6" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="#000000" strokeWidth="1.5" />
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
    <div>
      <p className={FOOTER_HEADING_CLASS}>{heading}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href} className="h-[1.75rem]">
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
    <footer id="contact" className="w-full bg-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col px-[2rem] pt-12 md:h-[29.75rem] md:px-[6.25rem] md:pt-[5rem]">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-[23.75rem_4.375rem_16.4375rem_11.9375rem_1fr] md:gap-0">
          <div className="flex flex-col">
            <Link href="/" className="block h-[3.75rem] w-[14.625rem]">
              <Image
                src="/images/Frame 2071857645.png"
                alt="The Giving Circle"
                width={234}
                height={60}
                className="h-[3.75rem] w-[14.625rem] object-contain"
              />
            </Link>
            <p className={FOOTER_BLURB_CLASS}>{FOOTER_BLURB}</p>
            <ul className="mt-8 flex items-center gap-4">
              {FOOTER_SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} aria-label={item.label} className="block h-10 w-10">
                    <SocialIcon label={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block" aria-hidden="true" />

          <FooterLinkList heading="Get Involved" links={GET_INVOLVED_LINKS} />
          <FooterLinkList heading="Quick Links" links={FOOTER_QUICK_LINKS} />

          <div>
            <p className={FOOTER_HEADING_CLASS}>Contact</p>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_CONTACT.map((item) => (
                <li key={item.label} className="flex h-[1.75rem] items-center gap-3">
                  <ContactIcon type={item.type} />
                  {item.href ? (
                    <Link href={item.href} className={FOOTER_LINK_CLASS}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className={FOOTER_LINK_CLASS}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-6 border-t border-[#E0E0E0] py-6 md:flex-row md:items-center md:justify-between">
          <p className={FOOTER_LINK_CLASS}>
            © 2026 The Giving Circle Community Platform. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-8">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={FOOTER_LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
