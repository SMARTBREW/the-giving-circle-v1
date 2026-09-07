/** Dense CTA arrow; uses `currentColor` so outline hoverFill stays in sync. */
export default function CtaArrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-3.5 w-3.5 shrink-0 bg-current [-webkit-mask-image:url(/images/Vector.png)] [mask-image:url(/images/Vector.png)] [-webkit-mask-position:center] [mask-position:center] [-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat] [-webkit-mask-size:contain] [mask-size:contain] sm:h-4 sm:w-4 ${className}`}
    />
  );
}
