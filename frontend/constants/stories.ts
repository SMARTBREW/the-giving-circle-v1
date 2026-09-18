export const STORIES_HERO = {
  eyebrow: "Impact Stories",
  title: "Real Stories. Lasting Impact.",
  subtitle:
    "Discover how Cause Champions and verified NGOs are turning collective support into meaningful change across India.",
  src: "/images/stories/asdasd.jpg",
  alt: "Schoolchildren in green uniforms and community volunteers gathered together in a classroom",
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
  src: "/images/stories/stories-cta-desktop.png",
  mobileSrc: "/images/stories/stories-cta-mobile.png",
  alt: "A community group of women and youth smiling and conversing together outdoors",
  title: "Be Part of the Next Story.",
  subtitle:
    "Champion a cause, build your giving circle, and create change that communities will remember for years.",
  ctaLabel: "Champion a Cause",
  href: "/champion/apply",
  objectPosition: "object-[50%_50%] sm:object-[50%_45%]",
  mobileObjectPosition: "object-[50%_65%]",
} as const;

export const STORY_ARTICLES = [
  {
    id: "wings-of-hope",
    tag: "Women’s Health",
    tagClassName: "bg-[#e62b4f]",
    org: "JWP",
    location: "Multiple States, India",
    title: "Wings of Hope: Breaking Barriers Through Menstrual Health Education",
    summary:
      "Cause Champions and Joint Women’s Programme bring menstrual health education into classrooms, so girls return to school with dignity, knowledge, and support.",
    highlight: { value: "30,000+", label: "Women & Girls Served" },
    stats: [
      { icon: "people" as const, value: "30,000+", label: "Women & Girls Reached" },
      { icon: "pin" as const, value: "7", label: "States Covered" },
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
    src: "/images/stories/WhatsApp_Image_2026-05-18_at_4.24.50_PM.jpg",
    alt: "Students at Rajkiya Balika Inter College holding Wings of Hope menstrual health kits",
    objectPosition: "object-[50%_35%]",
  },
  {
    id: "pawsitive-protectors",
    tag: "Animal Welfare",
    tagClassName: "bg-[var(--Brand-Green-Teal,#02938c)]",
    org: "Animal Care",
    location: "Mumbai, Maharashtra",
    title: "Pawsitive Protectors: Saving Lives One Animal at a Time",
    summary:
      "Cause Champions stand with Animal Care for stray vaccination, emergency rescues, and ongoing care that protects animals and neighbourhoods together.",
    highlight: { value: "1,891+", label: "Animals Rescued" },
    stats: [
      { icon: "check" as const, value: "12,344+", label: "Strays Vaccinated" },
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
    src: "/images/stories/WhatsApp_Image_2025-12-12_at_14.16.19.jpg",
    alt: "A volunteer smiling while holding a rescued puppy",
    objectPosition: "object-[50%_25%]",
  },
  {
    id: "community-forest-governance",
    tag: "Forest Rights",
    tagClassName: "bg-[var(--Brand-Green-Teal,#02938c)]",
    org: "ICFG",
    location: "Jharkhand & Central India",
    title: "Community Forest Governance: Protecting Forests, Empowering People",
    summary:
      "Under the Forest Rights Act, ICFG and Cause Champions empower tribal forest communities to secure legal rights, plant indigenous saplings, and restore ecosystems.",
    highlight: { value: "2,000+", label: "Villages Mobilised" },
    stats: [
      { icon: "pin" as const, value: "2,000+", label: "Villages Mobilised" },
      { icon: "check" as const, value: "10,000+", label: "Hectares Protected" },
      { icon: "heart" as const, value: "50,000+", label: "Native Trees Planted" },
      { icon: "people" as const, value: "100%", label: "Community Run" },
    ],
    quote: {
      text: "The Forest Rights Act has changed the life of the forest dwellers of Chaingada, fostering self-reliance and environmental sustainability.",
      author: "Chaingada Community Leader",
      role: "Forest Governance Committee",
    },
    date: "February 2024",
    body: [
      "India's forests are home to millions of indigenous and tribal people whose culture and daily sustenance depend directly on nature. Through community forest governance, ICFG empowers villagers to take legal stewardship over their ancestral ecosystems.",
      "Village committees establish native tree nurseries, protect bio-corridors, and manage non-timber forest produce sustainably. Giving circles fund local workshops and sapling drives, with every milestone reported transparently back to donors.",
    ],
    src: "/images/stories/DSC05008-scaled.webp",
    alt: "Tribal women weaving bamboo and forest produce crafts outside their home",
    objectPosition: "object-center",
  },
] as const;

const IMPACT_STORY_CARD_META = [
  {
    id: "wings-of-hope",
    featured: true,
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_64%,rgba(0,0,0,0.05)_71%,rgba(0,0,0,0.22)_75%,rgba(0,0,0,0.58)_80%,rgba(0,0,0,0.88)_86%)]",
  },
  {
    id: "pawsitive-protectors",
    featured: false,
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_48%,rgba(0,0,0,0.08)_56%,rgba(0,0,0,0.28)_62%,rgba(0,0,0,0.62)_70%,rgba(0,0,0,0.9)_82%)]",
  },
  {
    id: "community-forest-governance",
    featured: false,
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_48%,rgba(0,0,0,0.08)_56%,rgba(0,0,0,0.28)_62%,rgba(0,0,0,0.62)_70%,rgba(0,0,0,0.9)_82%)]",
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
    objectPosition: story.objectPosition,
    href: `/stories#${story.id}`,
  };
});

export type StoryArticle = (typeof STORY_ARTICLES)[number];
export type StoryStatIcon = StoryArticle["stats"][number]["icon"];
