import CtaButton from "@/components/cta-button";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom,0px))] sm:px-6 lg:hidden">
      <CtaButton
        href="/#champion"
        className="h-12 w-full !rounded-[0.5rem] shadow-[0_0.25rem_1.5rem_rgba(0,0,0,0.18)] sm:h-14"
        labelClassName="font-[700]"
      >
        Become a Cause Champion
      </CtaButton>
    </div>
  );
}
