import Image from "next/image";
import Link from "next/link";
import CtaArrow from "@/components/cta-arrow";
import { SEGOE_UI_CLASS } from "@/constants";

export default function ImpactStoryCard({
  featured = false,
  tag,
  tagClassName,
  overlayClassName,
  title,
  src,
  alt,
  objectPosition = "object-center",
  href,
}: {
  featured?: boolean;
  tag: string;
  tagClassName: string;
  overlayClassName: string;
  title: string;
  src: string;
  alt: string;
  objectPosition?: string;
  href: string;
}) {
  return (
    <li
      className={
        featured
          ? "aspect-square w-full sm:row-span-2 sm:aspect-auto sm:h-full sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] min-[90rem]:h-[42.75rem] min-[90rem]:min-h-0 min-[90rem]:w-[39.625rem]"
          : "aspect-square w-full sm:aspect-[36.25/20.625] sm:h-auto min-[90rem]:aspect-auto min-[90rem]:h-[20.625rem] min-[90rem]:w-[36.25rem]"
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
              ? "(min-width: 1440px) 39.625rem, (min-width: 640px) 50vw, 100vw"
              : "(min-width: 1440px) 36.25rem, (min-width: 640px) 50vw, 100vw"
          }
          className={`object-cover ${objectPosition}`}
        />
        <span
          className={`absolute inset-0 hidden sm:block ${overlayClassName}`}
        />

        <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 from-25% via-black/35 via-55% to-transparent px-4 pt-4 pb-3 sm:from-black/75 sm:px-5 sm:pt-4 sm:pb-3.5 min-[90rem]:inset-x-6 min-[90rem]:bottom-5 min-[90rem]:bg-none min-[90rem]:from-transparent min-[90rem]:via-transparent min-[90rem]:to-transparent min-[90rem]:px-0 min-[90rem]:pt-0 min-[90rem]:pb-0">
          <span className="flex flex-col items-start gap-1.5 sm:gap-2 min-[90rem]:gap-2">
            <span
              className={`${SEGOE_UI_CLASS} inline-flex items-center justify-center rounded-full px-2.5 py-1 ${tagClassName}`}
            >
              <span
                className={`${SEGOE_UI_CLASS} text-[0.6875rem] leading-none font-[700] tracking-normal whitespace-nowrap text-[#FFFFFF] sm:text-[0.75rem]`}
              >
                {tag}
              </span>
            </span>
            <span
              className={`${SEGOE_UI_CLASS} w-full text-left text-[0.9375rem] leading-5 font-[700] tracking-normal text-[#FFFFFF] sm:text-[0.875rem] sm:leading-5 md:text-[1rem] md:leading-5 lg:text-[1.0625rem] lg:leading-6 min-[90rem]:text-[1.25rem] min-[90rem]:leading-7 ${
                featured
                  ? "line-clamp-2 min-[90rem]:w-[35.625rem]"
                  : "truncate min-[90rem]:w-[32.25rem]"
              }`}
            >
              {title}
            </span>
            <span
              className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1 border-b border-transparent text-[0.8125rem] leading-none font-[600] tracking-normal whitespace-nowrap text-[#FFFFFF] group-hover:border-[#FFFFFF] sm:text-[0.75rem] md:text-[0.8125rem] min-[90rem]:gap-1.5 min-[90rem]:text-[0.9375rem]`}
            >
              Read the story
              <CtaArrow className="h-3 w-3 text-[#FFFFFF] min-[90rem]:h-3.5 min-[90rem]:w-3.5" />
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
}
