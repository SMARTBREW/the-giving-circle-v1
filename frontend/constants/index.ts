export { InterFont, InstrumentSerif, SatoshiBold } from "./fonts";

export const SEGOE_UI_CLASS = "font-segoe";

export const NAV_ITEM_CLASS = `${SEGOE_UI_CLASS} shrink-0 whitespace-nowrap font-[500] text-[1.125rem] text-[#000000]`;

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
  { href: "/#about", label: "About" },
  { href: "/#causes", label: "Live Causes" },
  { href: "/#stories", label: "Impact Stories" },
  { href: "/#blogs", label: "Blogs" },
] as const;

export const GET_INVOLVED_LINKS = [
  { href: "/#champion", label: "Become a Cause Champion" },
  { href: "/#partner", label: "Partner as an NGO" },
  { href: "/#volunteer", label: "Volunteer With Us" },
] as const;

export const GET_INVOLVED_ITEM_CLASS = `${SEGOE_UI_CLASS} block w-[12.1875rem] h-[1.3125rem] font-[400] text-[1rem] leading-[1.3125rem] text-[#000000] whitespace-nowrap`;

export const CHAMPION_PHOTO = "/images/cta images/24cd8db82cca8c8ff709461cd6a0ce14e96b9b3e.png";

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
    body: "Individuals who pool donations with their network and fund a live cause — together, not alone.",
  },
  {
    title: "Verified NGOs",
    body: "Partners we verify, running causes in education, women’s empowerment, animal welfare, and disaster relief. Your gift reaches them directly.",
  },
  {
    title: "Young Champions",
    body: "Students leading school and college fundraising and volunteering — the next generation of our circle.",
  },
] as const;

export const MAX_PAYLOAD_SIZE = 1024 * 1024;
export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];
