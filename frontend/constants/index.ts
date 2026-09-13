export { InterFont, InstrumentSerif, PoppinsFont, SatoshiBold } from "./fonts";
export { CAUSES_PAGE, CAUSE_FILTER_ALL } from "./causes";
export {
  CAUSES_HERO,
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
  ABOUT_FAQS,
} from "./about";
export {
  STORY_ARTICLES,
  IMPACT_STORIES,
  STORIES_HERO,
  STORIES_ARTICLES_INTRO,
  STORIES_REACH,
  STORIES_CTA,
} from "./stories";
export type { StoryArticle, StoryStatIcon } from "./stories";
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
  CHAMPION_FAQS,
  CHAMPION_CTA,
  CHAMPION_APPLY,
} from "./champion";
export type {
  ChampionTestimonial,
  ChampionApplyCauseId,
  ChampionApplyReasonId,
} from "./champion";
export { PARTNER_APPLY } from "./partner";
export type { PartnerApplyFocusId } from "./partner";
export {
  VOLUNTEER_PAGE_HERO,
  VOLUNTEER_HOW_IT_WORKS,
  VOLUNTEER_TRUST,
  VOLUNTEER_MEET,
  VOLUNTEER_FAQS,
  VOLUNTEER_CTA,
} from "./volunteer";
export type { CampaignCardData as ChampionCampaignCard } from "./causes";
export const SEGOE_UI_CLASS = "font-segoe";

export const NAV_ITEM_CLASS = `${SEGOE_UI_CLASS} whitespace-nowrap font-[500] text-[0.8125rem] text-[#000000] min-[90rem]:text-[1.125rem]`;

export const SITE = {
  name: "The Giving Circle",
  shortName: "TGC",
  url: "https://thegivingcircle.in",
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
  { href: "/champion", label: "Become a Cause Champion" },
  { href: "/partner", label: "Partner as an NGO" },
  { href: "/volunteer", label: "Volunteer With Us" },
] as const;

export const GET_INVOLVED_ITEM_CLASS = `${SEGOE_UI_CLASS} block font-[400] text-[1rem] leading-[1.3125rem] text-[#000000]`;

export const FOOTER_BLURB =
  "A trusted social impact platform connecting people with verified NGOs, meaningful causes, and ways to get involved across India.";

export const FOOTER_HEADING_CLASS = `${SEGOE_UI_CLASS} text-[1.125rem] leading-7 font-[500] tracking-normal uppercase text-[var(--Main-headings,#000000)] sm:text-[1.25rem] sm:leading-[1.75rem]`;

export const FOOTER_LINK_CLASS = `${SEGOE_UI_CLASS} break-words text-[1rem] leading-7 font-[400] tracking-normal text-[#212121]`;

export const FOOTER_BLURB_CLASS = `${SEGOE_UI_CLASS} w-full text-[0.9375rem] leading-6 font-[400] tracking-normal text-[#212121] sm:text-[1rem] sm:leading-7`;

export const FOOTER_QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/causes", label: "Live Causes" },
  { href: "/stories", label: "Impact Stories" },
  { href: "/blog", label: "Blogs" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/#contact", label: "Contact Us" },
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
  title: "Your Giving Can Change a Life.",
  subtitle:
    "Every verified donation helps children, families, and communities\naccess better education, healthcare, and opportunities.",
  ctaLabel: "Support a Cause",
  href: "/causes",
} as const;

export const MOMENT_CARDS = [
  {
    title: "Birthday",
    body: "Turn your celebration into support for a cause you care about, and bring your circle along.",
    ctaLabel: "Start a Birthday Fundraiser",
    iconSrc: "/images/moments/96e2113621a7af04d4cce296e51af5e80dc3bdff.png",
    href: "/champion/apply",
  },
  {
    title: "Anniversary",
    body: "Mark your journey together by supporting a cause you care about, and bring your circle along.",
    ctaLabel: "Start an Anniversary Fundraiser",
    iconSrc: "/images/moments/af9d4dad96f552ff7f72f1bcc82853f2e29cfc3a.png",
    href: "/champion/apply",
  },
  {
    title: "Remembrance",
    body: "Honour a loved one’s memory through a cause that mattered to them, and bring your circle together in support.",
    ctaLabel: "Start a Remembrance Fundraiser",
    iconSrc: "/images/moments/4bfa4bfbeda58617c8b0d01a16ffa880c6024337.png",
    href: "/champion/apply",
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
    body: "Explore verified causes and choose one that matters to you.",
    iconSrc:
      "/images/how it works/8ced2d2958840a613a126abc40353e58ce5151bf.png",
  },
  {
    title: "2. Choose How to Support",
    body: "Donate to an NGO or rally your circle as a Cause Champion.",
    iconSrc:
      "/images/how it works/173baae52fce27e8eef82db1710a5bec73a3beed.png",
  },
  {
    title: "3. Follow the Impact",
    body: "Follow updates and see the difference your support creates.",
    iconSrc:
      "/images/how it works/d2a8060bb71c100889a6d7d61b3f262eaf635a9b.png",
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
    name: "Priya Sharma",
    role: "Teacher",
    src: "/images/testmi/953105c0d2ea2d9d1703198bae02e59fa2c87e63.png",
    alt: "Priya Sharma standing in a classroom in front of a chalkboard",
  },
  {
    name: "Bhushan Khurana",
    role: "Marketing Lead",
    src: "/images/testmi/f846f5578286c4f1943dd07a272ad57a92cd1b3a.png",
    alt: "Bhushan Khurana smiling at a laptop in an office",
  },
  {
    name: "Ayesha Mehta",
    role: "Doctor",
    src: "/images/testmi/099e4d57b98ec71c66eb071e71b13ef69b282c7d.png",
    alt: "Ayesha Mehta in a clinic wearing a lab coat and stethoscope",
  },
  {
    name: "Suresh Nair",
    role: "Entrepreneur",
    src: "/images/testmi/096f144ac332a86ad699acc4cdc8e2eff813d811.png",
    alt: "Suresh Nair at a desk in an office",
  },
] as const;

export const PARTNER_LOGO_SETS = [
  [
    {
      src: "/images/partners/PehliClass-CampaignLogo-Org-JWP.png",
      alt: "Pehli Class",
    },
    {
      src: "/images/partners/WingsofHope-CampaignLogo-Org-JWP.png.png",
      alt: "Wings of Hope",
    },
    {
      src: "/images/partners/PawsitiveProtector-CampaignLogo-Org-AnimalCare.png",
      alt: "Pawsitive Protectors",
    },
    {
      src: "/images/partners/JWP-Org-Logo.png",
      alt: "Joint Women's Programme",
    },
    {
      src: "/images/partners/ICFG-Org-Logo.png",
      alt: "Institute of Community Forest Governance",
    },
  ],
  [
    {
      src: "/images/partners/BrickByBrick-CampaignLogo-Org-AnimalCare.png",
      alt: "Brick by Brick",
    },
    {
      src: "/images/partners/BowlsofHope-CampaignLogo-Org-AnimalCare.png",
      alt: "Bowls of Hope",
    },
    {
      src: "/images/partners/AnimalCare-Org-Logo.png",
      alt: "AnimalCare",
    },
    {
      src: "/images/partners/PehliClass-CampaignLogo-Org-JWP.png",
      alt: "Pehli Class",
    },
    {
      src: "/images/partners/WingsofHope-CampaignLogo-Org-JWP.png.png",
      alt: "Wings of Hope",
    },
  ],
] as const;

export const CHAMPION_STEPS = [
  {
    iconSrc: "/images/cta images/3538e015ff2f3dcbb143d7e71aca9a88c5979510.png",
    title: "Start your fundraising journey",
    body: "Choose a cause and begin your Giving Circle.",
  },
  {
    iconSrc: "/images/cta images/df6be06ffdd8ae18ad5573832334dd0eb085f00c.png",
    title: "Invite your friends and colleagues",
    body: "Rally your circle and multiply your impact.",
  },
  {
    iconSrc: "/images/cta images/541c5609f9971e42c70b5397389ba28031114fa3.png",
    title: "Track every milestone",
    body: "Follow donations and campaign progress as it grows.",
  },
  {
    iconSrc: "/images/cta images/012ca56cf24da21b558a1062ef43353e11b12fdc.png",
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

export const FAQ_ITEMS = [
  {
    question: "What is The Giving Circle?",
    answer:
      "The Giving Circle is an Indian fundraising platform for people who want to make a difference. You choose a cause you care about, start a fundraiser for the verified NGO working on it, and raise funds by sharing it with your personal and professional network. We call these volunteer fundraisers Cause Champions.",
  },
  {
    question: "How do I start a fundraiser for an NGO in India?",
    answer:
      "Choose a live cause backed by a verified NGO, start your Giving Circle as a Cause Champion, and share it with your personal and professional network. Your circle’s gifts go directly to the NGO running the cause.",
  },
  {
    question: "What is a Cause Champion?",
    answer:
      "A Cause Champion is someone who starts a Giving Circle, pooling support with friends, family, and colleagues to fund a live cause together, not alone.",
  },
  {
    question: "Does it cost anything to start a fundraiser?",
    answer:
      "No. It costs nothing to start a Giving Circle and become a Cause Champion. Donations go directly to the verified NGO.",
  },
  {
    question: "Will I receive an 80G donation receipt?",
    answer:
      "Eligible donations are receipted under 80G by the verified NGO, because your gift goes directly to them.",
  },
  {
    question: "Can I volunteer with The Giving Circle?",
    answer:
      "Yes. You can volunteer your time, skills, and energy with verified causes across our circle. Write to us and we will help you find a place to start.",
  },
] as const;

export const MAX_PAYLOAD_SIZE = 1024 * 1024;
export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];
