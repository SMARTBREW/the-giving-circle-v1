import { cloudinarySrc } from "@/lib/cloudinary";

const ARROW_MASK = cloudinarySrc("/images/Vector.png", { width: 64 });

/** Dense CTA arrow; uses `currentColor` so outline hoverFill stays in sync. */
export default function CtaArrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        WebkitMaskImage: `url(${ARROW_MASK})`,
        maskImage: `url(${ARROW_MASK})`,
      }}
      className={`inline-block h-3.5 w-3.5 shrink-0 bg-current [-webkit-mask-position:center] [mask-position:center] [-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat] [-webkit-mask-size:contain] [mask-size:contain] sm:h-4 sm:w-4 ${className}`}
    />
  );
}
