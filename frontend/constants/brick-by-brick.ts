/** Brick by Brick cause detail — Shukrana shelter & hospital wall on the shared template. */

export const BRICK_BY_BRICK_HERO = {
  category: "Animal Welfare · Shelter & Hospital",
  title: "Brick by Brick",
  orgLine: "A campaign by",
  orgName: "Animal Care",
  tagline: "Building the wall of love 'n care.",
  pitch:
    "Animal Care is building Shukrana, a shelter and hospital in Gurugram for street animals that are injured, sick or paralysed. Work has begun with the boundary wall, and every ₹10 lays one brick.",
  vetting: {
    title: "Verified NGO.",
    body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
    ctaLabel: "See what we checked",
    href: "#vetting",
  },
  chips: [
    "Tax Benefits · 80G",
    "Working Since 2020",
    "Gurugram",
  ] as const,
  primaryCta: {
    label: "Lay a Brick",
    href: "#support",
  },
  secondaryCta: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  instagram: {
    handle: "@pawsitiveprotectors",
    href: "https://www.instagram.com/pawsitiveprotectors/",
    label: "Follow the build",
  },
  campaignLogo: {
    src: "/images/causes/brick-by-brick/bbb-logo.png" as string | null,
    wide: true,
  },
  media: {
    src: "/images/causes/brick-by-brick/bbb-hero.jpg" as string | null,
    alt: "Workers unloading the first truck of bricks beside the Shukrana Animal Care Centre sign in Gurugram",
    caption: "Photo: The first bricks arrive at Shukrana",
  },
  stickyDonate: {
    label: "Lay a Brick",
    href: "#support",
  },
} as const;

export const BRICK_BY_BRICK_ABOUT = {
  eyebrow: "About This Cause",
  title: "Nowhere to Heal",
  body: "Every night, street animals across Gurugram sleep on the roads with no shelter and no one to look after them. When one is hit by a car, catches a deadly virus or can no longer walk, it needs more than a quick treatment. It needs a safe place to recover. Shukrana, Animal Care's new centre in Sector 78, is being built to be that place.",
  cards: [
    {
      label: "Accidents",
      title: "Back on the Road Too Soon",
      body: "An injured dog that is treated and left on the street is often hurt again before it has healed.",
    },
    {
      label: "Infection",
      title: "Viruses Spread Fast",
      body: "Parvovirus and distemper move quickly between dogs. Sick animals need wards kept fully apart from the rest.",
    },
    {
      label: "Wounds",
      title: "Care That Can't Wait",
      body: "Accident injuries and maggot wounds need a surgery room close by, not a long drive across the city.",
    },
    {
      label: "For Life",
      title: "Some Never Walk Again",
      body: "Paralysed animals need special bedding, physiotherapy and space, for months or for the rest of their lives.",
    },
  ] as const,
} as const;

export const BRICK_BY_BRICK_THEORY = {
  eyebrow: "Our Theory of Change",
  titleLine1: "A Safe Place. A Second Chance.",
  titleLine2: "",
  body: "Treatment saves a life. A place to recover is what gives it back.",
  steps: [
    {
      label: "When we rescue",
      title: "Injured and Sick Strays",
      body: "Animals hit by vehicles, with maggot wounds, parvovirus or distemper, or paralysed, found across Gurugram.",
      outcome: false,
    },
    {
      label: "And treat them",
      title: "In Our Own Hospital",
      body: "A surgery and treatment room, with isolation wards so one sick animal doesn't infect the rest.",
      outcome: false,
    },
    {
      label: "And give them",
      title: "Time to Recover",
      body: "Kennels, food, physiotherapy and caregivers around the clock, for as long as healing takes.",
      outcome: false,
    },
    {
      label: "Then they",
      title: "Go Home",
      body: "Back to their own territory, into a new family through the adoption section, or safe at Shukrana for life.",
      outcome: true,
    },
  ] as const,
  footer:
    "What has to come first: the wall. Without a boundary, the site can't safely hold a single animal, which is why every brick given now goes into the boundary wall.",
} as const;

export const BRICK_BY_BRICK_HOW = {
  eyebrow: "How This Cause Works",
  title: "Wall. Wards. Home.",
  body: "Shukrana is being built in stages, starting with what keeps the animals safe.",
  cards: [
    {
      title: "A Home at the City's Edge",
      body: "A 17,500 sq ft plot in Sector 78, near the Leopard Trail, set aside for street animals. Bhoomi Poojan was held on 22 February 2026.",
      src: "/images/causes/brick-by-brick/bbb-how-site.jpg" as string | null,
      alt: "Aerial map of the Shukrana site in Sector 78, Gurugram, with the 50 by 350 foot plot marked",
    },
    {
      title: "First, the Wall",
      body: "The boundary wall comes first. The bricks are on site and the trenches are dug. Your bricks raise it, row by row.",
      src: "/images/causes/brick-by-brick/bbb-how-wall.jpg" as string | null,
      alt: "Stacks of new bricks beside the Shukrana Animal Care Centre sign, with freshly dug soil in front",
    },
    {
      title: "Then, the Hospital",
      body: "Inside the wall: a treatment room, isolation wards, recovery kennels and an adoption area, with room for 100 to 110 dogs.",
      src: "/images/causes/brick-by-brick/bbb-how-hospital.jpg" as string | null,
      alt: "Animal Care's team on the Shukrana site, pointing out where the wards will go",
    },
  ] as const,
} as const;

/** Hidden until Brick by Brick testimonials are ready. */
export const BRICK_BY_BRICK_VOICES = {
  eyebrow: "In Their Own Words",
  title: "Voices From This Cause",
  body: "Supporters, caregivers and the Animal Care team, in their own words.",
  footer: "More voices added as the wall rises",
  items: [] as const,
} as const;

export const BRICK_BY_BRICK_SUPPORT = {
  eyebrow: "What Your Support Funds",
  impactSuffix:
    "goes into the boundary wall of Shukrana — ₹10 lays one brick at Animal Care's shelter and hospital for street animals in Gurugram.",
  amounts: [
    { amount: 500, label: "50 bricks" },
    { amount: 1000, label: "100 bricks" },
    { amount: 2500, label: "250 bricks" },
  ] as const,
  donateHref:
    "https://give.animalcareindia.org.in/donate/building-streeties-a--tapphyku",
  benefits: [
    {
      icon: "home" as const,
      title: "The Boundary Wall",
      body: "Bricks, cement and labour for the wall that keeps the animals safe.",
    },
    {
      icon: "care" as const,
      title: "Treatment and Isolation Wards",
      body: "Next, the surgery room and the wards that keep sick animals apart.",
    },
    {
      icon: "shield" as const,
      title: "Recovery Kennels",
      body: "Then, safe living space for 100 to 110 dogs, and areas for cats and other animals.",
    },
  ] as const,
  footer:
    "Every contribution goes directly to Animal Care, through its own payment gateway and into its own bank account. Animal Care sends your 80G receipt.",
} as const;

export const BRICK_BY_BRICK_VETTING = {
  eyebrow: "Verified NGO",
  title: "Vetted by The Giving Circle",
  body: "We only list NGOs our own team has checked, and not every organisation that applies makes it. Here is what we checked for Animal Care before this campaign went live.",
  lastReviewed: "",
  checks: [
    {
      title: "Registration and tax documents checked, genuine and current",
      body: "Listed below with numbers you can check yourself",
    },
    {
      title: "Office visited by our team",
      body: "Sultanpur, New Delhi",
    },
    {
      title: "Leadership interviewed",
      body: "The people who run the programme, in person",
    },
    {
      title: "Field work seen",
      body: "We see the work on the ground wherever we can",
    },
    {
      title: "Written commitment to share updates",
      body: "Site photos and build updates, posted on this page",
    },
  ] as const,
  documents: [
    {
      badge: "80G",
      title: "80G approval",
      number: "AAKTA4778M24DL02",
      note: "valid AY 2024-25 to 2028-29 · 50% tax deduction",
      href: "/docs/animal-care/ac-80g.pdf",
    },
    {
      badge: "CSR-1",
      title: "CSR-1 registration",
      number: "CSR00108362",
      note: "can receive company CSR funds",
      href: "/docs/animal-care/ac-csr1.pdf",
    },
    {
      badge: "NGO Darpan",
      title: "NGO Darpan",
      number: "DL/2024/0390044",
      note: "NITI Aayog's national NGO registry",
      href: "/docs/animal-care/ac-ngo-darpan.pdf",
    },
    {
      badge: "Reg.",
      title: "Trust registration",
      number: "2023/16/IV/1478",
      note: "registered 30 Dec 2023, Delhi",
      href: "/docs/animal-care/ac-trust-registration.pdf",
    },
    {
      badge: "PAN",
      title: "PAN",
      number: "AAKTA4778M",
      note: "Income Tax Department",
      href: "/docs/animal-care/ac-pan.pdf",
    },
  ] as const,
  goodToKnow:
    "vetting is not a financial audit, and we don't examine the NGO's accounts. It confirms the organisation is real, legally compliant, and run by people we have met.",
} as const;

export const BRICK_BY_BRICK_IMPACT = {
  founder: {
    eyebrow: "Meet the Founder",
    initials: "VS",
    portraitLabel: "Portrait from Animal Care",
    quote:
      "Too many of the animals we rescue in Gurugram have nowhere to recover, and go back to the road before they have healed. Shukrana means gratitude, and that is what this place is: our thank you to every animal that waited. With a wall, wards and kennels of our own, no animal we treat here will have to leave before it is ready.",
    name: "Vikas Singh",
    role: "Founder, Animal Care",
    photoSrc:
      "/images/causes/pawsitive-protectors/pawsitive-founder.jpg" as string | null,
    photoAlt: "Vikas Singh, founder of Animal Care, holding a puppy",
    social: [] as const,
  },
  eyebrow: "Impact So Far",
  title: "The Wall Is Rising",
  body: "Updates from the Shukrana site, shared with every circle.",
  stats: [
    { value: "17,500", label: "sq ft site in Gurugram", confirm: false },
    { value: "15", label: "care zones planned", confirm: false },
    { value: "100+", label: "dogs in the main kennels", confirm: false },
    { value: "1,891+", label: "animals rescued by Animal Care", confirm: false },
  ] as const,
  gallery: {
    featured: {
      label: "Bhoomi Poojan - 22 Feb 2026",
      src: "/images/causes/brick-by-brick/bbb-impact-featured.jpg" as string | null,
      alt: "Bhoomi Poojan ceremony at the Shukrana Animal Care Centre site",
      featured: true,
    },
    items: [
      {
        label: "Digging the foundation",
        src: "/images/causes/brick-by-brick/bbb-impact-excavation.jpg" as string | null,
        alt: "Excavation work for the Shukrana foundation",
      },
      {
        label: "The trench for the boundary wall",
        src: "/images/causes/brick-by-brick/bbb-impact-trench.jpg" as string | null,
        alt: "Trench dug for the Shukrana boundary wall",
      },
      {
        label: "Cement and bricks on site",
        src: "/images/causes/brick-by-brick/bbb-impact-cement.jpg" as string | null,
        alt: "Cement bags and bricks delivered to the Shukrana site",
      },
      {
        label: "Marking out the wall line",
        src: "/images/causes/brick-by-brick/bbb-impact-marking.jpg" as string | null,
        alt: "Workers marking the boundary wall line at Shukrana",
      },
      {
        label: "The first bricks, blessed",
        src: "/images/causes/brick-by-brick/bbb-impact-blessed.jpg" as string | null,
        alt: "Blessed bricks at the Bhoomi Poojan for Shukrana",
      },
      {
        label: "Deliveries, late into the night",
        src: "/images/causes/brick-by-brick/bbb-impact-night.jpg" as string | null,
        alt: "Night delivery of materials at the Shukrana site",
      },
      {
        label: "The plot, before work began",
        src: "/images/causes/brick-by-brick/bbb-impact-before.jpg" as string | null,
        alt: "The Shukrana plot in Sector 78 before construction began",
      },
    ] as const,
  },
  instagram: {
    handle: "@pawsitiveprotectors",
    href: "https://www.instagram.com/pawsitiveprotectors/",
    body: "Follow Shukrana go up, brick by brick, in photos and reels.",
    cta: "Follow on Instagram",
    logoSrc: "/images/causes/brick-by-brick/bbb-logo.png" as string | null,
    logoWide: true,
  },
} as const;

export const BRICK_BY_BRICK_FAQS = {
  eyebrow: "Questions About This Cause",
  title: "Frequently Asked Questions",
  body: "Clarity on where your gift goes, what is being built, and how your circle can champion it.",
  items: [
    {
      question: "How much does it cost to donate a brick for an animal shelter?",
      answer:
        "One brick costs ₹10. Donations start at ₹500, which buys 50 bricks, and ₹1,000 buys 100. Your bricks go into the boundary wall, the first stage of construction.",
    },
    {
      question: "What is Shukrana Animal Care Centre?",
      answer:
        "Shukrana is the shelter and hospital Animal Care is building for street animals in Gurugram. It is planned with treatment and surgery areas, isolation wards for infectious diseases, recovery kennels and an adoption section, with space for 100 to 110 dogs as well as cats and other animals.",
    },
    {
      question: "Where is the shelter being built?",
      answer:
        "In Sector 78, Gurugram, near the Leopard Trail. The Bhoomi Poojan was held on 22 February 2026, and construction is going ahead in phases, starting with the boundary wall.",
    },
    {
      question: "Which animals will Shukrana treat?",
      answer:
        "Street animals that need serious care: dogs hurt in road accidents, animals with parvo, distemper or maggot wounds, and paralysed animals who need long-term rehabilitation.",
    },
    {
      question: "When will Shukrana open?",
      answer:
        "Shukrana is being built in phases. The boundary wall comes first, followed by treatment rooms and recovery kennels. Every brick donated moves the next phase closer.",
    },
    {
      question: "Is my donation to Brick by Brick eligible for 80G tax benefits?",
      answer:
        "Yes. Animal Care Trust is registered under Section 80G, so donations to Brick by Brick qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
    },
    {
      question: "Is Animal Care a genuine, registered NGO?",
      answer:
        "Yes. Animal Care is a registered trust in New Delhi. It is registered on NGO Darpan and holds valid 80G and CSR-1 registrations. Brick by Brick is its campaign to build Shukrana Animal Care Centre.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Donations go directly to Animal Care through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used to build Shukrana Animal Care Centre.",
    },
    {
      question: "Can I raise funds for Brick by Brick?",
      answer:
        "Yes. You can become a Cause Champion, a volunteer fundraiser for Brick by Brick. You pledge a number of bricks you would like to raise, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
    },
    {
      question: "Can companies contribute to building the shelter through CSR?",
      answer:
        "Yes. Animal Care holds a CSR-1 registration, so companies can support Brick by Brick as part of their CSR. Companies interested in a larger contribution can contact Animal Care to discuss it.",
    },
  ] as const,
} as const;

/** Hidden until field videos are ready. */
export const BRICK_BY_BRICK_LEARN = {
  eyebrow: "Learn With Us",
  title: "Short Videos From The Field",
  body: "Free to watch, and to share with your circle.",
  videos: [] as const,
} as const;

export const BRICK_BY_BRICK_CTA = {
  title: "Ready to Lead Your Circle?",
  body: "Become a Cause Champion for Brick by Brick, bring your circle together, and help raise the wall that gives Gurugram's injured animals a place to heal.",
  primary: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  secondary: {
    label: "Donate Instead",
    href: "#support",
  },
} as const;
