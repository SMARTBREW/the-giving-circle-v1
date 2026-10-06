import type { CausePageContent } from "@/constants/cause-page";
import CausePageAbout from "./about";
import CausePageCtaExplore from "./cta-explore";
import CausePageFaqs from "./faqs";
import CausePageHero from "./hero";
import CausePageHow from "./how";
import CausePageImpact from "./impact";
import CausePageLearn from "./learn";
import CausePageSupport from "./support";
import CausePageTheory from "./theory";
import CausePageVetting from "./vetting";
import CausePageVoices from "./voices";

type CauseDetailTemplateProps = {
  content: CausePageContent;
};

/** Shared cause detail layout — hero through explore. Content is per-cause in constants. */
export default function CauseDetailTemplate({ content }: CauseDetailTemplateProps) {
  return (
    <>
      <CausePageHero content={content.hero} />
      <CausePageAbout content={content.about} />
      <CausePageTheory content={content.theory} />
      <CausePageHow content={content.how} />
      <CausePageVoices content={content.voices} />
      <CausePageSupport content={content.support} />
      <CausePageVetting content={content.vetting} />
      <CausePageImpact content={content.impact} />
      <CausePageLearn content={content.learn} />
      <CausePageFaqs content={content.faqs} />
      <CausePageCtaExplore cta={content.cta} explore={content.explore} />
    </>
  );
}
