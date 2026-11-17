/** Guardians of the Green (community-forest-governance) cause detail copy. */

export const GUARDIANS_OF_THE_GREEN_HERO = {
  category: "Forest Protection · Tree Planting · Education",
  title: "Guardians of the Green",
  orgLine: "A campaign by",
  orgName: "Institute of Community Forest Governance (ICFG)",
  tagline: "One child. Twenty native trees. Three years.",
  pitch:
    "In Jharkhand, young Adivasi guardians plant native trees on their village's forest land and care for them for three years. Every ₹1,000 plants one tree and helps a child grow into its guardian.",
  vetting: {
    title: "Verified NGO.",
    body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
    ctaLabel: "See what we checked",
    href: "#vetting",
  },
  chips: ["Tax Benefits · 80G", "Working Since 2006", "Jharkhand"] as const,
  primaryCta: {
    label: "Donate to Guardians of the Green",
    href: "#support",
  },
  secondaryCta: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  instagram: {
    handle: "@guardians.of.green",
    href: "https://www.instagram.com/guardians.of.green/",
    label: "Follow the campaign",
  },
  campaignLogo: {
    src: "/images/causes/guardians-of-the-green/gotg-logo-roundel.png" as string | null,
  },
  media: {
    src: "/images/causes/guardians-of-the-green/gotg-hero.jpg" as string | null,
    alt: "A young girl planting a native sapling on community forest land in Jharkhand",
    caption: "Photo: ICFG, Jharkhand",
  },
  stickyDonate: {
    label: "Donate to Guardians of the Green",
    href: "#support",
  },
} as const;

export const GUARDIANS_OF_THE_GREEN_ABOUT = {
  eyebrow: "About This Cause",
  title: "A Forest Needs More Than Planting",
  body: 'Jharkhand means "the land of forests". For the Adivasi families who live there, the forest is home, food, income and culture. Bringing it back takes more than a planting day. It takes people who stay.',
  cards: [
    {
      label: "Land",
      title: "Forests Worn Thin",
      body: "By ICFG's account, close to 90% of Jharkhand's forest land was left badly degraded over two centuries of felling.",
    },
    {
      label: "Care",
      title: "Saplings Need Someone",
      body: "Dry summers, grazing cattle and forest fires are hard on a young tree. Without daily care, many never grow up.",
    },
    {
      label: "Knowledge",
      title: "Wisdom That Must Pass On",
      body: "Which plant heals, which tree feeds, which song marks the season. It lives on only if the young learn it.",
    },
    {
      label: "Community",
      title: "Rights Need Ready Hands",
      body: "Since the Forest Rights Act 2006, villages can govern their own forests. That needs a trained next generation.",
    },
  ] as const,
} as const;

export const GUARDIANS_OF_THE_GREEN_THEORY = {
  eyebrow: "Our Theory of Change",
  titleLine1: "Raise a Guardian. Grow a Forest.",
  titleLine2: "",
  body: "A tree planted by a child who lives beside it, on land the village looks after, is a tree that survives. So every grove in this campaign has a young guardian from that village.",
  steps: [
    {
      label: "When We Train",
      title: "Adivasi Children in the Bal Akhra",
      body: "A three-day residential camp every year, for all three years, for 14 to 17 year olds in ICFG's youth assembly.",
      outcome: false,
    },
    {
      label: "And Plant",
      title: "20 Native Saplings Each",
      body: "Sal, mahua, jamun, amla and kusum, with tree guards, on community forest land.",
      outcome: false,
    },
    {
      label: "And Care for Them",
      title: "Three Full Years",
      body: "Watering through dry summers, and replanting any sapling that fails.",
      outcome: false,
    },
    {
      label: "Then",
      title: "A Living Grove, and Its Next Steward",
      body: "Guardians graduate at Sarhul, ready to look after their village forest.",
      outcome: true,
    },
  ] as const,
  footer:
    "How we know it's working: every sapling is geotagged, and ICFG's field coordinators check on each grove through the three years.",
} as const;

export const GUARDIANS_OF_THE_GREEN_HOW = {
  eyebrow: "How This Cause Works",
  title: "Learn. Plant. Protect.",
  body: "Three things every Guardian of the Green does, with ICFG beside them.",
  cards: [
    {
      title: "Bal Akhra Training",
      body: "Three days at ICFG's residential centre in Budmu, every year for three years: forest mapping, nurseries, seed balls, medicinal plants and the Gram Sabha.",
      src: "/images/causes/guardians-of-the-green/gotg-how-bal-akhra.jpg" as string | null,
      alt: "Young guardians holding certificates after Bal Akhra training in Jharkhand",
    },
    {
      title: "Native Groves",
      body: "Each guardian plants 20 saplings of the trees that belong here, with tree guards, on their village's community forest land.",
      src: "/images/causes/guardians-of-the-green/gotg-how-native-groves.jpg" as string | null,
      alt: "Community members planting native saplings on forest land",
    },
    {
      title: "Three Years of Care",
      body: "The village Bal Akhra waters, fences and watches the grove, and any sapling that fails is replanted.",
      src: "/images/causes/guardians-of-the-green/gotg-how-three-years.jpg" as string | null,
      alt: "Young women tending saplings in a community forest grove",
    },
  ] as const,
} as const;

export const GUARDIANS_OF_THE_GREEN_VOICES = {
  eyebrow: "In Their Own Words",
  title: "Voices From This Cause",
  body: "Guardians, parents, elders and the ICFG team on the groves they are growing.",
  footer: "3 voices · more added as updates arrive",
  videoCtaLabel: "Watch the grove",
  items: [
    {
      role: "Guardian",
      roleTone: "student" as const,
      variant: "quote" as const,
      quote:
        "Today, on Environment Day, 5 June, I planted a lemon tree. Jai Johar, Jharkhand!",
      name: "Babli",
      detail: "Bal Akhra Secretary, Baniyadih, Chatra",
      photoSrc: "/images/causes/guardians-of-the-green/gotg-voice-babli.jpg" as string | null,
      photoAlt: "Babli planting a lemon sapling on Environment Day",
      videoHref: null as string | null,
    },
    {
      role: "Guardian",
      roleTone: "student" as const,
      variant: "quote" as const,
      quote:
        "Now I know every tree in my grove by name. My Jamun is taller than me!",
      name: "Aditya Birsa",
      detail: "Guardian",
      photoSrc: "/images/causes/guardians-of-the-green/gotg-voice-aditya.jpg" as string | null,
      photoAlt: "Aditya Birsa planting a jamun sapling",
      videoHref: null as string | null,
    },
    {
      role: "Guardian",
      roleTone: "student" as const,
      variant: "quote" as const,
      quote:
        "My grandmother planted Mahua for me. Now I am planting it for the children after me.",
      name: "Sunita Munda",
      detail: "Jharkhand",
      photoSrc: "/images/causes/guardians-of-the-green/gotg-voice-sunita.jpg" as string | null,
      photoAlt: "Sunita Munda planting a mahua sapling",
      videoHref: null as string | null,
    },
  ] as const,
} as const;

export const GUARDIANS_OF_THE_GREEN_SUPPORT = {
  eyebrow: "What Your Support Funds",
  impactSuffix:
    "plants one native tree in Jharkhand, and helps a young guardian care for it for three years.",
  amounts: [
    { amount: 1000, label: "1 tree" },
    { amount: 5000, label: "5 trees" },
    { amount: 20000, label: "1 guardian, 20 trees" },
  ] as const,
  donateHref:
    "https://give.icfgindia.org/donate/raise-guardians-of-th-ublrmceg?source=TGC",
  benefits: [
    {
      icon: "sprout" as const,
      title: "A Native Sapling, Guarded",
      body: "Sal, mahua, jamun, amla or kusum, with fencing, on village forest land.",
    },
    {
      icon: "workshops" as const,
      title: "A Guardian's Training",
      body: "Its share of three yearly Bal Akhra residential camps and the learning centre.",
    },
    {
      icon: "shield" as const,
      title: "Three Years of Care",
      body: "Upkeep by the village Bal Akhra, replanting, and geotagged field checks.",
    },
  ] as const,
  footer:
    "Every contribution goes directly to ICFG, through its own payment gateway and into its own bank account. ICFG sends your 80G receipt.",
} as const;

export const GUARDIANS_OF_THE_GREEN_VETTING = {
  eyebrow: "Verified NGO",
  title: "Vetted by The Giving Circle",
  body: "We only list NGOs our own team has checked, and not every organisation that applies makes it. Here is what we checked for ICFG before this campaign went live.",
  lastReviewed: "",
  checks: [
    {
      title: "Registration and tax documents checked, genuine and current",
      body: "Listed below with numbers you can check yourself",
    },
    {
      title: "Office visited by our team",
      body: "Simdega Bhawan, Kantatoli, Ranchi",
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
      body: "Grove photos and progress, posted on this page",
    },
  ] as const,
  documents: [
    {
      badge: "80G",
      title: "80G approval",
      number: "AAATI5387A25PT02",
      note: "valid AY 2027-28 to 2031-32 · 50% tax deduction",
      href: "/docs/icfg/icfg-80g.pdf",
    },
    {
      badge: "12AB",
      title: "12AB registration",
      number: "AAATI5387A25PT01",
      note: "valid AY 2027-28 to 2036-37",
      href: "/docs/icfg/icfg-12ab.pdf",
    },
    {
      badge: "CSR-1",
      title: "CSR-1 registration",
      number: "CSR00031933",
      note: "can receive company CSR funds",
      href: "/docs/icfg/icfg-csr1.pdf",
    },
    {
      badge: "NGO Darpan",
      title: "NGO Darpan",
      number: "JH/2019/0229976",
      note: "NITI Aayog's national NGO registry",
      href: "/docs/icfg/icfg-ngo-darpan.pdf",
    },
    {
      badge: "FCRA",
      title: "FCRA registration",
      number: "337800243",
      note: "registered 12 Aug 2023, valid five years",
      href: "/docs/icfg/icfg-fcra.pdf",
    },
    {
      badge: "Reg.",
      title: "Trust registration",
      number: "1084/128/2008",
      note: "registered 21 Jan 2008, Ranchi, under the Indian Trusts Act",
      href: "#",
    },
    {
      badge: "PAN",
      title: "PAN",
      number: "AAATI5387A",
      note: "Income Tax Department",
      href: "/docs/icfg/icfg-pan.pdf",
    },
  ] as const,
  goodToKnow:
    "vetting is not a financial audit, and we don't examine the NGO's accounts. It confirms the organisation is real, legally compliant, and run by people we have met.",
} as const;

export const GUARDIANS_OF_THE_GREEN_IMPACT = {
  founder: {
    eyebrow: "Meet the Founder",
    initials: "SB",
    portraitLabel: "Portrait from ICFG",
    quote: "Drink the milk of Mother Earth, don't suck her blood.",
    name: "Samar (Sanjay) Bosu Mullick",
    role: "Founder, Jharkhand Jangal Bachao Andolan and Institute of Community Forest Governance",
    photoSrc: "/images/causes/guardians-of-the-green/gotg-founder.jpg" as string | null,
    photoAlt:
      "Samar (Sanjay) Bosu Mullick, Founder of Institute of Community Forest Governance",
    social: [] as const,
  },
  eyebrow: "Impact So Far",
  title: "Real Groves. Real Guardians.",
  body: "Updates from the field, shared with every circle.",
  stats: [
    { value: "18,000+", label: "young people trained in Bal Akhras", confirm: false },
    { value: "2,000+", label: "village organisations", confirm: false },
    { value: "10", label: "districts of Jharkhand", confirm: false },
    { value: "[n]", label: "supporters here", confirm: false },
  ] as const,
  gallery: {
    featured: {
      label: "World Environment Day · Ranchi",
      src: "/images/causes/guardians-of-the-green/gotg-impact-wed.jpg" as string | null,
      alt: "Young people holding saplings at a World Environment Day planting in Ranchi",
      featured: true,
    },
    items: [
      {
        label: "With the sal",
        src: "/images/causes/guardians-of-the-green/gotg-impact-sal.jpg" as string | null,
        alt: "Young guardians measuring a sal tree in the forest",
      },
      {
        label: "Gram Sabha meeting",
        src: "/images/causes/guardians-of-the-green/gotg-impact-gram-sabha.jpg" as string | null,
        alt: "Women seated in a Gram Sabha meeting outdoors",
      },
      {
        label: "Celebration",
        src: "/images/causes/guardians-of-the-green/gotg-impact-celebration.jpg" as string | null,
        alt: "Community celebration with traditional drums",
      },
      {
        label: "Women's collective",
        src: "/images/causes/guardians-of-the-green/gotg-impact-women.jpg" as string | null,
        alt: "Women from a village collective holding harvested forest produce",
      },
    ] as const,
  },
  instagram: {
    handle: "@guardians.of.green",
    href: "https://www.instagram.com/guardians.of.green/",
    body: "Follow the groves as they grow, in photos and reels.",
    cta: "Follow on Instagram",
    logoSrc: "/images/causes/guardians-of-the-green/gotg-logo-roundel.png" as string | null,
  },
} as const;

/** Hidden on this campaign until real field videos are ready. */
export const GUARDIANS_OF_THE_GREEN_LEARN = {
  eyebrow: "Learn With Us",
  title: "Short Videos From The Field",
  body: "Free to watch, and to share with your circle.",
  videos: [] as const,
} as const;

export const GUARDIANS_OF_THE_GREEN_FAQS = {
  eyebrow: "Questions About This Cause",
  title: "Frequently Asked Questions",
  body: "Clarity on where your gift goes, how the programme works, and how your circle can champion it.",
  items: [
    {
      question: "How much does it cost to plant a tree in India?",
      answer:
        "Through Guardians of the Green, ₹1,000 plants one native tree. It covers the sapling, a tree guard, three years of care by a young guardian, and replanting if a sapling fails. You can plant one tree or a whole grove on the campaign page.",
    },
    {
      question: "Who are the young forest guardians?",
      answer:
        "They are Adivasi children from Jharkhand, trained by ICFG to raise and protect native trees. Each guardian looks after a grove of 20 native saplings over three years, learning the traditional forest knowledge of their own community along the way.",
    },
    {
      question: "What is a Bal Akhra?",
      answer:
        "A Bal Akhra is ICFG's three-day residential training for young guardians, held every year of the programme at its learning centre in Budmu, Jharkhand. Children learn about the forest's trees, medicinal plants and traditional knowledge, and take a pledge to protect the forest.",
    },
    {
      question: "Which native trees are planted?",
      answer:
        "Each grove is chosen from 27 indigenous species that suit the village's land, picked for fruit, medicine and livelihood. They include Mahua, Jamun, Amla, Bel, Kathal (jackfruit), Imli (tamarind), Kend, Piyar (chironji), Peepal and Bargad (banyan), trees that have fed, healed and sheltered Jharkhand's forest communities for generations.",
    },
    {
      question:
        "Is my donation to Guardians of the Green eligible for 80G tax benefits?",
      answer:
        "Yes. ICFG is registered under Section 80G, so donations to Guardians of the Green qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
    },
    {
      question: "Is ICFG a genuine, registered NGO?",
      answer:
        "Yes. The Institute of Community Forest Governance is a registered trust, rooted in Jharkhand since 2006. It is registered on NGO Darpan and holds valid 12AB, 80G, FCRA and CSR-1 registrations. Guardians of the Green is its campaign to raise native forests with young Adivasi guardians.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Donations go directly to ICFG through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used for the Guardians of the Green programme: saplings, tree guards, guardian training and three years of care.",
    },
    {
      question: "Can I donate to Guardians of the Green from outside India?",
      answer:
        "Yes, if you are an Indian citizen donating from an Indian bank account. Foreign contributions, including donations from foreign nationals or from non-Indian bank accounts, cannot be accepted through this campaign.",
    },
    {
      question: "Can I raise funds for Guardians of the Green?",
      answer:
        "Yes. You can become a Cause Champion, a volunteer fundraiser for Guardians of the Green. You pledge a number of trees you would like to plant, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
    },
    {
      question: "Why do so many tree-planting drives fail?",
      answer:
        "Planting is the easy part. Most saplings are lost in their first few years to drought, grazing or neglect, because no one is there to look after them. In Guardians of the Green, every tree has a young guardian who waters, protects and replants it for three years.",
    },
    {
      question: "Can I plant a tree in someone's name as a gift?",
      answer:
        "Yes. You can plant a native tree for a birthday, an anniversary, a festival or in memory of someone, and dedicate it in their name. A young guardian in Jharkhand will raise and care for it for three years, so it is a gift that keeps growing long after the day itself.",
    },
  ] as const,
} as const;

export const GUARDIANS_OF_THE_GREEN_CTA = {
  title: "Ready to Lead Your Circle?",
  body: "Become a Cause Champion for Guardians of the Green, bring your circle together, and help a young guardian grow a forest.",
  primary: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  secondary: {
    label: "Donate Instead",
    href: "#support",
  },
} as const;

export const GUARDIANS_OF_THE_GREEN_EXPLORE = {
  eyebrow: "More Live Causes",
  title: "Keep Exploring",
  body: "Other verified campaigns your circle can champion next.",
  causes: [
    {
      id: "wings-of-hope",
      title: "Wings of Hope",
      meta: "Education & Health · By JWP",
      photoLabel: "Wings of Hope photo",
    },
    {
      id: "pehli-class",
      title: "PehliClass",
      meta: "Education · By JWP",
      photoLabel: "PehliClass photo",
    },
    {
      id: "pawsitive-protectors",
      title: "Pawsitive Protectors",
      meta: "Animal Welfare · By Animal Care",
      photoLabel: "Pawsitive Protectors photo",
    },
  ] as const,
} as const;
