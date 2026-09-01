import Link from "next/link";
import { InterFont } from "@/constants";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-[4.5rem]">
      <h2
        className={`text-4xl font-bold mb-4 tracking-[-0.06em] ${InterFont.className}`}
      >
        This page is not in our circle
      </h2>
      <p className="text-[#000000] mb-8">
        We could not find what you were looking for.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-[0.5rem] bg-[var(--Main-CTA-button,#00A3BE)] px-8 py-3 text-white"
      >
        Back home
      </Link>
    </div>
  );
}
