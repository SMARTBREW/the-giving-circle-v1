import Image, { type ImageProps } from "next/image";
import {
  cloudinarySrc,
  inferCloudinaryWidth,
} from "@/lib/cloudinary";

type CldImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * Drop-in next/image wrapper: `/images/...` paths resolve to Cloudinary
 * with f_auto, q_auto, and a width transform. Non-mapped paths stay local.
 */
export default function CldImage({
  src,
  alt,
  width,
  sizes,
  fill,
  quality,
  ...props
}: CldImageProps) {
  const requestWidth = inferCloudinaryWidth({ width, sizes, fill });
  const resolved = cloudinarySrc(src, { width: requestWidth });

  return (
    <Image
      src={resolved}
      alt={alt}
      width={width}
      sizes={sizes}
      fill={fill}
      decoding="async"
      // Cloudinary q_auto:eco already compresses; avoid forcing quality={100}
      quality={quality === 100 ? 75 : quality}
      {...props}
    />
  );
}
