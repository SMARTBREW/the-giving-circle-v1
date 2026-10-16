/** Bowls of Hope cause detail — shelter care & food support on the shared template. */

export const BOWLS_OF_HOPE_HERO = {
  category: "Animal Welfare · Food & Recovery",
  title: "Bowls of Hope",
  orgLine: "A campaign by",
  orgName: "Animal Care",
  tagline: "A full bowl is where healing begins.",
  pitch:
    "Animals recovering from accidents, surgery and illness at the Animal Care Shelter need nutritious food every day to heal. Bowls of Hope keeps their bowls full, and in summer it puts out water on the streets.",
  vetting: {
    title: "Verified NGO.",
    body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
    ctaLabel: "See what we checked",
    href: "#vetting",
  },
  chips: [
    "Tax Benefits · 80G",
    "Working Since 2020",
    "Delhi NCR",
  ] as const,
  primaryCta: {
    label: "Donate to Bowls of Hope",
    href: "#support",
  },
  secondaryCta: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  instagram: {
    handle: "@bowls.of.hope",
    href: "https://www.instagram.com/bowls.of.hope/",
    label: "Follow the campaign",
  },
  campaignLogo: {
    src: "/images/causes/bowls-of-hope/boh-logo-standin.svg" as string | null,
  },
  media: {
    src: "/images/causes/bowls-of-hope/boh-hero.png" as string | null,
    alt: "Dogs eating from metal bowls at mealtime in the Animal Care Shelter yard",
    caption: "Photo: Mealtime at the Animal Care Shelter",
  },
  stickyDonate: {
    label: "Donate to Bowls of Hope",
    href: "#support",
  },
} as const;

export const BOWLS_OF_HOPE_ABOUT = {
  eyebrow: "About This Cause",
  title: "Treated, Then Fed Back to Health",
  body: "Every day, Animal Care's team brings in street animals that have been hit by vehicles, attacked or left too sick to fend for themselves. Medicine and surgery treat them. What lets them heal is nutritious food, every single day, for as long as recovery takes.",
  cards: [
    {
      label: "Recovery",
      title: "Healing Needs Food",
      body: "A body mending from a fracture, wound or surgery needs regular, nutritious meals, often for weeks.",
    },
    {
      label: "Helpless",
      title: "Too Hurt to Find a Meal",
      body: "An injured dog cannot scavenge or compete for scraps. Without a meal brought to it, it only grows weaker.",
    },
    {
      label: "Every Day",
      title: "Hundreds of Bowls to Fill",
      body: "More than 365 animals are in Animal Care's long-term care, and every one of them needs feeding, every day.",
    },
    {
      label: "By Hand",
      title: "Some Can't Eat Alone",
      body: "After surgery, or in a recovery cone, many animals need a caregiver beside them at every meal.",
    },
  ] as const,
} as const;

export const BOWLS_OF_HOPE_THEORY = {
  eyebrow: "Our Theory of Change",
  titleLine1: "A Full Bowl. A Faster Recovery.",
  titleLine2: "",
  body: "Treatment saves a life. Food, every day, gives it back its strength.",
  steps: [
    {
      label: "When we rescue",
      title: "Sick and Injured Animals",
      body: "Brought to the shelter after accidents, attacks or illness, often weak and underfed.",
      outcome: false,
    },
    {
      label: "And feed them",
      title: "Fresh Meals, Every Day",
      body: "Cooked in the shelter kitchen, with a recovery diet and supplements where the vet prescribes them.",
      outcome: false,
    },
    {
      label: "And sit with",
      title: "Those Who Can't Eat Alone",
      body: "Caregivers hand-feed animals after surgery or in a recovery cone, so no meal is missed.",
      outcome: false,
    },
    {
      label: "Then they",
      title: "Heal and Go Home",
      body: "Back to their own territory, into an adoptive home, or safe at the shelter for life.",
      outcome: true,
    },
  ] as const,
  footer:
    "How we know it's working: animals who walk out strong. Ladali, Dodo and Babli, whose stories are on Animal Care's website, all recovered on treatment and steady, nutritious meals at the shelter.",
} as const;

export const BOWLS_OF_HOPE_HOW = {
  eyebrow: "How This Cause Works",
  title: "Cook. Feed. Heal.",
  body: "Food and care at the Animal Care Shelter, every day of the year.",
  cards: [
    {
      title: "Fresh From the Shelter Kitchen",
      body: "Meals for the shelter's animals are cooked fresh every day in Animal Care's own kitchen.",
      src: "/images/causes/bowls-of-hope/boh-how-kitchen.jpg" as string | null,
      alt: "A caregiver tending the wood fire under a large cooking pot in the Animal Care Shelter kitchen",
    },
    {
      title: "A Diet for Recovery",
      body: "Animals healing from wounds or surgery get nutritious meals and, where the vet prescribes, supplements, with a caregiver beside them.",
      src: "/images/causes/bowls-of-hope/boh-how-recovery.jpg" as string | null,
      alt: "A dog in a recovery cone eating from a steel bowl at the Animal Care Shelter",
    },
    {
      title: "Every Animal, Every Day",
      body: "From dogs in for a few weeks to those who will live at the shelter for life, no bowl is left empty.",
      src: "/images/causes/bowls-of-hope/boh-how-every-day.jpg" as string | null,
      alt: "An older dog resting beside its food bowl at the Animal Care Shelter",
    },
  ] as const,
} as const;

/** Hidden until Bowls of Hope testimonials are ready. */
export const BOWLS_OF_HOPE_VOICES = {
  eyebrow: "In Their Own Words",
  title: "Voices From This Cause",
  body: "Supporters, caregivers and the Animal Care team, in their own words.",
  footer: "More voices added as recoveries unfold",
  items: [] as const,
} as const;

export const BOWLS_OF_HOPE_SUPPORT = {
  eyebrow: "What Your Support Funds",
  impactSuffix:
    "provides care and food support for sick and injured animals at the Animal Care Shelter.",
  amounts: [
    { amount: 1200, label: "" },
    { amount: 2400, label: "" },
    { amount: 7200, label: "" },
  ] as const,
  donateHref: "#",
  benefits: [
    {
      icon: "home" as const,
      title: "Nutritious Meals, Every Day",
      body: "Cooked fresh in the shelter kitchen.",
    },
    {
      icon: "care" as const,
      title: "Recovery Supplements and Care",
      body: "Supplements the vet prescribes, and a caregiver for animals who can't eat alone.",
    },
    {
      icon: "shield" as const,
      title: "A Clean, Working Kitchen",
      body: "Feeding bowls, hygiene, cooking fuel and supplies.",
    },
  ] as const,
  footer:
    "Every contribution goes directly to Animal Care, through its own payment gateway and into its own bank account. Animal Care sends your 80G receipt.",
} as const;

export const BOWLS_OF_HOPE_VETTING = {
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
      body: "Shelter photos and recovery updates, posted on this page",
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

export const BOWLS_OF_HOPE_IMPACT = {
  founder: {
    eyebrow: "Meet the Founder",
    initials: "VS",
    portraitLabel: "Portrait from Animal Care",
    quote:
      "When we bring in a dog that has been hit by a car, the surgery is only the beginning. What gets it back on its feet is weeks of nutritious food, given every single day, sometimes by hand. Bowls of Hope keeps those bowls full, so that every animal we treat has the strength to heal.",
    name: "Vikas Singh",
    role: "Founder, Animal Care",
    photoSrc:
      "/images/causes/pawsitive-protectors/pawsitive-founder.jpg" as string | null,
    photoAlt: "Vikas Singh, founder of Animal Care, holding a puppy",
    social: [] as const,
  },
  eyebrow: "Impact So Far",
  title: "Full Bowls. Real Recoveries.",
  body: "Updates from the Animal Care Shelter, shared with every circle.",
  stats: [
    { value: "365+", label: "animals in long-term care", confirm: false },
    { value: "1,891+", label: "animals rescued", confirm: false },
    { value: "1,002+", label: "summer water bowls placed", confirm: false },
    { value: "173", label: "supporters here", confirm: false },
  ] as const,
  gallery: {
    featured: {
      label: "Mealtime in the shelter yard",
      src: "/images/causes/bowls-of-hope/boh-impact-featured.jpg" as string | null,
      alt: "Dogs feeding from bowls in the Animal Care Shelter yard",
      featured: true,
    },
    items: [
      {
        label: "Care and nutritious food for cats",
        src: "/images/causes/bowls-of-hope/boh-impact-cats.jpg" as string | null,
        alt: "A cat receiving care and food at the Animal Care Shelter",
      },
      {
        label: "Ladali, healing at the shelter",
        src: "/images/causes/bowls-of-hope/boh-impact-ladali.jpg" as string | null,
        alt: "Ladali, a dog recovering with nutritious meals at the shelter",
      },
      {
        label: "Summer water bowl refill",
        src: "/images/causes/bowls-of-hope/boh-impact-summer.jpg" as string | null,
        alt: "A volunteer refilling a summer water bowl for street animals",
      },
      {
        label: "Nutritious food for every animal",
        src: "/images/causes/bowls-of-hope/boh-impact-yard.jpg" as string | null,
        alt: "Shelter animals feeding from bowls in the yard",
      },
    ] as const,
  },
  instagram: {
    handle: "@bowls.of.hope",
    href: "https://www.instagram.com/bowls.of.hope/",
    body: "Follow every full bowl and every recovery, in photos and reels.",
    cta: "Follow on Instagram",
    logoSrc: "/images/causes/bowls-of-hope/boh-logo-standin.svg" as string | null,
  },
} as const;

export const BOWLS_OF_HOPE_FAQS = {
  eyebrow: "Questions About This Cause",
  title: "Frequently Asked Questions",
  body: "Clarity on where your gift goes, how the programme works, and how your circle can champion it.",
  items: [
    {
      question: 'What does "vetted by The Giving Circle" mean?',
      answer:
        "Our own team checked Animal Care's registration and tax documents, visited its office, and interviewed the people who run it. We see the work on the ground wherever we can, and Animal Care has committed in writing to share updates. Vetting is not a financial audit; we do not examine the NGO's accounts.",
    },
    {
      question: "Will I get an 80G receipt?",
      answer:
        "Yes. Animal Care holds a valid 80G certificate, and the receipt comes directly from Animal Care to the email address you give when you donate. 80G is a deduction under the old tax regime; your tax adviser can confirm what applies to you.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Straight to the NGO. Donations go directly to the partner NGO through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold, or process donation funds at any stage.",
    },
    {
      question: "What exactly does ₹1,200 pay for?",
      answer:
        "Care and food support for recovering animals at the Animal Care Shelter: nutritious meals (₹750), recovery supplements (₹150), hand-feeding by a caregiver (₹125), feeding bowls and hygiene (₹75), cooking fuel and storage (₹50), and logistics (₹50). You can give once or every month, and a monthly gift can be cancelled at any time.",
    },
    {
      question: "Which animals does it feed?",
      answer:
        "Street animals in Animal Care's shelter care: dogs and cats recovering from accidents, attacks, surgery or illness, and those who cannot go back to the street and live at the shelter for life.",
    },
    {
      question: "What about the water bowls?",
      answer:
        "Bowls of Hope began with water. Every summer, when the heat is at its worst, Animal Care also places water bowls for street animals across Delhi, Gurgaon and Noida, with volunteers to refill them daily. More than 1,002 have been placed so far.",
    },
    {
      question: "Can I raise funds for Bowls of Hope with my circle?",
      answer:
        "Yes. Become a Cause Champion: tell us how much you would like to raise, and we set up your fundraising page and materials to share on WhatsApp, Instagram or anywhere you like. It costs nothing, and someone from our team stays with you through it.",
    },
  ] as const,
} as const;

/** Hidden until field videos are ready. */
export const BOWLS_OF_HOPE_LEARN = {
  eyebrow: "Learn With Us",
  title: "Short Videos From The Field",
  body: "Free to watch, and to share with your circle.",
  videos: [] as const,
} as const;

export const BOWLS_OF_HOPE_CTA = {
  title: "Ready to Lead Your Circle?",
  body: "Become a Cause Champion for Bowls of Hope, bring your circle together, and keep the bowls full for animals fighting their way back to health.",
  primary: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  secondary: {
    label: "Donate Instead",
    href: "#support",
  },
} as const;
