import Image from "next/image";
import Link from "next/link";
import { SEGOE_UI_CLASS } from "@/constants";

export default function ImpactStoryCard({
  featured = false,
  tag,
  tagClassName,
  overlayClassName,
  title,
  src,
  alt,
  href,
}: {
  featured?: boolean;
  tag: string;
  tagClassName: string;
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
          ? "aspect-square w-full sm:row-span-2 sm:aspect-auto sm:h-full min-[90rem]:h-[42.75rem] min-[90rem]:w-[39.625rem]"
          : "aspect-square w-full sm:aspect-auto sm:h-full min-[90rem]:h-[20.625rem] min-[90rem]:w-[36.25rem]"
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
          className="object-cover"
        />
        <span
          className={`absolute inset-0 hidden sm:block ${overlayClassName}`}
        />

        <span
          className={`${SEGOE_UI_CLASS} absolute top-4 left-4 z-10 inline-flex items-center justify-center rounded-[50px] px-3 py-1.5 sm:top-5 sm:left-5 min-[90rem]:left-8 ${
            featured
              ? "min-[90rem]:top-[30.8125rem]"
              : "min-[90rem]:top-[8.6875rem]"
          } ${tagClassName}`}
        >
          <span
            className={`${SEGOE_UI_CLASS} text-[0.8125rem] leading-none font-[700] tracking-normal whitespace-nowrap text-[#FFFFFF]`}
          >
            {tag}
          </span>
        </span>

        <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 from-55% via-black/50 via-85% to-transparent pt-6 pr-4 pb-4 pl-4 sm:from-black/80 sm:pt-6 sm:pr-5 sm:pb-5 sm:pl-5 min-[90rem]:inset-x-8 min-[90rem]:bottom-8 min-[90rem]:bg-none min-[90rem]:from-transparent min-[90rem]:via-transparent min-[90rem]:to-transparent min-[90rem]:pt-0 min-[90rem]:pr-0 min-[90rem]:pb-0 min-[90rem]:pl-0">
          <span className="flex flex-col items-start gap-2 sm:gap-2.5 min-[90rem]:gap-3">
            <span
              className={`${SEGOE_UI_CLASS} w-full text-left text-[1.125rem] leading-6 font-[700] tracking-normal text-[#FFFFFF] sm:text-[1rem] sm:leading-5 md:text-[1.125rem] md:leading-6 lg:text-[1.25rem] lg:leading-7 min-[90rem]:h-[4.625rem] min-[90rem]:text-[1.75rem] min-[90rem]:leading-none ${
                featured
                  ? "min-[90rem]:w-[35.625rem]"
                  : "min-[90rem]:w-[32.25rem]"
              }`}
            >
              {title}
            </span>
            <span
              className={`${SEGOE_UI_CLASS} inline-flex items-center gap-1.5 border-b border-transparent text-[0.9375rem] leading-none font-[600] tracking-normal whitespace-nowrap text-[#FFFFFF] group-hover:border-[#FFFFFF] sm:text-[0.8125rem] md:text-[0.875rem] min-[90rem]:gap-2 min-[90rem]:text-[1.125rem]`}
            >
              Read the story
              <span aria-hidden="true">→</span>
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
}
