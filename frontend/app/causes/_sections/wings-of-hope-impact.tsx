import CldImage from "@/components/cld-image";
import PageSection from "@/components/page-section";
import { SEGOE_UI_CLASS, WINGS_OF_HOPE_IMPACT, WINGS_SECTION } from "@/constants";

function MediaSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[0.875rem] bg-[repeating-linear-gradient(-45deg,#e8f4f8,#e8f4f8_8px,#eef2f2_8px,#eef2f2_16px)] sm:rounded-[1rem] ${className}`}
    >
      <span
        className={`${SEGOE_UI_CLASS} absolute inset-0 flex items-center justify-center px-3 text-center text-[0.75rem] font-[600] leading-5 text-[var(--Subheading,#4a5558)]`}
      >
        Photo
      </span>
      <span
        className={`${SEGOE_UI_CLASS} absolute bottom-2.5 left-2.5 max-w-[calc(100%-1.25rem)] rounded-full bg-[var(--Circle-Green,#02938c)] px-2.5 py-1 text-[0.6875rem] font-[600] leading-none text-[#FFFFFF] sm:bottom-3 sm:left-3 sm:px-3 sm:text-[0.75rem]`}
      >
        {label}
      </span>
    </div>
  );
}

function GalleryCell({
  label,
  src,
  alt,
  featured = false,
  className = "",
}: {
  label: string;
  src: string | null;
  alt: string;
  featured?: boolean;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[0.875rem] sm:rounded-[1rem] ${className}`}
      >
        <CldImage
          src={src}
          alt={alt}
          fill
          sizes={
            featured
              ? "(max-width: 1023px) 100vw, 40vw"
              : "(max-width: 1023px) 50vw, 20vw"
          }
          className="object-cover object-center"
        />
        <span
          className={`${SEGOE_UI_CLASS} absolute bottom-2.5 left-2.5 max-w-[calc(100%-1.25rem)] rounded-full bg-[var(--Circle-Green,#02938c)] px-2.5 py-1 text-[0.6875rem] font-[600] leading-none text-[#FFFFFF] sm:bottom-3 sm:left-3 sm:px-3 sm:text-[0.75rem]`}
        >
          {label}
        </span>
      </div>
    );
  }

  return <MediaSlot label={label} className={className} />;
}

export default function WingsOfHopeImpact() {
  const { founder, eyebrow, title, body, stats, gallery, instagram } =
    WINGS_OF_HOPE_IMPACT;

  return (
    <PageSection
      tone="white"
      innerClassName={`${WINGS_SECTION.pad} gap-8 sm:gap-10 lg:gap-12`}
    >
      <div className="flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
        <div className="relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-full border border-dashed border-[var(--Circle-Green,#02938c)] bg-[repeating-linear-gradient(-45deg,#e8f4f8,#e8f4f8_6px,#eef2f2_6px,#eef2f2_12px)] sm:h-[6.5rem] sm:w-[6.5rem] lg:h-[7.5rem] lg:w-[7.5rem]">
          {founder.photoSrc ? (
            <CldImage
              src={founder.photoSrc}
              alt={founder.photoAlt}
              fill
              sizes="120px"
              className="object-cover"
            />
          ) : (
            <span
              className={`${SEGOE_UI_CLASS} absolute inset-0 flex flex-col items-center justify-center px-2 text-center`}
            >
              <span className="text-[1.25rem] font-[700] leading-none text-[var(--Circle-Green,#02938c)] sm:text-[1.5rem]">
                {founder.initials}
              </span>
              <span className="mt-1 text-[0.5625rem] font-[600] leading-3 text-[var(--Subheading,#4a5558)] sm:text-[0.625rem]">
                {founder.portraitLabel}
              </span>
            </span>
          )}
        </div>

        <blockquote className="min-w-0 flex-1">
          <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.eyebrow}`}>
            {founder.eyebrow}
          </p>
          <p className="mt-2.5 font-['Georgia'] text-[1.0625rem] leading-7 font-[400] tracking-normal italic text-[var(--Main-headings,#1c2426)] sm:mt-3 sm:text-[1.1875rem] sm:leading-8 lg:text-[1.25rem] lg:leading-8">
            “{founder.quote}”
          </p>
          <footer className="mt-3 sm:mt-4">
            <p
              className={`${SEGOE_UI_CLASS} text-[0.9375rem] font-[700] leading-5 text-[var(--Main-headings,#1c2426)] sm:text-[1rem]`}
            >
              {founder.name}
            </p>
            <p
              className={`${SEGOE_UI_CLASS} mt-0.5 text-[0.8125rem] font-[400] leading-5 text-[var(--Subheading,#4a5558)] sm:text-[0.875rem]`}
            >
              {founder.role}
            </p>
          </footer>
        </blockquote>
      </div>

      <div className="flex w-full flex-col gap-5 sm:gap-6 lg:gap-8">
        <div className="w-full">
          <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.eyebrow}`}>
            {eyebrow}
          </p>
          <h2 className={WINGS_SECTION.title}>{title}</h2>
          <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.body}`}>{body}</p>

          <ul className="mt-6 grid w-full grid-cols-2 overflow-hidden rounded-[0.875rem] border border-[#d9e1e2] bg-[#FFFFFF] sm:mt-8 sm:rounded-[1rem] lg:grid-cols-4">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`flex flex-col px-4 py-5 sm:px-5 sm:py-6 lg:px-6 ${
                  index % 2 === 1 ? "border-l border-[#d9e1e2]" : ""
                } ${index < 2 ? "border-b border-[#d9e1e2] lg:border-b-0" : ""} ${
                  index > 0 ? "lg:border-l lg:border-[#d9e1e2]" : ""
                }`}
              >
                <p
                  className={`${SEGOE_UI_CLASS} text-[1.5rem] font-[700] leading-none tracking-normal text-[var(--Circle-Green,#02938c)] sm:text-[1.75rem] lg:text-[2rem]`}
                >
                  {stat.value}
                </p>
                <p
                  className={`${SEGOE_UI_CLASS} mt-2 flex flex-wrap items-center gap-1.5 text-[0.8125rem] font-[400] leading-4 text-[var(--Subheading,#4a5558)] sm:text-[0.875rem]`}
                >
                  <span>{stat.label}</span>
                  {stat.confirm ? (
                    <span className="rounded bg-[var(--Giving-Red,#e62b4f)] px-1.5 py-0.5 text-[0.5625rem] font-[700] leading-none tracking-[0.04em] uppercase text-[#FFFFFF]">
                      Confirm
                    </span>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-4">
          <GalleryCell
            label={gallery.featured.label}
            src={gallery.featured.src}
            alt={gallery.featured.alt}
            featured
            className="aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]"
          />
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
            {gallery.items.map((item) => (
              <li key={item.label} className="min-w-0">
                <GalleryCell
                  label={item.label}
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[12.5rem]"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col gap-4 rounded-[0.875rem] border border-[#d9e1e2] bg-[#F7F9F9] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[1rem] sm:px-5 sm:py-5 lg:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
              <CldImage
                src="/images/causes/woh-logo-roundel.png"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="min-w-0">
              <span
                className={`${SEGOE_UI_CLASS} block text-[0.9375rem] font-[700] leading-5 text-[var(--Main-headings,#1c2426)] sm:text-[1rem]`}
              >
                {instagram.handle}
              </span>
              <span
                className={`${SEGOE_UI_CLASS} mt-0.5 block text-[0.8125rem] font-[400] leading-5 text-[var(--Subheading,#4a5558)] sm:text-[0.875rem]`}
              >
                {instagram.body}
              </span>
            </span>
          </div>

          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${SEGOE_UI_CLASS} inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[var(--Circle-Green,#02938c)] px-5 text-[0.875rem] font-[700] leading-none text-[#FFFFFF] transition-opacity hover:opacity-90 sm:h-12 sm:px-6 sm:text-[0.9375rem]`}
          >
            {instagram.cta}
          </a>
        </div>
      </div>
    </PageSection>
  );
}
