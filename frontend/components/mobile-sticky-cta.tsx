import CtaButton from "@/components/cta-button";

/**
 * Phone / touch tablet sticky CTA.
 * Hidden on fine-pointer desktops so browser zoom (which shrinks CSS width below lg)
 * does not resurrect this bar over the Cause Champion section.
 */
export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 rounded-t-[1.25rem] border-t border-[#d9e1e2] bg-[#FFFFFF] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] sm:px-6 lg:hidden [@media(hover:hover)_and_(pointer:fine)]:hidden">
      <CtaButton
        href="/champion/apply"
        className="h-12 w-full !rounded-lg sm:h-14"
        labelClassName="font-[700]"
      >
        Become a Cause Champion
      </CtaButton>
    </div>
  );
}
