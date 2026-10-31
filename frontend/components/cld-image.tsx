import Image, { type ImageProps } from "next/image";
import {
  cloudinarySrc,
  hasCloudinaryAsset,
  inferCloudinaryWidth,
} from "@/lib/cloudinary";

type CldImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/** Widths the browser can choose from. Static export has no Next image optimizer. */
const SRCSET_WIDTHS = [96, 128, 160, 256, 384, 480, 640, 750, 960, 1200, 1400];

/**
 * Drop-in next/image wrapper: `/images/...` paths resolve to Cloudinary
 * with f_auto, q_auto, and a width transform. Non-mapped paths stay local.
 * When `sizes` is set, a srcset lets phones skip the desktop file.
 */
export default function CldImage({
  src,
  alt,
  width,
  height,
  sizes,
  fill,
  quality,
  priority,
  loading,
  fetchPriority,
  format,
  aspectRatio,
  style,
  className,
  ...props
}: CldImageProps & { format?: "auto" | "webp"; aspectRatio?: number }) {
  const framed = (w: number) =>
    cloudinarySrc(src, {
      width: w,
      height: aspectRatio ? Math.round(w / aspectRatio) : undefined,
      crop: aspectRatio ? "fill" : undefined,
      gravity: aspectRatio ? "center" : undefined,
      quality: typeof quality === "number" ? quality : undefined,
      format,
    });
  const requestWidth = inferCloudinaryWidth({ width, sizes, fill });
  const resolved = framed(requestWidth);
  const responsive = Boolean(sizes) && hasCloudinaryAsset(src);
  const imagePriority = priority ? "high" : fetchPriority;

  if (responsive) {
    const srcSet = SRCSET_WIDTHS.map((w) => `${framed(w)} ${w}w`).join(", ");

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolved}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        loading={priority ? "eager" : (loading ?? "lazy")}
        fetchPriority={imagePriority}
        decoding="async"
        className={className}
        style={
          fill
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
                ...style,
              }
            : style
        }
        {...props}
      />
    );
  }

  return (
    <Image
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      fill={fill}
      priority={priority}
      loading={loading}
      style={style}
      className={className}
      decoding="async"
      // Cloudinary q_auto:eco already compresses; avoid forcing quality={100}
      quality={quality === 100 ? 75 : quality}
      {...props}
    />
  );
}
