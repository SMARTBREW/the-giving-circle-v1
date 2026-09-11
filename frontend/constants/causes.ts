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
  src: "/images/causes/a070e0c62ce4ae1ad271d88e7bb2549a0cc4173a.png",
  alt: "Volunteers handing relief supplies to a family",
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
    "Cause Champions pool support around verified work — education, women’s health, animal welfare, and disaster relief.",
} as const;

export const CAUSES_CTA = {
  src: "/images/b03847b9986d8aa9337b328b4e6d518339e813ae.png",
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
    src: "/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png",
    alt: "A schoolgirl in class, smiling with her classmates",
  },
  {
    label: "Animal Welfare",
    src: "/images/causes/b84b54a937c5a76ee7ec494500962ef6787e488c.png",
    alt: "A volunteer with a rescued dog",
  },
  {
    label: "Women’s Health",
    src: "/images/causes/353777ccdbf9acbedc2cfa91e44db8b6ebe0d296.png",
    alt: "A health worker checking a woman’s blood pressure",
  },
  {
    label: "Disaster Relief",
    src: "/images/causes/a070e0c62ce4ae1ad271d88e7bb2549a0cc4173a.png",
    alt: "Volunteers handing relief supplies to a family",
  },
] as const;

export const LIVE_CAUSES = [
  {
    id: "wings-of-hope",
    category: "Women’s Health",
    categoryClassName: "text-[var(--Brand-Coral,#ED3B58)]",
    title: "Wings of Hope — Menstrual Health So Girls Stay in School",
    titleLines: ["Wings of Hope — Menstrual Health", "So Girls Stay in School"] as const,
    org: "JWP",
    location: "Delhi & NCR",
    raised: "₹4,80,000",
    goal: "₹6,50,000",
    percent: 74,
    supporters: "234 Supporters",
    daysLeft: "22 Days Left",
    src: "/images/stories/c0fcbd6be0a24b7c89a15933e825abe1b1a9ea02.png",
    alt: "Schoolgirls with menstrual health education materials",
    summary:
      "Every month, thousands of girls miss school when periods begin. Wings of Hope funds menstrual health education and reusable hygiene kits so girls stay in class with dignity.",
    trustBadges: ["Tax Benefits · 80G", "Verified NGO Partner", "15+ Years Active"],
    operations: "Active operations · Delhi & NCR, India",
    aboutHeading: "When Periods Become Barriers",
    about: [
      "India has one of the highest rates of school dropout among adolescent girls in the world. When menstruation starts, many face a choice: miss school or face shame and discomfort. For thousands of girls, that monthly interruption becomes permanent.",
      "Studies in Delhi NCR show many girls miss five or more school days every month during menstruation. Schools often lack proper sanitation, families cannot always afford products, and taboos keep conversations closed. Wings of Hope responds with education, kits, and community support — so girls do not lose their future over something preventable.",
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
          "Contributions support workshops, product kits, community sessions, and follow-up tracking. Donations go directly to the NGO — The Giving Circle does not hold your gift as an intermediary wallet.",
      },
    ],
    featured: true,
  },
  {
    id: "pehli-class",
    category: "Education",
    categoryClassName: "text-[var(--Brand-Deep-Blue,#3976A8)]",
    title: "PehliClass — Into Formal School, On Time",
    titleLines: null as null | readonly [string, string],
    org: "JWP",
    location: "Noida · Delhi NCR",
    raised: "₹2,85,000",
    goal: "₹5,00,000",
    percent: 57,
    supporters: "142 Supporters",
    daysLeft: "28 Days Left",
    src: "/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png",
    alt: "A schoolgirl smiling in class with her classmates",
    summary:
      "Every parent remembers the first day of school. For thousands of children, that day never comes. #PehliClass is JWP’s path from out-of-school to a real classroom at Mera Sahara, Nithari.",
    trustBadges: ["Tax Benefits · 80G", "Verified Partner Listing", "48+ Years Active"],
    operations: "Active operations · Mera Sahara Bridge Learning Centre, Nithari · Delhi NCR",
    aboutHeading: "When the School Gate Stays Shut",
    about: [
      "The children served are first-generation learners, dropouts, and children who have never entered a formal classroom. Many could not access government school because families lacked documents — a birth certificate, Aadhaar, transfer certificate — or because learning gaps made enrolment impossible.",
      "At Mera Sahara, each child stays for a maximum of one year. In that year the programme closes academic gaps, secures documentation, and accompanies families through enrolment into government or private school — into their first formal class, on time. Where girls cannot attend regular school, JWP opens NIOS and IGNOU pathways so education continues.",
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
          "#PehliClass is Joint Women’s Programme’s measured campaign to move out-of-school children — especially first-generation learners — into formal school on time. Children spend up to one year at the Mera Sahara Bridge Learning Centre while gaps are closed and enrolment is completed.",
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
    id: "flood-relief-uttarakhand",
    category: "Disaster Relief",
    categoryClassName: "text-[var(--Brand-Coral,#ED3B58)]",
    title: "Flood Relief in Uttarakhand",
    titleLines: null,
    org: "GUS",
    location: "Uttarakhand",
    raised: "₹6,20,000",
    goal: "₹8,50,000",
    percent: 73,
    supporters: "267 Supporters",
    daysLeft: "12 Days Left",
    src: "/images/stories/c8329e59978e6b525af70415259a31cd1f388a41.png",
    alt: "Volunteers helping families after flooding in the mountains",
    summary:
      "Emergency relief for flood-affected communities: shelter, food, medical aid, and rehabilitation through a verified disaster-relief partner on the ground.",
    trustBadges: ["Verified NGO Partner", "Direct to NGO", "Impact Updates"],
    operations: "Active operations · Uttarakhand, India · 2,000+ flood-affected families",
    aboutHeading: "Hope in the Face of Disaster",
    about: [
      "When floods tore through mountain communities, families needed food, dry shelter, medical care, and people willing to travel difficult roads. Cause Champions and GUS moved relief quickly with partners already trusted on the ground.",
      "Support begins with essentials, then shifts to rebuilding homes and supporting local leaders. Contributions go directly to the NGO, with updates shared back to every giving circle.",
    ],
    impact: [
      { value: "2,400", label: "Families Supported" },
      { value: "50,000+", label: "Food Packets" },
      { value: "8,000+", label: "Medical Treatments" },
      { value: "450", label: "Homes Rebuilt" },
    ],
    whatYourSupportDoes: [
      "Deliver food, dry kits, and emergency shelter",
      "Fund medical camps on hard-to-reach routes",
      "Help rebuild homes with local partners",
      "Keep champions informed as relief becomes recovery",
    ],
    quote: {
      text: "We lost everything in the floods, but GUS gave us hope. They didn't just help us survive — they helped us rebuild.",
      author: "Ram Singh Rawat",
      role: "Flood Survivor & Community Leader",
    },
    faqs: [
      {
        question: "Who receives the funds?",
        answer:
          "Donations go directly to GUS, the verified NGO running relief and rehabilitation. The Giving Circle enables the giving-circle model and transparent updates.",
      },
      {
        question: "Can I visit or volunteer?",
        answer:
          "Where partners can host safely, Cause Champions and supporters are encouraged to visit and see the work. Write to us and we will help you find a place to start.",
      },
    ],
    featured: true,
  },
  {
    id: "pawsitive-protectors",
    category: "Animal Welfare",
    categoryClassName: "text-[var(--Brand-Green-Teal,#00A98F)]",
    title: "Pawsitive Protectors",
    titleLines: null,
    org: "Animal Care",
    location: "Mumbai, Maharashtra",
    raised: "₹3,90,000",
    goal: "₹5,20,000",
    percent: 75,
    supporters: "312 Supporters",
    daysLeft: "18 Days Left",
    src: "/images/stories/8085a2143fded1b5d4a64084b028d63971664fc4.png",
    alt: "Volunteers feeding and caring for street dogs",
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
          "Rabies vaccinations, deworming, emergency treatment, and community helpline response with Animal Care — a verified welfare partner.",
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
    categoryClassName: "text-[var(--Brand-Green-Teal,#00A98F)]",
    title: "Bowls of Hope",
    titleLines: null,
    org: "Animal Care",
    location: "Delhi",
    raised: "₹6,20,000",
    goal: "₹7,80,000",
    percent: 79,
    supporters: "445 Supporters",
    daysLeft: "20 Days Left",
    src: "/images/causes/b84b54a937c5a76ee7ec494500962ef6787e488c.png",
    alt: "A volunteer with a rescued dog",
    summary:
      "Daily feeding and care at Animal Care shelters for strays — nutritious meals and veterinary support through collective giving.",
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
    categoryClassName: "text-[var(--Brand-Green-Teal,#00A98F)]",
    title: "Brick by Brick — Building Them a Home",
    titleLines: ["Brick by Brick —", "Building Them a Home"] as const,
    org: "Animal Care",
    location: "Gurgaon, Haryana",
    raised: "₹10,000",
    goal: "₹50,000",
    percent: 20,
    supporters: "12 Supporters",
    daysLeft: "45 Days Left",
    src: "/images/causes/b84b54a937c5a76ee7ec494500962ef6787e488c.png",
    alt: "A volunteer with a rescued dog at an Animal Care shelter",
    summary:
      "₹10 per brick for the boundary wall on a 17,500 sq ft stray rescue and rehab plot in Gurgaon — part of Animal Care’s Zero Rabies mission.",
    trustBadges: ["Verified Welfare Partner", "Zero Rabies Mission", "Gurgaon Plot"],
    operations: "Active operations · Gurgaon · Boundary wall → full centre",
    aboutHeading: "A Wall That Becomes a Home",
    about: [
      "Animal Care is building a home for injured and critical strays on a 17,500 sq ft rescue and rehab plot in Gurgaon. Brick by Brick funds the boundary wall first — then a safer centre for Zero Rabies work.",
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
      text: "Sponsoring bricks made impact feel tangible — my friends could see exactly what their gift built.",
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
    category: "Disaster Relief",
    categoryClassName: "text-[var(--Brand-Coral,#ED3B58)]",
    title: "Emergency Animal Rescue",
    titleLines: null,
    org: "Animal Care",
    location: "Uttarakhand & Punjab",
    raised: "₹3,20,000",
    goal: "₹4,50,000",
    percent: 71,
    supporters: "198 Supporters",
    daysLeft: "15 Days Left",
    src: "/images/causes/a070e0c62ce4ae1ad271d88e7bb2549a0cc4173a.png",
    alt: "Volunteers handing relief supplies during disaster response",
    summary:
      "Emergency rescue and rehabilitation for animals affected by floods in Uttarakhand and Punjab — communities for communities, with a verified welfare partner.",
    trustBadges: ["Verified NGO Partner", "Emergency Response", "Direct Donations"],
    operations: "Active operations · Uttarakhand & Punjab · 500+ flood-affected animals",
    aboutHeading: "When Floods Hit Animals Too",
    about: [
      "Floods displace families and animals alike. This campaign funds emergency rescue and rehabilitation operations for animals affected in Uttarakhand and Punjab.",
      "Cause Champions rally their networks so Animal Care can respond quickly — treatment, shelter, and follow-up care — with gifts going directly to the NGO.",
    ],
    impact: [
      { value: "812", label: "Animals Rescued" },
      { value: "500+", label: "Flood-Affected" },
      { value: "99", label: "Impact Score" },
      { value: "8 mo", label: "Response Window" },
    ],
    whatYourSupportDoes: [
      "Fund emergency animal rescues in flood zones",
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
        question: "Is this separate from human flood relief?",
        answer:
          "Yes. This lane focuses on animal rescue and rehab with Animal Care, alongside GUS-led family relief campaigns you can also champion.",
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
