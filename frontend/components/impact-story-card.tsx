import Image from "next/image";
import Link from "next/link";
import { SEGOE_UI_CLASS } from "@/constants";

export default function ImpactStoryCard({
  featured = false,
  tag,
  tagClassName,
  tagLabelClassName,
  overlayClassName,
  title,
  src,
  alt,
  href,
}: {
  featured?: boolean;
  tag: string;
  tagClassName: string;
  tagLabelClassName: string;
  overlayClassName: string;
  title: string;
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <li
      className={
        featured
          ? "h-[22rem] w-full md:row-span-2 md:h-[42.75rem] md:w-[39.625rem]"
          : "h-[16rem] w-full md:h-[20.625rem] md:w-[36.25rem]"
      }
    >
      <Link
        href={href}
        className="group relative block h-full w-full overflow-hidden rounded-[1rem] border border-[#BDBDBD]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            featured
              ? "(min-width: 768px) 39.625rem, 100vw"
              : "(min-width: 768px) 36.25rem, 100vw"
          }
          className="object-cover"
        />
        <span className={`absolute inset-0 ${overlayClassName}`} />
        <span className="absolute right-8 bottom-8 left-8 z-10 flex flex-col items-start gap-3 md:contents">
          <span
            className={`${SEGOE_UI_CLASS} inline-flex h-[2.0625rem] items-center justify-center gap-1 rounded-[50px] px-[0.875rem] md:absolute md:left-8 ${
              featured ? "md:top-[30.8125rem]" : "md:top-[8.6875rem]"
            } ${tagClassName}`}
          >
            <span
              className={`${SEGOE_UI_CLASS} inline-flex h-[1.1875rem] items-center text-[0.875rem] leading-none font-[700] tracking-normal whitespace-nowrap text-[#FFFFFF] ${tagLabelClassName}`}
            >
              {tag}
            </span>
          </span>
          <span
            className={`${SEGOE_UI_CLASS} h-auto w-full text-[1.75rem] leading-none font-[700] tracking-normal text-[#FFFFFF] md:absolute md:left-8 md:h-[4.625rem] ${
              featured
                ? "md:top-[33.625rem] md:w-[35.625rem]"
                : "md:top-[11.5rem] md:w-[32.25rem]"
            }`}
          >
            {title}
          </span>
          <span
            className={`${SEGOE_UI_CLASS} inline-flex h-6 items-center gap-2 border-b border-transparent text-[1.125rem] leading-none font-[600] tracking-normal whitespace-nowrap text-[#FFFFFF] group-hover:border-[#FFFFFF] md:absolute md:left-8 ${
              featured ? "md:top-[39.25rem]" : "md:top-[17.125rem]"
            }`}
          >
            Read the story
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </Link>
    </li>
  );
}
