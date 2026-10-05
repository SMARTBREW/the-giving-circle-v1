"use client";

import { useRef, useState } from "react";
import CldImage from "@/components/cld-image";
import PageSection from "@/components/page-section";
import {
  SEGOE_UI_CLASS,
  WINGS_OF_HOPE_LEARN,
  WINGS_SECTION,
} from "@/constants";
import { cloudinaryVideoSrc } from "@/lib/cloudinary";

function PlayIcon() {
  return (
    <span
      aria-hidden
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF] shadow-sm sm:h-14 sm:w-14"
    >
      <svg
        viewBox="0 0 12 14"
        fill="none"
        className="ml-0.5 h-4 w-3.5 sm:h-[1.125rem] sm:w-4"
      >
        <path d="M0 0V14L12 7L0 0Z" fill="var(--Circle-Green,#02938c)" />
      </svg>
    </span>
  );
}

function VideoCard({
  title,
  body,
  src,
  poster,
}: {
  title: string;
  body: string;
  src: string;
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const videoSrc = cloudinaryVideoSrc(src);

  async function play() {
    const video = videoRef.current;
    if (!video) return;

    if (!video.getAttribute("src")) {
      video.src = videoSrc;
      video.load();
      await new Promise<void>((resolve, reject) => {
        const onReady = () => {
          cleanup();
          resolve();
        };
        const onError = () => {
          cleanup();
          reject(video.error ?? new Error("Video failed to load"));
        };
        const cleanup = () => {
          video.removeEventListener("canplay", onReady);
          video.removeEventListener("error", onError);
        };
        video.addEventListener("canplay", onReady, { once: true });
        video.addEventListener("error", onError, { once: true });
      });
    }

    setStarted(true);
    video.muted = false;
    try {
      await video.play();
    } catch {
      // Interrupted play — controls stay available once started.
    }
  }

  return (
    <li className="flex min-w-0 flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-[0.875rem] bg-[#0A1E33] sm:rounded-[1rem]">
        {!started ? (
          <CldImage
            src={poster}
            alt=""
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 28rem"
            className="object-cover object-center"
          />
        ) : null}

        <video
          ref={videoRef}
          className={`absolute inset-0 z-[1] h-full w-full object-cover object-center ${
            started ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          playsInline
          preload="none"
          controls={started}
          onEnded={() => setStarted(false)}
          aria-label={title}
        />

        {!started ? (
          <button
            type="button"
            onClick={() => {
              void play();
            }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity hover:bg-black/30"
            aria-label={`Play ${title}`}
          >
            <PlayIcon />
          </button>
        ) : null}
      </div>

      <h3
        className={`${SEGOE_UI_CLASS} mt-3 text-[0.9375rem] font-[700] leading-5 tracking-normal text-[var(--Main-headings,#1c2426)] sm:mt-3.5 sm:text-[1rem] sm:leading-6`}
      >
        {title}
      </h3>
      <p
        className={`${SEGOE_UI_CLASS} mt-1 text-[0.8125rem] font-[400] leading-5 tracking-normal text-[var(--Subheading,#4a5558)] sm:text-[0.875rem] sm:leading-5`}
      >
        {body}
      </p>
    </li>
  );
}

export default function WingsOfHopeLearn() {
  const { eyebrow, title, body, videos } = WINGS_OF_HOPE_LEARN;

  return (
    <PageSection tone="alternate" innerClassName={WINGS_SECTION.pad}>
      <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.eyebrow}`}>{eyebrow}</p>
      <h2 className={`${WINGS_SECTION.title} max-w-[40rem]`}>{title}</h2>
      <p className={`${SEGOE_UI_CLASS} ${WINGS_SECTION.body}`}>{body}</p>

      <ul className="mt-6 grid w-full grid-cols-1 gap-5 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
        {videos.map((video) => (
          <VideoCard key={video.title} {...video} />
        ))}
      </ul>
    </PageSection>
  );
}
