export { InterFont, InstrumentSerif, PoppinsFont, SatoshiBold } from "./fonts";
export { CAUSES_PAGE, CAUSE_FILTER_ALL } from "./causes";
export {
  CAUSES_LIST_INTRO,
  CAUSES_REACH,
  CAUSES_CTA,
  CAUSE_CATEGORY_CARDS,
  LIVE_CAUSES,
  getLiveCause,
  getFeaturedCauses,
  getCauseCategories,
  toCampaignCard,
} from "./causes";
export type { LiveCause, CampaignCardData } from "./causes";
export {
  CAUSE_DETAIL_CONTENT,
  getCauseDetailContent,
} from "./cause-details";
export type { CauseDetailContent } from "./cause-details";

/** @deprecated Prefer CAUSE_CATEGORY_CARDS   kept for existing home imports during rename. */
export { CAUSE_CATEGORY_CARDS as CAUSE_CARDS } from "./causes";
export {
  ABOUT_WHY_WE_GATHER,
  ABOUT_OUR_STORY,
  ABOUT_CORE_VALUES_INTRO,
  ABOUT_CORE_VALUES,
  ABOUT_NUMBERS,
  ABOUT_TEAM,
  ABOUT_MISSION,
  ABOUT_VISION,
  ABOUT_VISION_CTA,
} from "./about";
export {
  STORY_ARTICLES,
  IMPACT_STORIES,
  STORIES_HERO,
  STORIES_ARTICLES_INTRO,
  STORIES_REACH,
  STORIES_CTA,
} from "./stories";
export type { StoryArticle } from "./stories";
export {
  BLOG_ARTICLES,
  BLOG_HERO,
  BLOG_ARTICLES_INTRO,
  BLOG_FILTER_ALL,
  BLOG_REACH,
  BLOG_CTA,
  getBlogArticle,
  getBlogCategories,
} from "./blog";
export type { BlogArticle, BlogSection } from "./blog";
export {
  CHAMPION_PAGE_HERO,
  CHAMPION_HOW_IT_WORKS,
  CHAMPION_CAMPAIGNS,
  CHAMPION_TRUST,
  CHAMPION_VOICES,
  CHAMPION_MEET,
  CHAMPION_CTA,
  CHAMPION_APPLY,
} from "./champion";
export type {
  ChampionTestimonial,
  ChampionApplyCauseId,
  ChampionApplyReasonId,
  ChampionApplyPresetReason,
} from "./champion";
export {
  isChampionApplyPresetReason,
  CHAMPION_APPLY_PRESET_REASONS,
} from "./champion";
export { PARTNER_APPLY } from "./partner";
export type { PartnerApplyFocusId } from "./partner";
export { CONTACT_APPLY } from "./contact";
export {
  SITE_FAQS,
  ALL_FAQS,
  FAQ_ITEMS,
  FAQS_PAGE,
  ABOUT_FAQS,
  CHAMPION_FAQS,
  VOLUNTEER_FAQS,
  PARTNER_FAQS,
  faqsByIds,
  getFaq,
} from "./faqs";
export type { FaqEntry, FaqLink, SiteFaqId } from "./faqs";
export {
  VOLUNTEER_PAGE_HERO,
  VOLUNTEER_HOW_IT_WORKS,
  VOLUNTEER_TRUST,
  VOLUNTEER_MEET,
  VOLUNTEER_CTA,
} from "./volunteer";
export type { CampaignCardData as ChampionCampaignCard } from "./causes";
export const SEGOE_UI_CLASS = "font-segoe";

export const NAV_ITEM_CLASS = `${SEGOE_UI_CLASS} whitespace-nowrap font-[500] text-[0.8125rem] text-[var(--Dark-Charcoal,#1c2426)] min-[90rem]:text-[1.125rem]`;

export const SITE = {
  name: "The Giving Circle",
  shortName: "TGC",
  url: "https://www.thegivingcircle.in",
  founded: 2022,
  tagline: "A Stronger Circle. A Greater Impact.",
  description:
    "Champion a cause backed by a verified NGO, bring your circle together, and help raise funds for meaningful change.",
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/causes", label: "Live Causes" },
  { href: "/stories", label: "Impact Stories" },
  { href: "/blog", label: "Blogs" },
] as const;

export const GET_INVOLVED_LINKS = [
  { href: "/become-a-cause-champion", label: "Become a Cause Champion" },
  { href: "/partner", label: "Partner as an NGO" },
  { href: "/volunteer", label: "Volunteer With Us" },
] as const;

export const GET_INVOLVED_ITEM_CLASS = `${SEGOE_UI_CLASS} block font-[400] text-[1rem] leading-[1.3125rem] text-[var(--Dark-Charcoal,#1c2426)]`;

export const FOOTER_BLURB =
  "A trusted social impact platform that connects people directly with verified NGOs and meaningful causes across India.";

export const FOOTER_HEADING_CLASS = `${SEGOE_UI_CLASS} text-[1.125rem] leading-7 font-[500] tracking-normal uppercase text-[var(--Main-headings,#1c2426)] sm:text-[1.25rem] sm:leading-[1.75rem]`;

export const FOOTER_LINK_CLASS = `${SEGOE_UI_CLASS} break-words text-[1rem] leading-7 font-[400] tracking-normal text-[#4a5558]`;

export const FOOTER_BLURB_CLASS = `${SEGOE_UI_CLASS} w-full text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#4a5558] sm:text-[1rem] sm:leading-7`;

export const FOOTER_QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/causes", label: "Live Causes" },
  { href: "/stories", label: "Impact Stories" },
  { href: "/blog", label: "Blogs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const FOOTER_CONTACT = [
  {
    type: "phone",
    href: "tel:+919810353603",
    label: "+91 98103 53603",
  },
  {
    type: "email",
    href: "mailto:hello@thegivingcircle.in",
    label: "hello@thegivingcircle.in",
  },
  {
    type: "location",
    href: "",
    label: "Gurugram, Haryana",
  },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/#", label: "Privacy Policy" },
  { href: "/#", label: "Terms Of Service" },
  { href: "/#", label: "Sitemap" },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
] as const;

export const CHAMPION_PHOTO = "/images/cta images/24cd8db82cca8c8ff709461cd6a0ce14e96b9b3e.png";
export const CHAMPION_VIDEO = "/images/TGC_Shivi_WoH_Homepage.mp4";
export const CHAMPION_VIDEO_POSTER = "/images/champion-shivi-poster.jpg";

export const SUPPORT_CAUSE_PHOTO =
  "/images/support-cause-desktop.png";
export const SUPPORT_CAUSE_PHOTO_MOBILE =
  "/images/support-cause-mobile.png";

export const EDUCATION_PHOTO =
  "/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png";

export const SUPPORT_CAUSE_BAND = {
  src: SUPPORT_CAUSE_PHOTO,
  mobileSrc: SUPPORT_CAUSE_PHOTO_MOBILE,
  alt: "Schoolchildren in our circle, smiling together",
  title: "Your Giving Circle Can Change a Life",
  subtitle: "Help create a ripple of positive change",
  ctaLabel: "Support a Cause",
  href: "/causes",
} as const;

export const MOMENT_CARDS = [
  {
    title: "Birthday",
    body: "This birthday bring your loved ones\ntogether to support a cause\nyou\u00A0care\u00A0about.",
    ctaLabel: "Start a Birthday Fundraiser",
    iconSrc: "/images/moments/birthday-v3.png",
    href: "/champion/apply?reason=birthday",
  },
  {
    title: "Anniversary",
    body: "Celebrate your journey by giving back to a cause that matters\u00A0to\u00A0both\u00A0of\u00A0you.",
    ctaLabel: "Start an Anniversary Fundraiser",
    iconSrc: "/images/moments/anniversary-v3.png",
    href: "/champion/apply?reason=anniversary",
  },
  {
    title: "Remembrance",
    body: "Honour a loved one’s memory by giving to a cause that was close\u00A0to\u00A0their\u00A0heart.",
    ctaLabel: "Start a Remembrance Fundraiser",
    iconSrc: "/images/moments/remembrance-v3.png",
    href: "/champion/apply?reason=remembrance",
  },
] as const;

export const REACH_STATS = [
  { value: "150+", label: "Active Volunteers" },
  { value: "1000+", label: "Cause Champions" },
  { value: "80,000+", label: "Lives Impacted" },
  { value: "₹300L+", label: "Funds Mobilised" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    title: "1. Find a Cause",
    body: "Explore\u00A0verified\u00A0causes\u00A0and\u00A0choose\u00A0one\nthat\u00A0matters\u00A0to\u00A0you.",
    iconSrc: "/images/how-it-works/find-cause-v2.png",
  },
  {
    title: "2. Choose How to Support",
    body: "Donate\u00A0to\u00A0an\u00A0NGO\u00A0or\u00A0rally\u00A0your\u00A0circle\nas\u00A0a\u00A0Cause\u00A0Champion.",
    iconSrc: "/images/how-it-works/choose-support-v2.png",
  },
  {
    title: "3. Follow the Impact",
    body: "Follow\u00A0updates\u00A0and\u00A0see\u00A0the\u00A0difference\nyour\u00A0support\u00A0creates.",
    iconSrc: "/images/how-it-works/follow-impact-v2.png",
  },
] as const;

export const VOLUNTEER_BAND = {
  eyebrow: "Volunteer for Change",
  title: "Make a Difference With Us",
  subtitle:
    "Contribute your time, skills, and energy to verified causes creating meaningful change across communities.",
  ctaLabel: "Become a Volunteer",
  href: "/volunteer",
} as const;

export const VOLUNTEERS = [
  {
    name: "Surendra Sukhraj",
    role: "Trustee - Animal Care",
    src: "/images/volunteer/surendra-sukhraj-animal-care.jpg",
    alt: "Surendra Sukhraj with a rescued dog during animal care work",
  },
  {
    name: "Radhika Sethi",
    role: "Volunteer - Wings of Hope",
    src: "/images/volunteer/radhika-sethi.jpeg",
    alt: "Radhika Sethi, volunteer with Wings of Hope",
  },
  {
    name: "Vanshu Saini",
    role: "Passionate about Animals",
    src: "/images/volunteer/vanshu-saini-animals.jpg",
    alt: "Vanshu Saini with a mountain dog in the Himalayas",
  },
  {
    name: "Ruhaan Sharma",
    role: "Nature Enthusiast",
    src: "/images/volunteer/ruhaan-sharma.png",
    alt: "Ruhaan Sharma, nature enthusiast",
  },
  // Muted for now — swap back in when ready:
  // {
  //   name: "Ayesha Mehta",
  //   role: "ngo-3",
  //   src: "/images/testmi/099e4d57b98ec71c66eb071e71b13ef69b282c7d.png",
  //   alt: "Ayesha Mehta in a clinic wearing a lab coat and stethoscope",
  // },
  // {
  //   name: "Priya Sharma",
  //   role: "ngo-1",
  //   src: "/images/testmi/953105c0d2ea2d9d1703198bae02e59fa2c87e63.png",
  //   alt: "Priya Sharma standing in a classroom in front of a chalkboard",
  // },
  // {
  //   name: "Bhushan Khurana",
  //   role: "ngo-2",
  //   src: "/images/testmi/f846f5578286c4f1943dd07a272ad57a92cd1b3a.png",
  //   alt: "Bhushan Khurana smiling at a laptop in an office",
  // },
  // {
  //   name: "Sanjay Bosu Mullick",
  //   role: "Founder - ICFG",
  //   src: "/images/volunteer/sanjay-bosu-mullick-icfg.jpg",
  //   alt: "Sanjay Bosu Mullick of ICFG",
  // },
  // {
  //   name: "Jyotsna Chatterji",
  //   role: "Founder - JWP",
  //   src: "/images/volunteer/jyotsna-chatterji-jwp.jpg",
  //   alt: "Jyotsna Chatterji of JWP speaking at an event",
  // },
] as const;

export const PARTNER_LOGOS = [
  {
    src: "/images/partners/AnimalCare-Org-Logo.png",
    alt: "AnimalCare",
  },
  {
    src: "/images/partners/PehliClass-CampaignLogo-Org-JWP.png",
    alt: "Pehli Class",
  },
  {
    src: "/images/partners/BrickByBrick-CampaignLogo-Org-AnimalCare.png",
    alt: "Brick by Brick",
  },
  {
    src: "/images/partners/WingsofHope-CampaignLogo-Org-JWP.png.png",
    alt: "Wings of Hope",
  },
  {
    src: "/images/partners/ICFG-Org-Logo.png",
    alt: "Institute of Community Forest Governance",
  },
  {
    src: "/images/partners/BowlsofHope-CampaignLogo-Org-AnimalCare.png",
    alt: "Bowls of Hope",
  },
  {
    src: "/images/partners/JWP-Org-Logo.png",
    alt: "Joint Women's Programme",
  },
  {
    src: "/images/partners/PawsitiveProtector-CampaignLogo-Org-AnimalCare.png",
    alt: "Pawsitive Protectors",
  },
] as const;

export const CHAMPION_STEPS = [
  {
    iconSrc: "/images/cta-icons/start-your-journey.png",
    title: "Start your fundraising journey",
    body: "Choose a cause and begin your Giving Circle.",
  },
  {
    iconSrc: "/images/cta-icons/invite-circle.png",
    title: "Invite your friends and colleagues",
    body: "Rally your circle and multiply your impact.",
  },
  {
    iconSrc: "/images/cta-icons/track-milestones.png",
    title: "Track every milestone",
    body: "Follow donations and campaign progress as it grows.",
  },
  {
    iconSrc: "/images/cta-icons/receive-updates.png",
    title: "Receive impact updates",
    body: "Get regular updates and stories from the communities.",
  },
] as const;

export const HOW_THE_CIRCLE_WORKS = [
  {
    title: "Cause Champions",
    body: "Individuals who pool donations with their network and fund a live cause   together, not alone.",
  },
  {
    title: "Verified NGOs",
    body: "Partners we verify, running causes in education, women’s empowerment, animal welfare, and disaster relief. Your gift reaches them directly.",
  },
  {
    title: "Young Champions",
    body: "Students leading school and college fundraising and volunteering   the next generation of our circle.",
  },
] as const;

export const MAX_PAYLOAD_SIZE = 1024 * 1024;
export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];
