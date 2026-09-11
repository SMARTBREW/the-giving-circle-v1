export const STORIES_HERO = {
  eyebrow: "Impact Stories",
  title: "Real Stories. Lasting Impact.",
  subtitle:
    "Discover how Cause Champions and verified NGOs are turning collective support into meaningful change across India.",
  src: "/images/stories/c0fcbd6be0a24b7c89a15933e825abe1b1a9ea02.png",
  alt: "Schoolgirls holding menstrual health education pamphlets at a Wings of Hope session",
  ctaLabel: "Champion a Cause",
  ctaHref: "/champion/apply",
} as const;

export const STORIES_ARTICLES_INTRO = {
  eyebrow: "From Our Circle",
  title: "Stories That Stay With You",
  subtitle:
    "Each story follows Cause Champions and verified NGOs as collective giving becomes education, care, relief, and dignity on the ground.",
} as const;

export const STORIES_REACH = {
  eyebrow: "The Numbers Behind Every Story",
  title: "Impact You Can Measure",
  subtitle:
    "Behind every story is a growing circle of people making collective giving count.",
} as const;

export const STORIES_CTA = {
  src: "/images/stories/c8329e59978e6b525af70415259a31cd1f388a41.png",
  alt: "Volunteers helping an elderly woman along a flooded mountain path",
  title: "Be Part of the Next Story.",
  subtitle:
    "Champion a cause, build your giving circle, and create change that communities will remember for years.",
  ctaLabel: "Champion a Cause",
  href: "/champion/apply",
  objectPosition: "object-[50%_40%] sm:object-[48%_35%]",
} as const;

export const STORY_ARTICLES = [
  {
    id: "wings-of-hope",
    tag: "Women’s Health",
    tagClassName: "bg-[#ED3B58]",
    org: "JWP",
    location: "Multiple States, India",
    title: "Wings of Hope: Breaking Barriers Through Menstrual Health Education",
    summary:
      "Cause Champions and Joint Women’s Programme bring menstrual health education into classrooms, so girls return to school with dignity, knowledge, and support.",
    highlight: { value: "1,200+", label: "Women & Girls Served" },
    stats: [
      { icon: "people" as const, value: "1,200+", label: "Women & Girls Reached" },
      { icon: "pin" as const, value: "30", label: "Communities Served" },
      { icon: "ribbon" as const, value: "200+", label: "Health Educators Trained" },
      { icon: "chart" as const, value: "95%", label: "School Attendance Rate" },
    ],
    quote: {
      text: "Before this program, I used to miss school every month and felt ashamed. Now I have dignity, knowledge, and I'm helping other girls in my community. Wings of Hope gave me my confidence back.",
      author: "Priya Sharma",
      role: "Program Participant & Health Educator",
    },
    date: "March 2024",
    body: [
      "Wings of Hope began with a simple observation: too many girls were missing school every month because periods were treated as something to hide. Working with our verified partner Joint Women’s Programme, Cause Champions built a circle of support around classrooms that needed open conversation, accurate information, and practical help.",
      "Each session brings schoolgirls together for clear education, access to safe products, and space to ask questions without shame. Teachers and parents join the circle too, so the learning continues. Champions can visit project sites, meet participants, and see the change they helped fund, with every contribution going directly to the NGO.",
    ],
    src: "/images/stories/c0fcbd6be0a24b7c89a15933e825abe1b1a9ea02.png",
    alt: "Schoolgirls holding menstrual health education pamphlets at a Wings of Hope session",
  },
  {
    id: "pawsitive-protectors",
    tag: "Animal Welfare",
    tagClassName: "bg-[var(--Brand-Green-Teal,#00A98F)]",
    org: "Animal Care",
    location: "Mumbai, Maharashtra",
    title: "Pawsitive Protectors: Saving Lives One Animal at a Time",
    summary:
      "Cause Champions stand with Animal Care for stray vaccination, emergency rescues, and ongoing care that protects animals and neighbourhoods together.",
    highlight: { value: "100,000+", label: "Animals Rescued" },
    stats: [
      { icon: "check" as const, value: "7,126", label: "Strays Vaccinated" },
      { icon: "heart" as const, value: "200+", label: "Caregivers Vaccinated" },
      { icon: "people" as const, value: "142,520", label: "People Protected" },
      { icon: "pin" as const, value: "Delhi & NCR", label: "Shelter Residents" },
    ],
    quote: {
      text: "When we found Max with a broken leg, we thought we'd lost him. Thanks to Animal Care, he's now healthy and the most loved member of our family.",
      author: "Priya Sharma",
      role: "Pet Adopter",
    },
    date: "Ongoing since 2021",
    body: [
      "Street animals rarely get a second chance. Through Pawsitive Protectors, Cause Champions stand with Animal Care to vaccinate, treat, rescue, and protect dogs and other animals living without a home. The work is urgent and local, from emergency rescues to vaccination drives that keep neighbourhoods safer.",
      "Every contribution goes directly to the NGO. Champions invite their circle to multiply the impact, and supporters can visit, meet the animals, and walk with volunteers. Since 2021, the campaign has grown through collective giving across Mumbai, Delhi & NCR, and beyond.",
    ],
    src: "/images/stories/8085a2143fded1b5d4a64084b028d63971664fc4.png",
    alt: "Volunteers feeding and caring for street dogs",
  },
  {
    id: "flood-relief-uttarakhand",
    tag: "Disaster Relief",
    tagClassName: "bg-[var(--Brand-Deep-Blue,#3976A8)]",
    org: "GUS",
    location: "Uttarakhand, India",
    title: "Flood Relief Uttarakhand: Hope in the Face of Disaster",
    summary:
      "When floods hit Uttarakhand, Cause Champions and GUS moved relief, medical care, and rebuilding support directly to families on the ground.",
    highlight: { value: "3,000+", label: "Families Supported" },
    stats: [
      { icon: "people" as const, value: "3,000+", label: "Families Rescued" },
      { icon: "heart" as const, value: "50,000+", label: "Food Packets Distributed" },
      { icon: "check" as const, value: "8,000+", label: "Medical Treatments" },
      { icon: "pin" as const, value: "450", label: "Homes Rebuilt" },
    ],
    quote: {
      text: "We lost everything in the floods, but GUS gave us hope. They didn't just help us survive, they helped us rebuild our lives stronger than before.",
      author: "Ram Singh Rawat",
      role: "Flood Survivor & Community Leader",
    },
    date: "January 2024",
    body: [
      "When floods tore through communities in Uttarakhand, families needed food, dry shelter, medical care, and people willing to travel difficult roads. Cause Champions and their circles moved quickly with GUS and verified partners already trusted on the ground.",
      "Relief began with essentials, then shifted to rebuilding homes and supporting local leaders. Contributions went directly to NGO partners, with updates shared back to every giving circle. Hope returned as food delivered, treatment given, and homes rebuilt one by one.",
    ],
    src: "/images/stories/c8329e59978e6b525af70415259a31cd1f388a41.png",
    alt: "Volunteers helping an elderly woman along a flooded mountain path",
  },
] as const;

const IMPACT_STORY_CARD_META = [
  {
    id: "wings-of-hope",
    featured: true,
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_55.41%,rgba(0,0,0,0.05)_62.12%,rgba(0,0,0,0.22)_64.65%,rgba(0,0,0,0.58)_67.04%,rgba(0,0,0,0.88)_70.32%)]",
  },
  {
    id: "pawsitive-protectors",
    featured: false,
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_26.97%,rgba(0,0,0,0.04)_35.72%,rgba(0,0,0,0.18)_39.64%,rgba(0,0,0,0.52)_43.55%,rgba(0,0,0,0.86)_50%)]",
  },
  {
    id: "flood-relief-uttarakhand",
    featured: false,
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_19.09%,rgba(0,0,0,0.04)_28.07%,rgba(0,0,0,0.18)_32.09%,rgba(0,0,0,0.52)_36.11%,rgba(0,0,0,0.86)_42.73%)]",
  },
] as const;

export const IMPACT_STORIES = IMPACT_STORY_CARD_META.map((meta) => {
  const story = STORY_ARTICLES.find((item) => item.id === meta.id);
  if (!story) {
    throw new Error(`Missing story article for card: ${meta.id}`);
  }

  return {
    featured: meta.featured,
    tag: story.tag,
    tagClassName: story.tagClassName,
    overlayClassName: meta.overlayClassName,
    title: story.title,
    src: story.src,
    alt: story.alt,
    href: `/stories#${story.id}`,
  };
});

export type StoryArticle = (typeof STORY_ARTICLES)[number];
export type StoryStatIcon = StoryArticle["stats"][number]["icon"];
