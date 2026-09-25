"use client";

import CldImage from "@/components/cld-image";
import { useRef, useState } from "react";
import { CHAMPION_VIDEO, CHAMPION_VIDEO_POSTER } from "@/constants";
import { cloudinaryVideoSrc } from "@/lib/cloudinary";

const VIDEO_SRC = cloudinaryVideoSrc(CHAMPION_VIDEO);

export default function ChampionVideo({ className }: { className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    // Attach the video only after the user asks to play.
    if (!video.src) {
      video.src = VIDEO_SRC;
    }
    setStarted(true);
    requestAnimationFrame(() => {
      video.muted = false;
      void video.play();
    });
  }

  function onEnded() {
    setStarted(false);
  }

  return (
    <div className={`${className} bg-[#EEF2F2]`}>
      {!started ? (
        <CldImage
          src={CHAMPION_VIDEO_POSTER}
          alt="Shivi, Cause Champion for Wings of Hope"
          fill
          sizes="(max-width: 767px) 100vw, 44vw"
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
        onEnded={onEnded}
        aria-label="Cause Champion impact story"
      />

      {!started ? (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 z-10 flex items-center justify-center"
          aria-label="Play video"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF] shadow-sm sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20">
            <svg
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M7 5L15 10L7 15V5Z" fill="#0ba5bb" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
}
