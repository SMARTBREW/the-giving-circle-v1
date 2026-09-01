import Link from "next/link";
import { InterFont, SITE } from "@/constants";

export default function Footer() {
  return (
    <footer className="mt-32 px-[4.5rem] md:px-[8vw] py-20 border-t border-[#BDBDBD]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <p
          className={`text-[#000000] tracking-[-0.04em] ${InterFont.className}`}
        >
          {SITE.name} · India · Est. {SITE.founded}
        </p>
        <Link
          href={SITE.url}
          className={`text-[#000000] tracking-[-0.04em] ${InterFont.className}`}
          rel="noopener noreferrer"
        >
          thegivingcircle.in
        </Link>
      </div>
    </footer>
  );
}
