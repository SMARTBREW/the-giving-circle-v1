import publicIds from "@/constants/cloudinary-public-ids.json";
import imageMap from "@/constants/cloudinary-image-map.json";
import videoIds from "@/constants/cloudinary-video-ids.json";

const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() || "dcdhhylin";

type PublicIdMap = Record<string, string>;
type ImageMapEntry = { public_id?: string; version?: number | string };

const PUBLIC_IDS = publicIds as PublicIdMap;
const IMAGE_MAP = imageMap as Record<string, ImageMapEntry>;
const VIDEO_IDS = videoIds as PublicIdMap;

/** Cap for full-bleed heroes / CTAs (single URL, no srcset on static export). */
const MAX_FULL_BLEED_WIDTH = 1400;
/** Cap for cards / partial-width images. */
const MAX_CARD_WIDTH = 1200;

export type CloudinaryTransformOptions = {
  /** Requested delivery width in pixels (already includes retina if desired). */
  width?: number;
  height?: number;
  /** Crop/fit mode — default limit (never upscale past original). */
  crop?: "limit" | "fill" | "fit";
};

/**
 * Build an optimized Cloudinary delivery URL for a local `/images/...` path.
 * Falls back to the local path when the asset is not in the upload map.
 * Includes asset version when known so overwrites bust CDN / Next image cache.
 */
export function cloudinarySrc(
  src: string,
  options: CloudinaryTransformOptions = {},
): string {
  if (!src || !src.startsWith("/images/")) return src;

  const publicId = PUBLIC_IDS[src];
  if (!publicId || !CLOUD_NAME) return src;

  const crop = options.crop ?? "limit";
  // eco = smaller files; f_auto picks WebP/AVIF when the browser supports it
  const parts = ["f_auto", "q_auto:eco", `c_${crop}`];

  if (options.width && options.width > 0) {
    parts.push(`w_${Math.min(Math.round(options.width), MAX_FULL_BLEED_WIDTH)}`);
  }
  if (options.height && options.height > 0) {
    parts.push(`h_${Math.min(Math.round(options.height), MAX_FULL_BLEED_WIDTH)}`);
  }

  const version = IMAGE_MAP[src]?.version;
  const versionSegment = version != null ? `v${version}/` : "";

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${parts.join(",")}/${versionSegment}${publicId}`;
}

/**
 * Optimized Cloudinary video URL for a local `/images/...mp4` path.
 * Uses f_auto + q_auto so browsers get a compressed progressive MP4/WebM.
 */
export function cloudinaryVideoSrc(src: string): string {
  if (!src.startsWith("/images/")) return src;

  const publicId = VIDEO_IDS[src];
  if (!publicId || !CLOUD_NAME) return src;

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto:eco,vc_auto,w_720/${publicId}`;
}

/** Infer a sensible Cloudinary width from next/image props. */
export function inferCloudinaryWidth({
  width,
  sizes,
  fill,
}: {
  width?: number | `${number}`;
  sizes?: string;
  fill?: boolean;
}): number {
  if (sizes) {
    const fromSizes = widthFromSizesAttribute(sizes);
    if (fromSizes) return fromSizes;
  }

  if (typeof width === "number" && width > 0) {
    // Large width props are usually intrinsic asset dims, not CSS display size.
    if (width > 640) return 640;
    return Math.min(Math.round(width * 2), MAX_CARD_WIDTH);
  }

  return fill ? 1200 : 800;
}

/**
 * Parse next/image `sizes` for a *single* delivery URL (static export has no
 * srcset). Prefer partial-width clauses (cards) over 100vw so thumbnails are
 * not requested at hero resolution.
 */
function widthFromSizesAttribute(sizes: string): number | undefined {
  const partial: number[] = [];
  const fullBleed: number[] = [];

  for (const clause of sizes.split(",")) {
    const lengths = [
      ...clause.trim().matchAll(/(\d+(?:\.\d+)?)(px|rem|vw|%)/gi),
    ];
    if (lengths.length === 0) continue;

    // Last length is the image size; earlier lengths are media-query bounds.
    const [, raw, unitRaw] = lengths[lengths.length - 1];
    const n = Number(raw);
    const unit = unitRaw.toLowerCase();
    let cssPx = 0;
    switch (unit) {
      case "px":
        cssPx = n;
        break;
      case "rem":
        cssPx = n * 16;
        break;
      case "vw":
        cssPx = (n / 100) * 1920;
        break;
      case "%":
        cssPx = (n / 100) * 1200;
        break;
    }
    if (cssPx <= 0) continue;

    if (unit === "vw" && n >= 90) {
      fullBleed.push(cssPx);
    } else {
      partial.push(cssPx);
    }
  }

  const candidates = partial.length > 0 ? partial : fullBleed;
  if (candidates.length === 0) return undefined;

  // For cards, prefer the smallest listed size (usually the desktop column
  // width). Using Math.max inflated every thumbnail to the tablet 50vw slot.
  const cssPx =
    partial.length > 0 ? Math.min(...candidates) : Math.max(...candidates);
  const retina = Math.round(cssPx * 2);
  const cap = partial.length > 0 ? MAX_CARD_WIDTH : MAX_FULL_BLEED_WIDTH;
  return Math.min(retina, cap);
}

export function hasCloudinaryAsset(src: string): boolean {
  return src.startsWith("/images/") && Boolean(PUBLIC_IDS[src]);
}
