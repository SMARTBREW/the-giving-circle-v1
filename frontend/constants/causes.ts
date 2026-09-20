export const CAUSES_PAGE = {
  eyebrow: "Live Causes",
  title: "Causes That Need You",
  subtitle:
    "Find a cause you care about and see where your support can make a difference.",
} as const;

export const CAUSE_FILTER_ALL = "All";

export const CAUSES_HERO = {
  eyebrow: "Live Causes",
  titleLine1: "Verified Causes.",
  titleLine2: "Real Impact.",
  subtitle:
    "Every cause is run by a verified NGO. Champion one with your circle, and watch collective giving reach communities across India.",
  primaryCta: { label: "Browse Causes", href: "#live-causes" },
  secondaryCta: { label: "Champion a Cause", href: "/champion/apply" },
  src: "/images/causes/_DSC9767.jpg",
  alt: "A schoolgirl reading in class, smiling toward the camera",
  stats: [
    { value: "7+", label: "Live Causes" },
    { value: "80,000+", label: "Lives Impacted" },
    { value: "₹300L+", label: "Funds Mobilised" },
  ],
} as const;

export const CAUSES_LIST_INTRO = {
  eyebrow: "Open Campaigns",
  title: "Pick a Cause to Champion",
  subtitle:
    "Filter by focus area, open a cause to learn the story, then invite your circle to give directly to the verified NGO.",
} as const;

export const CAUSES_REACH = {
  eyebrow: "Why These Causes Matter",
  title: "Transparent Giving, Measurable Change",
  subtitle:
    "Cause Champions pool support around verified work   education, women’s health, animal welfare, and forest rights.",
} as const;

export const CAUSES_CTA = {
  src: "/images/support-cause-desktop.png",
  mobileSrc: "/images/support-cause-mobile.png",
  alt: "Schoolchildren in our circle, smiling together",
  title: "Ready to Lead Your Circle?",
  subtitle:
    "Become a Cause Champion, share a verified campaign, and turn your network into lasting impact.",
  ctaLabel: "Become a Cause Champion",
  href: "/champion/apply",
} as const;

export const CAUSE_CATEGORY_CARDS = [
  {
    label: "Education",
    src: "/images/causes/IMG-20240404-WA0014.jpg",
    alt: "Schoolchildren smiling together in class",
  },
  {
    label: "Animal Welfare",
    src: "/images/causes/WhatsApp_Image_2025-12-12_at_14.16.18.jpg",
    alt: "A volunteer smiling with a rescued dog",
  },
  {
    label: "Women’s Health",
    src: "/images/causes/womens-health.jpg",
    alt: "Schoolgirls smiling in class holding handmade pouches",
  },
  {
    label: "Forest Rights",
    src: "/images/causes/forest-rights.jpg",
    alt: "A young woman carrying woven baskets through a forest",
  },
] as const;

export const LIVE_CAUSES = [
  {
    id: "wings-of-hope",
    category: "Women’s Health",
    categoryClassName: "text-[var(--Brand-Coral,#e62b4f)]",
    title: "Wings of Hope: Menstrual Health So Girls Stay in School",
    titleLines: ["Wings of Hope: Menstrual Health", "So Girls Stay in School"] as const,
    org: "JWP",
    location: "Delhi & NCR",
    raised: "₹4,80,000",
    goal: "₹6,50,000",
    percent: 74,
    supporters: "234 Supporters",
    daysLeft: "22 Days Left",
    src: "/images/causes/womens-health.jpg",
    alt: "Schoolgirls smiling in class holding handmade pouches",
    summary:
      "Every month, thousands of girls miss school when periods begin. Wings of Hope funds menstrual health education and reusable hygiene kits so girls stay in class with dignity.",
    trustBadges: ["Tax Benefits · 80G", "Verified NGO Partner", "15+ Years Active"],
    operations: "Active operations · Delhi & NCR, India",
    aboutHeading: "When Periods Become Barriers",
    about: [
      "India has one of the highest rates of school dropout among adolescent girls in the world. When menstruation starts, many face a choice: miss school or face shame and discomfort. For thousands of girls, that monthly interruption becomes permanent.",
      "Studies in Delhi NCR show many girls miss five or more school days every month during menstruation. Schools often lack proper sanitation, families cannot always afford products, and taboos keep conversations closed. Wings of Hope responds with education, kits, and community support   so girls do not lose their future over something preventable.",
    ],
    impact: [
      { value: "22,418", label: "Girls Empowered" },
      { value: "200+", label: "Workshops" },
      { value: "2,000+", label: "Product Kits" },
      { value: "95%", label: "Better Attendance" },
    ],
    whatYourSupportDoes: [
      "Fund menstrual health workshops in schools across Delhi NCR",
      "Distribute reusable sanitary kits with care instructions",
      "Engage families and communities to break taboos",
      "Follow up so girls keep attending school during menstruation",
    ],
    quote: {
      text: "My daughter now attends school regularly without missing days during her period. The education and reusable products gave her confidence.",
      author: "Priya Sharma",
      role: "Parent, Delhi Community",
    },
    faqs: [
      {
        question: "How does Wings of Hope keep girls in school?",
        answer:
          "Trained health ambassadors run age-appropriate workshops, distribute reusable pad kits where needed, and coordinate with schools and families so girls are not pushed out by shame or lack of products.",
      },
      {
        question: "Is my donation eligible for 80G?",
        answer:
          "Eligible donations are receipted under 80G by the verified NGO partner where applicable, because gifts go directly to Joint Women’s Programme.",
      },
      {
        question: "Where does the money go?",
        answer:
          "Contributions support workshops, product kits, community sessions, and follow-up tracking. Donations go directly to the NGO   The Giving Circle does not hold your gift as an intermediary wallet.",
      },
    ],
    featured: true,
  },
  {
    id: "pehli-class",
    category: "Education",
    categoryClassName: "text-[var(--Brand-Deep-Blue,#0b619a)]",
    title: "PehliClass: Into Formal School, On Time",
    titleLines: ["PehliClass: Into Formal School,", "On Time"] as const,
    org: "JWP",
    location: "Noida · Delhi NCR",
    raised: "₹2,85,000",
    goal: "₹5,00,000",
    percent: 57,
    supporters: "142 Supporters",
    daysLeft: "28 Days Left",
    src: "/images/causes/IMG-20240404-WA0014.jpg",
    alt: "Schoolchildren smiling in class at the learning centre",
    summary:
      "Every parent remembers the first day of school. For thousands of children, that day never comes. #PehliClass is JWP’s path from out-of-school to a real classroom at Mera Sahara, Nithari.",
    trustBadges: ["Tax Benefits · 80G", "Verified Partner Listing", "48+ Years Active"],
    operations: "Active operations · Mera Sahara Bridge Learning Centre, Nithari · Delhi NCR",
    aboutHeading: "When the School Gate Stays Shut",
    about: [
      "The children served are first-generation learners, dropouts, and children who have never entered a formal classroom. Many could not access government school because families lacked documents   a birth certificate, Aadhaar, transfer certificate   or because learning gaps made enrolment impossible.",
      "At Mera Sahara, each child stays for a maximum of one year. In that year the programme closes academic gaps, secures documentation, and accompanies families through enrolment into government or private school   into their first formal class, on time. Where girls cannot attend regular school, JWP opens NIOS and IGNOU pathways so education continues.",
    ],
    impact: [
      { value: "48+", label: "Years of JWP Impact" },
      { value: "1 year", label: "Max Bridge Stay" },
      { value: "₹19,000", label: "Full Bridge Year" },
      { value: "₹1,600", label: "Per Child / Month" },
    ],
    whatYourSupportDoes: [
      "Bridge classroom hours with trained facilitators",
      "Documentation support for school admission",
      "Learning materials and uniform assistance",
      "Progress tracking until enrolment is confirmed",
    ],
    quote: {
      text: "We wanted our child in school like every other family. The bridge centre helped with documents and catching up so the first real day of school finally happened.",
      author: "Parent voice",
      role: "Nithari area",
    },
    faqs: [
      {
        question: "What is #PehliClass?",
        answer:
          "#PehliClass is Joint Women’s Programme’s measured campaign to move out-of-school children   especially first-generation learners   into formal school on time. Children spend up to one year at the Mera Sahara Bridge Learning Centre while gaps are closed and enrolment is completed.",
      },
      {
        question: "How much does it cost to sponsor one child for the bridge year?",
        answer:
          "About ₹1,600 per month or ₹19,000 for the year is positioned to cover structured support at the centre and enrolment-related accompaniment as described by JWP.",
      },
      {
        question: "What if a girl cannot attend a regular school?",
        answer:
          "Where girls cannot attend regular school, JWP opens NIOS for Classes 9–12 and IGNOU for higher education so learning continues even when daily attendance is blocked by family circumstances.",
      },
      {
        question: "Is my donation eligible for 80G?",
        answer:
          "Eligible donations are receipted under 80G by the verified NGO where applicable. Registration certificates and credentials are available via JWP’s official channels.",
      },
    ],
    featured: true,
  },
  {
    id: "community-forest-governance",
    category: "Forest Rights",
    categoryClassName: "text-[var(--Brand-Green-Teal,#02938c)]",
    title: "Community Forest Governance: Protecting Forests, Empowering People",
    titleLines: [
      "Community Forest Governance:",
      "Protecting Forests, Empowering People",
    ] as const,
    org: "ICFG",
    location: "Jharkhand & Central India",
    raised: "₹5,40,000",
    goal: "₹7,50,000",
    percent: 72,
    supporters: "284 Supporters",
    daysLeft: "16 Days Left",
    src: "/images/causes/forest-rights.jpg",
    alt: "A young woman carrying woven baskets through a forest",
    summary:
      "Empowering tribal and forest-dwelling communities under the Forest Rights Act to conserve ecosystems, restore biodiversity, and build sustainable livelihoods.",
    trustBadges: ["Verified NGO Partner", "FRA 2006 Rights", "2,000+ Villages"],
    operations: "Active operations · Chaingada & 2,000+ Forest Villages · India",
    aboutHeading: "Forests Governed by Those Who Know Them Best",
    about: [
      "India's forests are home to millions of indigenous and forest-dwelling people whose culture, sustenance, and ecological balance depend on nature. Under the Forest Rights Act (FRA 2006), granting community forest rights transforms conservation by placing decision-making power directly in the hands of the community.",
      "The Institute of Community Forest Governance (ICFG) works on the ground with over 2,000 village organisations   empowering forest dwellers with legal rights, planting indigenous saplings, protecting natural biodiversity, and fostering sustainable livelihoods so communities and ecosystems thrive together.",
    ],
    impact: [
      { value: "2,000+", label: "Villages Mobilised" },
      { value: "10,000+", label: "Hectares Protected" },
      { value: "50,000+", label: "Saplings Planted" },
      { value: "100%", label: "Community Led" },
    ],
    whatYourSupportDoes: [
      "Fund community-led forest nurseries and indigenous tree planting",
      "Provide legal and operational training for Gram Sabha forest committees",
      "Strengthen sustainable non-timber forest produce (NTFP) livelihoods",
      "Track biodiversity regeneration and share transparent progress with champions",
    ],
    quote: {
      text: "The Forest Rights Act has given our community legal rights over our ancestral forest. Together with ICFG, we protect our trees and secure our future.",
      author: "Chaingada Village Leader",
      role: "Community Forest Governance Committee",
    },
    faqs: [
      {
        question: "What is ICFG's mission?",
        answer:
          "The Institute of Community Forest Governance (ICFG) aims to protect, regenerate, and govern forests for people and the planet by enabling a symbiotic relationship between forest biodiversity and forest dwellers.",
      },
      {
        question: "How do donations create impact?",
        answer:
          "Contributions go directly to ICFG to fund sapling nurseries, village council forest rights training, and sustainable community forest management.",
      },
      {
        question: "Is my donation eligible for 80G?",
        answer:
          "Eligible donations receive tax benefits under 80G as provided directly by the partner NGO where applicable.",
      },
    ],
    featured: true,
  },
  {
    id: "pawsitive-protectors",
    category: "Animal Welfare",
    categoryClassName: "text-[var(--Brand-Green-Teal,#02938c)]",
    title: "Pawsitive Protectors",
    titleLines: null,
    org: "Animal Care",
    location: "Mumbai, Maharashtra",
    raised: "₹3,90,000",
    goal: "₹5,20,000",
    percent: 75,
    supporters: "312 Supporters",
    daysLeft: "18 Days Left",
    src: "/images/causes/pawsitive-protectors.jpg",
    alt: "A caregiver treating a rescued dog at an Animal Care shelter",
    summary:
      "Protecting street animals and communities with free rabies vaccinations, deworming, and care through Animal Care’s community helpline network.",
    trustBadges: ["Verified NGO Partner", "80G Where Eligible", "Zero Rabies Mission"],
    operations: "Active operations · Mumbai & Delhi NCR · 1,500+ animals",
    aboutHeading: "Vaccinate, Treat, Protect",
    about: [
      "Street animals rarely get a second chance. Pawsitive Protectors pairs Cause Champions with Animal Care for vaccination, treatment, and neighbourhood outreach that protects both animals and people.",
      "Collective giving funds the work on the ground. Supporters can visit, meet the animals, and walk with volunteers while updates flow back to every circle.",
    ],
    impact: [
      { value: "7,126", label: "Animals Helped" },
      { value: "1,500+", label: "In Active Care" },
      { value: "142K+", label: "People Protected" },
      { value: "98", label: "Impact Score" },
    ],
    whatYourSupportDoes: [
      "Fund vaccines and preventive care for street animals",
      "Support emergency rescues and follow-up treatment",
      "Strengthen neighbourhood caregiver networks",
      "Share transparent impact with your giving circle",
    ],
    quote: {
      text: "Protecting voiceless street animals and communities with free rabies vaccinations made it easy to ask my circle to join.",
      author: "Dr. Rajesh Nair",
      role: "Cause Champion",
    },
    faqs: [
      {
        question: "What does this campaign fund?",
        answer:
          "Rabies vaccinations, deworming, emergency treatment, and community helpline response with Animal Care   a verified welfare partner.",
      },
      {
        question: "Do donations go directly to the NGO?",
        answer:
          "Yes. Contributions go directly to Animal Care. The Giving Circle verifies partners and helps Cause Champions report impact.",
      },
    ],
    featured: false,
  },
  {
    id: "bowls-of-hope",
    category: "Animal Welfare",
    categoryClassName: "text-[var(--Brand-Green-Teal,#02938c)]",
    title: "Bowls of Hope",
    titleLines: null,
    org: "Animal Care",
    location: "Delhi",
    raised: "₹6,20,000",
    goal: "₹7,80,000",
    percent: 79,
    supporters: "445 Supporters",
    daysLeft: "20 Days Left",
    src: "/images/causes/bowls-of-hope.jpg",
    alt: "Rescued dogs drinking from metal bowls at a feeding station",
    summary:
      "Daily feeding and care at Animal Care shelters for strays   nutritious meals and veterinary support through collective giving.",
    trustBadges: ["Verified NGO Partner", "Shelter Feeding", "Veterinary Care"],
    operations: "Active operations · Delhi · 2,000+ street animals",
    aboutHeading: "Meals That Keep Strays Alive",
    about: [
      "Bowls of Hope is Animal Care’s daily feeding and care programme at shelters for strays. Cause Champions help keep bowls filled and medical care available.",
      "Every contribution goes directly to the NGO. Champions invite their circle to multiply the impact and follow updates as animals recover.",
    ],
    impact: [
      { value: "1,859", label: "Bowls Installed" },
      { value: "2,000+", label: "Street Animals" },
      { value: "Daily", label: "Shelter Feeding" },
      { value: "92", label: "Impact Score" },
    ],
    whatYourSupportDoes: [
      "Fund nutritious daily meals at shelters",
      "Support veterinary care for injured strays",
      "Expand feeding points in high-need neighbourhoods",
      "Help champions share transparent progress",
    ],
    quote: {
      text: "Knowing bowls were filled every day because of our circle made the campaign feel concrete and kind.",
      author: "Saloni Joshi",
      role: "Cause Champion, Pune",
    },
    faqs: [
      {
        question: "Who runs Bowls of Hope?",
        answer:
          "Animal Care, a verified welfare partner. Donations go directly to their shelter feeding and veterinary programmes.",
      },
    ],
    featured: false,
  },
  {
    id: "brick-by-brick",
    category: "Animal Welfare",
    categoryClassName: "text-[var(--Brand-Green-Teal,#02938c)]",
    title: "Brick by Brick: Building Them a Home",
    titleLines: ["Brick by Brick:", "Building Them a Home"] as const,
    org: "Animal Care",
    location: "Gurgaon, Haryana",
    raised: "₹10,000",
    goal: "₹50,000",
    percent: 20,
    supporters: "12 Supporters",
    daysLeft: "45 Days Left",
    src: "/images/causes/brick-by-brick.jpeg",
    alt: "Animal Care Centre construction site in Gurgaon with bricks and project sign",
    summary:
      "₹10 per brick for the boundary wall on a 17,500 sq ft stray rescue and rehab plot in Gurgaon   part of Animal Care’s Zero Rabies mission.",
    trustBadges: ["Verified Welfare Partner", "Zero Rabies Mission", "Gurgaon Plot"],
    operations: "Active operations · Gurgaon · Boundary wall → full centre",
    aboutHeading: "A Wall That Becomes a Home",
    about: [
      "Animal Care is building a home for injured and critical strays on a 17,500 sq ft rescue and rehab plot in Gurgaon. Brick by Brick funds the boundary wall first   then a safer centre for Zero Rabies work.",
      "Cause Champions can invite their network to sponsor bricks and watch the shelter take shape with transparent updates from a verified partner.",
    ],
    impact: [
      { value: "1,000", label: "Bricks Laid" },
      { value: "17,500", label: "Sq Ft Plot" },
      { value: "₹10", label: "Per Brick" },
      { value: "85", label: "Impact Score" },
    ],
    whatYourSupportDoes: [
      "Sponsor bricks for the shelter boundary wall",
      "Help secure a safe rehab space for critical strays",
      "Advance Animal Care’s Zero Rabies mission",
      "Share a clear, buildable goal with your circle",
    ],
    quote: {
      text: "Sponsoring bricks made impact feel tangible   my friends could see exactly what their gift built.",
      author: "Ajay Mehrotra",
      role: "Cause Champion",
    },
    faqs: [
      {
        question: "What does ₹10 buy?",
        answer:
          "Each contribution is positioned as about ₹10 per brick toward the boundary wall on Animal Care’s Gurgaon rescue and rehab plot.",
      },
    ],
    featured: false,
  },
  {
    id: "flood-animal-rescue",
    category: "Animal Welfare",
    categoryClassName: "text-[var(--Brand-Green-Teal,#02938c)]",
    title: "Emergency Animal Rescue",
    titleLines: null,
    org: "Animal Care",
    location: "Uttarakhand & Punjab",
    raised: "₹3,20,000",
    goal: "₹4,50,000",
    percent: 71,
    supporters: "198 Supporters",
    daysLeft: "15 Days Left",
    src: "/images/causes/emergency-animal-rescue.png",
    alt: "Animal Care rescuers wading through floodwater on an emergency response",
    summary:
      "Emergency rescue and rehabilitation for animals in crisis   communities for communities, with a verified welfare partner.",
    trustBadges: ["Verified NGO Partner", "Emergency Response", "Direct Donations"],
    operations: "Active operations · Uttarakhand & Punjab · 500+ rescue animals",
    aboutHeading: "When Crises Hit Animals Too",
    about: [
      "Floods displace families and animals alike. This campaign funds emergency rescue and rehabilitation operations for animals affected across vulnerable regions.",
      "Cause Champions rally their networks so Animal Care can respond quickly   treatment, shelter, and follow-up care   with gifts going directly to the NGO.",
    ],
    impact: [
      { value: "812", label: "Animals Rescued" },
      { value: "500+", label: "Crisis-Affected" },
      { value: "99", label: "Impact Score" },
      { value: "8 mo", label: "Response Window" },
    ],
    whatYourSupportDoes: [
      "Fund emergency animal rescues in crisis zones",
      "Cover treatment and temporary shelter",
      "Support rehab until animals are stable",
      "Keep your circle updated on urgent response",
    ],
    quote: {
      text: "In a crisis, my circle chose to show up for the animals that had nowhere else to go.",
      author: "Dhaval Patel",
      role: "Cause Champion, Ahmedabad",
    },
    faqs: [
      {
        question: "Who runs this campaign?",
        answer:
          "This campaign is managed by Animal Care, a verified animal welfare partner.",
      },
    ],
    featured: false,
  },
] as const;

export type LiveCause = (typeof LIVE_CAUSES)[number];
export type CampaignCardData = Pick<
  LiveCause,
  | "id"
  | "category"
  | "categoryClassName"
  | "title"
  | "titleLines"
  | "org"
  | "location"
  | "raised"
  | "goal"
  | "percent"
  | "supporters"
  | "daysLeft"
  | "src"
  | "alt"
>;

export function getLiveCause(id: string): LiveCause | undefined {
  if (id === "flood-relief-uttarakhand") {
    return LIVE_CAUSES.find((cause) => cause.id === "community-forest-governance");
  }
  return LIVE_CAUSES.find((cause) => cause.id === id);
}

export function getFeaturedCauses(): LiveCause[] {
  return LIVE_CAUSES.filter((cause) => cause.featured);
}

export function getCauseCategories(): string[] {
  return [...new Set(LIVE_CAUSES.map((cause) => cause.category))];
}

export function toCampaignCard(cause: LiveCause): CampaignCardData {
  return {
    id: cause.id,
    category: cause.category,
    categoryClassName: cause.categoryClassName,
    title: cause.title,
    titleLines: cause.titleLines,
    org: cause.org,
    location: cause.location,
    raised: cause.raised,
    goal: cause.goal,
    percent: cause.percent,
    supporters: cause.supporters,
    daysLeft: cause.daysLeft,
    src: cause.src,
    alt: cause.alt,
  };
}
